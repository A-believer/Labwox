import { Banner, CTA, Ctaii, FAQs, Hero, Notes_Videos, Onboarding, Partners, ProductList } from "../components"

const Home = () => {
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

export default Home