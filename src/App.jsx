import { Outlet, useLocation } from "react-router-dom"
import { Navbar, Footer } from "./components"

const App = () => {
  const location = useLocation()
  
  const displayCheckNavabar = (
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname === "/forgotpassword" ||
    location.pathname === "/signupsuccess")

  const displayCheckFooter = (
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname === "/forgotpassword" ||
    location.pathname === "/userprofile" ||
    location.pathname === "/userprofile/orders" ||
    location.pathname === "/userprofile/settings" ||
    location.pathname === "/signupsuccess" || 
    location.pathname === "/cart")
  
  
  
  return (
    <>
      {!displayCheckNavabar ? <Navbar /> : null}
      <Outlet />
      {!displayCheckFooter ? <Footer/> : null}
    </>
  )
}

export default App