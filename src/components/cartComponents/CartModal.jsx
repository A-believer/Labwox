import { Button } from "../../utils"
import closeCart from "../../assets/closeCart.png"
import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from "../../utils/cartSlice"; 

function CartModal({ closeModal }) {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();


  return (
      <section 
      className="w-[500px] absolute top-[70px] right-0 bg-white z-20 px-9 py-10">
          <div className="flex justify-between items-center mb-10">
              <p className="flex flex-col">
                <span className="text-neutral-800 text-2xl font-medium tracking-tight">Cart</span>
                <span className=" text-grey text-base font-normal leading-tight"> Please add or move items from the box</span>
              </p>
              <div
                  onClick={closeModal}
                  className="w-6 h-6 cursor-pointer">
                  <img src={closeCart} alt="close cart modal"/>
              </div>
              
          </div>
          
          <ul>
             {cartItems.map(item => (
          <li key={item.id}>
            {item.testTitle} - ${item.pricing}
            <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
          </li>
        ))} 
          </ul>
          
          <NavLink to={`cart`} onClick={closeModal}>
              <Button bgColor={`orange`} text={`View Full`} textColor={`white`} width={`full`} />
          </NavLink>
          
    </section>
  )
}

export default CartModal