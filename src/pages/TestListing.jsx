/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { Products } from "../components"
import { useEffect, useRef, useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../config/firebaseConfig"
import filter from "../assets/filter.png"


const TestListing = () => {
  const [tests, setTests] = useState([])
  const [loading, setLoading] = useState(true)
  const [view, setView] = useState(false)
  const [viewMobile, setViewMobile] = useState(false)
  const [search, setSearch] = useState('')
  const filterRef = useRef(null);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((cat) => cat !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };
  const handleClickOutside = (e) => {
    if (filterRef.current && !filterRef.current.contains(e.target)) {
      setView(false);
      setViewMobile(false);
    }
  };

   useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
   }, []);
  
  
  const testListCollectionRef = collection(db, "lists of tests")
   async function getTestList() {
    try {
          await getDocs(testListCollectionRef, {source: "cache"})
          .then((data) => {
              const newData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id
              })) 
            setTests(newData)
          })
      setLoading(false)
    } catch (err) {
      console.error(err)
      }
  }
  
  useEffect(() => {
   
    getTestList()
  }, [])

const filteredTests = selectedCategories.length === 0 || selectedCategories.length === 3
    ? tests
    : tests.filter((item) => selectedCategories.includes(item.category));
  
  
const handleQuery = (e) => {
  // e.preventDefault() 
  //    const filteredTest = tests.filter((item) =>
  //         item.testTitle.toLowerCase().split(" ").join("").includes(search.toLowerCase().split(" ").join("")) ||
  //         item.instruments.toLowerCase().split(" ").join("").includes(search.toLowerCase().split(" ").join("")))
  //     setTests(filteredTest)
    }
 
    const handleSearch = (e) => {
      // let term = e.target.value
      // setSearch(term)
      // let filteredTest;
      // if (term !== "") {
      //    filteredTest = tests.filter((item) =>
      //     item.testTitle.toLowerCase().split(" ").join("").includes(term.toLowerCase().split(" ").join("")) ||
      //      item.instruments.toLowerCase().split(" ").join("").includes(term.toLowerCase().split(" ").join("")))
      // }
      // if(term === ""){
      //   filteredTest = tests
      // }
      //   setTests(filteredTest)
    }

  return (
    <main className="bg-whitebgii flex lg:flex-row flex-col lg:pl-[70px] px-4 lg:pr-10 lg:py-[52px] pt-4 gap-[24px] w-full ">
    
        <div className="w-full relative">
          
          {/* Desktop Search View  */}
          <div className="mt-2 justify-between items-center lg:flex hidden h-[47px] mb-7 relative">
            <div className="h-full flex items-center">
              <input
                value={search}
                onChange={handleSearch}
                placeholder="enter test..."
                type="text"
                className="rounded-l w-full h-full border border-orange ring-0 outline-none pl-4" />
              <button
              onClick={handleQuery}
                type="button"
                className="bg-orange text-white h-full pl-6 pr-8 rounded-r border-0">Search</button>
            </div>
            <button
              type="button"
              className="bg-orange flex justify-center items-center  gap-2 text-white px-4 rounded h-full" onClick={() => setView(prev => !prev)}>
                <img src={filter} alt="filter" className="w-6 h-6" /> 
              <span>Filter Tests</span>
            </button>

            {view &&
              <div ref={filterRef} className="absolute top-14 right-0 w-fit bg-white rounded border border-orange">
              <p className="font-bold mt-4 mx-4">Categories</p>
              <ul className="mt-2 flex flex-col gap-y-3 mx-4 pb-4">
                <li>
                  <input
                  checked={selectedCategories.includes('Nutritional Analysis')}
                  onChange={() => handleCategoryChange('Nutritional Analysis')}
                  type="checkbox" /> Nutritional Analysis</li>
                <li>
                  <input
                  checked={selectedCategories.includes('Phytochemical Analysis')}
                  onChange={() => handleCategoryChange('Phytochemical Analysis')}
                  type="checkbox" /> Phytochemical Analysis</li>
                <li>
                  <input
                  checked={selectedCategories.includes('Pollutants Analysis')}
                  onChange={() => handleCategoryChange('Pollutants Analysis')}
                  type="checkbox" /> Pollutants Analysis</li>
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
              
          {viewMobile &&
            <div ref={filterRef} className="absolute top-[50px] left-4 w-[90%] bg-white rounded border border-orange">
              <p className="font-bold mt-4 ml-4">Categories</p>
              <ul className="mt-2 flex flex-col gap-y-3 ml-4 pb-4">
               <li>
                  <input
                  checked={selectedCategories.includes('Nutritional Analysis')}
                  onChange={() => handleCategoryChange('Nutritional Analysis')}
                  type="checkbox" /> Nutritional Analysis</li>
                <li>
                  <input
                  checked={selectedCategories.includes('Phytochemical Analysis')}
                  onChange={() => handleCategoryChange('Phytochemical Analysis')}
                  type="checkbox" /> Phytochemical Analysis</li>
                <li>
                  <input
                  checked={selectedCategories.includes('Pollutants Analysis')}
                  onChange={() => handleCategoryChange('Pollutants Analysis')}
                  type="checkbox" /> Pollutants Analysis</li>
              </ul>
          </div>} 
          </div>

        {loading ?
        
          <div className="text-center w-full h-[60vh] lg:px-5 pl-2 lg:py-5 py-2 lg:my-0 my-2 rounded shadow-2xl flex items-center justify-center animate-pulse lg:text-6xl text-4xl">Loading...</div>
          :
          <Products tests={filteredTests} />}
            </div>
           
    </main>
  )
}

export default TestListing