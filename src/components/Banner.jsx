import star from "../assets/Star.png"
import Marquee from "react-marquee-slider"
const Banner = () => {
  return (
    <div className="w-full overflow-hidden bg-[#121212] text-white font-aeon font-light text-[20px] leading-[24px] py-[25px] tracking-wider">
      <Marquee speed={50} direction="left" gradient={false} className="flex justify-between">
        <p className="mx-[64px]">Phytochemical Analysis</p>
      <img src={star} alt="star" className="w-[19px] h-[19px] mx-[64px]" loading="lazy"/>
      <p className="mx-[64px]">Pollutant Analysis</p>
            <img src={star} alt="star" className="w-[19px] h-[19px] mx-[64px]" loading="lazy"/>
      <p className="mx-[64px]">Nutritional Analysis</p>
            <img src={star} alt="star" className="w-[19px] h-[19px] mx-[64px]" loading="lazy"/>
      </Marquee>
    </div>
  )
}

export default Banner