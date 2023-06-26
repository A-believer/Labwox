
import Button from "../utils/Button"

const CTA = () => {
  return (
    <div className="bg-ctaBgii bg-contain bg-center lg:px-[160px] px-[16px] lg:py-[70px] pt-[40px] pb-[56px] flex flex-col justify-center items-center">
      <div className="text-center lg:text-[52px] text-[24px] lg:leading-[62.4px] leading-[28.8px] pb-[32px] font-semibold">
        <p>Find out how partnering with</p>
        <p>Labwox can help you achieve</p>
        <p>tangible research and learning capabilities.</p>
      </div>
      <div><Button bgColor={`black`} textColor={`white`} text={`Get in Touch`}/></div>
    </div>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default CTA