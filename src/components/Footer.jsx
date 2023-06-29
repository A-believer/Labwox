import footerLogo from "../assets/Logoft.png"
import { Link, Outlet, useLocation } from "react-router-dom"
import arrow from "../assets/arrow.png"


const Footer = () => {

  const location = useLocation()
  return (
    <footer className={`font-aeon lg:px-[70px] px-[24px] lg:pt-[70px] pt-[24px] lg:pb-[70px] pb-[24px] bg-black flex flex-col ${(location.pathname === "/login" || location.pathname === "/register" || location.pathname === "/forgotpassword") ? "hidden": "block"}`}>
      
      {/* Logo */}
      <div className="w-[93px] h-[34px]">
        <img src={footerLogo} alt="footer-logo w-full h-full" loading="lazy"/>
      </div>

      <div className="lg:grid grid-cols-1 lg:grid-cols-3 lg:gap-x-[100px]">
        
      {/* First footer section */}
        <div className="w-full">
          
        {/* Header */}
            <h1 className=" font-aeon lg:text-[36px] text-[24px] lg:leading-[43.2px] leading-[28.8px] font-bold text-white lg:w-full w-3/4 lg:mb-[33px] mb-[45px] lg:mt-[22px] mt-[24px] lg:pr-[10px] pr-0">Powering <span className="text-orange italic font-fair font">Research</span> Capabilities in Africa</h1>
          
          {/* Address   */}
          <div className="text-white/50 lg:text-base text-sm leading-[24px] font-normal gap-y-4">
            <p className="font-light ">© Labworks Limited, all rights reserved. <br />
              Company number: 08433320 <br />
              Registered office: 2B Awori Close, Akora Villas off <br />
              Adeniyi Jones, Ikeja, Lagos</p>
            <p className="font-thin opacity-75">
              <span className="underline underline-offset-[6px] hover:decoration-double ease-linear duration-1000"><a href="#privacy">Privacy Policy</a></span>
              <span className="mx-4">|</span>
              <span className="underline underline-offset-[6px] hover:decoration-double ease-linear duration-1000"><a href="#terms">Terms and Conditions</a></span>
            </p>
          </div>
        </div>

        
        <div className="flex lg:flex-row flex-col gap-x-[30px] gap-y-[60px] w-full justify-between mt-[100px] lg:mt-0">
            {/* Second Footer Section */}
          <div className="">
            <p className="text-white lg:text-[24px] font-bold lg:leading-[28.8px] mb-[20px]">Company</p>
            <ul className="text-white/50 leading-[40px] lg:text-[18px] text-[14px] w-fit">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><a href="#terms">Terms & Conditions</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><Link to="/resources">Resources</Link></li>
            </ul>
          </div>

          {/* Third Section */}
          <div>
            <p className="text-white lg:text-[24px] font-bold lg:leading-[28.8px] mb-[20px]">Contact Us</p>
            <ul className="text-white/50 leading-[40px] lg:text-[18px] text-[14px]">
              <li className="underline decoration-white/50 underline-offset-4"><a href="#mail">info@labwox.com</a></li>
              <li>(+234)8090870364</li>
              <li>(+234)8090870364</li>
            </ul>
          </div>
        </div>
        

        {/* Fourth Section */}
        <div className="lg:mt-0 mt-[70px]">
          <p className="text-white lg:text-[24px] font-medium lg:leading-[28.8px] mb-[20px] w-fit">Sign up for insights</p>
          
          <ul className="text-white/50 leading-[40px] lg:text-[18px] text-[14px] w-full">
            
              <li className="leading-[27px] pr-[10px]">Join our mailing list to get the inside
                track on Labworks
            </li>
            <li>
              <form action="" method="post" className=" flex mt-[20px] mb-[30px] cursor-pointer">
                <input placeholder="enter your email" type="email" name="email" id="email" className="bg-clear border-b active:border-b ring-0 active:ring:-0 focus:ring-0 outline-none active:outline-none focus:outline-none text-white/50  active:bg-clear" />
                <button type="button" className="flex items-center gap-2 border border-b-1 border-b-white/50 border-t-0 border-l-0 border-r-0">
                  <span>Join</span>
                  <img src={arrow} alt="arrow" className="w-[16px] h-[16px]" loading="lazy"/>
                </button>
                 
                </form>
            </li>
              <li><a href="#facebook">Facebook</a></li>
              <li><a href="#instagram">Instagram</a></li>
              <li><a href="#linkedin">LinkedIn</a></li>

          </ul>
            
        </div>
      </div>
      <Outlet/>
    </footer>
  )
}

export default Footer