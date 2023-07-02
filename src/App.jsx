import { Routes, Route } from "react-router-dom"
import { About, Contact, ErrorPage, Home, Resources, TestListing, Services, Login, Register, Logout, ForgotPassword, UserProfile } from "./pages"
import { Footer, Navbar } from "./components"

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/resources" element={<Resources/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/testlisting" element={<TestListing />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/forgotpassword" element={<ForgotPassword/>}/>
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App