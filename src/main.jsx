import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./config/logout.js"
import { Provider } from 'react-redux';
import store from './utils/store.js'; 
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { About, Contact, ErrorPage, Home, Resources, TestListing, Services, Login, SignUp, ForgotPassword, UserProfile, UserProfileOrders, UserProfileSettings, Cart } from "./pages"
import {  ProductDetail} from "./components"
import './index.css'
import "./font.css"
import { AuthContextProvider } from './context/AuthContext'
import SignUpSuccess from './pages/userPages/SignUpSuccess.jsx'
import UserProfileDetails from './pages/userPages/UserProfileDetails.jsx'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App/>}>
    <Route index element={<Home/>}/>
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
    
    <Route path="userprofile" element={<UserProfile />} >
      <Route index element={<UserProfileDetails/>}/>
      <Route path='orders' element={<UserProfileOrders/>}/>
      <Route path='settings' element={<UserProfileSettings />} />
    </Route>

    <Route path="*" element={<ErrorPage />} />

  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>
  </Provider>
  
)
