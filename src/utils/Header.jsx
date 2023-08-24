// eslint-disable-next-line react/prop-types
const Header = ({text1, text2, text3, tColor}) => {
  return (
    <div className={`font-aeon lg:text-[45px] text-[30px] lg:leading-[60px] leading-[45px] font-bold text-${tColor}`}>{text1} <span className="text-orange italic font-fair font inline">{text2}</span> {text3}</div>
  )
}

export default Header