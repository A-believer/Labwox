import { Link} from "react-router-dom"

const Products = ({tests}) => {
  console.log(tests)
  return (
    <section className="bg-white lg:px-5 px-4 lg:py-5 py-4 lg:my-0 my-2 rounded shadow-2xl">
      {tests.map((test) => (
        <div key={test.id} className="bg-whitebgii lg:p-5 p-2 lg:mb-10 mb-5 border border-orange shadow-2xl">
          <div className="flex justify-between items-center lg:gap-x-0 gap-x-4">
            <div className="lg:text-xl text-lg font-bold leading-6 text-blackii">
              <p className="font-extrabold underline decoration-grey underline-offset-2">{test.testTitle}</p>
              <p className="my-1 ">{test.code}</p>
              <p className="text-orange lg:my-5 my-2">₦{test.pricing}</p>
            </div>

            <button className="self-start bg-orange lg:py-[10px] py-1 lg:px-3 px-1 lg:text-lg text-xs font-medium lg:leading-6 leading-2 text-white rounded border border-orange">
              <Link to={test.id}>View Details</Link>
            </button>
          </div>
          <div className="lg:text-xl text-lg leading-6 text-blackii font-medium">
            <p>Category: <span className="text-grey font-normal lg:text-lg text-base">{ test.category}</span></p>
            <p>Parameters: </p>
            <p className="text-grey font-normal lg:text-lg text-base">{test.parameters}</p>
          </div>  
        </div>
        
      ))}
    </section>
  )
}
 Products.propTypes
export default Products