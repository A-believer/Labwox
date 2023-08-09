import { Link, NavLink, useLocation, useNavigate } from "react-router-dom"
import avatar from "../../assets/avatar.png"
import { UserAuth } from "../../context/AuthContext"
import profile from "../../assets/profile.png"
import orders from "../../assets/orders.png"
import settings from "../../assets/settings.png"
import logoutbtn from "../../assets/logout.png"
import { useState } from "react"
import {RiArrowDropDownLine} from "react-icons/ri"

function UserProfileMenu() {
  const location = useLocation()
  const { userData, logout, } = UserAuth()
  const [toggle, setToggle] = useState(false)

  function handleToggle() {
    setToggle(prev => !prev)
  }

  const navigate = useNavigate()
    const handleLogout = async (e) => {
    e.preventDefault()
    try {
      await logout()
      navigate("/")
    } catch (err) {
      console.error(err.message)
    }
  }

  return (
    <div className={`bg-white w-full`}>
      <div className="bg-blackii">
        <div className="bg-profileBg flex items-center gap-2 lg:py-[34px] py-5 pl-4 pr-0">
          <img src={avatar} alt="" className="h-11 w-11"/>
          <p className="text-white text-xl font-bold">
            {userData.lastName} {userData.firstName}
          </p>
          <RiArrowDropDownLine onClick={handleToggle} className="text-white text-4xl lg:hidden block"/>
        </div>
      </div>
      
      {/* Desktop View  */}
      <nav className={`lg:pt-10 pt-6 lg:flex hidden flex-col text-black text-base font-normal`}>
        <NavLink
          end 
          to={`.`}
          className={`py-5 pl-8 mr-8 flex gap-x-5 items-center ${location.pathname === "/userprofile" ? "bg-[#EFEDED]" : null}`}>
            <img src={profile} alt="profile" className="w-6 h-6"/>
            <span>Profile</span>
        </NavLink>
        <hr className="mx-8 my-0 text-[#E5E5E5]"/>
        <NavLink
          to="orders"
          className={`py-5 pl-8 mr-8 flex gap-x-5 items-center ${location.pathname === "/userprofile/orders" ? "bg-[#EFEDED]" : null}`}>
          <img src={orders} alt="profile" className="w-6 h-6"/>
          <span>Orders</span>
        </NavLink>
        <hr className="mx-8 my-0 text-[#E5E5E5]"/>
        <NavLink
          to="settings"
          className={`py-5 pl-8 mr-8 flex gap-x-5 items-center ${location.pathname === "/userprofile/settings" ? "bg-[#EFEDED]" : null}`}>
          <img src={settings} alt="profile" className="w-6 h-6"/>
          <span>Settings</span>
        </NavLink>
        <hr className="mx-8 my-0 text-[#E5E5E5]"/>
        <Link onClick={handleLogout} to="logout" className={`py-5 pl-8 mr-8 flex gap-x-5 items-center`}>
            <img src={logoutbtn} alt="profile" className="w-6 h-6"/>
            <span>Logout</span>
        </Link>
        <hr className="mx-8 my-0 text-[#E5E5E5] mb-8 lg:mb-10 "/>
      </nav>
      
      {/* Mobile View */}
      <nav className={`lg:pt-10 pt-6 flex-col text-black text-base font-normal ${toggle ? "flex lg:hidden" : "hidden"}`}>
        <NavLink
          end 
          to={`.`}
          className={`py-5 pl-8 mr-8 flex gap-x-5 items-center ${location.pathname === "/userprofile" ? "bg-[#EFEDED]" : null}`}>
            <img src={profile} alt="profile" className="w-6 h-6"/>
            <span>Profile</span>
        </NavLink>
        <hr className="mx-8 my-0 text-[#E5E5E5]"/>
        <NavLink
          to="orders"
          className={`py-5 pl-8 mr-8 flex gap-x-5 items-center ${location.pathname === "/userprofile/orders" ? "bg-[#EFEDED]" : null}`}>
          <img src={orders} alt="profile" className="w-6 h-6"/>
          <span>Orders</span>
        </NavLink>
        <hr className="mx-8 my-0 text-[#E5E5E5]"/>
        <NavLink
          to="settings"
          className={`py-5 pl-8 mr-8 flex gap-x-5 items-center ${location.pathname === "/userprofile/settings" ? "bg-[#EFEDED]" : null}`}>
          <img src={settings} alt="profile" className="w-6 h-6"/>
          <span>Settings</span>
        </NavLink>
        <hr className="mx-8 my-0 text-[#E5E5E5]"/>
        <Link onClick={handleLogout} to="logout" className={`py-5 pl-8 mr-8 flex gap-x-5 items-center`}>
            <img src={logoutbtn} alt="profile" className="w-6 h-6"/>
            <span>Logout</span>
        </Link>
        <hr className="mx-8 my-0 text-[#E5E5E5] mb-8 lg:mb-10 "/>
      </nav>
    </div>
  )
}

export default UserProfileMenu