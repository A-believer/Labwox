import arrow from "../assets/Arrow.svg"
import { Link } from "react-router-dom"
import {BlogFeed, Header} from "../utils"

const Notes_Videos = () => {
  return (
    <section className="bg-white lg:px-[72px] px-[24px] lg:pt-[46px] pt-[51px] lg:pb-[100px] pb-[38px]">
      
      {/* Header  */}
      <div className="flex justify-between ">
        <div className="lg:w-[70%] w-[75%]">
        <Header text1={`Application`} text2={`Notes and Videos`} />
        </div>
        <Link to={`/resources`} className="flex justify-end items-start gap-x-1 hover:scale-105 active:scale-90 focus:scale-95 transition-all duration-500 h-auto bg-clear pb-0">
          <p className="text-yellow lg:text-[18px] text-[9.9px] font-bold w-fit">View all</p>
          <img src={arrow} alt="arrow"  className="lg:h-[18px] h-[9.9px] mt-[2px] lg:mt-1"/>
        </Link>
      </div>

      {/* Blog Feed  */}
      <div className="lg:mt-[68px] mt-[47px]">
        <BlogFeed />
      </div>
    </section>
  )
}

export default Notes_Videos