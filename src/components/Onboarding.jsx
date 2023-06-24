import Header from "../utils/Header"
import onboardingImg from "../assets/onBoardingImg.png"

const Onboarding = () => {
  return (
    <div className="bg-white lg:pl-[75px] lg:pt-[50px] lg:pr-[72px] lg:pb-[90px] px-[26px]">
      
      <div className="lg:text-left text-center lg:px-0 px-10">
        <Header text1={`Get Started in 4`} text2={`Simple Steps`} />
        <p className="lg:px-0 px-[30px] lg:text-base text-sm lg:leading-5 leading-4 font-normal py-[24px] lg:w-[50%] w-full text-grey" >Labwox provides cutting-edge solutions to support research and learning in the chemical sciences</p>
      </div>
      
      <div className="flex lg:flex-row flex-col justify-between lg:mt-[28px] ">
        <ul className="pt-[28px]">
          <li>
            <p className="font-bold lg:text-2xl text-xl lg:leading-7 leading-6">Register and Create Account</p>
            <p className="lg:text-base text-sm lg:leading-5 leading-4 font-normal py-[20px] lg:w-[90%] w-full text-grey">Labwox provides cutting-edge solutions to support research and learning in the chemical sciences</p>
          </li>
          <li>
            <p className="font-semibold text-grey lg:text-2xl text-xl lg:leading-7 leading-6 pt-4">Choose The Test/ Research</p>
            <p className="lg:text-base text-sm lg:leading-5 leading-4 font-normal py-[20px] lg:w-[90%] w-full text-grey">Labwox provides cutting-edge solutions to support research and learning in the chemical sciences</p>
          </li>
          <li>
            <p className="font-semibold text-grey lg:text-2xl text-xl lg:leading-7 leading-6 pt-4">Analyis of the Results</p>
            <p className="lg:text-base text-sm lg:leading-5 leading-4 font-normal py-[20px] lg:w-[90%] w-full text-grey">Labwox provides cutting-edge solutions to support research and learning in the chemical sciences</p>
          </li>
          <li>
            <p className="font-semibold text-grey lg:text-2xl text-xl lg:leading-7 leading-6 pt-4">Get Recommendations</p>
            <p className="lg:text-base text-sm lg:leading-5 leading-4 font-normal py-[20px] lg:w-[90%] w-full text-grey">Labwox provides cutting-edge solutions to support research and learning in the chemical sciences</p>
          </li>
        </ul>

        <div className="bg-whitebgiii lg:px-[32px] px-[23px] lg:pt-[37px] pt-[27px] lg:pb-[63px] pb-[45px] lg:mt-0 mt-[40px] lg:mb-0 mb-[30px]">
          <img src={onboardingImg} alt="" className="lg:w-[461px] w-[333px] lg:h-[441px] h-[319px] object-contain"/>
        </div>
      </div>
      
    </div>
  )
}

export default Onboarding