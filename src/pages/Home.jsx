import { Banner, CTA, Hero, Onboarding, ProductList } from "../components"

const Home = () => {
  return (
    <main className="bg-whitebg">
      <Hero/>
      <Banner />
      <ProductList />
      <Onboarding />
      <CTA/>
    </main>
  )
}

export default Home