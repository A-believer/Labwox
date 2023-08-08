import { Outlet } from "react-router-dom"
import UserProfileMenu from "./UserProfileMenu"


const UserProfile = () => {
  return (
    <div className="bg-whitebgii flex w-full p-[70px]">
      <UserProfileMenu />
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default UserProfile