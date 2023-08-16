import React from "react";
import {motion} from 'framer-motion'

// Animation Needed also is see through and expands most screen on scroll
export function Menu(){
  const [isClick, toggleClick] = React.useState(false);
  const toggleClickMenu = () => {
    toggleClick(!isClick);
  };
  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 1
      },
      display: "flex"
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
        delay: 0.3
      },
      transitionEnd: {
        display: "none"
      }
    }
  };
    return(
        <div className="lg:w-[34.7rem] lg:mx-auto lg:h-14 lg:text-xl lg:pt-4 rounded-lg bg-white sticky top-4 bg-opacity-40 backdrop-blur-md  mx-4 sm:m-4 pl-4 pt-2 font-bold shadow-lg sm:mb-11 mb-16 z-10">
            <div className="flex gap-1  justify-start">
                <div>S</div>
                <div>Extend</div>
                <div className="ml-auto pr-4">
                  <div className="-mt-2 pb-2">
                    <button className="relative group" onClick={toggleClickMenu}>
                      <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[25px] h-[25px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
                        <div className="flex flex-col justify-between w-[10px] h-[10px] transform transition-all duration-300 origin-center overflow-hidden">
                          <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:rotate-[42deg]"></div>
                          <div className="bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 group-focus:-translate-x-10"></div>
                          <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:-rotate-[42deg]"></div>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
            </div>
            <motion.div
            initial="exit"
              animate={isClick ? "enter" : "exit"}
              variants={subMenuAnimate}
              className="h-[6.5rem] lg:bg-white lg:rounded lg:w-[34.7rem] lg:-ml-4 lg:mt-2 lg:pl-4 lg:z-20 lg:bg-opacity-40 lg:backdrop-blur-md flex-col justify-evenly text-sm font-medium text-gray-500"
              >
                <div>Investors</div>
                <div>Features</div>
                <div>Security</div>
            </motion.div>
        </div>
    )
}

export function Footer(){
    return(
        <div className="sm:h-64 h-[18.5rem] bg-black text-white flex flex-col justify-end px-4">
            <div className="flex gap-2 font-bold">
                <div>S</div>
                <div>Extend</div>
            </div>
            <div className="text-[12px] mt-6">Intelligent data extraction and automation tools built for modern enterprises</div>
            <div className="flex gap-2 text-sm sm:mb-10 mb-14 mt-16">
                <a href="">Careers</a>
                <div className="px-1 bg-gray-600 mb-4 rounded-md text-[12px]">We&apos;re hiring!</div>
                <a href="">LinkedIn</a>
                <a href="">Twitter</a>
            </div>
        </div>
    )
}



///below is the menu attached with framer