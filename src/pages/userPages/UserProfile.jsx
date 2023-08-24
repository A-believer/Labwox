import { Outlet, useNavigate } from "react-router-dom"
import UserProfileMenu from "./UserProfileMenu"
import { UserAuth } from "../../context/AuthContext"
import { useEffect, useState } from "react"


const UserProfile = () => {
  const { currentUser, userData } = UserAuth()
  const navigate = useNavigate()
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // If userData is already available, setLoading to false
    if (userData) {
      setLoading(false);
    }
  }, [userData]);

    if (!currentUser) {
    return navigate("/login")
  }
 
  return (
    <div className="bg-whitebgii lg:flex flex-col lg:flex-row w-full lg:px-[70px] lg:py-[40px] px-4 py-4 gap-x-6">
      {isLoading ?
        <div>Loading...</div> :
        <><div className="lg:w-[30%] w-full">
          <UserProfileMenu />
        </div><div className="lg:w-[70%] w-full">
            <Outlet />
          </div></>
        }

    </div>
  )
}

export default UserProfile