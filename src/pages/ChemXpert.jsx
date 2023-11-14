/* eslint-disable no-unused-vars */
import Hero_ChemXpert from "../components/Hero_ChemXpert"
import Banner from "../components/Banner"
import { CTA, Ctaii, KeysFeatures, Objective, ProofOfConcept } from "../components"
import ctaBgii from "../assets/ctaBg3.png"

export default function ChemXpert() {
  return (
    <main>
      <div className="py-2 lg:px-[60px] px-6 bg-heroBg bg-contain bg-no-repeat flex md:flex-row flex-col justify-between items-center">
        <Hero_ChemXpert btnText={`Enroll Here`}  btnTextII={`Call (+234)8090870364`} route={``}/>
      </div>
      <Banner />
      <Objective />
      <KeysFeatures />
      {/* <ProofOfConcept/> */}
      <Ctaii
        route={`https://docs.google.com/forms/d/1jOTJF03RF6U3jseWIYGWbdESYSPna2iiDr8KsKh8p1Y/edit`}
        btnText={`Enroll Now`}
        text1={`Get access to a `}
        text2={`specialized`}
        text3={`analytical Chemistry training`}
        imgSrc={ctaBgii}
        bgImg={`ctaBgiii`}
        subText={`ChemXPERT empowers academics in analytical chemistry through hands-on training and industry exposure, marking the first step in our vision's journey.`} />
       <CTA
        route={`https://docs.google.com/forms/d/1jOTJF03RF6U3jseWIYGWbdESYSPna2iiDr8KsKh8p1Y/edit`}
        btnTextCol={`white`}
        btnText={`Enroll Now`}
        btnBgCol={`black`}
        text={`Find out how ChemXpert can help you in the growing need for specialized training in analytical chemistry`} />
    </main>
  )
}
