import { useState } from "react"
import { UserAuth } from "../../context/AuthContext"
import { Navigate } from "react-router-dom"


function UserProfileSettings() {
   const { user } = UserAuth()
  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  })
 function handleChange(e) {
   const { name, value } = e.target
   setPasswordData(prevData => ({...prevData, [name]: value}))
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(passwordData)
  }

  if (!user) {
    return <Navigate to="/login" />
  }
  return (
    <div className="flex flex-col lg:gap-10 gap-6 w-full text-blackii bg-white lg:px-6 px-1 lg:py-10 py-5">
       <div className="flex flex-col gap-2 text-blackii w-full lg:w-[450px] mt-10">
            <label htmlFor="lastName">Enter Old Password</label>
            <input
              className="bg-[#f7f7f7] pl-2.5 py-3 text-grey rounded border border-grey outline-none"
              value={passwordData.oldPassword}
              onChange={handleChange}
              type="password"
              name="lastName" />
          </div>

          <div className="flex flex-col gap-2 text-blackii w-full lg:w-[450px]">
            <label htmlFor="firstName">Enter New Password</label>
              <input
              className="bg-[#f7f7f7] pl-2.5 py-3 text-grey rounded border border-grey outline-none"
              value={passwordData.newPassword}
              onChange={handleChange}
              type="password"
              name="firstName" />
      </div>
      
      <div className="flex flex-col gap-2 text-blackii w-full lg:w-[450px]">
            <label htmlFor="firstName">Confirm New Password</label>
              <input
              className="bg-[#f7f7f7] pl-2.5 py-2.5 text-grey rounded border border-grey outline-none"
              value={passwordData.confirmNewPassword}
              onChange={handleChange}
              type="password"
              name="firstName" />
      </div>
      
      <button type="submit" onClick={handleSubmit} className="bg-orange text-white py-2 text-base rounded lg:w-[450px] w-full">Confirm</button>
    </div>
  )
}

export default UserProfileSettings