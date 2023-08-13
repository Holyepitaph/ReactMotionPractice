// Needs font size adjustment
// button needs adjustment
export function ParA(){
    return(
        <div className="h-96 flex flex-col justify-center items-center text-center px-10">
            <div className="text-3xl font-medium">AI-Powered Workflows for Unstructured Data</div>
            <div className="font-medium my-6">Intelligent data extraction and automation tools built for modern enterprises</div>
            <button className="bg-black text-white p-2 px-6 text-sm rounded-xl">Get started</button>
        </div>
    )
}

// Change first to border small view
// adjust font size and colors
export function ParB(){
    return(
        <div className="w-4/5 pl-4 h-80 flex flex-col">
            <span className="border border-black w-14 text-center text-[10px] font-bold my-14 ">Features</span>
            <div className="text-[22px]/6 font-medium ">Intelligently process documents, emails, images, and any kind of unstructured data.</div>
            <div className="text-gray-400 text-[22px]/6 ">Bring powerful tools for extraction, classification, and analysis to your hardest business problems.</div>
        </div>
    )
}