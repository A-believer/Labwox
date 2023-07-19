import { Button, Header } from "../utils"
import heroImg from "../assets/aboutHeroImg.png"
import { Link } from "react-router-dom"


const Hero_About = () => {
  return (
      <section className="lg:-mb-[220px] -mb-[20px] ">
          <div className="bg-black lg:pt-[66px] pt-[56px] lg:pb-[290px] pb-[100px]">
               <div className="bg-aboutBg bg-contain bg-no-repeat lg:pt-[68px] pt-0 lg:px-[75px] px-[24px]">
              <div className="lg:w-[70%] w-full">
                  <Header text1={`Expanding`} text2={`Research`} text3={`Frontiers`} tColor={`white`}/>
                   <p className="text-white text-base leading-5 mt-6 mb-10 lg:w-[70%] w-[90%]">Labwox provides cutting-edge solutions to support research and learning in the chemical sciences</p>
              </div>
              <Link to={`/register`}><Button bgColor={`orange`} text={`Get Started`} textColor={`white`}/></Link>
          </div>
          </div>
         
          <div className="relative lg:bottom-[250px] bottom-[50px] lg:mx-[75px] mx-6">
              <img src={heroImg} alt="w-full h-full" loading="lazy"/>
          </div>
    </section>
  )
}

export default Hero_About