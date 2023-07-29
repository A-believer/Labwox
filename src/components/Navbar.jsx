import { Link, Outlet, useLocation } from "react-router-dom"
import Logo from "../assets/Logo.png"
import { navLinks } from "../data/data"
import cartIcon from "../assets/cartIcon.png"
import Button from "../utils/Button"
import menu from "../assets/menu.png"
import close from "../assets/close.png"
import { useState } from "react"
import { motion } from "framer-motion"

const Navbar = () => {
 const [toggle, setToggle] = useState(false)
  const location = useLocation()

  const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5
    }
  }
}

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}

  return (
    <>
      <header className={`bg-whitebgiv lg:bg-white font-aeon ${(location.pathname === "/login" || location.pathname === "signup" || location.pathname === "/forgotpassword") ? "hidden": "block"}`}>
        <nav className="flex justify-between items-center lg:py-[24px] py-[12px] lg:pl-[70px] pl-[24px] lg:pr-[45px] pr-[24px]">
          
          <Link to="/"><img src={Logo} alt="labwox-logo" className="w-[93px] h-[34px]" loading="lazy"/></Link>
          
          <div className="flex font-normal text-base leading-[19.2px] gap-x-7">
            
            {/* Desktop Navbar */}
            <ul className="lg:flex hidden justify-between items-center gap-x-7">
              {navLinks.map((link, i) => (
                <li key={i} className={`${location.pathname === link.id ? "text-orange" : "text-blackii"} hover:text-orange hover:scale-105 transition-all duration-500`}>
                  <Link to={link.id}>{link.title}</Link>
                </li>
              ))}
            </ul>
           
            {/* Cart Icon */}
            <div className={`items-center ${toggle ? "hidden": "flex"}`}>
              <div className="flex hover:scale-110 transition-all duration-500">
                <img src={cartIcon} alt="cartIcon" className="object-contain w-[19.93px] h-[20px]" />
                <p className="relative right-2 w-[11px] h-[11px] text-[7px] text-white leading-tight font-bold rounded-full flex items-center justify-center cursor-pointer bg-orange">3</p>
              </div>
            </div>

            {/* Login and Register */}
            <div className="lg:flex hidden justify-between items-center gap-x-7">
              <Link to="/login" className="hover:text-orange hover:scale-105 transition-all duration-500">Login</Link>
              <Link to="/signup" className="text-white"><Button text="Sign Up" bgColor="orange" width="width"/></Link>
            </div>

            {/* Mobile NavMenu */}
            <div className="lg:hidden block">
              {/* Menu Icon */}
               <img src={toggle ? close : menu}
                   alt="menu"
                className={`${toggle ? "h-4 w-4" : "h-4 w-6"} object-contain lg:hidden block absolute right-[20px] mb-8`}
                onClick={() => setToggle((prev) => !prev)} />

              {toggle && <motion.ul className="lg:hidden block absolute left-0 bg-whitebgiv top-[66px] w-full pl-[24px] z-50"
              variants={container}
    initial="hidden"
    animate="show">
              { navLinks.map((link, i) => (
                <motion.li key={i} className={`${location.pathname === link.id ? "text-orange" : "text-blackii my-[45px]"} hover:text-orange`}
                  variants={item}
                onClick={() => setToggle((prev) => !prev)}>
                  <Link to={link.id}>{link.title}</Link>
                </motion.li>
              ))}
                <motion.li className="my-[45px]" variants={item}
                onClick={() => setToggle((prev) => !prev)}><Link to="./login">Login</Link></motion.li>
                <motion.li className="text-white w-full pr-[24px] mt-[70px] mb-[54px]" variants={item}
                onClick={() => setToggle((prev) => !prev)}><Link to="./signup"><Button text="Register" bgColor="orange" width="full" /></Link></motion.li>
            </motion.ul>}
            </div>
          </div>
        </nav>
         <Outlet />
      </header>
    </>
  )
}

export default Navbar