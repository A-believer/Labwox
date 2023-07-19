
import Header from "../utils/Header"
import Product from "../utils/Product";

const ProductList = () => {
  
  return (
    <section className="w-auto h-auto lg:pt-[30px] pt-[24px] lg:px-[75px] px-[24px] lg:pb-[30px] pb-[10px] bg-whitebgii">
      
      {/* Header */}
      <div className="w-full  mx-auto text-center flex flex-col justify-center">
        <Header text1={`Testing`} text2={`Services`} tColor={`blackii`}/>
        <p className="lg:mx-auto mx-[24px] text-base leading-[19.2px] text-center mt-[24px] mb-[17px]">
          Labwox provides cutting-edge solutions to support research and learning in the chemical sciences
        </p>
      </div>

      {/* Product List */}
      <div className="lg:mt-[75px] mt-[16px]">
        <Product/>
      </div>
    </section>
  )
}

export default ProductList