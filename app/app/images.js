import Image from 'next/image'

// Needs to have scroll animation 
// Needs Images Replaced
export function ImageA(){
    return(
        <div className='flex'>
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
        </div>
    )
}