import { corevaluesapi } from "../data/data"

const Values = () => {
  return (
      <div className="grid lg:grid-cols-3 grid-cols-1 text-white gap-y-[42px] gap-x-[26px]">
          {corevaluesapi && corevaluesapi.map((value, i) => (
              <div key={value.id + i}>
                  <img src={value.img} alt="cv-img" className="lg:w-[72px] lg:h-[72px] w-[60px] h-[60px]" loading="lazy"/>
                  <p className="lg:text-2xl text-xl tracking-wide lg:mt-6 mt-4 mb-2 font-bold">{value.name}</p>
                  <p className="lg:text-lg text-sm font-light">{value.message }</p>
              </div>
          ))}
    </div>
  )
}

export default Values