
const Button = ({text, bgColor, textColor, width}) => {
  return (
    <>
      <button className={`bg-${bgColor} py-[12.5px] px-[54px] rounded-[4px] text-${textColor} w-${width} hover:scale-105 active:scale-95 transition-all duration-300`}>{text}</button>
    </>
  )
}

export default Button