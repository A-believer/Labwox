import { Navigate, Outlet } from "react-router-dom"
import UserProfileMenu from "./UserProfileMenu"
import { UserAuth } from "../../context/AuthContext"


const UserProfile = () => {
    const {user} = UserAuth()
  
  if (!user) {
    return <Navigate to="/login" />
  }
  return (
    <div className="bg-whitebgii lg:flex flex-col lg:flex-row w-full lg:px-[70px] lg:py-[40px] px-4 py-4 gap-x-6">
      <div className="lg:w-[30%] w-full">
        <UserProfileMenu />
      </div>
      <div className="lg:w-[70%] w-full">
        <Outlet/>
      </div>
    </div>
  )
}

export default UserProfile