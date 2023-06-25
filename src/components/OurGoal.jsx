import aboutImg from "../assets/aboutImg.png"

const OurGoal = () => {
  return (
    <section className="bg-white lg:mt-0 mt-[64px] flex justify-between items-center lg:flex-row-reverse flex-col lg:px-[70px] px-[24px] lg:pb-[150px] pb-[50px] lg:pt-[103px] gap-x-[80px]">
      <div className="lg:w-[50%] w-full mx-[24px] lg:ml-0 lg:mb-0 mb-[30px] lg:pr-[40px] pr-[30px]">
        <p className="lg:text-4xl text-2xl font-medium lg:mb-[30px] mb-[36px]">Our Goal & Why Choose Us</p>
        <div className="lg:text-2xl text-xl text-grey flex flex-col lg:gap-y-[54px] gap-y-[24px]">
          <p>
          We aim to help African scientists produce better research and improve their proficiency. We are also poised to offering science professionals a virtual shop window which opens up new vistas for training and analytical testing.
          </p> 
          <p>
            We aggregates the services of a network of commercial analytical laboratories and provides a one stop shop for scientists and professionals who require analytical testing services to support their work.
          </p>
        </div>        
      </div>

      <div className="lg:w-[616px] lg:h-[591px] w-[380px] h-[365px] rounded">
        <img src={aboutImg} alt="aboutImg" className="object-contain w-full h-full" />
      </div>
     
    </section>
  )
}

export default OurGoal