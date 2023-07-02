import { category } from "../data/data"
import filter from "../assets/filter.png"
import { useState } from "react"


const ProductSidebar = () => {
    const [view, setView] = useState(false)
    
  return (
      <section className="bg-white lg:pt-7 pt-0 lg:px-[14px] px-0 lg:pb-[600px] pb-5 text-blackii text-base leading-5 font-normal rounded">
          
          {/* Desktop View  */}
          <div className="lg:block hidden">
               <p>Search</p> 
          <div className="mt-2 flex justify-center items-center">
              <input type="text"  className="rounded-l w-[282px] h-[47px] border border-grey ring-0 outline-none pl-4"/>
              <button type="button" className="bg-blackii text-white py-[14px] pl-6 pr-8 rounded-r">search</button>
         </div> 
          <div className="mt-8 bg-white">
              <p className="font-bold">Categories</p>
              {category.map((cat, i) => (
                  <div key={i} className="my-[14px]">
                      <label htmlFor="" className="flex justify-start items-center gap-2">
                          <input type="checkbox" className="appearance-none h-[14px] w-[14px] checked:bg-green border border-greyiii rounded-[2px] z-10" />
                          <p>{cat}</p>
                      </label>
                  </div>
              ))}
          </div> 
          </div>
        
          
          {/* Mobile View  */}

          <div className="lg:hidden block">
              
              <div className="mt-2 flex justify-center items-center w-full">
                  <input type="text" className="rounded-l h-[47px] w-[70%] border border-grey ring-0 outline-none pl-4"/>
                  <button type="button" className="bg-blackii flex justify-center items-center  gap-2 text-white py-[12px] px-1 rounded-r w-[30%]" onClick={() => setView((prev) => !prev)}>
                  <img src={filter} alt="filter" className="w-6 h-6" /> 
                  <span>Filter</span></button>
              </div>
              
              {view && <div className="absolute top-[130px] w-[90%] bg-white rounded">
              <p className="font-bold mt-4 ml-4">Categories</p>
              {category.map((cat, i) => (
                  <div key={i} className="my-[14px] px-4 py-2" >
                      <label htmlFor="" className="flex justify-start items-center gap-2">
                          <input type="checkbox" className="appearance-none h-[14px] w-[14px] checked:bg-green border border-greyiii rounded-[2px] z-10" />
                          <p>{cat}</p>
                      </label>
                  </div>
              ))}
          </div>} 
          </div>
    </section>
  )
}

export default ProductSidebar