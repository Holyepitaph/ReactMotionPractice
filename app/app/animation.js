import React, { useEffect, useState} from "react";
import { motion, stagger, useAnimate  } from "framer-motion";

export function MeteorA(){
    const a = "0vw";
    const b = "50vw";
    const c = "80vw";
    return(
        <div>
            <motion.div className='test absolute top-[30rem]'
            animate={{x:[a,c], opacity:[0,.7,0]}}
            transition={{ duration: 6, repeat: Infinity, times:[0,.5,1], ease:"linear" }}></motion.div>
        </div>
    )
};

export function MeteorB(){
    const a = "0vw";
    const b = "50vw";
    const c = "80vw";
    return(
        <div>
            <motion.div className='test   absolute top-40'
            animate={{x:[a,c], opacity:[0,.7,0]}}
            transition={{ duration: 6, repeat: Infinity, times:[0,.5,1], delay:5, ease:"linear" }}></motion.div>
        </div>
    )
};

export function MeteorC(){
    const a = "0vw";
    const b = "50vw";
    const c = "80vw";
    return(
        <div>
            <motion.div className='test absolute top-64  '
            animate={{x:[a,c], opacity:[0,.7,0]}}
            transition={{ duration: 6, repeat: Infinity, times:[0,.5,1], delay:2, ease:"linear" }}></motion.div>
        </div>
    )
};

export function MeteorD(){
    const a = "0vw";
    const b = "50vw";
    const c = "80vw";
    return(
        <div>
            <motion.div className='test absolute top-80  '
            animate={{x:[a,c], opacity:[0,.7,0]}}
            transition={{ duration: 6, repeat: Infinity, times:[0,.5,1], delay:10, ease:"linear" }}></motion.div>
        </div>
    )
};

export function ScrollBar(){
  const [scope, animate] = useAnimate()
const a = '200%';
const c = "-300%";
const test = "infinite"
const marqueeVariantsA = {
  animate: {
    x: ["0%", "-100%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 30,
        ease: "linear",
        time:[0,1]
      },
    },
  },
};

const marqueeVariantsB = {
  animate: {
    x: ["0%", "-100%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 30,
        ease: "linear",
        time:[0,1]
      },
    },
  },
};

  return (
    <div className="bg-gray-200 lg:h-[14.6rem] h-52 mt-16 overflow-x-hidden shadow-lg sm:overflow-y-hidden">
        <div className="mb-4 ml-4 pt-14 pb-2">Backed By World-class investors and advisors</div>
        <div className="flex mx-0 h-full  w-10/12 mx-auto" ref={scope}>
            <motion.div  className="h-10 flex text-black font-bold text-sm w-auto p-fit gap-6 bg-gray-200"
              variants={marqueeVariantsA}
              animate="animate"
              id="test">
            <span className="pl-4 pt-2 w-24">S ExtractX</span>
            <span className="pt-2 w-[6.5rem] text-indigo-300">S Smart Parse</span>
            <span className="pt-2 w-28">S Analyze Plus</span>
            <span className="pt-2 w-24 text-red-500">S Text Mine</span>
            <span className="pt-2 w-28 text-blue-900">S Image Scribe</span>
            <span className="pt-2 w-32 text-red-500 ">S Insight Capture</span>
            <span className="pt-2 w-28 text-yellow-600">S Doc Scan 360</span>
            <span className="pt-2 w-28 text-yellow-600">S Content IQ</span>
                  </motion.div>
                  <motion.div className="h-10 flex text-black font-bold text-sm w-auto gap-6 bg-gray-200"
              variants={marqueeVariantsB}
              animate="animate"
              id="test">
            <span className="pl-4 pt-2 w-24">S ExtractX</span>
            <span className="pt-2 w-[6.5rem] text-indigo-300">S Smart Parse</span>
            <span className="pt-2 w-28">S Analyze Plus</span>
            <span className="pt-2 w-24 text-red-500">S Text Mine</span>
            <span className="pt-2 w-28 text-blue-900">S Image Scribe</span>
            <span className="pt-2 w-36 text-red-500 ">S Insight Capture</span>
            <span className="pt-2 w-28 text-yellow-600">S Doc Scan 360</span>
            <span className="pt-2 w-28 text-yellow-600">S Content IQ</span>
                  </motion.div>
        </div>
    </div>
  );
};
