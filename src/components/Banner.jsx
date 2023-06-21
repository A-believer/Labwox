import star from "../assets/Star.png"
import Marquee from "react-marquee-slider"
const Banner = () => {
  return (
    <div className="w-full overflow-hidden bg-black text-white font-aeon font-light text-[20px] leading-[24px] py-[30px] tracking-wider">
      <Marquee speed={30} direction="left" gradient={false} className="flex justify-between">
        <p className="mx-[64px]">Photochemical Analysis</p>
      <img src={star} alt="star" className="w-[19px] h-[19px] mx-[64px]"/>
      <p className="mx-[64px]">Pollutant Analysis</p>
            <img src={star} alt="star" className="w-[19px] h-[19px] mx-[64px]"/>
      <p className="mx-[64px]">Nutritional Analysis</p>
            <img src={star} alt="star" className="w-[19px] h-[19px] mx-[64px]"/>
      </Marquee>
    </div>
  )
}

export default Banner