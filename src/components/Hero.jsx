import Header from "../utils/Header"
import heroEx from "../assets/heroEx.png"
import arrow from "../assets/arrow.png"
import { useState } from "react"
import heroImg from "../assets/imgI.jpeg"

const Hero = () => {

  const [search, setSearch] = useState("")

  function handleChange(event) {
    event.preventDefault()
    setSearch(event.target.value)
  }

  function handleSearch() {
    console.log(search)
  }
  return (
       <section className="py-2 lg:px-[60px] px-6  lg:flex md:flex-row flex-col bg-heroBg bg-contain bg-no-repeat rounded-[4px] justify-between items-center">
      <div className="lg:my-0 my-10">
        <Header text1={`Expanding`} text2={`Research`} text3={`Frontiers`} tColor={`blackii`}/>
        <p className="text-grey mt-4 lg:w-[89%] w-full">Labwox provides cutting-edge solutions to support research and learning in the chemical sciences</p>
        <div className="text-white flex mt-4 lg:h-[52px] lg:w-5/6 w-full">
          <input
            value={search}
            onChange={handleChange}
            type="text"
            placeholder="find research here"
            className="text-grey pl-4 placeholder:text-grey rounded-[4px] lg:text-[19px] text-[13px]  lg:leading-[52px] leading-[36px] bg-clear mr-2 w-2/3 border border-grey focus:border-grey ring-0 active:border-grey outline-none" />
          <button
            onClick={handleSearch}
            type="button"
            className="font-aeon w-1/3 bg-orange lg:text-[18px] leading-[28px] text-[12px] rounded-[4px] p-[10px] hover:scale-105 active:scale-95 transition-all duration-300">Search</button>
        </div>
      </div>

      <div className="relative my-4 lg:w-[800px] w-full lg:h-[460px] h-[300px] bg-center bg-contain bg-no-repeat flex-col justify-center items-center rounded-[8px] lg:flex hidden">
        
        <img src={heroImg} alt="hero image" className="lg:h-[425px] sm:h-[280px] lg:w-[550px] sm:w-[270px] absolute object-contain"/>

        {/* Test Result Sample */}
        <div className="bg-blackii rounded-[4px] font-aeon absolute bottom-0 left-0 hover:scale-105 active:scale-95 transition-all duration-300">
          <div className="flex lg:ml-[12px] ml-[8px] lg:gap-3 gap-2 lg:mt-[16px] mt-[8px] items-center">
            <img src={heroEx} alt="heroEx" className="lg:w-[24px] w-[13px] lg:h-[24px] h-[13px]" loading="lazy"/>
            <p className="lg:text-base text-[9px] text-white leading-[19px]">Dr. Charles Okafor</p>
          </div>
          
          <hr className="lg:mx-[12px] mx-[8px] lg:my-[16px] my-[8px] text-[#e5e5e5] opacity-40 lg:w-[180px] w-[100px] lg:h-[1.3px] h-[1px]"/>
          <p className="text-white lg:text-base text-[8.853px] lg:ml-[17px] ml-[9.4px] lg:leading-[19px] leading-[12px]">Nutrional Analysis</p>
          <p className="text-greyii lg:text-[13.759px] text-[7.59px] lg:leading-[16.51px] leading-[9.11px] lg:ml-[17px] ml-[9.4px] font-thin tracking-wider">3 hours ago</p>
          <a href="#results" className="flex lg:ml-[17px] ml-[9.4px] lg:mt-[16px] mt-[8.82px] lg:mb-[33px] mb-[18.43px] lg:gap-x-[3px] gap-x-[1.65px] justify-start items-center">
            <p className="text-whiteii lg:text-[14px] text-[7px] lg:leading-[16px] leading-[8px] flex items-center gap-1">
              <span>View Results</span>
              <img src={arrow} alt="arrow" className="lg:w-[12px] w-[5px] h-auto" loading="lazy"/>
            </p>
            
          </a>
          
        </div>
      </div>
    </section>
  )
}

export default Hero