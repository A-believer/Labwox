import { Header, ServiceList } from "../utils"


const Service = () => {
  return (
      <div className="bg-white">
          <div className="lg:px-[90px] px-[24px] py-[30px] text-center">
              <p className="mx-auto text-center`"><Header text1={`The Services`} text2={`We Offer`} text3={`Just For You`}/></p>
              <p className="text-grey w-full lg:text-2xl text-sm lg:leading-9 leading-6 lg:mt-5 mt-2">We aim to help African scientists produce better research and improve their proficiency. We are also poised to offering science professionals a virtual shop window which opens up new vistas for training and analytical testing.</p>
          </div>
          <div className="bg-white"><ServiceList/></div>
    </div>
  )
}

export default Service