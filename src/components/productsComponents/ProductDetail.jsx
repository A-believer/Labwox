import { doc, getDoc} from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link, useParams, NavLink } from "react-router-dom";
import { db } from "../../config/firebaseConfig";
import {IoMdArrowRoundBack} from "react-icons/io"


const ProductDetail = () => {
    const [test, setTest] = useState([])
    const { id } = useParams()
    
    const testRef = doc(db, "lists of tests", id)

    async function getTest() {
        try {
            const newData = await getDoc(testRef)
             if (newData.exists()) {
          setTest({
            id: newData.id,
            ...newData.data(),
          });
        } 
        } catch (err) {
            console.error(err)
        }
    }

  useEffect(() => {
    getTest()
  }, [])


    return (
        <section className="bg-white lg:px-14 px-2 lg:pt-5 pt-3 lg:pb-10 pb-2">
            <Link to={`/testlisting`} className="lg:text-lg text-base font-medium leading-5 text-grey flex items-center gap-x-2">
                <IoMdArrowRoundBack/>
                <span className="underline">Go Back</span>
            </Link>
            
            
            <div key={test.key} className="bg-whitebgii lg:pt-5 pt-0 lg:pl-5 lg:pr-3 px-2 lg:pb-4 pb-2 mt-5">
                <div className="flex justify-between items-center lg:gap-x-0 gap-x-4">
                    <div className="lg:text-xl text-base font-bold leading-6 text-blackii">
                    <p className="font-extrabold underline decoration-grey underline-offset-2 lg:pr-4 pr-0">{test.testTitle}</p>
                    <p className="my-1 text-grey">{test.code}</p>
                    <p className="text-orange my-2">₦ {test.pricing}</p>
                    </div>

                    <button className="self-start bg-white lg:py-[10px] py-1 lg:px-6 px-1 lg:text-lg text-xs font-medium lg:leading-6 leading-2 text-orange rounded border border-orange whitespace-nowrap">
                    Add to Cart
                    </button>
                </div>
            </div>
            <ul className="lg:text-base text-sm leading-6 text-blackii font-medium lg:pl-5 lg:pr-3 px-2 flex flex-col gap-y-2">
                <li><span className="text-lg">Category: </span><span className="text-grey">{test.category}</span></li>
                <li><span className="text-lg">Sub-Category: </span><span className="text-grey">{ test.subcategory }</span></li>
                <li><span className="text-lg">Minimum Sample Amount: </span><span className="text-grey">{test.minimumSampleAmount}</span></li>
                <li><span className="text-lg">Paramenters: </span><span className="text-grey">{test.parameters }</span></li>
                <li><span className="text-lg">Instrument: </span><span className="text-grey">{ test.instrument}</span></li>
                <li><span className="text-lg">Sample Type: </span><span className="text-grey">{ test.sampleType}</span></li>
            </ul>
                    
    </section>
)
}

export default ProductDetail