import { Banner, CTA, Ctaii, FAQs, MainHero, Notes_Videos, Onboarding, Partners, ProductList } from "../components"
import ctaBgii from "../assets/ctaBg1.png"

function HomeLayout() {
  return (
    <main className="bg-whitebg space-y-10">
      <MainHero/>
      <Banner />
      <ProductList />
      <Onboarding />
      <Notes_Videos />
      <FAQs/>
      <Ctaii
        text1={`Get access to an `}
        text2={`extensive network`}
        text3={`of laboratories and research centers`}
        imgSrc={ctaBgii}
        bgImg={`ctaBgi`}
        subText={`Join thousands of Individuals and SMEs on Scrapays getting value from their recyclables.`}
        btnText={`Search`} />
      <Partners/>
      <CTA
        route={`contact`}
        btnTextCol={`white`}
        btnText={`Get in Touch`}
        btnBgCol={`black`}
        text={`Find out how partnering with Labwox can help you achieve tangible research and learning capabilities.`} />
    </main>
  )
}

export default HomeLayout