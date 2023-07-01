import { ProductSidebar, Products } from "../components"

const TestListing = () => {

  return (
    <main className="bg-whitebgii flex lg:flex-row flex-col justify-between lg:px-[72px] pl-6 pr-4 lg:pt-[52px] pt-4">
      <div><ProductSidebar /></div>
      <div><Products/></div>
      
    </main>
  )
}

export default TestListing