import Header from "../utils/Header"
import heroEx from "../assets/heroEx.png"
import arrow from "../assets/arrow.png"

const Hero = () => {
  return (
       <section className="py-2 lg:px-[60px] px-6  lg:flex md:flex-row flex-col bg-heroBg bg-contain bg-no-repeat rounded-[4px] justify-between items-center">
      <div className="mt-6">
        <Header text1={`Expanding`} text2={`Research`} text3={`Frontiers`} tColor={`blackii`}/>
        <p className="text-grey mt-4 lg:w-[89%] w-full">Labwox provides cutting-edge solutions to support research and learning in the chemical sciences</p>
        <div className="text-white flex mt-4 lg:h-[52px] lg:w-5/6 w-full">
          <input type="text" placeholder="find research here" className="text-grey pl-4 placeholder:text-grey rounded-[4px] lg:text-[19px] text-[13px]  lg:leading-[52px] leading-[36px] bg-clear mr-2 w-2/3 border border-grey focus:border-grey ring-0 active:border-grey outline-none"/>
          <button type="submit" className="font-aeon w-1/3 bg-orange lg:text-[18px] lg:leading-[52px] leading-[36px] text-[12px] rounded-[4px] lg:p-[10px] hover:scale-105 active:scale-95 transition-all duration-300">Search</button>
        </div>
      </div>

      <div className="bg-heroImg my-4  lg:h-[460px] h-[300px] bg-center bg-contain bg-no-repeat flex flex-col justify-center items-center rounded-[8px]">
        {/* Hero Play Button */}
        <p className="w-[171px] h-[171px] rounded-full bg-white lg:flex hidden items-center justify-center justify-self-center relative top-[35px]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[87.87px] h-[87.87px] text-[#444444]">
           <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
         </svg>
        </p>

        {/* Test Result Sample */}
        <div className="bg-blackii rounded-[4px] font-aeon relative lg:right-[200px] right-[90px] lg:top-[50px] top-[80px] hover:scale-105 active:scale-95 transition-all duration-300 ">
          <div className="flex lg:ml-[17px] ml-[9.4px] gap-3 lg:mt-[36px] mt-[20px] ">
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
    </section>
  )
}

export default Hero