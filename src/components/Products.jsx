import { productsapi } from "../data/data"
import { Link } from "react-router-dom"



const Products = () => {
  return (
    <section className="bg-white px-5 pt-5 pb-20">
      {productsapi?.map((item, i) => (
        <div key={item.id + i} className="bg-whitebgii pt-5 pl-5 pr-3 pb-12 mb-11">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold leading-6 text-blackii">
              <p>{item.name}</p>
              <p className="my-1">{item.id}</p>
              <p className="text-black">{ item.price}</p>
            </div>

            <button className="self-start bg-white py-[10px] px-3 text-lg font-medium leading-6 text-grey rounded border border-grey"><Link to={`/testlisting/${item.id}`}>View Product Detail</Link></button>
          </div>
          <div className="mt-4 text-base leading-6 text-blackii font-medium">
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