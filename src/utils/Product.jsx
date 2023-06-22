import { products } from "../data/data";
// import { motion } from "framer-motion";

const Product = () => {

//     const cardVariants = {
//   offscreen: {
//     y: 300
//   },
//   onscreen: {
//     y: 50,
//     rotate: -10,
//     transition: {
//       type: "spring",
//       bounce: 0.4,
//       duration: 0.8
//     }
//   }
// };
    
    
  return (
      <div className="gap-y-[16px]">
          {products && products?.map((item) => (
              <div
                  key={item.id}
                  className={`flex lg:flex-row flex-col rounded-[12px] bg-${item.bgColor} lg:mb-[100px] mb-[60px] justify-evenly boxShadow lg:py-[53px] lg:pr-[73px] lg:pl-[66px] px-[15px]`}>
            
            <div className="lg:mt-[53px] mt-[33px]">
              <p className={`text-${item.textColor} lg:text-[56px] text-[24px] lg:leading-[67.2px] leading-[28px] font-bold`}>{ item.header }</p>
              <p className={`text-${item.subtext} text-left text-base leading-tight lg:mb-[32px] my-[24px] w-[90%]`}>Labwox provides cutting-edge solutions to support research and learning in the chemical sciences</p>
              <button type="button" className={`text-${item.btnTextColor} bg-${item.btnBgColor} lg:py-[10px] py-[7px] px-[38.5px] lg:px-[39.5px] lg:rounded-[4px] rounded-[3.1px] lg:mb-0 mb-[24px] lg:text-[18px] text-[14px] font-medium lg:leading-[21.6px] leading-[16.8px]`}>Learn More</button>
            </div>

            <div className="lg:w-[433px] w-[348px] lg:h-[415px] h-[333.534px] lg:mb-0 mb-[48px]">
              <img src={item.imgSrc} alt="product-img" className=" object-contain"/>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Product