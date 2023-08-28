import closeModal from "../../assets/closeCart.png"
import { useDispatch } from 'react-redux';
import { addItem } from "../../utils/cartSlice"; 
import { useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import uniqueId from 'lodash/uniqueId';
import PropTypes from 'prop-types';
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

function CartDetail({ closeCartDetail, testCode, testPricing, testTitle  }) {
  const dispatch = useDispatch();
  const {userData} = UserAuth()
  const [cartDetail, setCartDetail] = useState({
    sampleType: "",
    sampleName: ""
  })
  
  const [ready, setReady] = useState(false)
    const customId = uniqueId(`${userData.firstName} ${userData.lastName}-`)

  const cartData = {
    createdAt: serverTimestamp(),
    sampleName: cartDetail.sampleName,
    sampleType: cartDetail.sampleType,
    testCode: testCode,
    testName: testTitle,
    testPrice: testPricing,
    id: customId
      }

  function handleCartDetailChange(e) {
    const { name, value } = e.target
    setCartDetail(prev => ({...prev, [name]: value}))
  }

  async function addTestToCart(e) {
    e.preventDefault()
    setReady(true)
    dispatch(addItem(cartData))
    closeCartDetail()

    try {
      await setDoc(doc(db, 'userCart', customId), cartData);
      toast.success('Test added to cart!');
    } catch (err) {
      console.error(err.message)
    }
      
      setCartDetail({
      sampleType: "",
      sampleName: ""
    })
    setReady(false)
  }


  return (
    <div className="bg-blackii/50 absolute left-0 top-0 w-full h-full lg:text-lg text-sm">
      <div
      className="bg-white lg:w-[400px] w-[300px] sticky lg:left-[35%] left-[10px] lg:top-[20%] top-[10%] outline-orange outline-4 border-2 border-grey/90 rounded-lg">
      
        <form onSubmit={addTestToCart} className="lg:p-8 px-5 py-8 flex flex-col gap-y-5">
          <div className="flex justify-between px-5 items-center">
        <p className="text-blackii font-bold">Add Test</p>
        <img src={closeModal} alt="" onClick={closeCartDetail} className="cursor-pointer object-contain"/>
      </div>
          <hr className="text-greyiii/30"/>
        <p className="flex gap-x-3 items-center">
          <span className="text-grey font-bold whitespace-nowrap text-right">Test Code</span>
          <span className="bg-greyiii/50 font-bold w-[80%] rounded pl-2 py-[3px]">{testCode}</span>
        </p>
        <p className="flex gap-x-3 items-center">
          <span className="text-grey font-bold whitespace-nowrap text-right">Test Price</span>
          <span className="bg-greyiii/50 font-bold w-[80%] rounded pl-2 py-[3px]">₦{testPricing?.toLocaleString('en-US')}.00</span>
        </p>
        <p className="flex gap-x-3 items-center">
          <label htmlFor="sampleName" className="text-grey font-bold whitespace-nowrap text-right">Sample Name</label>
            <input
              name="sampleName"
              value={cartDetail.sampleName}
              onChange={handleCartDetailChange}
              type="text"
              className="border border-greyiii/50 font-bold w-[80%] rounded pl-2 py-1 border-grey outline-none text-grey" />
        </p>
        <p className="flex gap-x-3 items-center">
          <label htmlFor="sampleType" className="text-grey font-bold whitespace-nowrap text-right">Sample Type</label>
            <select
              value={cartDetail.sampleType}
              onChange={handleCartDetailChange}
              name="sampleType"
              className="bg-greyiii/50 font-bold w-[80%] rounded pl-2 py-1 border-none outline-none text-center">
            <option value="Select sample type...">Select sample type...</option>
            <option value="Drinks/Beverage">Drinks/Beverage</option>
            <option value="Water">Water</option>
            <option value="Soil">Soil</option>
            <option value="Solvent Extract">Solvent Extract</option>
            <option value="Acid Digest">Acid Digest</option>
            <option value="Sediment">Sediment</option>
            <option value="Food">Food</option>
            <option value="Tissue">Tissue</option>
          </select>
          </p>
          <hr className="text-greyiii/30" />
        <button
          disabled={ready}
          type="submit"
          className="w-[50%] px-2 py-1.5 lg:mx-20 mx-16 rounded bg-orange text-white">
          Add Test to Cart
        </button>
      </form>
      </div>
      <ToastContainer/>
    </div>
    
  )
}

CartDetail.propTypes = {
  testCode: PropTypes.string.isRequired,
  testPricing: PropTypes.string.isRequired,
  testTitle: PropTypes.string.isRequired,
  closeCartDetail: PropTypes.func.isRequired
}
export default CartDetail


