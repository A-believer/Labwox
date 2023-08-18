import filter from "../../assets/filter.png"
import { useState } from "react"


const ProductSidebar = ({categories, selectedCategory, handleCategoryChange}) => {
    const [view, setView] = useState(false)
    
  return (
      <section className="lg:bg-white bg-none lg:pt-7 pt-0 lg:px-[14px] px-0 lg:pb-[600px] pb-0 text-blackii text-base leading-5 font-normal rounded shadow-2xl">
          
          {/* Desktop View  */}
        <div className="lg:block hidden">
            <div className="mt-2 flex justify-center items-center">
              <input placeholder="enter test..." type="text"  className="rounded-l w-[282px] h-[47px] border border-orange ring-0 outline-none pl-4"/>
              <button type="button" className="bg-orange text-white py-[14px] pl-6 pr-8 rounded-r">Search</button>
            </div> 
            <div className="mt-8 bg-white">
              <p className="font-bold">Categories</p>
            </div>
        <ul className="mt-2 flex flex-col gap-y-3">
          {categories?.map(category => (
            <li className="space-x-2" key={category}>
              <input
              className="accent-green"
                type="checkbox"
                name={category}
                value={category}
                checked={selectedCategory.includes(category)}
                onChange={handleCategoryChange}
              />
              <label htmlFor={category}>{category}</label>
            </li>
            ))}
              </ul>
          </div>
        
          
          {/* Mobile View  */}

          <div className="lg:hidden block bg-clear">
              
              <div className=" flex justify-center items-center w-full">
                  <input placeholder="enter test..." type="text" className="rounded-l h-[46px] w-[70%] border border-orange ring-0 outline-none pl-4"/>
                  <button type="button" className="bg-orange flex justify-center items-center  gap-2 text-white py-[11px] px-1 rounded-r w-[30%]" onClick={() => setView((prev) => !prev)}>
                  <img src={filter} alt="filter" className="w-6 h-6" /> 
                  <span>Filter</span></button>
              </div>
              
              {view && <div className="absolute top-[130px] w-[90%] bg-white rounded">
              <p className="font-bold mt-4 ml-4">Categories</p>
              <ul className="mt-2 flex flex-col gap-y-3">
                {categories?.map(category => (
                  <li className="space-x-2" key={category}>
                    <input
                    className="accent-green"
                      type="checkbox"
                      name={category}
                      value={category}
                      checked={selectedCategory.includes(category)}
                      onChange={handleCategoryChange}
                    />
                    <label htmlFor={category}>{category}</label>
                  </li>
                  ))}
              </ul>
          </div>} 
          </div>
    </section>
  )
}



export default ProductSidebar