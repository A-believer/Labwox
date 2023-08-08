import Button from "../utils/Button"
import ctaBgii from "../assets/ctaBg1.png"

const Ctaii = () => {
  return (
      <div className="bg-black lg:bg-blackii py-10 px-10">
          <div className="my-[36px] w-full h-full rounded lg:block hidden">
              <div className="bg-white pl-[33px] pb-[60px] pt-[60px] rounded">
                <p className="font-aeon text-[32px] leading-[43.2px] font-bold text-black w-[95%]">Get access to a <span className="text-orange italic font-fair font">extensive network</span> of laboratories and research centres</p>
                <p className="my-[31px] w-[70%] text-base leading-5 text-grey">Join thousands of Individuals and SMEs on Scrapays getting value from their recyclables across.</p>
                <Button bgColor={`orange`} text={`Search`} textColor={`white`} />
          </div>
        </div>
        <div className="lg:hidden block">
            <div className="bg-white pb-[32px] pt-[30px] px-[30px] rounded mb-4">
                <p className="font-aeon lg:text-[32px] text-[20px]  leading-[28.8px] font-bold text-black">Get access to a <span className="text-orange italic font-fair font">extensive network</span> of laboratories and research centres</p>
                <p className="my-2 text-base leading-5 text-grey w-[70%]">Join thousands of Individuals and SMEs on Scrapays getting value from their recyclables across.</p>
                <Button bgColor={`orange`} text={`Search`} textColor={`white`} />
          </div>
            <div><img src={ctaBgii} alt="ctaimg" className="rounded" loading="lazy"/></div>
          </div>
    </div>
  )
}

export default Ctaii