import { useState } from "react";
import { ProductSidebar, Products } from "../components"
import { category, productsapi } from "../data/data";


const TestListing = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };
  const filteredProducts =
    selectedCategories.length === 0
      ? productsapi
      : productsapi.filter((product) =>
          selectedCategories.includes(product.category)
        );


  return (
    <main className="bg-whitebgii flex lg:flex-row flex-col justify-between lg:px-[72px] pl-6 pr-4 lg:pt-[52px] pt-[31px]">
      <div><ProductSidebar checked={selectedCategories.includes(category)}
              onChange={() => handleCategoryChange(category)}/></div>
      <div><Products/></div>
      
    </main>
  )
}

export default TestListing