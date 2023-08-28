import { useState } from "react"
import { Link} from "react-router-dom"

const Products = ({ tests }) => {
  
  const [currentPage, setCurrentPage] = useState(1)
  const totalTests = tests.length
  const pageSize = 10
  const pages = Math.floor(totalTests / pageSize)
  
  function goToPrev() {
    const prevPage = Math.max(currentPage - 1, 1)
    setCurrentPage(prevPage);
  }

  function goToNext() {
    const nextPage = Math.min(currentPage + 1, pages)
    setCurrentPage(nextPage);
  }

  const start = pageSize * (currentPage - 1)
  const end = pageSize * (currentPage)
  const testsPerPage = tests.slice(start, end)

  const canGoPrev = currentPage > 1
  const canGoNext = currentPage < pages

  return (
    <section className="bg-white lg:px-5 px-2 lg:py-5 py-2 lg:my-0 my-2 rounded shadow-2xl w-full">
      {testsPerPage.map((test) => (
        <div key={test.id} className="bg-whitebgii lg:p-5 p-2 lg:mb-10 mb-5 border border-orange shadow-2xl rounded-lg">
          <div className="flex justify-between items-center lg:gap-x-0 gap-x-4">
            <div className="lg:text-xl text-lg font-bold leading-6 text-blackii">
              <p className="font-extrabold underline decoration-grey underline-offset-2 lg:pr-4 pr-0">{test.testTitle}</p>
              <p className="my-2 text-grey">{test.code}</p>
              <p className="text-orange lg:my-5 my-2">₦ {test.pricing.toLocaleString('en-US')}.00</p>
            </div>

            <button className="self-start bg-orange lg:py-[10px] py-1 lg:px-3 px-1 lg:text-lg text-xs font-medium lg:leading-6 leading-2 text-white rounded-sm border border-orange whitespace-nowrap">
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

      <div className="lg:mt-4 mt-2 flex items-center justify-center text-grey gap-x-3">
        <button className="underline" onClick={goToPrev} disabled={!canGoPrev}>Prev</button>
        <p className="text-xl">{currentPage} of {pages}</p>
        <button className="underline" onClick={goToNext} disabled={!canGoNext}>Next</button>
      </div>
    </section>
  )
}
 Products.propTypes
export default Products