import { ProductSidebar, Products } from "../components"
import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../config/firebaseConfig"


const TestListing = () => {
  const [tests, setTests] = useState([])
  
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
          })
    } catch (err) {
      console.error(err)
    }
      
  }
  useEffect(() => {
    getTestList()
  }, [])



  return (
    <main className="bg-whitebgii flex lg:flex-row flex-col lg:pl-[70px] pl-4 pr-4 lg:pt-[52px] pt-4 gap-[24px]">
      <div className="rounded">
        <ProductSidebar />
      </div>
      <div>
        <Products tests={tests} />
      </div>
    </main>
  )
}

export default TestListing