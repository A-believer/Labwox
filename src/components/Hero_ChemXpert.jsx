import { Header } from "../utils";
import heroImg from "../assets/hero-chemxpert.png"
import { Link } from "react-router-dom";


export default function Hero_ChemXpert() {
  return (
      <>
          <div className="lg:my-0 my-10 relative z-[1]">
        <Header text1={`Analytical Chemistry`} text2={`Training`} text3={`"ChemXpert"`} tColor={`blackii`}/>
        <p
        className="text-grey mt-4 max-w-[600px] w-full">Labwox is excited to present a proof of concept for our new Application Training Service ChemXPERT, tailored to academics in higher education seeking to upskill in specific areas of analytical chemistry.</p>
              
        <div className=" flex mt-4 w-full gap-4 text-[18px] font-aeon">
         <Link className="text-white bg-orange py-2.5 px-16 rounded border border-orange">Register Here</Link>
         <Link to={`/chemxpert`} className="text-grey bg-clear py-2.5 px-16 rounded border border-grey">Explore More</Link>
        </div>
      </div>

      <div className="relative my-4 lg:w-[520px] w-full lg:h-[500px] h-[300px] bg-center bg-contain bg-no-repeat flex-col justify-center items-center rounded-[8px] flex">
        <img src={heroImg} alt="hero image" className="w-full h-full object-contain"/>
      </div>
    </>
  )
}
