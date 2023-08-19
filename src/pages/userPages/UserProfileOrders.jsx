import { Navigate } from "react-router-dom"
import { UserAuth } from "../../context/AuthContext"


function UserProfileOrders() {
  const { user } = UserAuth()
  
  if (!user) {
    return <Navigate to="/login" />
  }
  return (
    <div>UserProfileOrders</div>
  )
}

export default UserProfileOrders