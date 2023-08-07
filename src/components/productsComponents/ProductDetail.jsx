import { doc, getDoc} from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link, useParams, NavLink } from "react-router-dom";
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


    return (
        <section className="bg-white lg:px-14 px-2 lg:pt-5 pt-2 lg:pb-20 pb-2">
                <Link to={`testlisting`} className="text-[18px] font-medium leading-5 text-grey ml-6">Go Back</Link>
            
            
            <div key={test.key} className="bg-whitebgii lg:pt-5 pt-0 lg:pl-5 lg:pr-3 px-2 lg:pb-12 pb-4 lg:mb-11 mb-5 mt-5">
                <div className="flex justify-between items-center lg:gap-x-0 gap-x-4">
                    <div className="lg:text-xl text-base font-bold leading-6 text-blackii">
                    <p>{test.testTitle}</p>
                    <p className="my-1">{test.code}</p>
                    <p className="text-black">{ test.pricing}</p>
                    </div>

                    <button className="self-start bg-white lg:py-[10px] py-1 lg:px-6 px-1 lg:text-lg text-xs font-medium lg:leading-6 leading-2 text-grey rounded border border-grey">
                    Add to Cart
                    </button>
                </div>
                <div className="mt-4 lg:text-base text-sm leading-6 text-blackii font-medium lg:mb-12 mb-8">
                    <p>Category: <span className="font-normal">{ test.category}</span></p>
                </div>
                
                <div className="w-full flex justify-between border-b pb-3 lg:text-base text-sm lg:leading-5 leading-4 overflow-x-auto text-grey">
                    <NavLink to="parameters" className={`lg:pr-20 pr-10  underline lg:underline-offset-[15px]   underline-offset-[14px] decoration-2 text-blackii decoration-blackii`} >
                        Parameters
                    </NavLink>

                </div>
                </div>
                    
    </section>
)
}

export default ProductDetail