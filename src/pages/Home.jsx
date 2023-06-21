import { Banner, Hero, ProductList } from "../components"

const Home = () => {
  return (
    <main className="bg-whitebg">
        <Hero/>
      <Banner />
      <ProductList/>
    </main>
  )
}

export default Home