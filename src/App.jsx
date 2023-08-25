import { Route, Routes } from "react-router-dom"
import SignUpSuccess from './pages/userPages/SignUpSuccess.jsx'
import UserProfileDetails from './pages/userPages/UserProfileDetails.jsx'
import {About, Contact, ErrorPage, Home, Resources, TestListing, Services, Login, SignUp, ForgotPassword, UserProfile, UserProfileOrders, UserProfileSettings, Cart, HomeLayout} from "./pages"
import {ProductDetail} from "./components"
import { ProtectedRoute } from "./utils/ProtectedRoute.jsx"

const App = () => {
  
  
  return (
    <Routes>
      <Route path='/' element={<Home />}>
        <Route index element={<HomeLayout/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="resources" element={<Resources/>}/>
        <Route path="services" element={<Services/>}/>
        <Route path="testlisting" element={<TestListing />}/>
        <Route path="testlisting/:id" element={<ProductDetail />} />
        <Route path="login" element={<Login/>}/>
        <Route path="signup" element={<SignUp/>}/>
        <Route path="forgotpassword" element={<ForgotPassword />} />
        <Route path='signupsuccess' element={<SignUpSuccess />} />
        <Route path = "cart" element = {<Cart/>} />
        <Route path="userprofile" element={<ProtectedRoute><UserProfile /></ProtectedRoute>}>
          <Route index element={<UserProfileDetails/>}/>
          <Route path='orders' element={<UserProfileOrders/>}/>
          <Route path='settings' element={<UserProfileSettings />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  )
}

export default App