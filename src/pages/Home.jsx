import { Banner, CTA, Ctaii, Hero, Onboarding, Partners, ProductList } from "../components"

const Home = () => {
  return (
    <main className="bg-whitebg">
      <Hero/>
      <Banner />
      <ProductList />
      <Onboarding />
      <Ctaii />
      <Partners/>
      <CTA />
    </main>
  )
}

export default Home