import { Banner, ContactForm } from "../components"
import { contactapi } from "../data/data"
import { Header } from "../utils"

const Contact = () => {
  return (
    <main>
      <div className="bg-white lg:px-[72px] px-[24px] lg:pt-[52px] py-[27px] flex lg:flex-row flex-col gap-x-6 gap-y-9">
        <div className="bg-blackii rounded">
          <div className="bg-contactBg bg-cover bg-no-repeat lg:pt-16 pt-14 lg:pl-6 pl-4 pr-4  flex flex-col gap-y-[39px] pb-20 lg:pb-96">
            {contactapi.map((info) => (
              <div key={info.id} className="flex gap-x-4">
                <div className="rounded bg-white p-3 h-1/2">
                  <img src={info.imgsrc} alt="contact-img" className=" w-${info.w} h-${info.h}" />
                </div>
                
                <div className="text-white">
                  <p className="text-2xl font-bold">{info.text }</p>
                  <p className="text-base text-white/70">{info.subtext}</p>
                  <p className="text-base text-white/70">{info.subtext2}</p>
                  <p className="lg:w-[75%] w-full hover:underline underline-offset-4">{info.contactinfo }</p>
                </div>
              </div>
            ))}
              
          </div>
        </div>
        <div className="lg:pt-10 pt-2 lg:pl-6 lg:pr-6 px-0 flex flex-col">
          <Header text1={`Get In`} text2={`Touch`} text3={`☎️`}/>
          <p className="text-grey text-base leading-5 mb-7">We’d love to hear from you, and we promise to get in touch within 24hours!</p>
          <ContactForm/>
        </div>
      </div>

      <Banner/>
      
    </main>
  )
}

export default Contact