import { doc, getDoc} from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../../config/firebaseConfig";


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
    
console.log(test)

    return (
        <section className="bg-white lg:px-5 px-2 lg:pt-5 pt-2 lg:pb-20 pb-2">
            <button className="text-[18px] font-medium leading-5 text-grey mb-4">
                <Link to={`testlisting`}>Go Back</Link>
            </button>
            
            <div key={test.key} className="bg-whitebgii lg:pt-5 pt-0 lg:pl-5 lg:pr-3 px-2 lg:pb-12 pb-4 lg:mb-11 mb-5">
                <div className="flex justify-between items-center lg:gap-x-0 gap-x-4">
                    <div className="lg:text-xl text-base font-bold leading-6 text-blackii">
                    <p>{test.testTitle}</p>
                    <p className="my-1">{test.id}</p>
                    <p className="text-black">{ test.price}</p>
                    </div>

                    <button onClick className="self-start bg-white lg:py-[10px] py-1 lg:px-6 px-1 lg:text-lg text-xs font-medium lg:leading-6 leading-2 text-grey rounded border border-grey">
                    Add to Cart
                    </button>
                </div>
                <div className="mt-4 lg:text-base text-sm leading-6 text-blackii font-medium lg:mb-12 mb-8">
                    <p>Category: <span className="font-normal">{ test.category}</span></p>
                </div>
                
                <div className="w-full flex justify-between border-b pb-3 lg:text-base text-sm lg:leading-5 leading-4 overflow-x-auto text-grey">
                    <button className={`lg:pr-20 pr-10  underline lg:underline-offset-[15px]   underline-offset-[14px] decoration-2 text-blackii decoration-blackii`} >
                        Parameters
                    </button>

                    <button className={`lg:pr-20 pr-10 whitespace-nowrap  "underline lg:underline-offset-[15px] underline-offset-[14px] decoration-2 text-blackii decoration-blackii`} >
                        Quality Control
                    </button>

                    <button className={`lg:pr-20 pr-10 whitespace-nowrap underline lg:underline-offset-[15px]   underline-offset-[14px] decoration-2 text-blackii decoration-blackii`} >
                        Additional Information
                    </button>

                    <button className={`pr-2 whitespace-nowrap underline lg:underline-offset-[15px]   underline-offset-[14px] decoration-2 text-blackii decoration-blackii`} >
                        Deliverable Information
                    </button>
                </div>
                </div>
                    
    </section>
)
}

export default ProductDetail