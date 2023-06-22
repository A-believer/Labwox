import Header from "../utils/Header"
import { products } from "../data/data"

const ProductList = () => {
  return (
    <section className="w-auto h-auto bg-whitebgii">
      {/* Header */}
      <div className="w-full lg:pt-[75px] pt-[24px] mx-auto text-center flex flex-col justify-center">
        <Header text1={`Some of Our`} text2={`Services`} text3={`Laboratories`} />
        <p className="lg:mx-auto mx-[24px] text-base leading-[19.2px] text-center mt-[24px] mb-[17px]">Labwox provides cutting-edge solutions to support research and learning in the chemical sciences</p>
      </div>

      {/* Product List */}
      <div className="lg:mt-[104px] mt-[16px] mx-[25px] lg:mx-[75px] flex flex-col justify-center">
        
        {products && products?.map((item, i) => (
          <div key={item.key + i} className={`flex lg:flex-row flex-col rounded-[12px] bg-${item.bgColor} lg:mb-[100px] mb-[60px] justify-evenly items-center ml-[15px] mr-[16px]`}>
            <div className="lg:mt-[53px] mt-[33px] lg:ml-[66px] lg:mr-[73px]">
              <p>{ item.header }</p>
              <p>Labwox provides cutting-edge solutions to support research and learning in the chemical sciences</p>
              <button type="button">Learn More</button>
            </div>
            <div className="lg:w-[433px] w-[348px] lg:h-[415px] h-[333.534px]">
              <img src={item.imgSrc} alt="product-img" className=" object-contain"/>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProductList