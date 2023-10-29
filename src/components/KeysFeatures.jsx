/* eslint-disable no-unused-vars */
import { Header } from "../utils"
import { keysFeatures } from "../data/data"

export default function KeysFeatures() {
  return (
    <section className="lg:pl-[70px] lg:pr-[59px] lg:py-16 md:p-10 p-8 bg-white lg:space-y-16 space-y-10 font-aeon">
      <Header text1={`Key Features`} />

      <ul className="flex flex-wrap lg:gap-x-5 md:gap-x-10 gap-y-8">
        {keysFeatures.map((item) => (
        <li key={item.id} className="space-y-5">
          <div className="p-6 rounded-full bg-[#D9D9D9] w-fit"><img src={item.imgSrc} alt={item.id + item.text} className="w-6 h-6 object-contain"/></div>
            <p className="text-blackii text-lg font-bold">{item.text}</p>
            <p className="lg:max-w-[365px] md:max-w-[300px] max-w-max text-greyi text-base">{item.subtext}</p>
        </li>
        ))}
      </ul>
    </section>
  )
}
