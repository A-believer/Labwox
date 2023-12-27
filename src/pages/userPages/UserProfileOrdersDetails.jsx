/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../../config/firebaseConfig";
import PaystackPop from "@paystack/inline-js";
import { UserAuth } from "../../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import { decryptId } from "../../config/encrypt";
import { sendEmail } from "../../emails/sendEmail";
import { formatCurrency } from "../../config/currencyConverter";

function UserProfileOrdersDetails() {
  const { currentUser, userData } = UserAuth();
  const [order, setOrder] = useState(null);
  const [shipping, setShipping] = useState("");
  const [loading, setLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(false);
  const [amount, setAmount] = useState(0);
  const [partPayment, setPartPayment] = useState(false);
  const [partPaymentCheck, setPartPaymentCheck] = useState(true);
  const { id } = useParams();
  const email = userData.email;
  const firstName = userData.firstName;
  const lastName = userData.lastName;
  const orderRef = doc(db, "order", decryptId(id));
  const paystack = new PaystackPop();
  const paystackApiKey = "pk_live_7d1a10bd189ae156ac3c3f360f851600f70b439e";

  // pk_live_7d1a10bd189ae156ac3c3f360f851600f70b439e;

  async function completePayWithPaystack() {
    await paystack.newTransaction({
      key: paystackApiKey,
      amount: applyDiscount(amount, order?.cart?.length) * 100,
      email,
      firstName,
      lastName,
      onSuccess(transaction) {
        updateDoc(orderRef, {
          orderStatus: "Paid",
          orderReference: transaction.reference,
        });

        sendEmail(
          currentUser.email,
          "Payment Completed Successfully!",
          currentUser.displayName,
          `
        Your payment for order <b><i>#${decryptId(
          id
        )}</i></b> has been made successfully. 
        Please proceed to:
        `,
          `https://labwox.com.ng/#/userprofile/orders/${decryptId(id)}`,
          "View Reciept"
        );

        setPaymentStatus(true);
        toast.success(
          `Payment Successfully Completed ${transaction.reference}, check your mail for receipt`
        );
      },
    });
  }

  async function payWithPaystack() {
    if (partPayment) {
      await paystack.newTransaction({
        key: paystackApiKey,
        amount: applyDiscount(amount, order?.cart?.length) * 100,
        email,
        firstName,
        lastName,
        onSuccess(transaction) {
          updateDoc(orderRef, {
            orderStatus: "Incomplete",
            orderReference: transaction.reference,
          });
          console.log(transaction);
          setPartPaymentCheck(false);
          setPartPayment(false);
          setAmount(order.cartTotal * 0.3);
          sendEmail(
            currentUser.email,
            "Payment Completed Successfully!",
            currentUser.displayName,
            `
              Your part payment for order <b><i>#${decryptId(
                id
              )}</i></b> has been made successfully. 
              Please proceed to:
              `,
            `https://labwox.com.ng/#/userprofile/orders/${decryptId(id)}`,
            "Complete Payment"
          );
          toast.success(
            `Payment Successful ${transaction.reference}, check your mail for receipt`
          );
        },
        onCancel() {
          toast.error("transaction cancelled");
        },
      });
    } else {
      await paystack.newTransaction({
        key: paystackApiKey,
        amount: applyDiscount(amount, order?.cart?.length) * 100,
        email,
        firstName,
        lastName,
        onSuccess(transaction) {
          updateDoc(orderRef, {
            orderStatus: "Paid",
            orderReference: transaction.reference,
          });

          sendEmail(
            currentUser.email,
            "Payment Completed Successfully!",
            currentUser.displayName,
            `
        Your payment for order <b><i>#${decryptId(
          id
        )}</i></b> has been made successfully. 
        Please proceed to:
        `,
            `https://labwox.com.ng/#/userprofile/orders/${decryptId(id)}`,
            "View Reciept"
          );

          setPaymentStatus(true);
          toast.success(
            `Payment Successfully Completed ${transaction.reference}, check your mail for receipt`
          );
        },
        onCancel() {
          toast.error("transaction cancelled");
        },
      });
    }
  }

  function handlePartPayment(e) {
    setPartPayment(e.target.checked);
  }

  function applyDiscount(order, length) {
    let discountedPrice;
    if (length > 9 && length < 20) {
      discountedPrice = order * 0.95;
    } else if (length > 19 && length < 29) {
      discountedPrice = order * 0.92;
    } else if (length === 30 && length < 49) {
      discountedPrice = order * 0.9;
    } else if (length >= 50) {
      discountedPrice = order * 0.85;
    } else {
      discountedPrice = order;
    }
    return discountedPrice;
  }

  function intiatePartPayment() {
    if (partPayment) {
      setAmount(order?.cartTotal * 0.7);
    } else {
      setAmount(order?.cartTotal);
    }
  }

  useEffect(() => {
    const orderRef = doc(db, "order", decryptId(id));
    async function getOrder() {
      setLoading(true);
      try {
        const newOrder = await getDoc(orderRef);
        if (newOrder.exists()) {
          setOrder({ id: newOrder.id, ...newOrder.data() });
        }
        setLoading(false);
      } catch (err) {
        console.error(err.message);
      }
    }
    getOrder();
  }, []);

  useEffect(() => {
    if (order?.orderStatus === "Paid") {
      setAmount(0);
    } else if (order?.orderStatus === "Incomplete") {
      setAmount(order?.cartTotal * 0.3);
    } else {
      intiatePartPayment();
    }
  });

  useEffect(() => {
    let details;

    if (order?.deliveryDetails?.deliveryOption === "Drop Off") {
      details = (
        <p>
          <span className="font-semibold">Delivery Address: </span>
          <span>
            Address: 2B Awori Close, Akora Villas off Adeniyi Jones, Ikeja,
            Lagos
          </span>{" "}
        </p>
      );
    }
    if (order?.deliveryDetails?.deliveryOption === "Agent Pick Up") {
      details = (
        <div className="flex flex-col gap-y-4">
          <p>
            <span className="font-semibold">Pick Up Address: </span>
            <span>{order?.deliveryDetails?.deliveryAddress}</span>
          </p>
          <p>
            <span className="font-semibold">Contact Number: </span>
            <span>{order?.deliveryDetails?.contactNumber}</span>
          </p>
          <p>
            <span className="font-semibold">Landmark: </span>
            <span>{order?.deliveryDetails?.locationLandmark}</span>
          </p>
          <p>
            <span className="font-semibold">Shipping Fee: </span>
            <span>₦ 5,000.00</span>
          </p>
        </div>
      );
    }
    setShipping(details);
  }, [
    order?.deliveryDetails?.contactNumber,
    order?.deliveryDetails?.deliveryAddress,
    order?.deliveryDetails?.deliveryOption,
    order?.deliveryDetails?.locationLandmark,
  ]);

  return (
    <section className=" w-full h-full">
      {loading ? (
        <div className="text-center w-full h-[60vh] lg:px-5 pl-2 lg:py-5 py-2 lg:my-0 my-2 rounded shadow-2xl flex items-center justify-center animate-pulse lg:text-6xl text-4xl">
          Loading...
        </div>
      ) : (
        <>
          <p className="text-blackii font-medium text-lg lg:text-2xl lg:mb-4 lg:mt-0 my-4">
            Order Details #{order?.id}
          </p>
          <div className="bg-white lg:pb-10 pb-4">
            <table className="table-auto w-full">
              <thead className="bg-whitebgv border-b border-grey/30 text-base font-light text-grey leading-normal">
                <tr className="text-center">
                  <th className="py-5">S/N</th>
                  <th>Sample Name</th>
                  <th>Sample Type</th>
                  <th className="hidden lg:table-cell">Test Name</th>
                  <th className="hidden lg:table-cell">Test Price</th>
                </tr>
              </thead>
              {order?.cart?.map((item, i) => (
                <tbody key={i + 1} className="bg-white">
                  <tr className="text-center border-b border-grey/30 text-sm font-medium leading-normal text-blackii">
                    <td className="py-5">{i + 1}</td>
                    <td>{item.sampleName}</td>
                    <td>{item.sampleType}</td>
                    <th className="hidden lg:flex flex-col mt-2 whitespace-wrap overflow-ellipsis overflow-hidden">
                      <span>{item.testName}</span>
                      <span>({item.testCode})</span>
                    </th>
                    <td className="hidden lg:table-cell">
                      ₦ {Number(item.testPrice).toLocaleString("en-US")}.00
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>

            <div className="ml-4 text-blackii text-base w-fit mt-10 ">
              <h3 className="text-xl font-bold">Cart Total</h3>
              <p className="grid auto-cols-fr  grid-cols-2 my-4 gap-x-4">
                <span className="font-medium lg:text-lg text-base text-grey">
                  Cart Subtotal
                </span>{" "}
                <span className="font-bold">
                  ₦ {formatCurrency(order?.cartTotal)}.00
                </span>
              </p>

              <div className="grid auto-cols-fr  grid-cols-2 my-4 gap-x-4">
                <span className="font-medium lg:text-lg text-base text-grey">
                  Shipping
                </span>{" "}
                <div>{shipping}</div>
              </div>

              <p className="grid auto-cols-fr  grid-cols-2 my-4 gap-x-4">
                <span className="font-medium lg:text-lg text-base text-grey">
                  Status:
                </span>
                <span
                  className={`${
                    order?.orderStatus === "Unpaid" && "text-red-800"
                  } ${order?.orderStatus === "Incomplete" && "text-orange"} ${
                    order?.orderStatus === "Paid" && "text-[#66C27C]"
                  }`}
                >
                  {order?.orderStatus}
                </span>
              </p>

              <p className="grid auto-cols-fr  grid-cols-2 my-4 gap-x-4">
                <span className="font-medium lg:text-lg text-base text-grey">
                  Order Total
                </span>{" "}
                <span className="font-bold">
                  ₦ {formatCurrency(order?.cartTotal)}.00
                </span>
              </p>

              <p className="grid auto-cols-fr  grid-cols-2 my-4 gap-x-4">
                <span className="font-medium lg:text-lg text-base text-grey">
                  Amount To Be Paid
                </span>{" "}
                <span className="font-bold">₦ {formatCurrency(amount)}.00</span>
              </p>

              <label
                htmlFor="part-payment"
                className="text-xs flex items-center gap-x-2 italic text-orange"
              >
                <input
                  type="checkbox"
                  id="part-payment"
                  className="checked:bg-orange"
                  checked={partPayment}
                  onChange={handlePartPayment}
                />
                <span>Check this box to pay 70% now, 30% later</span>
              </label>
            </div>

            <div className="flex gap-5 flex-col lg:flex-row mt-4 ml-4">
              {order?.orderStatus === "Paid" ? (
                <button
                  type="submit"
                  className="text-white bg-orange py-2 px-12 rounded border border-orange"
                >
                  Print Receipt
                </button>
              ) : order?.orderStatus === "Incomplete" ? (
                <button
                  disabled={paymentStatus}
                  onClick={completePayWithPaystack}
                  type="submit"
                  className="text-white bg-orange py-2 px-12 rounded border border-orange"
                >
                  Complete Payment
                </button>
              ) : (
                <button
                  disabled={paymentStatus}
                  onClick={payWithPaystack}
                  type="submit"
                  className="text-white bg-orange py-2 px-12 rounded border border-orange"
                >
                  Pay Now
                </button>
              )}

              <Link
                to={`samplesheet`}
                className="text-orange bg-white py-2 px-6 rounded border border-orange text-center"
              >
                View Sample Sheet
              </Link>
            </div>
          </div>
        </>
      )}
      <ToastContainer />
    </section>
  );
}

export default UserProfileOrdersDetails;
