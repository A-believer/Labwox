import { productsapi } from "../data/data"

const Products = ({ onViewProduct }) => {
  return (
    <section className="bg-white lg:px-5 px-2 lg:pt-5 pt-2 lg:pb-20 pb-5">
      {productsapi?.map((item, i) => (
        <div key={item.id + i} className="bg-whitebgii lg:pt-5 pt-3 lg:pl-5 pl-3 lg:pr-3 pr-1 lg:pb-12 pb-4 lg:mb-11 mb-5">
          <div className="flex justify-between items-center lg:gap-x-0 gap-x-4">
            <div className="lg:text-xl text-base font-bold leading-6 text-blackii">
              <p>{item.name}</p>
              <p className="my-1">{item.id}</p>
              <p className="text-black">{ item.price}</p>
            </div>

            <button onClick={() => onViewProduct()} className="self-start bg-white lg:py-[10px] py-1 lg:px-3 px-1 lg:text-lg text-xs font-medium lg:leading-6 leading-2 text-grey rounded border border-grey">
              View Product Detail
            </button>
          </div>
          <div className="mt-4 lg:text-base text-sm leading-6 text-blackii font-medium">
            <p>Category: <span className="font-normal">{ item.category}</span></p>
            <p>Parameter: <span className="font-normal">{item.parameter}</span></p>
            <p>Features: </p>
            <p className="text-grey font-normal">{item.feature}</p>
          </div>  
        </div>
        
      ))}
     
          
      
    </section>
  )
}

export default Products