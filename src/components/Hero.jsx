import Button from "../utils/Button"
import Header from "../utils/Header"
import heroEx from "../assets/heroEx.png"
import arrow from "../assets/arrow.png"

const Hero = () => {
  return (
    <section className="lg:pt-[90px]  pt-[40px] lg:pb-[30px] pb-[20px] lg:pl-[60px] pl-[24px] lg:pr-[45px] pr-[30px] lg:flex md:flex-row flex-col bg-heroBg bg-contain bg-no-repeat rounded-[4px]">
      <div className="pr-[30px] pt-[45px]">
        <p><Header text1="Powering" text2="Research" text3="Capabilities in Africa"/></p>
        <p className=" text-grey my-[23px] w-[89%]">Labwox provides cutting-edge solutions to support research and learning in the chemical sciences</p>
        <form className="text-white flex mt-[20px] h-[52px] w-full">
          <input type="text" placeholder="find research here" className="pl-5 placeholder:text-grey rounded-[4px] text-[16px] leading-[19px] bg-clear mr-2 w-3/5"/>
          <Button text="Search" bgColor="orange" width="3/4"/>
        </form>
      </div>
      <div className="bg-heroImg w-[1000px] h-[580px] bg-cover bg-no-repeat flex flex-col justify-center items-center rounded-[8px]">
        {/* Hero Play Button */}
        <p className="w-[171px] h-[171px] rounded-full bg-white flex items-center justify-center justify-self-center relative top-[70px]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[87.87px] h-[87.87px] text-[#444444]">
           <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
         </svg>
        </p>

        {/* Test Result Sample */}
        <div className="bg-blackii rounded-[4px] font-aeon relative right-[235px] top-[70px]">
          <div className="flex mx-[14px] gap-3 mt-[26px] ">
            <img src={heroEx} alt="heroEx" className="w-[24px] h-[24px]" />
            <p className="text-base text-white leading-[19px]"> Dr. Charles Okarfor</p>
          </div>
          
          <hr className="mx-[14px] mt-[26px] mb-[10px] text-[#e5e5e5] opacity-40 w-[210px] h-1"/>
          <p className="text-white text-base mx-[14px] mt-[15px] leading-[19px]">Nutrional Analysis</p>
          <p className="text-greyii text-base mx-[14px] font-thin tracking-wider leading-[19px]">3 hours ago</p>
          <div className="flex mx-[14px] mt-[16px] mb-[40px] gap-x-1 justify-start items-center">
            <p className="text-whiteii text-base leading-[19px]">View Results</p>
            <img src={arrow} alt="arrow" className="w-[13px] h-full"/>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Hero