import { Banner, CTA, Ctaii, FAQs, Hero, Notes_Videos, Onboarding, Partners, ProductList } from "../components"


function HomeLayout() {
  return (
    <main className="bg-whitebg">
      <Hero/>
      <Banner />
      <ProductList />
      <Onboarding />
      <Notes_Videos />
      <FAQs/>
      <Ctaii />
      <Partners/>
      <CTA />
    </main>
  )
}

export default HomeLayout