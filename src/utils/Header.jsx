

const Header = ({text1, text2, text3}) => {
  return (
    <p className="font-aeon lg:text-[60px] text-[36px] lg:leading-[70px] leading-[36px] font-semibold text-blackii">{text1} <span className="text-orange italic font-fair">{text2}</span> {text3}</p>
  )
}

export default Header