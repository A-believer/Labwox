/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { AiOutlineArrowRight }from "react-icons/ai"
import { useEffect, useState } from "react";
import { collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
import { UserAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { decryptId, encryptId } from "../../config/encrypt";
import { TbTrashXFilled } from "react-icons/tb"
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { removeItemFromOrder } from "../../utils/cartSlice";


function UserProfileOrders() {
  const [orders, setOrders] = useState(null)
  const [loading, setLoading] = useState(true)
  const { currentUser } = UserAuth()
  const orderItems = useSelector(state => state.order.items);
  const dispatch = useDispatch();

  const orderRef = query(collection(db, "order"),where("userId", "==", currentUser.uid))
   async function getOrders() {
      setLoading(true)
    try {
      const order = await getDocs(orderRef)
      const data = []
      order.forEach(doc => {
        data.push({
          id: data.id,
          ...doc.data()
        })
    })
      setOrders(data)
      setLoading(false)
    } catch (err) {
      console.error(err)
      }
  }
  
  useEffect(() => {
    getOrders()
  }, [])

  console.log(orders)
  
  async function removeTestFromCart(id) {
dispatch(removeItemFromOrder((id)))
    try {
       await deleteDoc(doc(db, 'order', decryptId(id)));
      
      toast.error('Order removed!');
    } catch (error) {
      console.error(error.message)
    }
  }

  
  return (
    <section className="relative w-full">
      <p className="text-blackii font-medium text-2xl lg:my-0 mt-4">My Orders</p>

      {loading ?
        <div className="text-center w-full h-[60vh] lg:px-5 pl-2 lg:py-5 py-2 lg:my-0 my-2 rounded shadow-2xl flex items-center justify-center animate-pulse lg:text-6xl text-4xl">Loading...</div>
      :
      <div className="relative w-full">

         {orders.length > 0 ? orders?.map((order, i) => (
          <div key={i} className="bg-white flex lg:flex-row flex-col justify-between lg:px-10 lg:py-4 p-3 mt-3 shadow-2xl rounded-md">
             <div className="flex lg: md:flex-col flex-row items-center justify-between">
               <p className="flex flex-col text-grey text-base">
                <span className="text-lg">labwox-#{order.refId}</span>
                <span className="my-1">
                  {order.createdAt}
                </span>
                <span className="text-blackii font-bold">₦{Number(order.cartTotal).toLocaleString('en-US')}</span>
                  <span className="text-[#66C27C]">{order?.orderStatus}</span>
               </p>
               <button type="button" onClick={() => removeTestFromCart(order.id)} className="self-start flex  items-center gap-x-4 text-red-500 py-5">
                 <TbTrashXFilled />
                 <span className="md:flex hidden">Cancel order</span>
               </button>
        </div>
             
        <Link
          to={encryptId(order.id)}
          className={`flex items-center gap-x-2 text-yellow lg:self-start self-end lg:mt-0 mt-4`}>
          <span>View Details</span>
          <span className="text-orange"><AiOutlineArrowRight/></span>
        </Link>
      </div>)
          ) :
            <div className="flex flex-col w-full justify-center items-center h-[50vh] gap-3">
              <p className="text-2xl text-blackiii">No Orders yet!</p>
              <Link to={`/testlisting`} className="border border-orange rounded-md text-orange bg-none px-6 py-2">Go to Test Listing</Link>
        </div>
         } 
        </div>}
       
    </section>
  )
}

export default UserProfileOrders