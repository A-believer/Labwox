import {  ProductSidebar, Products } from "../components"
import { Outlet, Route, Routes } from "react-router-dom"
import ProductDetail from "./ProductDetail"

const TestListing = () => {

  return (
    <main className="bg-whitebgii flex lg:flex-row flex-col justify-between lg:pl-[72px] lg:pr-[70px] pl-6 pr-4 lg:pt-[52px] pt-4 gap-[24px]">
      <div className="rounded"><ProductSidebar /></div>
      <div><Products /></div>
      
      <Outlet/>
        <Routes>
            <Route path={`/testlisting/:id`} element={<ProductDetail/> } />
          </Routes>
    </main>
  )
}

export default TestListing