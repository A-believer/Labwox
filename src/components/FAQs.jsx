import { Header } from "../utils"
import { faqsList } from "../data/data"


const FAQs = () => {
  return (
    <div className="bg-white">
      <div className="bg-faqBg lg:px-[154px] px-[24px] lg:pt-[50px] pt-[27px]">
        {/* Header  */}
        <div className="text-center lg:px-[55px] px-0">
          <Header text1={`Frequently Asked`} text2={`Questions`} />
        </div>

        {/* FAQs */}
        <div className="bg-[#F4F4F6] flex lg:mt-[50px] mt-[30px] justify-evenly lg:px-[41px] px-[16px] lg:pt-[45px] pt-[32px] lg:pb-[50px] pb-[30px] rounded">
          <div className="flex flex-col gap-y-6">
            {faqsList && faqsList?.map((faq, i) => (
              <div key={faq.id + i} className="flex gap-x-5 bg-white rounded px-[24px] py-[32px]">
                <div>
                  <p className="lg:text-lg text-base text-blackiii font-bold lg:leading-6 leading-5"><span>Q: </span>{faq.question}</p>
                <p className="lg:text-base text-xs text-grey lg:leading-5 leading-4 mt-3"><span>A: </span>{faq.answer}</p>
                </div> 
              </div>
            ))}
          </div>         
        </div>
      </div>
    </div>
  )
}

export default FAQs