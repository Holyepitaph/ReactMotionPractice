import { motion } from 'framer-motion'

export function Meteor(){
    return(
        <div>
            <motion.div animate={{x:100}}>Hello</motion.div>
            <motion.div className='test'
            animate={{x:500}}
            transition={{ duration: 6, repeat: Infinity }}></motion.div>
        </div>
    )
}

// change font size
// add animation to second portion
export function ScrollBar(){
    return(
        <div>
            <div>Backed By World-class investors and advisors</div>
            <div className='flex gap-2'>
                <div className='flex'>
                    <div>S</div>
                    <div>OpenAI</div>
                </div>
                <div className='flex'>
                    <div>S</div>
                    <div>Character</div>
                </div>
                <div className='flex'>
                    <div>S</div>
                    <div>Brex</div>
                </div>
                <div className='flex'>
                    <div>S</div>
                    <div>Airbnb</div>
                </div>
                <div className='flex'>
                    <div>S</div>
                    <div>Innovation Endeavors</div>
                </div>
                <div className='flex'>
                    <div>S</div>
                    <div>Newfront Insurance</div>
                </div>
                <div className='flex'>
                    <div>S</div>
                    <div>Y Combinator</div>
                </div>
                <div className='flex'>
                    <div>S</div>
                    <div>Homebrew</div>
                </div>
            </div>
        </div>
    )
}