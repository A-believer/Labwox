/* eslint-disable react-hooks/exhaustive-deps */
import { AiOutlineArrowRight }from "react-icons/ai"
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
import { UserAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";


function UserProfileOrders() {
  const [orders, setOrders] = useState(null)
  const [loading, setLoading] = useState(false)
  const {currentUser} = UserAuth()

  const orderRef = query(collection(db, "order"), where(`userName`, "==", `${currentUser.displayName}`))
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
    } catch (err) {
      console.error(err)
      }
      setLoading(false)
  }
  
  useEffect(() => {
    getOrders()
  }, [])


  
  return (
    <section className="relative w-full">
      <p className="text-blackii font-medium text-2xl lg:my-0 mt-4">My Orders</p>

      {loading ?
        <div className="text-center w-full h-[60vh] lg:px-5 pl-2 lg:py-5 py-2 lg:my-0 my-2 rounded shadow-2xl flex items-center justify-center animate-pulse lg:text-6xl text-4xl">Loading...</div>
      :
      <div className="relative w-full">

         {orders > 0 ? orders?.map((order, i) => (
          <div key={i + 1} className="bg-white flex lg:flex-row flex-col justify-between lg:p-10 p-3 mt-3">
        <p className="flex flex-col text-grey text-base">
            <span className="text-lg">labwox-{order.id}</span>
            <span className="my-1">
              {order.createdAt}
            </span>
            <span className="text-blackii font-bold">₦{order.cartTotal.toLocaleString('en-US')}</span>
               <span className="text-[#66C27C]">{order?.orderStatus}</span>
        </p>
        <Link
          to={order.id}
          className={`flex items-center gap-x-2 text-yellow lg:self-start self-end lg:mt-0 mt-4`}>
          <span>View Details</span>
          <span><AiOutlineArrowRight/></span>
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