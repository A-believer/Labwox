/* eslint-disable no-unused-vars */
import Hero from "./Hero";
import Hero_ChemXpert from "./Hero_ChemXpert";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function MainHero() {

    const [component, setComponent] = useState(true);
    const [isHovered, setIsHovered] = useState(true);
  const controls = useAnimation();

  const transition = { duration: 1, ease: "easeOut" };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        controls.start({ opacity: 0 }).then(() => {
        setComponent(!component);
        controls.start({ opacity: 1 });
      });
      }
      
    }, 5000); 

    return () => {
      clearInterval(interval);
    };
  }, [component, controls, isHovered]);
    return (
      <div className="py-2 lg:px-[60px] px-6 bg-heroBg bg-contain bg-no-repeat">
            <motion.section
                initial={{ opacity: 1 }}
            animate={controls}
          transition={transition}
          onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
                className="flex md:flex-row flex-col justify-between items-center">
                {component ? <Hero/> : <Hero_ChemXpert btnText={"Register Here"} btnTextII={"Explore More"} route={`/chemxpert`}/>}
    </motion.section>   
      </div>
      
  )
}
