
const Button = ({text, bgColor, textColor}) => {
  return (
    <>
      <button className={`bg-${bgColor} py-[12.5px] px-[54px] rounded-[4px] text-${textColor} w-full`}>{text}</button>
    </>
  )
}

export default Button