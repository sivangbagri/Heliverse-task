import React from 'react'

export default function Header() {
  return (
    <>
    <div className='flex justify-between py-5 mt-12'>
        <div>
            <img className='ml-5' src="https://res-console.cloudinary.com/dekobspwg/thumbnails/v1/image/upload/v1716035778/bXlfYXNzZXN0L0NvcHlfb2ZfTW90aW9uQXJ0RWZmZWN0LWxvZ29fcWlpcXhy/drilldown"/>
        </div>
        <div className='m-2'>
            <button className=' bg-white border-2 py-1 px-1 border-[#of101b] rounded-md text-black font-sora md:px-9  text-sm md:text-md font-normal md:py-3 hover:bg-transparent hover:text-white hover:border-white '>Purchase Now</button>
        </div>

    </div>
    
    </>
  )
}
