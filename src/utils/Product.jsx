import { products } from "../data/data";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};
const Product = () => {
  console.log(products)
  return (
      <div>
          {products && products?.map((item) => (
              <motion.div
                  key={item.id}
              className={`flex lg:flex-row flex-col rounded-[12px] bg-${item.bgColor} lg:mb-[80px] mb-[50px] justify-between items-center boxShadow lg:py-[53px] lg:pr-[66px] lg:pl-[66px] px-[15px] sticky top-20`}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}>
            
            <div className="lg:mt-[53px] mt-[33px]">
              <p className={`text-${item.textColor} lg:text-[56px] text-[24px] lg:leading-[67.2px] leading-[28px] font-bold`}>{ item.header }</p>
                <p className={`text-${item.subtext} text-left text-base leading-tight lg:mb-[32px] my-[24px] w-[90%]`}>{ item.description}</p>
              <button type="button" className={`text-${item.btnTextColor} bg-${item.btnBgColor} lg:py-[10px] py-[7px] px-[38.5px] lg:px-[39.5px] lg:rounded-[4px] rounded-[3.1px] lg:mb-0 mb-[24px] lg:text-[18px] text-[14px] font-medium lg:leading-[21.6px] leading-[16.8px] hover:scale-105 active:scale-95 transition-all duration-300`}>Order Tests</button>
            </div>

            <div className="lg:mb-0 mb-[48px]">
              <img src={item.imgSrc} alt="product-img" className="lg:w-[390px] w-[348px] lg:h-[380px] h-[300px] object-contain" loading="lazy"/>
            </div>
          </motion.div>
        ))}
    </div>
  )
}

export default Product