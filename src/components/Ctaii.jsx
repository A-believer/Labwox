/* eslint-disable react/prop-types */
import Button from "../utils/Button"
import { Header } from "../utils"
import { Link } from "react-router-dom"

const Ctaii = ({btnText, route, text1, text2, text3, subText, imgSrc, bgImg}) => {
  return (
      <div className="bg-black lg:bg-blackii lg:px-20 py-10 px-10">
        <div className={`w-full h-full rounded lg:pl-12 lg:bg-${bgImg} bg-none bg-no-repeat`}>
          <div className="bg-white lg:pl-8 px-4 lg:pb-[60px] lg:pt-[60px] py-4 rounded w-full h-full max-h-max lg:mx-0 mx-auto">
            <Header text1={text1} text2={text2} text3={text3}/>
            <p className="my-[31px] lg:w-[70%] w-full lg:text-xl text-lg leading-5 text-grey">{subText}</p>
            <Link to={route}>
              <Button bgColor={`orange`} text={btnText} textColor={`white`} />
            </Link>
          </div>
          <div className="lg:hidden block mt-10 max-w-[700px] max-h-[353px] mx-auto md:mb-10 mb-0">
            <img src={imgSrc} alt="ctaimg" className="rounded" loading="lazy" />
          </div>
        </div>
    </div>
  )
}

export default Ctaii