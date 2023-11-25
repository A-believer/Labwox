import { Link, useNavigate } from "react-router-dom"
import Logo from "../../assets/Logo.png"
import { useState } from "react"
import { UserHero } from "../../components"
import { UserAuth } from "../../context/AuthContext"
import { sendEmail } from "../../emails/sendEmail"

const Login = () => {
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    institution: "",
    phoneNumber: ""
  }
  const [formData, setFormData] = useState(initialFormData)
  const [error, setError] = useState(null)
  const { createUser, currentUser } = UserAuth()
  const navigate = useNavigate()

  function handleChange(e) {
    const {name, value} = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }
  
  async function handleSubmit(e) {
    e.preventDefault()
    try {
      await createUser(formData.email, formData.password, formData.firstName, formData.lastName, formData.institution, formData.phoneNumber)
     
        sendEmail(
          currentUser.email,
          "Signed Up Successfully!",
          `Signed Up Successfully!`,
          "Welcome to Labwox",
          currentUser.displayName,
          "Your account has been created, you can now order tests",
          "https://labwox.com.ng/#/testlisting",
          "Visit Website"
        )
        navigate("/signupsuccess")
      
      setFormData(initialFormData)
    } catch (err) {
      setError(err.message)
      console.error(err.message)
    }
  }

  return (
    <main className="flex h-full w-full">
      <UserHero />

      <form
        onSubmit={handleSubmit}
        className="lg:w-1/2 w-full h-full lg:py-10 py-5 lg:px-20 px-8 flex flex-col">
        <Link
          to="/">
          <img
            src={Logo}
            alt="labwox-logo"
            className="w-[93px] h-[34px] lg:hidden block mb-2 " loading="lazy" />
        </Link>
        <p className="text-black lg:text-[27px] text-xl font-bold">Create An Account</p>
        <p className="lg:text-base text-xs font-normal text-[#777] my-1">Get access to your account</p>

        <label 
          htmlFor="firstName"
          className="text-blackii text-base font-normal leading-tight flex flex-col gap-2 lg:my-4 mb-2 mt-5">
          <span>First Name</span>
          <input
            value={formData.firstName}
            onChange={handleChange}
            name="firstName"
            type="text" 
            placeholder="enter your first name..."
            className={`rounded outline-none p-2  border ${error ? "border-red" : "border-grey"}`}
            />
        </label>

        <label 
          htmlFor="lastName"
          className="text-blackii text-base font-normal leading-tight flex flex-col gap-2 lg:my-4 mb-2 mt-5">
          <span>Last Name</span>
          <input
            value={formData.lastName}
            onChange={handleChange}
            name="lastName"
            type="text" 
            placeholder="enter your last name..."
            className={`rounded outline-none p-2  border ${error ? "border-red" : "border-grey"}`}
            />
        </label>

        <label 
          htmlFor="email"
          className="text-blackii text-base font-normal leading-tight flex flex-col gap-2 lg:my-4 mb-2 mt-5">
          <span>Email</span>
          <input
            value={formData.email}
            onChange={handleChange}
            name="email"
            type="email" 
            placeholder="enter your email..."
            className={`rounded outline-none p-2  border ${error ? "border-red" : "border-grey"}`}
          />
        </label>
      
        
        <label
          htmlFor="password"
          className="text-blackii text-base font-normal leading-tight flex flex-col gap-2 lg:my-4 my-2">
          <span>Password</span>
          <input
            value={formData.password}
            onChange={handleChange}
            name="password"
            type="password"
            placeholder="enter your password..."
            className={`rounded outline-none p-2  border ${error ? "border-red" : "border-grey"}`}
            />
        </label>

        <label
          htmlFor="phoneNumber"
          className="text-blackii text-base font-normal leading-tight flex flex-col gap-2 lg:my-4 my-2">
          <span>Phone Number</span>
          <input
            value={formData.phoneNumber}
            onChange={handleChange}
            name="phoneNumber"
            type="tel"
            placeholder="your phone number..."
            className={`rounded outline-none p-2  border ${error ? "border-red" : "border-grey"}`}
            />
        </label>

        <label
          htmlFor="institution"
          className="text-blackii text-base font-normal leading-tight flex flex-col gap-2 lg:my-4 my-2">
          <span>Institution</span>
          <input
            value={formData.institution}
            onChange={handleChange}
            name="institution"
            type="text"
            placeholder="enter your institution..."
            className={`rounded outline-none p-2  border ${error ? "border-red" : "border-grey"}`}
            />
        </label>
        {error && <p className="text-red font-bold">{error}</p>}

        <button type="submit" className="bg-orange text-center text-white text-lg font-medium leading-snug p-2.5 rounded mt-4 mb-8 border-none outline-none">Sign Up</button>

        <p className="mt-3 text-blackii">
          Already have an account?{" "}
          <Link to="/login" className="text-orange underline">Login</Link>
        </p>

      </form>
    </main>
  )
}

export default Login