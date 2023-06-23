import { Banner, Hero, Onboarding, ProductList } from "../components"

const Home = () => {
  return (
    <main className="bg-whitebg">
      <Hero/>
      <Banner />
      <ProductList />
      <Onboarding/>
    </main>
  )
}

export default Home