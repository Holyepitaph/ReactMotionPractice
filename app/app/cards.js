import Image from 'next/image'
import { motion } from 'framer-motion'

//Make actual Cards

// Add symbols border and background add font sizes and boldness
export function CardA(){
    return(
        <div className='h-[26.5rem] md:h-[27rem] text-xs sm:text-base overflow-x-hidden border border-gray-200 rounded-lg mx-4 flex flex-col justify-end shadow-lg bg-white'>
            <div className="flex gap-4 w-full justify-center">
                <div className="flex border border-gray-200 rounded-lg drop-shadow-xl bg-white px-2 gap-1 text-blue-300 font-medium">
                    <div>D</div>
                    <div>Insight Sync</div>
                </div>
                <div className="flex border border-gray-200 rounded-lg drop-shadow-xl bg-white px-2 gap-1 text-pink-500 font-medium">
                    <div>D</div>
                    <div>Docu Flow</div>
                </div>
                <div className="flex border border-gray-200 rounded-lg drop-shadow-xl bg-white px-2 gap-1 text-yellow-500 font-medium">
                    <div>D</div>
                    <div>Q&A</div>
                </div>
                <div className="flex border border-gray-200 rounded-lg drop-shadow-xl bg-white px-2 gap-1 text-green-400 font-medium">
                    <div>D</div>
                    <div>Analyze</div>
                </div>
            </div>
            <div className="flex gap-4 w-full justify-center py-3">
                 <div className="flex border border-gray-200 rounded-lg drop-shadow-xl bg-white px-2 gap-1">
                    <div>D</div>
                    <div>API</div>
                </div>
                <div className="flex border border-gray-200 rounded-lg drop-shadow-xl bg-white px-2 gap-1">
                    <div>D</div>
                    <div>Email</div>
                </div>
                <div className="flex border border-gray-200 rounded-lg drop-shadow-xl bg-white px-2 gap-1">
                    <div>D</div>
                    <div>Embed</div>
                </div>
                <div className="flex border border-gray-200 rounded-lg drop-shadow-xl bg-white px-2 gap-1">
                    <div>D</div>
                    <div>Data V</div>
                </div>
            </div>
            <div className="flex gap-4 w-full justify-center">
                <div className="flex border border-gray-200 rounded-lg drop-shadow-xl bg-white px-2 gap-1">
                    <div>D</div>
                    <div>Extrac Tech</div>
                </div>
                <div className="flex border border-gray-200 rounded-lg drop-shadow-xl bg-white px-2 gap-1 text-green-700 font-medium">
                    <div>D</div>
                    <div>Precision Scan</div>
                </div>
                <div className="flex border border-gray-200 rounded-lg drop-shadow-xl bg-white px-2 gap-1 text-yellow-700 font-medium">
                    <div>D</div>
                    <div>Sync Flow</div>
                </div>
                <div className="flex border border-gray-200 rounded-lg drop-shadow-xl bg-white px-2 gap-1">
                    <div>D</div>
                    <div>Content IQ</div>
                </div>
            </div>
            <div className='sm:mt-36 mt-20 mb-4 mx-4 text-sm'>
                <div className='font-bold mb-2'>Build end-to-end solutions</div>
                <div>Develop comprehensive solutions by blending robust AI capabilities with business logic, validations, and integrations.</div>
            </div>
        </div>
    )
}


// Change image adjust font size and boldness
//The image may actually be something else as the text is touchable.
//Yeah looks like a bunch of lines are actually being made and connect each.
export function CardB(){
    return(
        <div className='h-[27rem] md:mt-0 lg:mt-0 overflow-x-hidden border border-gray-200 m-4 sm:mb-0 p-4 flex flex-col justify-end bg-white rounded-lg shadow-lg'>
            <div className='h-[90px] sm:mb-8 border px-1 border-gray-200 bg-white rounded-lg shadow-lg w-[228px] text-xs flex flex-col justify-start'>
                <div className='mx-2 mt-1.5'>D ExtractX</div>
                <div className='bg-gray-200 w-fit text-[12px] rounded text-center px-1 mx-2 mb-1 mt-2'>has overviews</div>
                <div className='bg-gray-200 w-fit text-[12px] rounded text-center px-1 mx-2'>has GameTime TM</div>
            </div>
            <motion.div className="sm:w-[10.5rem] w-[8.4rem] border border-black relative -left-[2.97rem] top-[4.14rem] sm:-left-16 sm:top-[3.25rem]" style={{rotate:90}}></motion.div>
            <div className='mx-[92px] mb-3 h-[90px] border border-gray-200 bg-white px-2 pt-2 rounded-lg shadow-lg w-[228px] text-xs flex flex-col justify-start'>
                <div className='pb-2'>D AnalyzePlus</div>
                <div>Update user states to positive</div>
                <div className='w-[4.5rem] border border-black relative -left-[5.05rem] -top-2'></div>
                <div className='text-green-700 font-bold relative w-fit -left-14 -top-4 border border-gray-200 bg-white px-1 rounded shadow-lg'>true</div>
            </div>
            <div className='mx-[92px] mb-12 h-[90px] border border-gray-200 bg-white px-2 py-2 rounded-lg shadow-lg w-[228px] text-xs flex flex-col justify-start'>
                <div className='pb-2'>D Image Scribe</div>
                <div>Send message in Extract Timing</div>
                <div className='w-[4.6rem] border border-black relative -left-[5.12rem] -top-[.4rem]'></div>
                <div className='text-red-700 font-bold relative w-fit -left-16 -top-4 border border-gray-200 bg-white px-1 rounded shadow-lg'>false</div>
            </div>
            <div className='text-sm'>
                <div className='font-bold mb-2'>Workflows that work the way you do</div>
                <div>Tailored workflows that harmonize with your operations, orchestrating automated processes without the need for engineering resources.</div>
            </div>

        </div>
    )
}

//Image needs to be changed as would be imagined
//Font size and boldness needs changing
export function CardC(){
    return(
        <div className='h-[26rem] md:h-[27.75rem] border border-gray-200 p-4 m-4 sm:mb-0 rounded-lg shadow-lg bg-white flex flex-col justify-end'>
            <Image
              src="/d.png"
              alt="Vercel Logo"
              className="w-80 h-64 "
              width={100}
              height={24}
              priority
            />
            <div className='text-sm'>
                <div className='mb-2 font-medium'>Confidence Anchored in Human Insight</div>
                <div>DataFlowPro introduces built-in confidence scoring and human-in-the-loop flows, instilling the assurance needed for deployment.</div>
            </div>
         </div>
    )
}

//Change image font size and boldness
export function CardD(){
    return(
        <div className='h-[27.75rem] border border-gray-200 p-4 m-4 sm:mb-0 rounded-lg shadow-lg bg-white flex flex-col justify-end'>
             <Image
              src="/c.png"
              alt="Vercel Logo"
              className="h-72 w-72 m-auto"
              width={100}
              height={24}
              priority
            />
            <div className='text-sm'>
                <div className='mb-2 font-medium'>Data Unleashed, Any Format Tamed</div>
                <div>From PDFs and CSVs to XLSX, images, and even unruly handwritten notes—DataFlowPro deftly manages them all.</div>
            </div>
        </div>
    )
}

//Make individual cards within this card
//Adjust font size and boldness
//add image
export function CardE(){
    return(
        <div className='h-[48rem] border border-gray-200 p-4 sm:mb-24 m-4 rounded-lg shadow-lg bg-white flex flex-col justify-evenly items-center'>
            <div className='flex flex-col items-center'>
            <Image
              src="/e.png"
              alt="Vercel Logo"
              className=" m-auto h-auto w-auto"
              width={25}
              height={20}
              priority
            />
                <div className='text-2xl sm:pt-4 font-medium'>Enterprise Ready</div>
            </div>
            <div className='border border-gray-200 text-sm sm:w-1/2 sm:p-3 rounded-xl shadow-lg p-5'>
                <div className='font-bold sm:mb-2'>Empower Your Cloud with On-Premise Deployment</div>
                <div>Seamlessly integrate DataFlowPro within your private cloud infrastructure.</div>
            </div>
            <div className='border border-gray-200 text-sm sm:w-1/2 sm:p-3 rounded-xl shadow-lg p-5 w-full'>
                <div className='font-bold sm:mb-2'>Fortified Compliance</div>
                <div>DataFlowPro adheres to SOC2 policies</div>
            </div>
            <div className='border border-gray-200 text-sm sm:w-1/2 sm:p-3 rounded-xl shadow-lg p-[1.2rem]'>
                <div className='font-bold sm:mb-2'>Data Protection Redefined</div>
                <div>Data privacy is paramount. DataFlowPro ensures data security, encryption, and never employs your data for training purposes. It collaborates seamlessly with Azure OpenAI instances, providing an extra layer of safeguarding.</div>
            </div>
            <div className='border border-gray-200 text-sm sm:w-1/2 sm:p-3 rounded-xl shadow-lg p-[1.2rem]'>
                <div className='font-bold sm:mb-2'>Impeccable Security Measures</div>
                <div>DataFlowPro is equipped with audit logs, fine-grained permissions, and customizable data retention policies, ensuring steadfast compliance and security throughout your journey.</div>
            </div>
        </div>
    )
}