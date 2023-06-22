// eslint-disable-next-line react/prop-types
const Header = ({text1, text2, text3}) => {
  return (
    <p className="font-aeon lg:text-[64px] text-[36px] lg:leading-[76.8px] leading-[43.2px] font-bold text-blackii">{text1} <span className="text-orange italic font-fair">{text2}</span> {text3}</p>
  )
}

export default Header