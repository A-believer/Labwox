import heroEx from "../assets/heroEx.png"
import arrow from "../assets/arrow.png"
import Header from "../utils/Header"
import { Link } from "react-router-dom"
import Logoft from "../assets/Logoft.png"
import Logo from "../assets/Logo.png"
import heroImg from "../assets/heroImg.png"
import {FcGoogle} from "react-icons/fc"
import {GrApple} from "react-icons/gr"


const Login = () => {
  return (
    <main className="flex h-[100vh] w-full">
      <div className="bg-blackii lg:flex hidden flex-col w-1/2 py-[30px] px-[64px] pb-[100px]">
        <div>
          <Link to="/" className="mb-6"><img src={Logoft} alt="labwox-logo" className="w-[93px] h-[34px]" loading="lazy"/></Link>
          <Header text1={`Expanding`} text2={`Research`} text3={`Frontiers`} tColor={`white`}/>
        </div>

        <div className="mt-6">
          <img src={heroImg} alt="hero image" className="absolute min-w-[560px] h-[400px] object-contain -left-4" />

        {/* Test Result Sample */}
        <div className="bg-blackii border-b border-b-greyii rounded-[4px] font-aeon absolute left-5 top-[430px] hover:scale-105 active:scale-95 transition-all duration-300 ">
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
      </div>

      <form
        className="lg:w-1/2 w-full lg:h-screen h-full lg:pt-12 py-10 lg:px-20 px-10 flex flex-col ">
        <Link
          to="/">
          <img
            src={Logo}
            alt="labwox-logo"
            className="w-[93px] h-[34px] lg:hidden block " loading="lazy" />
        </Link>
        <p className="text-black lg:text-[27px] text-xl font-bold">Login to your Account</p>
        <p className="lg:text-base text-xs font-normal text-[#777] my-1">Get access to your account</p>

        <label 
          htmlFor="email"
          className="text-blackii text-base font-normal leading-tight flex flex-col gap-2 lg:my-4 mb-2 mt-5">
          <span>Email</span>
          <input
            name="email"
            type="email" 
            placeholder="enter your email..."
            className="rounded outline-none p-2  border border-grey"
            />
        </label>
        
        <label
          htmlFor="password"
          className="text-blackii text-base font-normal leading-tight flex flex-col gap-2 lg:my-4 my-2">
          <span>Password</span>
          <input
            name="password"
            type="password"
            placeholder="enter your password..."
            className="rounded outline-none p-2  border border-grey"
            />
        </label>

        <button className="bg-orange text-center text-white text-lg font-medium leading-snug p-2.5 rounded mt-4 mb-8">
          Login
        </button>

        <Link to="/forgotpassword" className="text-blackii underline">Forgot Password?</Link>
        <p className="mt-3 text-blackii">Don{`'`}t have an account? <Link to="/signup" className="text-orange">Sign Up</Link></p>

        <p className="flex items-center my-3">
          <hr className="w-full text-orange" />
          <span className="mx-2 font-fair italic">OR</span><hr className="w-full text-orange" />
        </p>

        <div className="w-full text-center flex flex-col items-center gap-2">
          <button className="flex items-center gap-4 p-[6px] border-[5px] border-greyiii rounded-full">
            <FcGoogle className="text-3xl"/>
            <span>Continue with Google</span>
          </button>
          <button className="flex items-center gap-4 p-[6px] border-[5px] border-greyiii rounded-full">
            <GrApple className="text-3xl"/>
            <span>Continue with Apple</span>
          </button>
        </div>
      </form>
    </main>
  )
}

export default Login