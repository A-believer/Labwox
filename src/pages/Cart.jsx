import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from "../utils/cartSlice";

function Cart() {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  
  
  return (
    <section className="lg:ml-[70px] ml-6 lg:mt-10 mt-6">
      <p className="flex"><span>Cart</span><span className="lg:hidden block">({cartItems.length})</span></p>
      <p className="hidden lg:block">
        <span>My Cart</span>
        <span>{">"}</span>
        <span>Shipping </span>
        <span>{">"}</span>
      </p>
    </section>
  )
}

export default Cart