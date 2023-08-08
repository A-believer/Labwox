import { Link, NavLink, useNavigate } from "react-router-dom"
import avatar from "../../assets/avatar.png"
import { UserAuth } from "../../context/AuthContext"
import profile from "../../assets/profile.png"
import orders from "../../assets/orders.png"
import settings from "../../assets/settings.png"
import logoutbtn from "../../assets/logout.png"

function UserProfileMenu() {
    const { userData, user, logout, } = UserAuth()

  const navigate = useNavigate()
    const handleLogout = async (e) => {
    e.preventDefault()
    try {
      await logout()
      navigate("/")
    } catch (err) {
      console.error(err.message)
    }  }
   return (
       <div className="bg-white">
           <div className="bg-blackii">
               <div className="bg-profileBg flex items-center gap-2 py-[34px] pl-8 pr-40">
                <img src={avatar} alt="" className="h-11 w-11"/>
               <p className="text-white">{userData.lastName} {userData.firstName}</p>
          </div>
           </div>
          
          <nav className="px-8 pt-10 flex flex-col gap-y-[20px] text-black text-base font-normal">
               <NavLink end to={`.`} className="pb-5 pt-2 pl-2 border-b-2 border-b-[#e5e5e5] flex gap-x-5 items-center">
                   <img src={profile} alt="profile" className="w-6 h-6"/>
                   <span>Profile</span>
               </NavLink>
               <NavLink to="orders" className="pb-5 pt-2 pl-2 border-b-2 border-b-[#e5e5e5] flex gap-x-5 items-center">
                   <img src={orders} alt="profile" className="w-6 h-6"/>
                   <span>Orders</span>
               </NavLink>
               <NavLink to="settings" className="pb-5 pt-2 pl-2 border-b-2 border-b-[#e5e5e5] flex gap-x-5 items-center">
                   <img src={settings} alt="profile" className="w-6 h-6"/>
                   <span>Settings</span>
               </NavLink>
               <Link onClick={handleLogout} to="logout" className="pb-5 pt-2 pl-2 border-b-2 border-b-[#e5e5e5] flex gap-x-5 items-center">
                   <img src={logoutbtn} alt="profile" className="w-6 h-6"/>
                   <span>Logout</span>
               </Link>
          </nav>
          
    </div>
  )
}

export default UserProfileMenu