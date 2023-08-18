import { ProductSidebar, Products } from "../components"
import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../config/firebaseConfig"


const TestListing = () => {
  const [tests, setTests] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("all")
  const categories = ["Phytochemical Analysis", "Polutant Analysis", "Nutritional Analysis"]
  const [loading, setLoading] = useState(true)

  const filteredTests = tests.filter(test => {
    return (
      selectedCategory.length === 0 ||
      selectedCategory.includes(test.category)
    );
  });

  const handleCategoryChange = event => {
    const category = event.target.value;
    if (selectedCategory.includes(category)) {
      setSelectedCategory(selectedCategory.filter(cat => cat !== category));
    } else {
      setSelectedCategory([...selectedCategory, category]);
    }
  };
  
  const testListCollectionRef = collection(db, "lists of tests")
  async function getTestList() {
    try {
          await getDocs(testListCollectionRef)
          .then((data) => {
              const newData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id
              })) 
            setTests(newData)
            setLoading(false)
          })
    } catch (err) {
      console.error(err)
      setLoading(true)
    }
      
  }
  useEffect(() => {
    getTestList()
  }, [])



  return (
    <main className="bg-whitebgii flex lg:flex-row flex-col lg:pl-[70px] pl-4 pr-4 lg:pt-[52px] pt-4 gap-[24px] w-full ">
      <div className="rounded">
        <ProductSidebar
        categories={categories}
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange} />
      </div>
      <div>
        {loading ?
          <div className="text-center bg-white lg:px-5 px-2 lg:py-5 py-2 lg:my-0 my-2 rounded shadow-2xl flex items-center justify-center">Loading...</div>
          : <Products tests={tests} />}
        
      </div>
    </main>
  )
}

export default TestListing