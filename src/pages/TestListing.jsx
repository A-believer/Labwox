import { ProductSidebar, Products } from "../components"

const TestListing = () => {

  return (
    <main className="bg-whitebgii flex lg:flex-row flex-col lg:pl-[70px] pl-4 pr-4 lg:pt-[52px] pt-4 gap-[24px]">
      <div className="rounded">
        <ProductSidebar />
      </div>
      <div>
        <Products />
      </div>
    </main>
  )
}

export default TestListing