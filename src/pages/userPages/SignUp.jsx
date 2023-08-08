import { Link, useNavigate } from "react-router-dom"
import Logo from "../../assets/Logo.png"
import { useState } from "react"
import { UserAuth } from "../../context/AuthContext"
import { setDoc, doc } from "firebase/firestore"
import { db } from "../../config/firebaseConfig"
import { UserHero } from "../../components"
import { useFormik } from 'formik';
import * as Yup from 'yup';



const Login = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    institution: "",
    phoneNumber: ""
  })

  const { createUser } = UserAuth()
  const navigate = useNavigate()

  

  function handleChange(e) {
    const {name, value} = e.target
    setFormData(prevData => ({...prevData, [name]: value}))
  }

 const email = formData.email
    const firstName = formData.firstName
    const lastName = formData.lastName
    const phoneNumber = formData.phoneNumber
    const institution = formData.institution
  async function handleSubmit(e) {
    e.preventDefault()
   
    try {
      const userData= await createUser(
        formData.email,
        formData.password)
      

      await setDoc(doc(db, "userInfo", userData.user.uid), {
        email,
        firstName,
        lastName,
        phoneNumber,
        institution,
        uid: userData.user.uid
      })
        navigate("/signupsuccess")
    } catch (err) {
      console.error(err.message)
    }
  }

  const validationSchema = Yup.object({
    firstName: Yup.string().required('Name is required'),
    lastName: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
    phoneNumber: Yup.string()
      .matches(/^\d{10}$/, 'Invalid phone number')
      .required('Phone number is required'),
  });

  const formik = useFormik({
    initialValues: {...formData},
    validationSchema: validationSchema
  });


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
            className="rounded outline-none p-2  border border-grey"
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
            className="rounded outline-none p-2  border border-grey"
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
            className="rounded outline-none p-2  border border-grey"
            />
        </label>
        {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
          )}
        
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
            className="rounded outline-none p-2  border border-grey"
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
            className="rounded outline-none p-2  border border-grey"
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
            className="rounded outline-none p-2  border border-grey"
            />
        </label>

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