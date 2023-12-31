import { Header, Values } from "../utils"


const CoreValues = () => {
  return (
    <div className="lg:bg-blackii bg-black lg:px-[100px] px-[20px] lg:pt-[80px] pt-[46px] lg:pb-[80px] pb-[50px]">
      <div className="lg:w-1/2 w-full mb-10">
        <Header text1={`Our`} text2={`Core Values`} tColor={`white`} />
        <p className="lg:text-lg text-xs text-grey mt-6">We are committed to providing the best possible care for our young patients, and we believe that the following values are essential to achieving that goal:</p>
      </div>
      <div>
        <Values/>
      </div>
    </div>
  )
}

export default CoreValues