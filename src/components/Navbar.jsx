import { NavLink, Link, useNavigate} from "react-router-dom"
import Logo from "../assets/Logo.png"
import dropdown from "../assets/dropdownuserprofile.png"
import { navLinks } from "../data/data"
import cartIcon from "../assets/cartIcon.png"
import Button from "../utils/Button"
import menu from "../assets/menu.png"
import close from "../assets/close.png"
import {  useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { UserAuth } from "../context/AuthContext"
import CartModal from "./cartComponents/CartModal"
import { useSelector } from "react-redux"
import {HiOutlineUserCircle} from "react-icons/hi"
import { toast } from "react-toastify"

const Navbar = () => {
  const cartItems = useSelector(state => state.cart.items);
  const { currentUser, logout, loading } = UserAuth()
  const navigate = useNavigate()
  const [toggle, setToggle] = useState(false)
  const [cartToggle, setCartToggle] = useState(false)
  const cartRef = useRef(null);

  function handleCartToggle() {
    setCartToggle(prev => !prev)
  }

  const handleLogout = async (e) => {
    e.preventDefault()
    await logout()
    navigate("/")
    toast.dark("You're logged out!")
    setToggle((prev) => !prev)
  }

  const handleClickOutside = (e) => {
    if (cartRef.current && !cartRef.current.contains(e.target)) {
      setCartToggle(false);
    }
  };

   useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
   }, []);

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
        
      <header className={`drop-shadow-xl ${!currentUser ? "bg-whitebgiv lg:bg-white" : "bg-white"} sticky font-aeon z-[99]`}>
        <nav className="flex justify-between items-center lg:py-[24px] py-[12px] xl:pl-[70px] lg:pl-[30px] px-6 lg:pr-[30px] xl:pr-[45px]">
          
          <Link to="/">
            <img
              
              src={Logo}
              alt="labwox-logo"
              className="w-[93px] h-[34px]" loading="lazy" />
          </Link>
          
            
            {/* Desktop Navbar */}
            <ul className="flex justify-between items-center font-normal text-base leading-[19.2px] lg:gap-x-4 xl:gap-x-7 gap-x-0">
              {navLinks.map((link, i) => (
                <li key={i} className={`${location.hash === `#/${link.id}` ? "scale-105 text-orange underline underline-offset-4" : "text-blackii"} hover:text-orange hover:scale-105 transition-all ease-in-out duration-500 lg:block hidden `}>
                  <NavLink to={link.id}>{link.title}</NavLink>
                </li>
              ))}

               {/* Cart Icon */}
              <li
                onClick={handleCartToggle}
                className={`relative cursor-pointer items-center flex hover:scale-110 transition-all duration-500`}>
                <img src={cartIcon} alt="cartIcon" className="object-contain w-6 h-4" />
                <p className="absolute right-0 top-0 w-[9px] h-[9px] text-[7px] text-white leading-tight font-bold rounded-full flex items-center justify-center bg-orange">
                 {cartItems.length}
                </p>
              </li>
              {cartToggle &&
                <CartModal
                cartRef={cartRef}
                  closeModal={handleCartToggle}
                  />}

              {/* Login and Register */} 
              <li className="flex items-center relative lg:mx-0 mx-2">
                {(currentUser && loading) ?
                  <NavLink to='userprofile' className="flex items-center gap-1 w-full">
                    <HiOutlineUserCircle className="text-blackii/50 lg:w-6 lg:h-6 w-5 h-5" />
                    <p className={`lg:flex hidden decoration-orange ${location.pathname === "/userprofile" ? "underline underline-offset-4 text-black/80" : "text-greyiii"} `}>Welcome, {currentUser.displayName}</p>
                    <img src={dropdown} alt="dropdown" className="w-2 h-1 ml-1 lg:flex hidden" />
                  </NavLink>
              :
                  <div className="lg:flex hidden justify-between items-center gap-x-7">
                    <NavLink to="/login" className="lg:py-[10px] py-1.5 lg:px-[54px] px-[35px] lg:text-base text-xs  rounded-[4px] text-orange hover:scale-105 active:scale-95 transition-all duration-300 z-99 border border-orange">Login</NavLink>
                    <NavLink to="/signup" className="text-white"><Button text="Sign Up" bgColor="orange" width="width"/></NavLink>
                  </div>}
            </li>

              {/* Mobile NavMenu */}
              <li
                className="lg:hidden block">
              {/* Menu Icon */}
               <img src={toggle ? close : menu}
                   alt="menu"
                className={`${toggle ? "h-5 w-5" : "h-5 w-5"} object-contain lg:hidden block`}
                onClick={() => setToggle((prev) => !prev)} />

              {toggle && <motion.ul className="lg:hidden block absolute left-0 bg-whitebgiv top-[60px] w-full px-[24px]  z-50 border-b-2 border-t-2 border-orange rounded-b-xl rounded-t-xl"
              variants={container}
              initial="hidden"
              animate="show">
              { navLinks.map((link, i) => (
                <motion.li key={i} className={`${location.pathname === link.id ? "text-orange" : "text-blackii my-11"} hover:text-orange`}
                  variants={item}
                onClick={() => setToggle((prev) => !prev)}>
                  <NavLink to={link.id}>{link.title}</NavLink>
                </motion.li>
              ))}
                
                {currentUser ?
                  <motion.li className="flex my-5 text-orange w-full mx-auto text-center" variants={item}
                  onClick={handleLogout}>
                    <NavLink to="/logout" className="bg-white lg:py-[10px] py-1.5 lg:px-[54px] px-[] lg:text-base text-xs  rounded w-full hover:scale-105 active:scale-95 transition-all duration-300 z-99 border border-orange">Logout</NavLink>
                  </motion.li> :
                  
                  <div className="mr-5">
                  <motion.li className="flex my-5 text-orange w-full mx-auto text-center" variants={item}
                  onClick={() => setToggle((prev) => !prev)}>
                    <NavLink to="/login" className="bg-white lg:py-[10px] py-1.5 lg:px-[54px] px-[] lg:text-base text-xs  rounded w-full hover:scale-105 active:scale-95 transition-all duration-300 z-99 border border-orange">
                          Login
                    </NavLink>
                </motion.li>
                <motion.li className="text-white w-full my-5" variants={item}
                  onClick={() => setToggle((prev) => !prev)}>
                  <NavLink to="/signup">
                    <Button text="Sign Up" bgColor="orange" width="full" /></NavLink>
                </motion.li>
                </div>}
                
            </motion.ul>}
            </li>
              
            </ul>
        
        </nav>
      </header>
    
  )
}

export default Navbar