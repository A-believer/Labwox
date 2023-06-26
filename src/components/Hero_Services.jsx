import { Button } from "../utils"
import gifi from "../assets/gifi.gif"
import gifii from "../assets/gifii.gif"


const Hero_Services = () => {
  return (
        <div className="bg-servHeroBg bg-cover bg-no-repeat object-center lg:px-[120px] px-[24px] lg:py-[40px] py-[10px] text-center">
          <div className="lg:text-[64px] lg:leading-[80px] text-[32px] leading-[44px] font-bold text-center w-full py-[30px]">
              <p className="flex lg:gap-x-4 gap-x-2 justify-center flex-wrap"> 
                  <span className="flex items-end gap-x-2">Transforming<img src={gifi} alt="gifi" className="lg:h-16 h-8 lg:w-[90px] w-[50px] lg:border-[8px] border-[3px] border-orange lg:rounded-[52px] rounded-[27px] " /></span>
                  <span className="font-semibold italic font-fair text-orange">Research</span>
                  <span>and</span>
                  <span className="font-semibold italic font-fair text-yellow">Learning  <span className="font-bold text-black not-italic ">in the </span></span>
                   
                  <span className="flex items-end gap-x-2">Physical Sciences <img src={gifii} alt="" className="inline lg:h-16 h-8 lg:w-[90px] w-[50px] lg:border-[8px] border-[3px] border-yellow lg:rounded-[52px] rounded-[27px] "/></span>
              </p>
          </div>
          
            <p className="lg:my-4 my-2 lg:text-base text-sm text-blackii lg:w-[72%] w-[100%] mx-auto text-center">Welcome to Labwox, where science meets innovation. We provide cutting-edge solutions to revolutionize research and learning in the physical sciences. Our expertise empowers professionals and scientists, bridging the gap between industry and academia
            </p>
          
            <div className="flex justify-center items-center gap-x-2 mb-[40px]">
                <Button bgColor={`orange`} text={`Register`} textColor={`white`} />
                <p className="text-grey border border-grey lg:py-[8px] py-[6px] px-4 rounded lg:text-base text-sm">Call (+234)8090870364</p>
          </div> 
          
          
        </div>
  )
}

export default Hero_Services