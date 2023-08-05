import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { About, Contact, ErrorPage, Home, Resources, TestListing, Services, Login, SignUp, Logout, ForgotPassword, UserProfile } from "./pages"
import {  ProductDetail, ProductDetailAddedInfo, ProductDetailQC,ProductDetailDeliveryInfo, ProductDetailParameters } from "./components"
import './index.css'
import "./font.css"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App/>}>
    <Route index element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="contact" element={<Contact/>}/>
    <Route path="resources" element={<Resources/>}/>
    <Route path="services" element={<Services/>}/>
    <Route path="testlisting" element={<TestListing />}/>
    <Route path="testlisting/:id" element={<ProductDetail />} >
      <Route index element={<ProductDetailParameters/>}/> 
      <Route path='qc' element={<ProductDetailQC/>}/> 
      <Route path='addedinfo' element={<ProductDetailAddedInfo/>}/> 
      <Route path='deliveryinfo' element={<ProductDetailDeliveryInfo/>}/> 
    </Route>
    <Route path="login" element={<Login/>}/>
    <Route path="logout" element={<Logout/>}/>
    <Route path="signup" element={<SignUp/>}/>
    <Route path="forgotpassword" element={<ForgotPassword/>}/>
    <Route path="userprofile" element={<UserProfile />} />
    <Route path="*" element={<ErrorPage/>}/>
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
     <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
)
