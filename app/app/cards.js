import Image from 'next/image'

//Make actual Cards

// Add symbols border and background add font sizes and boldness
export function CardA(){
    return(
        <div className='h-[26.5rem] border border-gray-200 rounded-lg mx-4 flex flex-col justify-end shadow-lg bg-white'>
            <div className="flex gap-4 w-full justify-center">
                <div className="flex border border-gray-200 rounded-lg drop-shadow-xl bg-white px-2 gap-1 text-blue-300 font-medium">
                    <div>S</div>
                    <div> Extract</div>
                </div>
                <div className="flex border border-gray-200 rounded-lg drop-shadow-xl bg-white px-2 gap-1 text-pink-500 font-medium">
                    <div>S</div>
                    <div>Classify</div>
                </div>
                <div className="flex border border-gray-200 rounded-lg drop-shadow-xl bg-white px-2 gap-1 text-yellow-500 font-medium">
                    <div>S</div>
                    <div>Q&A</div>
                </div>
                <div className="flex border border-gray-200 rounded-lg drop-shadow-xl bg-white px-2 gap-1 text-green-400 font-medium">
                    <div>S</div>
                    <div>Analyze</div>
                </div>
            </div>
            <div className="flex gap-4 w-full justify-center py-3">
                 <div className="flex border border-gray-200 rounded-lg drop-shadow-xl bg-white px-2 gap-1">
                    <div>S</div>
                    <div>API</div>
                </div>
                <div className="flex border border-gray-200 rounded-lg drop-shadow-xl bg-white px-2 gap-1">
                    <div>S</div>
                    <div>Email</div>
                </div>
                <div className="flex border border-gray-200 rounded-lg drop-shadow-xl bg-white px-2 gap-1">
                    <div>S</div>
                    <div>Embed</div>
                </div>
                <div className="flex border border-gray-200 rounded-lg drop-shadow-xl bg-white px-2 gap-1">
                    <div>S</div>
                    <div>GDrive</div>
                </div>
            </div>
            <div className="flex gap-4 w-full justify-center">
                <div className="flex border border-gray-200 rounded-lg drop-shadow-xl bg-white px-2 gap-1">
                    <div>S</div>
                    <div>Airtable</div>
                </div>
                <div className="flex border border-gray-200 rounded-lg drop-shadow-xl bg-white px-2 gap-1 text-green-700 font-medium">
                    <div>S</div>
                    <div>Sheets</div>
                </div>
                <div className="flex border border-gray-200 rounded-lg drop-shadow-xl bg-white px-2 gap-1 text-yellow-700 font-medium">
                    <div>S</div>
                    <div>Zapier</div>
                </div>
                <div className="flex border border-gray-200 rounded-lg drop-shadow-xl bg-white px-2 gap-1">
                    <div>S</div>
                    <div>Notion</div>
                </div>
            </div>
            <div className='mt-36 mb-4 mx-4 text-sm'>
                <div className='font-bold mb-2'>Build end-to-end solutions</div>
                <div>Combine powerful AI tools with business logic, validations, and itegrations.</div>
            </div>
        </div>
    )
}


// Change image adjust font size and boldness
//The image may actually be something else as the text is touchable.
//Yeah looks like a bunch of lines are actually being made and connect each.
export function CardB(){
    return(
        <div className='h-[27rem] border border-gray-200 m-4 p-4 flex flex-col justify-end bg-white rounded-lg shadow-lg'>
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className=" "
              width={100}
              height={24}
              priority
            />
            <div className='text-sm'>
                <div className='font-medium mb-2'>Workflows that work the way you do</div>
                <div>Create custom workflows that mirror your internal operations and let them run on autopilot -- no engineering resources required.</div>
            </div>
        </div>
    )
}

//Image needs to be changed as would be imagined
//Font size and boldness needs changing
export function CardC(){
    return(
        <div className='h-[26rem] border border-gray-200 p-4 m-4 rounded-lg shadow-lg bg-white flex flex-col justify-end'>
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className=" "
              width={100}
              height={24}
              priority
            />
            <div className='text-sm'>
                <div className='mb-2 font-medium'>Human-in-the-loop confidence</div>
                <div>Extend comes with built-in confidence scoring and human-in-the-loop flows so you can confidently deploy into production.</div>
            </div>
         </div>
    )
}

//Change image font size and boldness
export function CardD(){
    return(
        <div className='h-[27.75rem] border border-gray-200 p-4 m-4 rounded-lg shadow-lg bg-white flex flex-col justify-end'>
             <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className=""
              width={100}
              height={24}
              priority
            />
            <div className='text-sm'>
                <div className='mb-2 font-medium'>Unlock any data type</div>
                <div>PDF, CSV, XLSX, IMG, HTML. You name it, Extend handles it. Even those messy handwritten doctor notes.</div>
            </div>
        </div>
    )
}

//Make individual cards within this card
//Adjust font size and boldness
//add image
export function CardE(){
    return(
        <div className='h-[48rem] border border-gray-200 p-4 m-4 rounded-lg shadow-lg bg-white flex flex-col justify-evenly items-center'>
            <div className='flex flex-col items-center'>
                <div>S</div>
                <div className='text-2xl pt-4 font-medium'>Enterprise Ready</div>
            </div>
            <div className='border border-gray-200 text-sm w-1/2 p-3 rounded-xl shadow-lg'>
                <div className='font-bold mb-2'>On-Prem Deployment</div>
                <div>Deploy Extend on-premises entirely within your own cloud.</div>
            </div>
            <div className='border border-gray-200 text-sm w-1/2 p-3 rounded-xl shadow-lg'>
                <div className='font-bold mb-2'>SOC 2</div>
                <div>Extend is compliant with SOC2 policies (report on request).</div>
            </div>
            <div className='border border-gray-200 text-sm w-1/2 p-3 rounded-xl shadow-lg'>
                <div className='font-bold mb-2'>Data Protection</div>
                <div>Your data is always secure, encrypted, and never used for training purposes. Extend integrates with Azure OpenAI instances for additional protection.</div>
            </div>
            <div className='border border-gray-200 text-sm w-1/2 p-3 rounded-xl shadow-lg'>
                <div className='font-bold mb-2'>Security</div>
                <div>Extend comes with audit logs, granular permissions, and custom data retention policies to ensure compliance and security every step of the way.</div>
            </div>
        </div>
    )
}