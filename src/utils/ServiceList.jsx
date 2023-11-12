import { products } from "../data/data";

const ServiceList = () => {

  return (
      <div className="gap-y-[16px] bg-white">
          {products?.map((item) => (
              <div
                  key={item.id}
              className={`flex ${(item.id % 2) == 0 ? "lg:flex-row-reverse" : "lg:flex-row"} flex-col rounded-[12px] bg-white lg:mb-[80px] mb-[50px] justify-between boxShadow items-center lg:py-[53px] lg:pr-[66px] lg:pl-[66px] px-[15px] lg:text-left text-center gap-x-10`}>
            
            <div className="lg:mt-[53px] mt-[33px] text-blackii">
              <p className={`lg:text-[56px] text-[24px] lg:leading-[67.2px] leading-[28px] font-bold`}>{ item.header }</p>
              <p className={` text-base leading-tight lg:mb-[32px] my-[24px] md:w-[600px] w-[90%] mx-auto`}>{item.services}</p>
            </div>

            <div className="lg:mb-0 mb-[18px] lg:py-[50px] py-[30px] lg:px-[32px] px-[16px] bg-whitebgiii rounded w-fit h-full">
              <img src={item.imgSrc} alt="product-img" className="lg:w-[390px] w-[348px] lg:h-[400px] h-[333.534px] object-cover" loading="lazy"/>
            </div>
          </div>
        ))}
    </div>
  )
}

export default ServiceList