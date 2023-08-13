import Image from 'next/image'
import { useRef } from "react";
import {motion, useScroll} from "framer-motion"


export function Test(){
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["end end", "start start"]
    });
    const rotation = `rotateX(${scrollYProgress}deg)`;
    return(
        <div ref={ref}>
            <motion.div className='flex bg-white h-[25rem] rounded-md m-2 justify-end shadow-md' style={{ scale: scrollYProgress}}>
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