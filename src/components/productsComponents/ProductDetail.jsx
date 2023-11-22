/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { doc, getDoc} from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../../config/firebaseConfig";
import {IoMdArrowRoundBack} from "react-icons/io"
import CartDetail from "../cartComponents/CartDetail";
import { decryptId } from "../../config/encrypt";


const ProductDetail = () => {
    const [test, setTest] = useState([])
    const [truncate, setTruncate] = useState(false)
    const [loading, setLoading] = useState(true)
    const { id } = useParams()
    const [cartDetailToggle, setCartDetailToggle] = useState(false)
    function handleCartDetailToggle() {
        setCartDetailToggle(prev => !prev)
    }


    function handleTextToggle() {
      setTruncate(!truncate)
    }

    useEffect(() => {
      const testRef = doc(db, "lists of tests", decryptId(id))

    async function getTest() {
        try {
            const newData = await getDoc(testRef)
             if (newData.exists()) {
          setTest({
            id: newData.id,
            ...newData.data(),
          });
        setLoading(false)
        } 
        } catch (err) {
            console.error(err)
        }
    }
    getTest()
  }, [])


    return (
        <section className="bg-white lg:px-14 px-2 lg:pt-5 pt-3 lg:pb-10 pb-2 ">
            <Link to={`/testlisting`} className="lg:text-lg text-base font-medium leading-5 text-grey flex items-center gap-x-2">
                <IoMdArrowRoundBack/>
                <span className="underline">Go Back</span>
            </Link>
            
            {loading ?
                <div className="text-center w-full h-[60vh] lg:px-5 pl-2 lg:py-5 py-2 lg:my-0 my-2 rounded shadow-2xl flex items-center justify-center animate-pulse lg:text-6xl text-4xl">Loading...</div>
                :
                <div>
                    <div key={test.key} className="bg-whitebgii lg:pt-5 pt-2 lg:pl-5 lg:pr-3 px-2 lg:pb-4 pb-2 mt-5 lg:mx-20 mx-0 border border-b-0 border-orange rounded-t-lg">
                <div className="flex justify-between items-center lg:gap-x-0 gap-x-4">
                    <div className="lg:text-xl text-base font-bold leading-6 text-blackii">
                    <p className="font-extrabold underline decoration-grey underline-offset-2 lg:pr-4 pr-0">{test.testTitle}</p>
                    <p className="my-1 text-grey">{test.code}</p>
                    <p className="text-orange my-2">₦ {Number(test.pricing)?.toLocaleString('en-US')}.00</p>
                    </div>
                    
                    <button
                    onClick={handleCartDetailToggle}
                    className="self-start bg-white lg:py-[10px] py-1 lg:px-6 px-1 lg:text-lg text-xs font-medium lg:leading-6 leading-2 text-orange rounded border border-orange whitespace-nowrap">
                        Add to Cart
                    </button>
                    {cartDetailToggle &&
                        <CartDetail
                        closeCartDetail={handleCartDetailToggle}
                        test={test}
                        testPricing={Number(test.pricing)}
                        testCode={test.code}
                        testTitle={test.testTitle}
                        testSampleType={test.sampleType}
                    />}
                    
                </div>
            </div>
            <ul className="lg:text-base text-sm leading-6 text-blackii font-medium lg:pb-5 pb-3 lg:pl-5 lg:pr-3 px-2 flex flex-col gap-y-2 lg:mx-20 mx-0 border border-t-0 border-orange rounded-b-lg">
                <li><span className="text-lg">Category: </span><span className="text-greyi">{test.category}</span></li>
                <li><span className="text-lg">Sub-Category: </span><span className="text-greyi">{ test.subcategory }</span></li>
                <li>
                    <span className="text-lg">Sub-Category Information: </span>
                    <span className={`text-greyi`}>
                        {truncate ?
                        test["Subcategory Info"] :
                       (test["Subcategory Info"]?.split(" ").slice(0, 10).join(" ")) + "..."}
                    </span>
                    {!truncate && <span className="cursor-pointer underline underline-offset-2 decoration-2 text-greyi" onClick={handleTextToggle}>Read More</span>}
                </li>
                <li><span className="text-lg">Minimum Sample Amount: </span><span className="text-greyi">{test.minimumSampleAmount}</span></li>
                <li><span className="text-lg">Paramenters: </span><span className="text-greyi">{test.parameters }</span></li>
                <li><span className="text-lg">Instrument: </span><span className="text-greyi">{ test.instruments}</span></li>
                <li><span className="text-lg">Sample Type: </span><span className="text-greyi">{ test.sampleType}</span></li>
            </ul>
                </div>
            }
            
                    
    </section>
)
}

export default ProductDetail