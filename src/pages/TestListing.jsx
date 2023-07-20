import { ProductSidebar, Products, ProductDetail } from "../components"

const TestListing = () => {

  return (
    <main className="bg-whitebgii flex lg:flex-row flex-col justify-between lg:pl-[72px] lg:pr-[70px] pl-6 pr-4 lg:pt-[52px] pt-4 gap-[24px]">
      <div className="rounded"><ProductSidebar /></div>
      <div>
        <Products />
        <ProductDetail />
      </div>
    </main>
  )
}

export default TestListing