import Button from "../utils/Button"

const Cta = () => {
  return (
    <div className="bg-ctaBg bg-contain bg-center lg:px-[160px] px-[16px] lg:py-[167px] pt-[40px] pb-[56px] flex flex-col justify-center items-center">
      <div className="text-center lg:text-[52px] lg:leading-[62.4px] lg:pb-[32px] font-semibold">
        <p>Find out how partnering with</p>
        <p>Labworks can help you achieve</p>
        <p>tangible research and learning capabilities.</p>
      </div>
      <div><Button bgColor={`black`} textColor={`white`} text={`Get in Touch`}/></div>
    </div>
  )
}

export default Cta