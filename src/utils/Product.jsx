import { Link } from "react-router-dom";
import { products } from "../data/data";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};
const Product = () => {

  return (
      <>
          {products && products?.map((item) => (
              <motion.div
                  key={item.id}
              className={`flex md:flex-row flex-col gap-y-8 rounded-[12px] bg-${item.bgColor} lg:mb-[80px] mb-[50px] justify-between items-center boxShadow lg:py-[53px] p-4 lg:px-20 sticky top-20 w-full max-w-[1290px]`}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}>
            
            <div className="lg:mt-16 mt-9">
              <p className={`text-${item.textColor} lg:text-[48px] text-[24px] lg:leading-[67.2px] leading-[28px] font-bold lg:whitespace-nowrap whitespace-normal`}>{ item.header }</p>
                <p className={`text-${item.subtext} text-left text-base leading-tight lg:mb-[32px] my-[24px] max-w-[580px] lg:w-full w-[90%]`}>{item.description}</p>
                <Link to={`/${item.route}`} className={`text-${item.btnTextColor} bg-${item.btnBgColor} lg:py-[10px] py-[7px] px-[38.5px] lg:px-[39.5px] lg:rounded-[4px] rounded-[3.1px] lg:mb-0 mb-[24px] lg:text-[18px] text-[14px] font-medium lg:leading-[21.6px] leading-[16.8px] hover:scale-105 active:scale-95 transition-all duration-300`}>{item.btnText}</Link>
            </div>

            <div className="md:mb-0 mb-[48px] lg:w-[433px] w-full lg:h-[415px] h-full">
              <img src={item.imgSrc} alt="product-img" className="h-full w-full object-contain" loading="lazy"/>
            </div>
          </motion.div>
        ))}
    </>
  )
}

export default Product