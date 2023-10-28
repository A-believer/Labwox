/* eslint-disable no-unused-vars */
import Hero from "./Hero";
import Hero_ChemXpert from "./Hero_ChemXpert";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";


export default function MainHero() {

    const [component, setComponent] = useState(true);
  const controls = useAnimation();

  const transition = { duration: 1, ease: "easeOut" };

  useEffect(() => {
    const interval = setInterval(() => {
      controls.start({ opacity: 0 }).then(() => {
        setComponent(!component);
        controls.start({ opacity: 1 });
      });
    }, 5000); 

    return () => {
      clearInterval(interval);
    };
  }, [component, controls]);
    return (
      <div className="py-2 lg:px-[60px] px-6 bg-heroBg bg-contain bg-no-repeat">
            <motion.section
                initial={{ opacity: 1 }}
            animate={controls}
            transition={transition}
                className="flex md:flex-row flex-col justify-between items-center">
                {component ? <Hero/> : <Hero_ChemXpert/>}
    </motion.section>   
      </div>
      
  )
}
