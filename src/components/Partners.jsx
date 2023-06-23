import cl1 from "../assets/cl1.png"
import cl2 from "../assets/cl2.png"
import cl3 from "../assets/cl3.png"
import cl4 from "../assets/cl4.png"
import cl5 from "../assets/cl5.png"
import cl6 from "../assets/cl6.png"
import Marquee from "react-marquee-slider"

const Partners = () => {
  return (
    <div className="bg-white lg:px-[120px] px-0 lg:pt-[120px] pt-[32px] lg:pb-[85px] pb-[54px]">
      <p className="mx-[60px] lg:mx-4 text-center lg:text-[34px] text-[20px] lg:leading-9 leading-6 font-bold lg:px-64">These great companies have opted to trust us.</p>
      <div>
        {/* Desktop */}
        <div className="lg:flex hidden items-center justify-center gap-x-[60px] mt-[60px]">
          <img src={cl1} alt="cl1" />
          <img src={cl2} alt="cl2" />
          <img src={cl3} alt="cl3" />
          <img src={cl4} alt="cl4" />
          <img src={cl5} alt="cl5" />
          <img src={cl6} alt="cl6" />
        </div>

        {/* Mobile  */}
        <div className="lg:hidden block w-full overflow-hidden mt-[9px]">
           <Marquee speed={50} direction="left" gradient={false} className="flex items-center justify-center">
          <img src={cl1} alt="cl1" className="mr-24"/>
          <img src={cl2} alt="cl2" className="mr-24"/>
          <img src={cl3} alt="cl3" className="mr-24"/>
          <img src={cl4} alt="cl4" className="mr-24"/>
          <img src={cl5} alt="cl5" className="mr-24"/>
          <img src={cl6} alt="cl6" className="mr-24"/>
        </Marquee>
        </div>
       
       
      </div>
    </div>
  )
}

export default Partners