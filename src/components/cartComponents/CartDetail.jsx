import closeModal from "../../assets/closeCart.png"
import { useDispatch } from 'react-redux';
import { addItem } from "../../utils/cartSlice"; 

function CartDetail({ closeCartDetail, test, testCode, testPricing }) {
  const dispatch = useDispatch();

  function addTestToCart() {
    dispatch(addItem(test))
    closeCartDetail()
  }
  return (
    <div className="bg-blackii/50 absolute left-0 top-0 w-full h-full lg:text-lg text-sm">
      <div
      className="bg-white lg:w-[400px] w-[300px] sticky lg:left-[35%] left-[10px] lg:top-[20%] top-[10%] outline-orange outline-4 border-2 border-grey/90 rounded-lg">
      <div className="flex justify-between px-5 py-2">
        <p className="text-blackii font-bold">Add Test</p>
        <img src={closeModal} alt="" onClick={closeCartDetail} className="cursor-pointer"/>
      </div>
      <hr className="text-greyiii/30"/>
      <div className="lg:p-8 px-5 py-8 flex flex-col gap-y-8">
        <p className="flex gap-x-3 items-center">
          <span className="text-grey font-bold whitespace-nowrap text-right">Test Code</span>
          <span className="bg-greyiii/50 font-bold w-[80%] rounded pl-2 py-[2px]">{testCode}</span>
        </p>
        <p className="flex gap-x-3 items-center">
          <span className="text-grey font-bold whitespace-nowrap text-right">Test Price</span>
          <span className="bg-greyiii/50 font-bold w-[80%] rounded pl-2 py-[2px]">₦{testPricing}.00</span>
        </p>
        <p className="flex gap-x-3 items-center">
          <span className="text-grey font-bold whitespace-nowrap text-right">Sample Name</span>
            <input type="text" className="border border-greyiii/50 font-bold w-[80%] rounded pl-2 py-[2px]"/>
        </p>
        <p className="flex gap-x-3 items-center">
          <span className="text-grey font-bold whitespace-nowrap text-right">Sample Type</span>
          <select name="sampleType" className="bg-greyiii/50 font-bold w-[80%] rounded pl-2 py-[2px]">
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
      </div>
      <hr className="text-greyiii/30" />
      <button onClick={addTestToCart} type="button" className="w-[50%] px-2 py-1.5 lg:mx-20 mx-16 my-5 rounded bg-orange text-white">Add Test to Cart</button>
    </div>
    </div>
    
  )
}

export default CartDetail