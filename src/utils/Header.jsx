// eslint-disable-next-line react/prop-types
const Header = ({text1, text2, text3, f1, f2, tColor}) => {
  return (
    <p className={`font-aeon lg:text-[${f1}] text-[${f2}] lg:leading-[76.8px] leading-[43.2px] font-bold text-${tColor}`}>{text1} <span className="text-orange italic font-fair">{text2}</span> {text3}</p>
  )
}

export default Header