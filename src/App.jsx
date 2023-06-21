import { Routes, Route } from "react-router-dom"
import { About, Contact, ErrorPage, Home, Resources, TestListing, Services } from "./pages"
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
        <Route path="/testlisting" element={<TestListing/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App