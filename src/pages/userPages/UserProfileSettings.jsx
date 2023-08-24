import { useState } from "react"
import { UserAuth } from "../../context/AuthContext"


function UserProfileSettings() {
  const { user } = UserAuth()
  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState({
    newPassword: "",
    confirmNewPassword: "",
  })
  const [err, setErr] = useState((null))
  const [errReq, setErrReq] = useState((null))
  const [errMatch, setErrMatch] = useState((null))

  function handleOldPasswordChange(e) {
setOldPassword(e.target.value)
  }
 function handleNewPasswordChange(e) {
   const { name, value } = e.target
   setNewPassword(prev => ({...prev, [name]: value}))
  }

  async function handleSubmit(e) {
    e.preventDefault()
      try {
        if (newPassword.newPassword === user.password) {
        setErr('New password should not equal old password');
        return;
        }
      const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
      if (!passwordPattern.test(newPassword.newPassword)) {
        setErrReq('Password does not meet the requirements.');
        return;
        }
        
        if (newPassword.newPassword !== newPassword.confirmNewPassword) {
          setErrMatch("Passwords do not match!")
          return;
      }
      await user.updatePassword(newPassword);
    } catch (error) {
      setErr(error.message);
    }
  }

  return (
    <div className="flex flex-col lg:gap-10 gap-6 w-full text-blackii bg-white lg:px-6 px-1 lg:py-10 py-5">
       <div className="flex flex-col gap-2 text-blackii w-full lg:w-[450px] mt-10">
            <label htmlFor="oldPassword">Enter Old Password</label>
        <input
          className="bg-[#f7f7f7] pl-2.5 py-3 text-grey rounded border border-grey outline-none"
          value={oldPassword}
          onChange={handleOldPasswordChange}
          type="password"
          name="oldPassword" />
          </div>

          <div className="flex flex-col gap-2 text-blackii w-full lg:w-[450px]">
            <label htmlFor="newPassword">Enter New Password</label>
              <input
              className="bg-[#f7f7f7] pl-2.5 py-3 text-grey rounded border border-grey outline-none"
              value={newPassword.newPassword}
              onChange={handleNewPasswordChange}
              type="password"
              name="newPassword" />
      </div>
      {errMatch && <p className="text-red">{errMatch}</p>}
      
      <div className="flex flex-col gap-2 text-blackii w-full lg:w-[450px]">
            <label htmlFor="confirmNewPassword">Confirm New Password</label>
              <input
              className="bg-[#f7f7f7] pl-2.5 py-2.5 text-grey rounded border border-grey outline-none"
              value={newPassword.confirmNewPassword}
              onChange={handleNewPasswordChange}
              type="password"
              name="confirmNewPassword" />
      </div>
      {err && <p className="text-red">{err}</p>}
      {errReq && <p className="text-red">{errReq}</p>}
      {errMatch && <p className="text-red">{errMatch}</p>}
      
      <button type="submit" onClick={handleSubmit} className="bg-orange text-white py-2 text-base rounded lg:w-[450px] w-full">Confirm</button>
    </div>
  )
}

export default UserProfileSettings