/* eslint-disable react/prop-types */
import { Header } from "../utils";
import heroImg from "../assets/hero-chemxpert.png"
import { Link } from "react-router-dom";


export default function Hero_ChemXpert({btnText, btnTextII, route}) {
  return (
      <>
          <div className="lg:my-0 my-10 relative z-[1]">
        <Header text1={`Analytical Chemistry`} text2={`Training`} text3={`"ChemXpert"`} tColor={`blackii`}/>
        <p
        className="text-blackii mt-4 max-w-[600px] w-full">Labwox is excited to present a proof of concept for our new Application Training Service ChemXPERT, tailored to academics in higher education seeking to upskill in specific areas of analytical chemistry.</p>
              
        <div className=" flex mt-4 w-full gap-4 lg:text-[18px] text-sm font-aeon text-center">
          <Link target="_blank" to={`https://docs.google.com/forms/d/1jOTJF03RF6U3jseWIYGWbdESYSPna2iiDr8KsKh8p1Y/edit`} className="text-white bg-orange py-2.5 lg:px-16 px-0 lg:w-fit w-full rounded border border-orange">{btnText}</Link>
          <Link to={`${route}`} className="text-greyi bg-clear py-2.5 lg:px-16 px-0 lg:w-fit w-full rounded border border-greyi">{ btnTextII}</Link>
        </div>
      </div>

      <div className="relative my-4 max-w-[520px] w-full lg:h-[500px] h-[300px] bg-center bg-contain bg-no-repeat flex-col justify-center items-center rounded-[8px] flex">
        <img src={heroImg} alt="hero image" className="w-full h-full object-contain"/>
      </div>
    </>
  )
}
