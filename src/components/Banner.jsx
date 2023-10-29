import star from "../assets/Star.png"
import Marquee from "react-marquee-slider"
const Banner = () => {
  return (
    <div className="w-full overflow-hidden bg-[#121212] text-white font-aeon font-light text-[20px] leading-[24px] py-[25px] tracking-wider">
      <Marquee speed={50} direction="left" gradient={false} className="flex justify-between">
        <p className="lg:mx-[64px] md:mx-12 mx-8">Phytochemical Analysis</p>
      <img src={star} alt="star" className="w-[19px] h-[19px] lg:mx-[64px] md:mx-12 mx-8" loading="lazy"/>
      <p className="lg:mx-[64px] md:mx-12 mx-8">Pollutant Analysis</p>
            <img src={star} alt="star" className="w-[19px] h-[19px] lg:mx-[64px] md:mx-12 mx-8" loading="lazy"/>
      <p className="lg:mx-[64px] md:mx-12 mx-8">Nutritional Analysis</p>
            <img src={star} alt="star" className="w-[19px] h-[19px] lg:mx-[64px] md:mx-12 mx-8" loading="lazy"/>
      </Marquee>
    </div>
  )
}

export default Banner