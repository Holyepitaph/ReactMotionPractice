// Animation Needed also is see through and expands most screen on scroll
export function Menu(){
    return(
        <div>
            <div className="flex gap-1 rounded bg-white sticky top-0 bg-opacity-60 m-4 pl-4 pt-2 font-bold justify-start">
                <div>S</div>
                <div>Extend</div>
                <div className="ml-auto pr-4">
                  <div>
                    <button className="relative group">
                      <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
                        <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                          <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:rotate-[42deg]"></div>
                          <div className="bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 group-focus:-translate-x-10"></div>
                          <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:-rotate-[42deg]"></div>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
            </div>
            <div>
                <div>Investors</div>
                <div>Features</div>
                <div>Security</div>
            </div>
        </div>
    )
}

export function Footer(){
    return(
        <div className="h-64 bg-black text-white flex flex-col justify-end px-4">
            <div className="flex gap-2 font-bold">
                <div>S</div>
                <div>Extend</div>
            </div>
            <div className="text-[12px] mt-6">Intelligent data extraction and automation tools built for modern enterprises</div>
            <div className="flex gap-2 text-sm mb-10 mt-16">
                <a href="">Careers</a>
                <div className="px-1 bg-gray-600 rounded-md text-[12px]">We're hiring!</div>
                <a href="">LinkedIn</a>
                <a href="">Twitter</a>
            </div>
        </div>
    )
}



///below is the menu attached with framer