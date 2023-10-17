import Header from "../utils/Header"
import onboardingImg from "../assets/onBoardingImg.png"

const Onboarding = () => {
  return (
    <div className="bg-white lg:pl-[75px] lg:pt-[20px] lg:pr-[72px] lg:pb-[90px] px-[26px]">
      
      <div className="lg:text-left text-center lg:px-0 px-[10px]">
        <Header text1={`Your journey to `} text2={`quality research`} text3={`in 4 steps`} />
        <p className="lg:px-0 px-[10px] lg:text-base text-sm lg:leading-5 leading-4 font-normal py-[18px] lg:w-[50%] w-full text-grey" >Labwox provides cutting-edge solutions to support research and learning in the chemical sciences</p>
      </div>
      
      <div className="flex lg:flex-row flex-col justify-between items-stretch lg:mt-[28px] ">
        <ul className="pt-[28px] flex flex-col items-stretch justify-evenly">
          <li>
            <p className="hover:font-bold hover:text-black font-semibold text-grey lg:text-2xl text-xl lg:leading-7 leading-6 pt-4 transition-all duration-500">1. Create an account by signing up</p>
           
          </li>
          <li>
            <p className="hover:font-bold hover:text-black font-semibold text-grey lg:text-2xl text-xl lg:leading-7 leading-6 pt-4 transition-all duration-500">2. Add test of your choice to cart</p>
            
          </li>
          <li>
            <p className="hover:font-bold hover:text-black font-semibold text-grey lg:text-2xl text-xl lg:leading-7 leading-6 pt-4 transition-all duration-500">3. Provide sample information</p>
            
          </li>
          <li>
            <p className="hover:font-bold hover:text-black font-semibold text-grey lg:text-2xl text-xl lg:leading-7 leading-6 pt-4 transition-all duration-500">4. Make payments online</p>
            
          </li>
        </ul>

        <div className="bg-whitebgiii lg:px-[32px] px-[23px] lg:pt-[37px] pt-[27px] lg:pb-[63px] pb-[45px] lg:mt-0 mt-[40px] lg:mb-0 mb-[30px] hidden lg:block">
          <img src={onboardingImg} alt="" className="lg:w-[461px] w-[333px] lg:h-[441px] h-[319px] object-contain" loading="lazy"/>
        </div>
      </div>
      
    </div>
  )
}

export default Onboarding