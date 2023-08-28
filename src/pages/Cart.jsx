import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from "../utils/cartSlice";
import { Link } from 'react-router-dom';
import { TbTrashXFilled } from "react-icons/tb"
import { useState } from 'react';
import CartShipping from '../components/cartComponents/CartShipping';

function Cart() {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const [toggleShipping, setToggleShipping] = useState(false)
  const [shippingOption, setShippingOption] = useState('')
  
  function handleShippingOptionChange(option) {
    setShippingOption(option)

    if (shippingOption !== "") {
      setToggleShipping(prev => !prev)
      console.log(shippingOption)
    }
    
  }

  function handleShippingToggle() {
    setToggleShipping(prev => !prev)
  }

  let total = 0
  for (let i = 0; i < cartItems.length; i++) {
    total += cartItems[i].testPrice
  } 
  let shippingFee = 2500
  
  return (
    <section className="lg:px-[70px] px-6 lg:py-10 py-6 bg-whitebgiv relative">
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
        
      {toggleShipping &&
            <CartShipping
              shippingOption={shippingOption}
          onOptionChange={handleShippingOptionChange}
            />}
        
        <div className='w-[65%] bg-white h-[60vh] lg:flex flex-col drop-shadow-2xl hidden'>
          
          
          
          {/* Desktop Cart  */}
          <table className=' table-auto w-full'>
          <thead className='bg-whitebgv border-b border-grey/30 text-base font-light text-grey leading-normal'>
            <tr className='text-center'>
              <th className='py-5'>S/N</th>
              <th>Sample Name</th>
              <th>Sample Type</th>
              <th>Test Code</th>
              <th>Sub Total</th>
              <th>Remove</th>
              </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={item.id} className='text-center border-b border-grey/30 text-base font-medium leading-normal text-blackii'>
                <td className='py-5'>{`${index + 1}`}</td>
                <td>{item.sampleName}</td>
                <td>{item.sampleType}</td>
                <td>{item.testCode}</td>
                <td>₦ {item.testPrice.toLocaleString('en-US')}.00</td>
                <td>
                  <button
                    type="submit"
                  onClick={() => dispatch(removeItem(item.id))}>
                  <TbTrashXFilled className="text-greyiii" />
                  </button>
                </td>
              </tr>
                ))}
              
          </tbody>
          </table>
          <Link to={`/testListing`} className='text-orange border border-orange m-6  px-9 py-2 w-fit rounded'>Back to TestListing</Link>
        </div>
        
        {/* Mobile Cart  */}
        <div className='lg:hidden px-4 pt-4 w-full bg-white drop-shadow-2xl'>
          {cartItems.map(item => (
            <div key={item.id} className='flex justify-between items-center text-blackii font-normal mb-5 gap-x-10'>
              <p className='flex flex-col'>
                <span className='text-orange underline'>{item.testName}</span>
                <span>Sample Name: {item.sampleName}</span>
                <span>Sample Type: {item.sampleType}</span>
                <span className='text-black font-medium'>₦ {item.testPrice.toLocaleString('en-US')}.00</span>
              </p>
              <button
                    type="submit"
                  onClick={() => dispatch(removeItem(item.id))}>
                  <TbTrashXFilled className="text-greyiii" />
              </button>
            </div>
          ))}
          
          <hr className='text-grey/30 my-10' />
        </div>

        <div className='lg:w-[35%] w-full bg-white py-[50px] h-[60vh] px-6 text-blackii text-base border border-orange rounded drop-shadow-2xl'>
          <p className='whitespace-nowrap flex justify-between items-center'>
            <span className='font-normal'>Cart Subtotal</span>
            <span className='font-bold'># {total.toLocaleString('en-US')}.00</span>
          </p>
          <p className='whitespace-nowrap flex justify-between items-center my-8'>
            <span className='font-normal'>Shipping</span>
            <span className='font-bold'># {shippingFee.toLocaleString('en-US') }.00</span>
          </p>
           <hr className='text-grey/30 my-10'/>
          <p className='whitespace-nowrap flex justify-between items-center mb-8'>
            <span className='font-normal'>Order Total</span>
            <span className='font-bold'># {(total+shippingFee).toLocaleString('en-US')}.00</span>
          </p>
          <button type='submit' onClick={handleShippingToggle} className='text-center text-white bg-orange rounded w-full py-2'>Place Order</button>
        </div>
      </div>
      
    </section>
  )
}

export default Cart