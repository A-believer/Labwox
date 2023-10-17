import { Outlet, useLocation, useParams } from "react-router-dom"
import { Navbar, Footer } from "../components"

const Home = () => {
  const {id} = useParams()

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
    location.pathname === `/userprofile/orders/:${id}` || 
    location.pathname === `/userprofile/orders/:${id}/samplesheet` || 
    location.pathname === "/cart")
  return (
    <main className="max-w-[1440px] mx-auto">
      {!displayCheckNavabar ? <Navbar /> : null}
      <Outlet />
      {!displayCheckFooter ? <Footer/> : null}
    </main>
  )
}

export default Home