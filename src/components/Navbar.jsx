import { Link, Outlet, useLocation } from "react-router-dom"
import Logo from "../assets/Logo.png"
import { navLinks } from "../data/data"
import cartIcon from "../assets/cartIcon.png"
import Button from "../utils/Button"
import menu from "../assets/menu.png"
import close from "../assets/close.png"
import { useState } from "react"

const Navbar = () => {
 const [toggle, setToggle] = useState(false)
  const location = useLocation()

  return (
    <>
      <header className={`bg-whitebgiv lg:bg-white font-aeon ${(location.pathname === "/login" || location.pathname === "/register" || location.pathname === "/forgotpassword") ? "hidden": "block"}`}>
        <nav className="flex justify-between items-center lg:py-[24px] py-[16px] lg:pl-[60px] pl-[24px] lg:pr-[45px] pr-[30px]">
          
          <Link to="/"><img src={Logo} alt="labwox-logo" className="w-[93px] h-[34px]" /></Link>
          
          <div className="flex font-normal text-base leading-[19.2px] gap-x-7">
            
            {/* Desktop Navbar */}
            <ul className="lg:flex hidden justify-between items-center gap-x-7">
              {navLinks.map((link, i) => (
                <li key={i} className={`${location.pathname === link.id ? "text-orange" : "text-blackii"} hover:text-orange`}>
                  <Link to={link.id}>{link.title}</Link>
                </li>
              ))}
            </ul>
           
            {/* Cart Icon */}
            <div className={`items-center ${toggle ? "hidden": "flex"}`}>
              <div className="flex hover:scale-110">
                <img src={cartIcon} alt="cartIcon" className="object-contain w-[19.93px] h-[20px]" />
                <p className="relative right-2 w-[11px] h-[11px] text-[7px] text-white leading-tight font-bold rounded-full flex items-center justify-center cursor-pointer bg-orange">3</p>
              </div>
                <p className="-ml-[6px]">Cart</p>
            </div>

            {/* Login and Register */}
            <div className="lg:flex hidden justify-between items-center gap-x-7">
              <Link to="/login" className="">Login</Link>
              <Link to="/register" className="text-white"><Button text="Register" bgColor="orange" /></Link>
            </div>

            {/* Mobile NavMenu */}
            <div className="lg:hidden block transition-all duration-700">
              {/* Menu Icon */}
               <img src={toggle ? close : menu}
                   alt="menu"
                className={`${toggle ? "h-[12.73px] w-[12.73px]" : "h-[16.67px] w-[24px]"} object-contain lg:hidden block absolute right-[20px] mb-1`}
                onClick={() => setToggle((prev) => !prev)} />

              {toggle && <ul className="lg:hidden block absolute left-0 bg-whitebgiv top-[66px] w-full pl-[24px]">
              { navLinks.map((link, i) => (
                <li key={i} className={`${location.pathname === link.id ? "text-orange" : "text-blackii my-[45px]"} hover:text-orange`}>
                  <Link to={link.id}>{link.title}</Link>
                </li>
              ))}
                <li className="my-[45px]"><Link to="./login">Login</Link></li>
                <li className="text-white w-full pr-[24px]"><Link to="./register"><Button text="Register" bgColor="orange" /></Link></li>
            </ul>}
            </div>
          </div>
        </nav>
         <Outlet />
      </header>
    </>
  )
}

export default Navbar