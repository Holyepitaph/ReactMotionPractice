// Needs font size adjustment
// button needs adjustment
export function ParA(){
    return(
        <div className="sm:h-96 h-44 pt-52 sm:mb-24 lg:mb-8 pb-36 flex flex-col justify-center items-center text-center px-8 sm:px-10">
            <div className="sm:text-3xl text-2xl font-medium">Unleashing AI-Powered Workflows for Unstructured Data</div>
            <div className="text-sm sm:text-base sm:font-medium my-6 ">Empowering modern enterprises with intelligent data extraction and automation tools.</div>
            <button className="bg-black text-white p-2 px-6 text-sm rounded-xl">Get started</button>
        </div>
    )
}

// Change first to border small view
// adjust font size and colors
export function ParB(){
    return(
        <div className="w-4/5 pl-4 h-80 flex flex-col mb-16 sm:mb-6 lg:ml-[11.5rem]">
            <span className="border border-black w-14 text-center text-[10px] font-bold mt-[4.2rem] mb-11 sm:my-14 ">Features</span>
            <div className="text-[22px]/6 lg:text-[2rem] lg:w-[38rem] font-medium ">Seamlessly process diverse content such as documents, emails, and images using smart technology.</div>
            <div className="text-gray-400  lg:text-[2rem] lg:w-[38rem]  text-[22px]/6">Equip yourself with potent tools for extraction, classification, and analysis, addressing your toughest business challenges.</div>
        </div>
    )
}