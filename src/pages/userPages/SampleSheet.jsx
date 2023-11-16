/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useParams } from "react-router-dom"
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../config/firebaseConfig';
import { useEffect, useState } from "react";
import {BsArrowLeft, BsPrinter} from "react-icons/bs"
import { decryptId } from '../../config/encrypt';


export default function SampleSheet() {
    const { id } = useParams()
    const [order, setOrder] = useState([])
    const [loading, setLoading] = useState(false)
  const [shipping, setShipping] = useState("")


    
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
    
    useEffect(() => {
     let  details;
    if (order?.deliveryDetails?.deliveryOption === "Drop Off") {
      details = <span>Address: 2B Awori Close, Akora Villas off Adeniyi Jones, Ikeja, Lagos</span>
      setShipping(details)
    }
    if(order?.deliveryDetails?.deliveryOption === "Agent Pick Up"){
     details = 
        <span>{order?.deliveryDetails?.deliveryAddress}</span>
      setShipping(details)
    }
    setShipping(details)
  }, [order.cartTotal, order?.deliveryDetails?.contactNumber, order?.deliveryDetails?.deliveryAddress, order?.deliveryDetails?.deliveryOption, order?.deliveryDetails?.locationLandmark])


  return (
      <section className="text-base">
           {loading &&
              <div className="text-center w-full h-[60vh] lg:px-5 pl-2 lg:py-5 py-2 lg:my-0 my-2 rounded shadow-2xl flex items-center justify-center animate-pulse lg:text-6xl text-4xl">Loading...</div>}
          
          <div className="" >
              <Link to={`/userprofile/orders/${order.id}`} className="flex items-center lg:text-2xl text-lg gap-x-3 text-blackii lg:mb-6 lg:mt-0 my-3"><BsArrowLeft /> Sample Sheet</Link>
              <div className="bg-white px-5 py-4 print-content" >
                  <div className="flex justify-between lg:flex-row flex-col">
                  <div className="mb-8">
                          <p className="grid auto-cols-fr grid-cols-2 my-4 gap-x-4 whitespace-nowrap">
                              <span>Order Date</span>
                              <span className="whitespace-normal">
                              {order.createdAt}
                          </span></p>
                          <p className="grid auto-cols-fr grid-cols-2 my-4 gap-x-4 whitespace-nowrap">
                              <span>Order No.</span>
                              <span className="whitespace-normal">labwox-{order.id}</span></p>
                          <p className="grid auto-cols-fr grid-cols-2 my-4 gap-x-4 whitespace-nowrap">
                              <span>Order Status</span>
                              <span className="whitespace-normal">{ order.orderStatus}</span></p>
                          <p className="grid auto-cols-fr grid-cols-2 my-4 gap-x-4 whitespace-normal">
                              <span>Shipping Address</span>
                              <span className="whitespace-normal">{shipping}</span></p>
                  </div>
                  <button type="button" onClick={()=> window.print()} className="flex items-center self-start bg-grey/30 gap-x-2 px-3 py-2 rounded mb-10"><BsPrinter/>PRINT</button>
              </div>
        <table className='table-auto w-full'>
        <thead className='bg-whitebgv border-b border-grey/30 text-base font-light text-grey leading-normal'>
         <tr className='text-center'>
            <th className='py-5'>Sample Name</th>
            <th>Sample Type</th>
            <th className='hidden lg:table-cell'>Test Code</th>
            <th className='hidden lg:table-cell'>Test Name</th>
         </tr>
        </thead>
            {order?.cart?.map((item, i) => (
                <tbody key={i + 1} className='bg-white'>
                    <tr className='text-center border-b border-grey/30 text-sm font-medium leading-normal text-blackii'>
                        <td className='py-5'>{item.sampleName}</td>
                        <td>{item.sampleType}</td>
                  <th className='hidden lg:table-cell'>
                    <span>{item.testCode}</span></th>
                        <td className='hidden lg:table-cell w-[50%]'>{item.testName}</td>
                    </tr>
                </tbody>
                ))}
              </table>
              <div className="my-5">
                   <p>Thanks for shopping</p>
              <p>Labwox team</p>
              </div>

              <div className="mt-20 mb-5">
                   <p>Need Help?</p>
              <p>Call - (+234) 809 087 0364</p>
              </div>
              </div>
              
             
          </div>
      </section>
  )
}
