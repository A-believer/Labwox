import { Products } from "../components"
import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../config/firebaseConfig"
import filter from "../assets/filter.png"


const TestListing = () => {
  const [tests, setTests] = useState([])
  const [loading, setLoading] = useState(false)
  const [view, setView] = useState(false)
  const [viewMobile, setViewMobile] = useState(false)

  
  
  const testListCollectionRef = collection(db, "lists of tests")
   async function getTestList() {
      setLoading(true)
    try {
          await getDocs(testListCollectionRef, {source: "cache"})
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
      setLoading(false)
  }
  
  useEffect(() => {
   
    getTestList()
    console.log("tests")
  }, [])



  return (
    <main className="bg-whitebgii flex lg:flex-row flex-col lg:pl-[70px] px-4 lg:pr-10 lg:py-[52px] pt-4 gap-[24px] w-full ">
      
      {loading ?
        
          <div className="text-center w-full h-[60vh] lg:px-5 pl-2 lg:py-5 py-2 lg:my-0 my-2 rounded shadow-2xl flex items-center justify-center animate-pulse lg:text-6xl text-4xl">Loading...</div>
          :
    
        <div className="w-full relative">
          
          {/* Desktop Search View  */}
          <div className="mt-2 justify-between items-center lg:flex hidden h-[47px] mb-7 relative">
            <div className="h-full flex items-center">
              <input placeholder="enter test..." type="text"  className="rounded-l w-full h-full border border-orange ring-0 outline-none pl-4"/>
              <button type="button" className="bg-orange text-white h-full pl-6 pr-8 rounded-r border-0">Search</button>
            </div>
            <button type="button" className="bg-orange flex justify-center items-center  gap-2 text-white px-4 rounded h-full" onClick={() => setView(prev => !prev)}>
                <img src={filter} alt="filter" className="w-6 h-6" /> 
              <span>Filter Tests</span>
            </button>

            {view &&
              <div className="absolute top-14 right-0 w-fit bg-white rounded border border-orange">
              <p className="font-bold mt-4 mx-4">Categories</p>
              <ul className="mt-2 flex flex-col gap-y-3 mx-4 pb-4">
               <li>Nutritional Analysis</li>
               <li>Phytochemical Analysis</li>
               <li>Pollutant Analysis</li>
              </ul>
          </div>} 
          </div> 

          {/* Mobile Search View  */}
          <div className="lg:hidden block bg-clear w-full mx-auto">
              
              <div className=" flex justify-center items-center md:w-[60%] w-[90%] mx-auto">
                  <input placeholder="enter test..." type="text" className="rounded-l h-[46px] w-[70%] border border-orange ring-0 outline-none pl-4"/>
                  <button type="button" className="bg-orange flex justify-center items-center  gap-2 text-white py-[11px] px-1 rounded-r w-[30%]" onClick={() => setViewMobile((prev) => !prev)}>
                  <img src={filter} alt="filter" className="w-6 h-6" /> 
                  <span>Filter</span></button>
              </div>
              
              {viewMobile && <div className="absolute top-[50px] left-4 w-[90%] bg-white rounded border border-orange">
              <p className="font-bold mt-4 ml-4">Categories</p>
              <ul className="mt-2 flex flex-col gap-y-3 ml-4 pb-4">
               <li>Nutritional Analysis</li>
               <li>Phytochemical Analysis</li>
               <li>Pollutant Analysis</li>
              </ul>
          </div>} 
          </div>

          
              <Products tests={tests} />
            </div>
           }
    </main>
  )
}

export default TestListing