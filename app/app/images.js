import Image from 'next/image'

// Needs to have scroll animation 
// Needs Images Replaced
export function ImageA(){
    return(
        <div className='flex bg-white h-[25rem] rounded-md m-2 justify-end shadow-md'>
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
        </div>
    )
}