import { useState } from "react";
import { productsapi } from "../data/data"
import { Link } from "react-router-dom";

const ProductDetail = () => {
     
    const [active, setActive] = useState('features');

  const handleTabClick = (tab) => {
    setActive(tab);
  };


    return (
        <section className="bg-white lg:px-5 px-2 lg:pt-5 pt-2 lg:pb-20 pb-2">
            <button className="text-[18px] font-medium leading-5 text-grey mb-4"><Link to={`/testlisting`}>Go Back</Link></button>
            
                <div key={productsapi[0].key} className="bg-whitebgii lg:pt-5 pt-0 lg:pl-5 lg:pr-3 px-2 lg:pb-12 pb-4 lg:mb-11 mb-5">
                <div className="flex justify-between items-center lg:gap-x-0 gap-x-4">
                    <div className="lg:text-xl text-base font-bold leading-6 text-blackii">
                    <p>{productsapi[0].name}</p>
                    <p className="my-1">{productsapi[0].id}</p>
                    <p className="text-black">{ productsapi[0].price}</p>
                    </div>

                    <button onClick className="self-start bg-white lg:py-[10px] py-1 lg:px-6 px-1 lg:text-lg text-xs font-medium lg:leading-6 leading-2 text-grey rounded border border-grey">
                    Add to Cart
                    </button>
                </div>
                <div className="mt-4 lg:text-base text-sm leading-6 text-blackii font-medium lg:mb-12 mb-8">
                    <p>Category: <span className="font-normal">{ productsapi[0].category}</span></p>
                    <p>Parameter: <span className="font-normal">{productsapi[0].parameter}</span></p>
                    <p>QC Option: 0</p>
                    <p>QC Price: #0</p>
                </div>
                
                <div className="w-full flex justify-between border-b pb-3 lg:text-base text-sm lg:leading-5 leading-4 overflow-x-auto text-grey">
                    <button className={`lg:pr-20 pr-10 ${active === "features" ? "underline lg:underline-offset-[15px]   underline-offset-[14px] decoration-2 text-blackii decoration-blackii" : ""}`} onClick={() => handleTabClick("features")}>
                        Features
                    </button>

                    <button className={`lg:pr-20 pr-10 whitespace-nowrap ${active === "quality_control" ? "underline lg:underline-offset-[15px] underline-offset-[14px] decoration-2 text-blackii decoration-blackii" : ""}`} onClick={() => handleTabClick("quality_control")}>
                        Quality Control
                    </button>

                    <button className={`lg:pr-20 pr-10 whitespace-nowrap ${active === "additional_information" ? "underline lg:underline-offset-[15px]   underline-offset-[14px] decoration-2 text-blackii decoration-blackii" : ""}`} onClick={() => handleTabClick("additional_information")}>
                        Additional Information
                    </button>

                    <button className={`pr-2 whitespace-nowrap ${active === "deliverable_information" ? "underline lg:underline-offset-[15px]   underline-offset-[14px] decoration-2 text-blackii decoration-blackii" : ""}`} onClick={() => handleTabClick("deliverable_information")}>
                        Deliverable Information
                    </button>
                </div>

                    <div>
                    {active === "features" ?
                        <div className="mt-3 text-grey">{productsapi[0].feature}</div>
                        : active === "quality_control" ?
                            <ul className="flex items-center py-[22px] px-4 gap-x-[80px] bg-whitebgv text-base leading-6 font-normal text-blackvi overflow-x-auto">
                                <li className="flex items-center gap-x-3">
                                    <input type="checkbox" />
                                    <p>S/N(#)</p>
                               </li> 
                               <li>Name</li> 
                               <li>Description</li> 
                               <li>Price</li> 
                               <li>Quality Info</li> 
                            </ul> 
                            : active === "additional_information" ?
                                <div className="text-grey text-base leading-5 mt-3">
                                    Product Additional Information
                                        <br />
                                        <span className="text-blackii mtt-3">Equipment Used:</span>
                                        <br />   
                                    Agilent 1100 HPLC
                                </div>
                                : active === "deliverable_information" ?
                                <div className="text-grey font-medium mt-4">
                                    1. Final processed results 2. Method Sheet 3. Crude data output
                                </div> 
                        : null}
                    </div>
                </div>
                    
    </section>
)
}

export default ProductDetail