import { Header } from "../utils"


const Hero_Resources = () => {
  return (
      <section className="bg-blackv bg-contain bg-no-repeat">
          <div className="bg-resourceHeroBg ">
              <div className="lg:px-20 px-6 lg:py-20 py-10 lg:w-[60%] w-full">
                  <p><Header text1={`Application`} text2={`Notes and Videos`} tColor={`white`}/></p>
                  <p className="text-white my-2 lg:w-[90%] w-full">Labwox provides cutting-edge solutions to support research and learning in the chemical sciences</p>
              </div>
          </div>      
    </section>
  )
}

export default Hero_Resources