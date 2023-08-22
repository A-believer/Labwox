import { Link } from "react-router-dom"
import Header from "../utils/Header"
import heroEx from "../assets/heroEx.png"
import arrow from "../assets/arrow.png"
import Logoft from "../assets/Logoft.png"
import heroImg from "../assets/heroImg.png"


function UserHero() {
  return (
    <div className="bg-blackii lg:flex hidden flex-col w-1/2 py-[30px] px-[64px] pb-[450px] h-full">
        <div>
          <Link to="/" className="mb-6"><img src={Logoft} alt="labwox-logo" className="w-[93px] h-[34px]" loading="lazy"/></Link>
          <Header text1={`Expanding`} text2={`Research`} text3={`Frontiers`} tColor={`white`}/>
        </div>

        <div className="mt-6">
          <img src={heroImg} alt="hero image" className="absolute min-w-[560px] h-[400px] object-contain -left-4" />

        {/* Test Result Sample */}
        <div className="bg-blackii border-b border-b-greyii rounded-[4px] font-aeon relative right-8 top-[250px] w-fit hover:scale-105 active:scale-95 transition-all duration-300 pt-1">
          <div className="flex lg:ml-[17px] ml-[9.4px] gap-3 lg:mt-5 mt-5 ">
            <img src={heroEx} alt="heroEx" className="lg:w-[24px] w-[13px] lg:h-[24px] h-[13px]" loading="lazy"/>
            <p className="lg:text-base text-[9px] text-white leading-[19px]">Dr. Charles Okafor</p>
          </div>
          
          <hr className="lg:mr-[14px] mr-[7.7px] lg:ml-[17px] ml-[9.4px] lg:mt-[26px] mt-[14.34px] lg:mb-[15px] mb-[8.27px] text-[#e5e5e5] opacity-40 lg:w-[210px] w-[115.32px] lg:h-[1.147px] h-[0.632px]"/>
          <p className="text-white lg:text-base text-[8.853px] lg:ml-[17px] ml-[9.4px] lg:leading-[19px] leading-[12px]">Nutrional Analysis</p>
          <p className="text-greyii lg:text-[13.759px] text-[7.59px] lg:leading-[16.51px] leading-[9.11px] lg:ml-[17px] ml-[9.4px] font-thin tracking-wider">3 hours ago</p>
          <a href="#results" className="flex lg:ml-[17px] ml-[9.4px] lg:mt-[16px] mt-[8.82px] lg:mb-[33px] mb-[18.43px] lg:gap-x-[3px] gap-x-[1.65px] justify-start items-center">
            <p className="text-whiteii lg:text-[14px] text-[7.72px] lg:leading-[16.2px] leading-[9.27px]">View Results</p>
            <img src={arrow} alt="arrow" className="lg:w-[13px] w-[7.17px] h-auto" loading="lazy"/>
          </a>
        </div>
      </div>
      </div>
  )
}

export default UserHero