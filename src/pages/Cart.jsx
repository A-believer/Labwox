import { Navigate } from "react-router-dom"
import { UserAuth } from "../context/AuthContext"
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from "../utils/cartSlice"; 

function Cart() {
  const { user } = UserAuth()
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const item = []
  for (let i = 0; i < cartItems.length; i++) {
    item.push(cartItems[i])
  }

  console.log(item)

  if (!user) {
    return <Navigate to="/login" />
  }
  
  return (
    <div>Cart</div>
  )
}

export default Cart