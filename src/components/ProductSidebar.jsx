import { category } from "../data/data"


// eslint-disable-next-line react/prop-types
const ProductSidebar = ({ checked, onChange }) => {

    
    
  return (
      <section className="bg-white lg:pt-7 pt-0 lg:px-[14px] px-0">
         <p>Search</p> 
          <div>
              <input type="text" />
              <button type="button">search</button>
         </div> 
          <div>
              {category.map((cat, i) => (
                  <div key={i}>
                      <label htmlFor="">
                          <input type="checkbox" className="indeterminate:bg-grey checked:bg-orange"  checked={checked}
        onChange={onChange} />
                          {cat}
                      </label>
                  </div>
              ))}
         </div> 
    </section>
  )
}

export default ProductSidebar