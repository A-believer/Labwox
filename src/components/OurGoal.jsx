import aboutImg from "../assets/imgIII.jpeg"

const OurGoal = () => {
  return (
    <section className="bg-white lg:mt-0 mt-[64px] flex justify-between items-center lg:flex-row-reverse flex-col lg:px-[70px] px-[24px] lg:pb-[100px] pb-[50px] lg:pt-[103px] lg:gap-x-[80px] gap-x-2 ">
      <div className="lg:w-[50%] w-full mx-[24px] lg:ml-0 lg:mb-0 mb-[30px] lg:pr-[40px] pr-[30px]">
        
        <div className="lg:text-2xl text-xl text-grey flex flex-col lg:gap-y-[54px] gap-y-[24px]">
          <div>
            <p className="lg:text-4xl text-2xl font-medium lg:mb-[30px] mb-[36px]">Our Goal</p>
          <p>
          We aim to help African scientists and researchers produce better research and improve their proficiency in the chemical sciences. We are also poised to offering science professionals a virtual shop window which opens up new vistas for training and analytical testing.
          </p>
          </div>

          <div>
            <p className="lg:text-4xl text-2xl font-medium lg:mb-[30px] mb-[36px]">How We Do This</p>
          <p>
            Labwox aggregates the services of a network of commercial analytical laboratories and provides a one stop shop for scientists and professionals who require analytical testing services to support their work.
          </p>
          </div>  
        </div>  
      </div>

      <div className="lg:w-[616px] lg:h-[591px] w-full h-[365px] rounded">
        <img src={aboutImg} alt="aboutImg" className="object-contain w-full h-full" loading="lazy"/>
      </div>
     
    </section>
  )
}

export default OurGoal