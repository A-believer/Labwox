import cameraImg from "../../assets/cameraImg.png"
import { UserAuth } from "../../context/AuthContext"
import { useState } from "react"
import {HiOutlineUserCircle} from "react-icons/hi"

function UserProfileDetails() {
   const { userData } = UserAuth()
  const initialFormData = {
    lastName: userData.lastName,
    firstName: userData.firstName,
    email: userData.email,
    phoneNumber: userData.phoneNumber,
    institution: userData.institution,
  }
  const [formData, setFormData] = useState(initialFormData)
  
 function handleChange(e) {
    const {name, value} = e.target
    setFormData(prevData => ({...prevData, [name]: value}))
  }

  return (
    <section className={`w-full text-blackii bg-white lg:px-6 px-1 lg:py-10 py-5`}>
      
      <div className="flex flex-col lg:flex-row items-center mb-5">
        <div className="flex cursor-pointer">
          <span className="rounded-full lg:w-[102px] w-[86px] lg:h-[102px] h-[86px]">
            <HiOutlineUserCircle className="w-full h-full text-blackii/40"/>
          </span>
          <span className="bg-blackii p-1 rounded-full w-7 h-7 flex justify-center items-center relative lg:top-[68px] top-[52px] lg:right-9 right-9 z-auto">
            <img src={cameraImg} alt="camera image" className="z-10"/>
          </span>
        </div>
        <p className="lg:text-4xl text-3xl font-medium">
          {/* {userData.lastName} {userData.firstName} */}
        </p>
      </div>

      <form className="text-base flex flex-col w-full gap-6">
        <div className="w-full flex flex-col lg:flex-row lg:gap-4 gap-6 items-center">
          <div className="flex flex-col gap-2 text-blackii w-full lg:w-[450px]">
            <label htmlFor="lastName">Last Name</label>
            <input
              disabled
              className="bg-[#f7f7f7] pl-2.5 py-3 text-grey rounded border border-grey outline-none"
              value={formData.lastName}
              onChange={handleChange}
              type="text"
              name="lastName" />
          </div>

          <div className="flex flex-col gap-2 text-blackii w-full lg:w-[450px]">
            <label htmlFor="firstName">First Name</label>
              <input
                disabled
              className="bg-[#f7f7f7] pl-2.5 py-3 text-grey rounded border border-grey outline-none"
              value={formData.firstName}
              onChange={handleChange}
              type="text"
              name="firstName" />
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-4">
          <div className="flex flex-col gap-2 text-blackii w-full lg:w-[450px]">
            <label htmlFor="email">Email</label>
            <input
              disabled
              className="bg-[#f7f7f7] pl-2.5 py-3 text-grey rounded border border-grey outline-none"
              value={formData.email}
              onChange={handleChange}
              type="email"
              name="email" />
          </div>

          <div className="flex flex-col gap-2 text-blackii w-full lg:w-[450px]">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              disabled
                className="bg-[#f7f7f7] pl-2.5 py-3 text-grey rounded border border-grey outline-none"
                value={formData.phoneNumber}
                onChange={handleChange}
                type="tel"
                name="phoneNumber" />
          </div>
        </div>

        <div className="flex flex-col gap-2 text-blackii">
            <label htmlFor="institution">Institution</label>
              <input
                className="bg-[#f7f7f7] pl-2.5 py-3 text-grey rounded border border-grey outline-none"
                value={formData.institution}
                onChange={handleChange}
                type="tel"
                name="institution" />
          </div>
        
        <button className="lg:w-[70%] w-full py-2 bg-orange text-white rounded">Save changes</button>
      </form>
    </section>
  )
}

export default UserProfileDetails



