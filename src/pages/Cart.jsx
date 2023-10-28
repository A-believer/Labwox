/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, clearCart } from "../utils/cartSlice";
import { Link } from 'react-router-dom';
import { TbTrashXFilled } from "react-icons/tb"
import { useEffect, useState } from 'react';
import CartShipping from '../components/cartComponents/CartShipping';
import CartShippingAddress from '../components/cartComponents/CartShippingAddress';
import CartToOrderSuccess from '../components/cartComponents/CartToOrderSuccess';
import { collection, deleteDoc, doc, getDocs, query,  setDoc, where } from 'firebase/firestore';
import { db } from '../config/firebaseConfig';
import { ToastContainer, toast } from 'react-toastify';
import { UserAuth } from '../context/AuthContext';
import { v1 as uuidv1 } from 'uuid';
import { formatCurrency } from '../config/currencyConverter';

function Cart() {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const {userData, currentUser} = UserAuth()
  const [toggleShipping, setToggleShipping] = useState(false)
  const [toggleShippingAddress, setToggleShippingAddress] = useState(false)
  const [toggleSuccess, setToggleSuccess] = useState(false)
  const intialShippingDetails = {
    deliveryOption: "",
    deliveryAddress: "",
    locationLandmark: "",
    contactNumber: ""
  }
  const [shippingFee, setShippingFee] = useState(0)
  const [isLoading, setIsLoading] = useState(true);
  const [shippingDetails, setShippinDetails] = useState(intialShippingDetails)
  const [error, setError] = useState(false)
  const orderId = uuidv1().split("").slice(24, 35).join("")

  // cart total and shipping Fee
  let total = 0
  for (let i = 0; i < cartItems.length; i++) {
    total += cartItems[i].testPrice
  } 

useEffect(() => {
    // If userData is already available, setLoading to false
    if (userData) {
      setIsLoading(false);
    }
}, [userData]);
  
  useEffect(() => {
  if (shippingDetails.deliveryOption === "Agent Pick Up") {
    setShippingFee(5000);
  } else {
    setShippingFee(0);
  }
}, [shippingDetails.deliveryOption]);

  let serverTime = new Date()
  const dateStamp = serverTime.toDateString()
  const timeStamp = serverTime.toLocaleTimeString()
  
  
  const details = {
    createdAt: `${dateStamp}, ${timeStamp}`,
    cart: cartItems,
    deliveryDetails: shippingDetails,
    cartTotal: total + shippingFee,
    userName: currentUser.displayName,
    id: orderId,
    userId: userData.id,
    orderStatus: "Unpaid"
  }
  
  const [orderDetails, setOrderDetails] = useState(details)
  // handles what happens when all the right shipping details are correctly filled   
  function handleOrdersSubmit() {
    if (shippingDetails.deliveryOption !== "") {
      setOrderDetails(details)
      toast.success('Items added to Orders!');
      setToggleSuccess(true)
     deleteCartItems()
    }
  }

  // delete whole cart
  async function deleteCartItems() {
    dispatch(clearCart())
    try {
      const q = query(collection(db, "userCart"), where("userId", "==", `${userData, currentUser.id}`));
    const qS = await getDocs(q)
    qS.forEach(doc => {
      deleteDoc(doc)
    })
    } catch (error) {
      console.error(error.message)
    }
  }

//handle order success
 async function handleOrderSuccess() {
   try {
      await setDoc(doc(db, 'order', orderId), orderDetails);
      
    } catch (err) {
      console.error(err.message)
      }   
}
  
  // handle shippingDetails state 
  function handleShippingDetailsChange(key, value) { 
    setShippinDetails(prevData => ({...prevData, [key]: value}))
  }

  // handles what delivery option state
  function handleShippingOptionChange(option) {
    if (option !== null) {
      setToggleShipping(prev => !prev)
      setShippinDetails(prevData => ({...prevData, deliveryOption: option}))
    }
    if (option === "Agent Pick Up") {
      setToggleShippingAddress(true)
    } 
    if(option === "Drop Off") {
      setToggleShippingAddress(false)
      setError(false)
    }
  }

  //handle Shipping details
  function handleShippingDetails() {
    if (shippingDetails.contactNumber === "" &&
    shippingDetails.locationLandmark === "" &&
    shippingDetails.deliveryAddress === ""
    ) {
      setError(true)
    } else {
      setToggleShippingAddress(false)
    }
}

  // handle close shipping Address details
  function handleShippingAddressDetail() {
    setToggleShippingAddress(prev => !prev)
  }

  // delete item from firebase
  async function removeTestFromCart(id) {
    dispatch(removeItem(id))
    try {
       await deleteDoc(doc(db, 'userCart', id));
      toast.error('Test removed from cart!');
    } catch (error) {
      console.error(error.message)
    }
  }
  
  // Final return
  return (
    <section className="lg:px-[70px] px-6 lg:py-7 py-6 bg-whitebgiv relative w-full h-screen">
      {isLoading ? 
      <div className="h-[70vh] w-full flex items-center justify-center lg:text-6xl text-4xl animate-pulse">Loading...</div> 
      :
        <>
          <div className='my-2'>
        <p className="flex items-center">
        <span className='font-bold lg:text-2xl text-xl'>Cart</span>
        <span className="lg:hidden block">({cartItems.length})</span>
      </p>

        <div className="hidden lg:flex gap-x-2 text-base text-grey my-2">
          <p className='flex gap-x-2'>
            <span>My Cart</span>
            <span>{">"}</span>
          </p>
                
          {toggleShipping && 
              <p className='flex gap-x-2'>
                <span>Shipping </span>
                <span>{">"}</span>
              </p>}
        </div>
      
      </div>

      <div className='flex lg:flex-row flex-col items-center w-full justify-between gap-6'>
        
        {toggleShippingAddress &&
          <CartShippingAddress
          error={error}
          closeModal={handleShippingAddressDetail }
          deliveryDetails={shippingDetails}
          shippingDetailsChange={handleShippingDetailsChange}
          handleShippingDetails={handleShippingDetails} />}
        
        {toggleSuccess && <CartToOrderSuccess
          handleOrderSuccess={handleOrderSuccess}
        />}
        
        <div className='w-[65%] bg-white h-full self-start lg:flex flex-col drop-shadow-2xl hidden'>
          
          {/* Desktop Cart  */}
          {cartItems.length > 0 ?
          <table className=' table-auto w-full'>
          <thead className='bg-whitebgv border-b border-grey/30 text-base font-light text-grey leading-normal'>
            <tr className='text-center'>
              <th className='py-5'>S/N</th>
              <th>Sample Name</th>
              <th>Sample Type</th>
              <th>Test Code</th>
              <th>Sub Total</th>
              <th onClick={() => dispatch(clearCart())} className='cursor-pointer'>Remove All</th>
              </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={item.id} className='text-center border-b border-grey/30 text-base font-medium leading-normal text-blackii'>
                <td className='py-5'>{`${index + 1}`}</td>
                <td>{item.sampleName}</td>
                <td>{item.sampleType}</td>
                <td>{item.testCode}</td>
                <td>₦ {formatCurrency(item.testPrice)}</td>
                <td>
                  <button
                    type="submit"
                  onClick={() => removeTestFromCart(item.id)}>
                  <TbTrashXFilled className="text-greyiii" />
                  </button>
                </td>
              </tr>
                ))}
              
          </tbody>
          </table>
            :
          <div className="text-center w-full h-[60vh] lg:px-5 pl-2 lg:py-5 py-2 lg:my-0 my-2 rounded shadow-2xl flex items-center justify-center lg:text-3xl text-2xl">Empty Cart</div>
          }
          <Link to={`/testListing`} className='text-orange border border-orange m-6  px-9 py-2 w-fit rounded'>Back to TestListing</Link>
        </div>
        
        {/* Mobile Cart  */}
        <div className='lg:hidden px-4 pt-4 w-full bg-white drop-shadow-2xl'>
          {cartItems.map(item => (
            <div key={item.id} className='flex justify-between items-center text-blackii font-normal mb-5 gap-x-10'>
              <p className='flex flex-col gap-y-2'>
                <span className='text-orange underline'>{item.testName}</span>
                <span>Sample Name: {item.sampleName}</span>
                <span>Sample Type: {item.sampleType}</span>
                <span className='text-black font-bold text-xl'>₦ {formatCurrency(item.testPrice)}</span>
              </p>
              <button
                    type="submit"
                  onClick={() => () => removeTestFromCart(item.id)}>
                  <TbTrashXFilled className="text-greyiii" />
              </button>
            </div>
          ))}
          
          <hr className='text-grey/30 my-10' />
        </div>

        <div className='lg:w-[35%] w-full bg-white py-[50px] h-auto px-6 text-blackii text-base border border-orange rounded drop-shadow-2xl mb-10'>
          <p className='whitespace-nowrap flex justify-between items-center'>
            <span className='font-normal'>Cart Subtotal</span>
            <span className='font-bold text-xl'>₦ {formatCurrency(total)}</span>
              </p>

              <div>
                <p className='whitespace-nowrap flex justify-between items-center my-8'>
                  <span className='font-normal'>Shipping</span>
                  <span className='font-bold text-xl'>₦ {formatCurrency(shippingFee)}</span>
                </p>
                <div>         
            <CartShipping
              shippingOption={shippingDetails.deliveryOption}
              onOptionChange={handleShippingOptionChange}/>
                </div>
          </div>
          
           <hr className='text-grey/30 my-10'/>
          <p className='whitespace-nowrap flex justify-between items-center mb-8'>
            <span className='font-normal'>Order Total</span>
            <span className='font-bold text-2xl'>₦ {formatCurrency(total + shippingFee)}</span>
          </p>
          <button type='submit' onClick={handleOrdersSubmit} className='text-center text-white bg-orange rounded w-full py-2'>Place Order</button>
        </div>
      </div>
      </>
      }
      
      <ToastContainer/>
    </section>
  )
}

export default Cart