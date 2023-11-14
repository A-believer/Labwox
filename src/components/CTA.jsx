/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"
import Button from "../utils/Button"

const CTA = ({btnText, route, btnBgCol, btnTextCol, text}) => {
  return (
    <div className="bg-ctaBgii bg-contain bg-center lg:px-[160px] md:px-[80px] px-[16px] lg:py-[70px] pt-[40px] pb-[56px] flex flex-col justify-center items-center">
      <div className="text-center lg:text-[52px] text-[24px] lg:leading-[62.4px] leading-[28.8px] pb-[32px] font-semibold">
        {text}
      </div>
      <Link target="_blank" to={route}><Button bgColor={btnBgCol} textColor={btnTextCol} text={btnText}/></Link>
    </div>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default CTA