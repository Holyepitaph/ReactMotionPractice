import Image from 'next/image'
import { useRef } from "react";
import { motion, useScroll } from 'framer-motion'

// Needs to have scroll animation 
// Needs Images Replaced
export function ImageA(){

    return(
        <div  className='mx-2 xl:w-full'>
          <motion.div initial={{rotateX:320}} whileInView={{rotateX:360}} 
        viewport={{ amount: 0.8, margin: "500px 0px 0px 0px" }} transition={{type:"linear"}}
          className='flex bg-white h-64 lg:w-[50rem] xl:w-5/6 lg:mx-20 xl:mx-12 lg:mb-36 sm:h-[25rem] 
          rounded-md m-2 justify-end shadow-md' 
          >
              <Image
                src="/A.png"
                alt="First Thing"
                className="bg-gray-300 py-6 px-6 w-1/2 mr-auto rounded"
                width={225}
                height={250}
                priority
              />
              <Image
                src="/B.png"
                alt="Second Thing"
                className=" py-6 w-[50%]"
                width={225}
                height={250}
                priority
              />
          </motion.div>
        </div>
    )
}