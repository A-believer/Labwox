import { Hero_Resources } from "../components"
import { BlogFeed, Button } from "../utils"
import slider from "../assets/sliders.png"

const Resources = () => {
  return (
    <main>
      <Hero_Resources />
      <div className="flex lg:px-20 px-6 lg:py-6 py-4 gap-x-2">
        <div className="flex border border-grey pr-2">
          <input placeholder="find research here" type="text" className="w-full text-grey placeholder:text-grey border-none ring-0 active:border-none focus:border-none focus:ring-0 active:ring-0 rounded"/>
          <img src={slider} alt="slider" className="h-5 w-7 my-auto" />
        </div>
        <Button bgColor={`orange`} text={`Apply`} textColor={`white`}/>
      </div>
      <div className="bg-white lg:px-[70px] px-[24px] pt-[20px] lg:pb-[50px] pb-[30px]"><BlogFeed/></div>
      
    </main>
  )
}

export default Resources