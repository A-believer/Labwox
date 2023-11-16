/* eslint-disable react-hooks/exhaustive-deps */
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { db } from '../../config/firebaseConfig';
import PaystackPop from "@paystack/inline-js"
import { UserAuth } from '../../context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import { decryptId } from '../../config/encrypt';


function UserProfileOrdersDetails() {
    const { userData} = UserAuth()
  const [order, setOrder] = useState([])
  const [shipping, setShipping] = useState("")
  const [loading, setLoading] = useState(false)
  const [paymentStatus, setPaymentStatus] = useState(false)
  const [amount, setAmount] = useState(0)
  const { id } = useParams()
  const email = userData.email
  const firstName = userData.firstName
  const lastName = userData.lastName
 
 
  const orderRef = doc(db, "order", decryptId(id))
  async function getOrder() {
      setLoading(true)
      try {
        const newOrder = await getDoc(orderRef)
        if (newOrder.exists()) {
          setOrder({ id: newOrder.id, ...newOrder.data() })
        }
        } catch (err) {
            console.error(err)
    }
    setLoading(false)
  }
  
    useEffect(() => {
      getOrder()
  }, [])

    async function payWithPaystack() {
     const paystack = new PaystackPop()
        await paystack.newTransaction({
          key: import.meta.env.VITE_PAYSTACK_LIVE_KEY,
          amount: amount * 100,
          email,
          firstName,
          lastName,
          onSuccess(transaction) {
            updateDoc(orderRef, {
             orderStatus: "Paid", 
             orderReference: transaction.reference
            })
            setPaymentStatus(true)
            toast.success(`Payment Successful ${transaction.reference}`)
          },
          onCancel() {
            toast.error("transaction cancelled")
          }
    })
  }
  useEffect(() => {
     let  details;
    if (order?.deliveryDetails?.deliveryOption === "Drop Off") {
      details = <p><span className='font-semibold'>Delivery Address: </span><span>Address: 2B Awori Close, Akora Villas off Adeniyi Jones, Ikeja, Lagos</span> </p>
      setShipping(details)
      setAmount(Number(order.cartTotal))
    }
    if(order?.deliveryDetails?.deliveryOption === "Agent Pick Up"){
     details = <div className='flex flex-col gap-y-4'>
        <p><span className='font-semibold'>Pick Up Address: </span><span>{order?.deliveryDetails?.deliveryAddress}</span></p>
        <p><span className='font-semibold'>Contact Number: </span><span>{order?.deliveryDetails?.contactNumber}</span></p>
       <p><span className='font-semibold'>Landmark: </span><span>{order?.deliveryDetails?.locationLandmark}</span></p>
        <p><span className='font-semibold'>Shipping Fee: </span><span>₦ 5,000.00</span></p>
      </div>
      setShipping(details)
      setAmount(order?.cartTotal)
    }
    setShipping(details)
  }, [order.cartTotal, order?.deliveryDetails?.contactNumber, order?.deliveryDetails?.deliveryAddress, order?.deliveryDetails?.deliveryOption, order?.deliveryDetails?.locationLandmark])
  
   


  return (
    <section className=" w-full h-full">
      {loading &&
        <div className="text-center w-full h-[60vh] lg:px-5 pl-2 lg:py-5 py-2 lg:my-0 my-2 rounded shadow-2xl flex items-center justify-center animate-pulse lg:text-6xl text-4xl">Loading...</div>}
        
          <p className="text-blackii font-medium text-lg lg:text-2xl lg:mb-4 lg:mt-0 my-4">Order Details #{order.id}</p>
          <div className='bg-white lg:pb-10 pb-4'>
        <table className='table-auto w-full'>
        <thead className='bg-whitebgv border-b border-grey/30 text-base font-light text-grey leading-normal'>
         <tr className='text-center'>
            <th className='py-5'>S/N</th>
            <th>Sample Name</th>
            <th>Sample Type</th>
            <th className='hidden lg:table-cell'>Test Name</th>
            <th className='hidden lg:table-cell'>Test Price</th>
         </tr>
        </thead>
            {order?.cart?.map((item, i) => (
                <tbody key={i + 1} className='bg-white'>
                    <tr className='text-center border-b border-grey/30 text-sm font-medium leading-normal text-blackii'>
                        <td className='py-5'>{i + 1}</td>
                        <td>{item.sampleName}</td>
                        <td>{item.sampleType}</td>
                  <th className='hidden lg:flex flex-col mt-2 whitespace-wrap overflow-ellipsis overflow-hidden'>
                    <span>{item.testName}</span>
                    <span>({item.testCode})</span></th>
                        <td className='hidden lg:table-cell'>₦ {Number(item.testPrice).toLocaleString('en-US')}.00</td>
                    </tr>
                </tbody>
                ))}
              </table>
              
              <hr className='mt-10 mb-2 text-greyiii/40 lg:mx-1 mx-0' />
              
        <div className='ml-4 text-blackii text-base w-fit'>
            <h3 className='text-xl font-bold'>Cart Totals</h3>
          <p className='grid auto-cols-fr  grid-cols-2 my-4 gap-x-4'><span className='font-medium lg:text-lg text-base text-grey'>Cart Subtotal</span> <span className='font-bold'>₦ {order?.cartTotal?.toLocaleString()}.00</span></p>
          
          <div className='grid auto-cols-fr  grid-cols-2 my-4 gap-x-4'><span className='font-medium lg:text-lg text-base text-grey'>Shipping</span> <div>{shipping}</div></div>

          <p className='grid auto-cols-fr  grid-cols-2 my-4 gap-x-4'><span className='font-medium lg:text-lg text-base text-grey'>Status:</span> <span>{order?.orderStatus}</span></p>

            <p className='grid auto-cols-fr  grid-cols-2 my-4 gap-x-4'><span className='font-medium lg:text-lg text-base text-grey'>Order Total</span> <span className='font-bold'>₦ {amount.toLocaleString()}.00</span></p>
              </div>
        <div className='flex gap-5 flex-col lg:flex-row mt-4 ml-4'>
          {order.orderStatus === "Paid" ? <button type='submit' className='text-white bg-orange py-2 px-12 rounded border border-orange'>Print Receipt</button>
            :
           <button disabled={paymentStatus} onClick={payWithPaystack} type='submit' className='text-white bg-orange py-2 px-12 rounded border border-orange'>Pay Now</button> }
                  
            <NavLink to={`samplesheet`} className='text-orange bg-white py-2 px-6 rounded border border-orange text-center'>View Sample Sheet</NavLink>
              </div>
      </div>
      <ToastContainer/>
      </section>
  )
}

export default UserProfileOrdersDetails