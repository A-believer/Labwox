// eslint-disable-next-line react/prop-types
const Header = ({text1, text2, text3, tColor, lgFont, smFont}) => {
  return (
    <h1 className={`mx-auto font-aeon lg:text-[${lgFont ? lgFont : "56px"}] text-[${smFont ? smFont : "32px"}] lg:leading-[60px] leading-[40px]] font-bold text-${tColor}`}>{text1} <span className="text-orange italic font-fair font inline">{text2}</span> {text3}</h1>
  )
}

export default Header