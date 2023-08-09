import { Link} from "react-router-dom"

const Products = ({tests}) => {
  console.log(tests)
  return (
    <section className="bg-white lg:px-5 px-2 lg:py-5 py-2 lg:my-5 my-2">
      {tests.map((test) => (
        <div key={test.id} className="bg-whitebgii lg:p-5 p-2 lg:mb-10 mb-5">
          <div className="flex justify-between items-center lg:gap-x-0 gap-x-4">
            <div className="lg:text-xl text-base font-bold leading-6 text-blackii">
              <p className="font-extrabold">{test.testTitle}</p>
              <p className="my-1 ">{test.code}</p>
              <p className="text-black">₦{ test.pricing}</p>
            </div>

            <button className="self-start bg-white lg:py-[10px] py-1 lg:px-3 px-1 lg:text-lg text-xs font-medium lg:leading-6 leading-2 text-grey rounded border border-grey">
              <Link to={test.id}>View Details</Link>
            </button>
          </div>
          <div className="mt-4 lg:text-base text-sm leading-6 text-blackii font-medium">
            <p>Category: <span className="font-normal">{ test.category}</span></p>
            <p>Parameters: </p>
            <p className="text-grey font-normal">{test.parameters}</p>
          </div>  
        </div>
        
      ))}
    </section>
  )
}
 Products.propTypes
export default Products