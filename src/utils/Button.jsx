
// eslint-disable-next-line react/prop-types
const Button = ({text, bgColor, textColor, width}) => {
  return (
    <>
      <button className={`bg-${bgColor} lg:py-[10px] py-2 lg:px-[54px] px-[35px] lg:text-base text-xs  rounded-[4px] text-${textColor} w-${width} hover:scale-105 active:scale-95 transition-all duration-300 z-99`}>{text}</button>
    </>
  )
}

export default Button