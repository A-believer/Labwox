import Header from "../utils/Header"
import heroEx from "../assets/heroEx.png"
import arrow from "../assets/arrow.png"

const Hero = () => {
  return (
       <section className="lg:pt-[97px] pt-[40px] lg:pb-[30px] pb-[20px] lg:pl-[60px] pl-[24px] lg:pr-[45px] pr-6 lg:flex md:flex-row flex-col bg-heroBg bg-contain bg-no-repeat rounded-[4px] justify-between">
      <div className="lg:pr-[30px] pr-0 mt-[37px]">
        <div><Header text1={`Powering`} text2={`Research`} text3={`Capabilities in Africa`} f1={`64px`} f2={`36px`} tColor={`blackii`}/></div>
        <p className="text-grey mt-[23px] lg:w-[89%] w-full">Labwox provides cutting-edge solutions to support research and learning in the chemical sciences</p>
        <form className="text-white flex mt-[38px] lg:h-[52px] h-[35.5px] lg:w-5/6 w-full">
          <input type="text" placeholder="find research here" className="text-grey pl-[17px] placeholder:text-grey rounded-[4px] lg:text-[19px] text-[13px]  lg:leading-[20px] leading-[15px] bg-clear mr-2 w-2/3"/>
          <button type="submit" className="w-1/3 bg-orange lg:text-[18px] lg:leading-[32px] text-[12px] leading-[18px]  rounded-[4px] lg:p-[10px]">Search</button>
        </form>
      </div>
      <div className="bg-heroImg lg:w-[1000px] w-full lg:mt-0 mt-9 lg:h-screen h-[400px] bg-center bg-contain bg-no-repeat flex flex-col justify-center items-center rounded-[8px]">
        {/* Hero Play Button */}
        <p className="w-[171px] h-[171px] rounded-full bg-white lg:flex hidden items-center justify-center justify-self-center relative top-[35px]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[87.87px] h-[87.87px] text-[#444444]">
           <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
         </svg>
        </p>

        {/* Test Result Sample */}
        <div className="bg-blackii rounded-[4px] font-aeon relative lg:right-[240px] right-[122px] lg:top-[68px] top-[108px]">
          <div className="flex lg:ml-[17px] ml-[9.4px] gap-3 lg:mt-[36px] mt-[20px] ">
            <img src={heroEx} alt="heroEx" className="lg:w-[24px] w-[13px] lg:h-[24px] h-[13px]" />
            <p className="lg:text-base text-[9px] text-white leading-[19px]">Dr. Charles Okafor</p>
          </div>
          
          <hr className="lg:mr-[14px] mr-[7.7px] lg:ml-[17px] ml-[9.4px] lg:mt-[26px] mt-[14.34px] lg:mb-[15px] mb-[8.27px] text-[#e5e5e5] opacity-40 lg:w-[210px] w-[115.32px] lg:h-[1.147px] h-[0.632px]"/>
          <p className="text-white lg:text-base text-[8.853px] lg:ml-[17px] ml-[9.4px] lg:leading-[19px] leading-[12px]">Nutrional Analysis</p>
          <p className="text-greyii lg:text-[13.759px] text-[7.59px] lg:leading-[16.51px] leading-[9.11px] lg:ml-[17px] ml-[9.4px] font-thin tracking-wider">3 hours ago</p>
          <a href="#results" className="flex lg:ml-[17px] ml-[9.4px] lg:mt-[16px] mt-[8.82px] lg:mb-[33px] mb-[18.43px] lg:gap-x-[3px] gap-x-[1.65px] justify-start items-center">
            <p className="text-whiteii lg:text-[14px] text-[7.72px] lg:leading-[16.2px] leading-[9.27px]">View Results</p>
            <img src={arrow} alt="arrow" className="lg:w-[13px] w-[7.17px] h-auto"/>
          </a>
          
        </div>
      </div>
    </section>
  )
}

export default Hero