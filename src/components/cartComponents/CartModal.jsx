/* eslint-disable react/prop-types */
import { Button } from "../../utils"
import closeCart from "../../assets/closeCart.png"
import { Link, NavLink } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from "../../utils/cartSlice";
import { TbTrashXFilled } from "react-icons/tb"
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
import { ToastContainer, toast } from "react-toastify";
import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
function CartModal({ closeModal, cartRef }) {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

const cartItemsSlice = cartItems.slice(0, 5)

  // total price of items in cart 
  let total = 0
  for (let i = 0; i < cartItems.length; i++) {
    let priceToNum = Number(cartItems[i].testPrice)
    total += priceToNum
  } 
  
  
  const cartTotal = total.toLocaleString('en-US', {
        minimumFractionDigits: 0,
    });

  async function removeTestFromCart(id) {
    dispatch(removeItem(id))

    try {
       await deleteDoc(doc(db, 'userCart', id));
      toast.error('Test removed from cart!');
    } catch (error) {
      console.error(error.message)
    }
  }

  const displayCartItems =  cartItemsSlice?.map(item => (
    <form onSubmit={() => removeTestFromCart(item.id)} key={item.id} className="flex justify-between items-center gap-x-10 bg-greyii lg:p-2 p-1 rounded-lg">
      <p className="flex flex-col justify-center text-base">
        <span className="text-grey mb-2 underline">{item.testName}</span>
        <span className="text-blackii font-bold">₦ {item.testPrice?.toLocaleString('en-US')}.00</span>
      </p>
      <button
      onClick={() => removeTestFromCart(item.id)}
        type="submit">
        <TbTrashXFilled className="text-greyiii" />
      </button>
      </form>)) 

  return (
    <section
      ref={cartRef}  
      onBlur={closeModal}
      className="lg:w-[500px] w-[300px] absolute lg:top-[80px] top-[50px] lg:right-0 right-2 bg-white lg:px-6 px-2 py-5 border border-grey/50 rounded-lg z-[10000]">
          <div className="flex justify-between items-center mb-2">
              <p className="flex flex-col">
                <span className="text-neutral-800 lg:text-2xl text-base font-medium tracking-tight">Cart</span>
          <span className=" text-grey lg:text-base text-sm font-normal leading-tight"> Please add items from the <Link
            onClick={closeModal}
                 to={`/testListing`} className="text-orange underline">Test Listing</Link></span>
              </p>
              <div
                  onClick={closeModal}
                  className="lg:w-6 w-4 lg:h-6 h-4 cursor-pointer">
                  <img src={closeCart} alt="close cart modal"/>
              </div>
              
      </div>
      <hr className="text-greyiii"/>
          
          <div className="mb-10 flex flex-col gap-y-3">
             {displayCartItems}
      </div>
      
      {cartItems.length > 0 ?
        <div>
          <hr className="text-greyiii" />
          
          <p className="flex justify-between my-4">
          <span className="font-bold text-greyiii">Cart Total</span>
          <span className="font-bold">₦ {cartTotal}.00</span>
        </p>
        </div>
        :

        <div className="text-center w-full h-full fles justify-center items-center text-greyi pb-5">No items your cart...</div>
        }
          
          {cartItems.length > 0 && <NavLink to={`cart`} onClick={closeModal}>
              <Button bgColor={`orange`} text={`View Full`} textColor={`white`} width={`full`} />
          </NavLink>}
          <ToastContainer/>
    </section>
  )
}

CartModal.propTypes = {
  closeModal: PropTypes.func.isRequired
}

export default CartModal