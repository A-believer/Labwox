import { Hero_Resources } from "../components"
import { BlogFeed, Button } from "../utils"
import slider from "../assets/sliders.png"
import { useState } from "react"

const Resources = () => {

  const [search, setSearch] = useState("")

  function handleSearch(e) {
    e.preventDefault()
    setSearch(e.target.value)
  }

   function handleSearchResult(e) {
    e.preventDefault()
    console.log(search)
  }

  return (
    <main>
      <Hero_Resources />
      <div className="flex lg:px-20 px-6 lg:py-6 py-4 gap-x-2">
        <div className="flex border border-grey pr-2 rounded">
          <input
            value={search}
            onChange={handleSearch}
            placeholder="enter search"
            type="text"
            className="w-full pl-2 text-grey border-none outline-none rounded" />
          <img src={slider} alt="slider" className="h-5 w-7 my-auto" loading="lazy"/>
        </div>
        <div onClick={handleSearchResult}><Button bgColor={`orange`} text={`Apply`} textColor={`white`}/></div>
        
      </div>
      <div className="bg-white lg:px-[70px] px-6 py-8"><BlogFeed/></div>
      
    </main>
  )
}

export default Resources