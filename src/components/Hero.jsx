/* eslint-disable no-unused-vars */
import Header from "../utils/Header"
import { useEffect, useRef, useState } from "react"
import heroImg from "../assets/heroImg.png"
import { collection, query, where, getDocs } from 'firebase/firestore'
import { db } from "../config/firebaseConfig"
import { Link } from "react-router-dom"
import { encryptId } from "../config/encrypt"

const Hero = () => {
  const [tests, setTests] = useState([])
  const [search, setSearch] = useState('');
  const [searchModal, setSearchModal] = useState(false)
  // const [emailToggle, setEmailToggle] = useState(false)
  const [results, setResults] = useState([]);
  const searchContainerRef = useRef(null);


  async function getTestList() {
    try {
      const testListRef = collection(db, "lists of tests")
      await getDocs(testListRef, {source: "cache"})
          .then((data) => {
              const newData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id
              })) 
            setTests(newData)
          })
    } catch (error) {
      console.error(error.message)
    }
  }

  useEffect(() => {
    getTestList()
  }, [])

   const handleClickOutside = (e) => {
    if (searchContainerRef.current && !searchContainerRef.current.contains(e.target)) {
      setSearchModal(false);
    }
  };

   useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
   }, []);
  

  const handleQuery = (e) => {
    e.preventDefault() 
    const filteredTest = tests.filter((item) =>
          item.testTitle.toLowerCase().split(" ").join("").includes(search.toLowerCase().split(" ").join("")) ||
          item.instruments.toLowerCase().split(" ").join("").includes(search.toLowerCase().split(" ").join("")))
      setResults(filteredTest)
     
    }
 
    const handleSearch = (e) => {
      let term = e.target.value
    
      setSearch(term)
      if (term === "" ) {
        setSearchModal(false)
      } else {
        const filteredTest = tests.filter((item) =>
          item.testTitle.toLowerCase().split(" ").join("").includes(term.toLowerCase().split(" ").join("")) ||
          item.instruments.toLowerCase().split(" ").join("").includes(term.toLowerCase().split(" ").join("")))
        setResults(filteredTest)
        setSearchModal(true)
      }
    }
  
  return (
       <>
      <div className="lg:my-0 my-10 relative z-[1]">
        <Header text1={`Expanding`} text2={`Research`} text3={`Frontiers`} tColor={`blackii`}/>
        <p
          // onClick={() => setEmailToggle(prev => !prev)}
          className="text-grey mt-4 max-w-[600px] w-full">Labwox provides cutting-edge solutions to support research and learning in the chemical sciences</p>
        <div className="text-white flex mt-4 lg:h-[52px] lg:w-5/6 w-full relative">
          <input
            value={search}
            onChange={handleSearch}
            type="text"
            placeholder="find research here"
            className="text-grey pl-4 placeholder:text-greyi text-greyi rounded-[4px] lg:text-[19px] text-[13px] lg:leading-[52px] leading-[36px] bg-clear mr-2 w-2/3 border border-greyi ring-0 active:border-greyi outline-none focus:border-orange" />
          <button
            onClick={handleQuery}
            type="button"
            className="font-aeon w-1/3 bg-orange lg:text-[18px] leading-[28px] text-[12px] rounded-[4px] p-[10px] hover:scale-105 active:scale-95 transition-all duration-300">Search</button>
          
        </div>

        {searchModal &&
          <div
            ref={searchContainerRef}
            className={`no-scrollbar absolute left-0 text-blackiii bg-white lg:w-[83%] w-full max-h-[500px] h-auto overflow-hidden overflow-y-scroll mt-1 p-4 rounded-lg border scroll-m-0 scroll-p-0 border-orange flex flex-col gap-y-5`}>
            {results?.map((test, index) => (
            <Link
                  key={index}
                to={`/testlisting/${encryptId(test.id)}`}
                className="italic text-lg"
                  >
                <div>
                  {test.testTitle}
                  <hr className="mt-1 bg-orange h-[2px] border-0"/>
                </div>
            </Link>
              ))}
        </div>}
        
      </div>

      <div className="relative my-4 lg:w-[520px] w-full lg:h-[500px] h-[300px] bg-center bg-contain bg-no-repeat flex-col justify-center items-center rounded-[8px] flex">
        
        <img src={heroImg} alt="hero image" className="w-full h-full object-contain"/>

      </div>
      {/* {emailToggle && <div
        onClick={sendEmail}
        className="absolute top-0 w-full h-[70vh] left-0 flex justify-center items-center">{<OrderSuccess />}</div>} */}

    </>
  )
}

export default Hero