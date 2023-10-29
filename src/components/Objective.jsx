import { Button, Header } from "../utils"
import objectiveImg from "../assets/objective.png"
 
export default function Objective() {
  return (
    <secton className="bg-whitebgii flex md:flex-row flex-col lg:p-20 md:p-10 p-7 items-center gap-x-[51px] gap-y-10">
      <div className="space-y-[22px]">
      <Header text1={`Objective`}/>
        <p className="text-greyi w-full">The primary goal of ChemXPERT is to empower academics with the practical skills and in-depth knowledge required to excel in their specialized areas of analytical chemistry. This service aims to bridge the gap between theoretical learning and real-world application by offering a unique blend of theory and hands-on experience</p>
        <Button text={`Enroll Now`} bgColor={`orange`} textColor={`white`}/>
      </div>
      <div className="bg-whitebgiii lg:py-[50px] md:py-[30px] py-5 lg:px-8 px-6 max-w-[526px] max-h-[541px] w-full h-full">
        <img src={objectiveImg} alt="objective image" className="w-full h-full object-cover"/>
      </div>
    </secton>
  )
}
