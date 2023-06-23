import { Banner, CTA, Ctaii, Hero, Onboarding, ProductList } from "../components"

const Home = () => {
  return (
    <main className="bg-whitebg">
      <Hero/>
      <Banner />
      <ProductList />
      <Onboarding />
      <Ctaii/>
      <CTA/>
    </main>
  )
}

export default Home