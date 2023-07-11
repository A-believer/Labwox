import { useState } from "react";
import { ProductSidebar, Products, ProductDetail } from "../components"

const TestListing = () => {

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleViewProduct = (products) => {
    setSelectedProduct(products);
  };

  return (
    <main className="bg-whitebgii flex lg:flex-row flex-col justify-between lg:pl-[72px] lg:pr-[70px] pl-6 pr-4 lg:pt-[52px] pt-4 gap-[24px]">
      <div className="rounded"><ProductSidebar /></div>
      <div>
        <Products onViewProduct={handleViewProduct}/>
        <ProductDetail selectedProduct={selectedProduct} />
      </div>
    </main>
  )
}

export default TestListing