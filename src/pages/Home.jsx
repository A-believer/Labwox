import { Banner, Cta, Hero, Onboarding, ProductList } from "../components"

const Home = () => {
  return (
    <main className="bg-whitebg">
      <Hero/>
      <Banner />
      <ProductList />
      <Onboarding />
      <Cta/>
    </main>
  )
}

export default Home