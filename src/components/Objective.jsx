import { Header } from "../utils"
import objectiveImg from "../assets/objective.png"
import { Link } from "react-router-dom"
 
export default function Objective() {
  return (
    <secton className="bg-whitebgii flex md:flex-row flex-col lg:p-20 md:p-10 p-7 items-center gap-x-[51px] gap-y-10">
      <div className="space-y-[22px]">
      <Header text1={`Objective`}/>
        <p className="text-greyi w-full pb-5">The primary goal of ChemXPERT is to empower academics with the practical skills and in-depth knowledge required to excel in their specialized areas of analytical chemistry. This service aims to bridge the gap between theoretical learning and real-world application by offering a unique blend of theory and hands-on experience</p>
        <Link target="_blank" to={`https://docs.google.com/forms/d/1jOTJF03RF6U3jseWIYGWbdESYSPna2iiDr8KsKh8p1Y/edit`} className={`bg-orange lg:py-[10px] py-1.5 lg:px-[54px] px-[35px] lg:text-base text-xs  rounded-[4px] text-white w-fit hover:scale-105 active:scale-95 transition-all duration-300 z-99 border border-orange`}>Enroll Now</Link>
      </div>
      <div className="bg-whitebgiii lg:py-[50px] md:py-[30px] py-5 lg:px-8 px-6 max-w-[526px] max-h-[541px] w-full h-full">
        <img src={objectiveImg} alt="objective image" className="w-full h-full object-cover"/>
      </div>
    </secton>
  )
}
