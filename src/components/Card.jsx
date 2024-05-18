import React from 'react'

export default function Card({img,title,content}) {
  return (
    <div className='bg-[#181129]  rounded-xl border-t-2 border-gray-700'>
        <div className=''>
            <img src={img}></img>
        </div>
        <div className='p-8'>
            <p className='text-2xl font-medium font-sora text-white'>{title}</p>
            <p className='text-gray-400 text-md font-normal font-outfit mt-2'>{content}</p>
        </div>
       

      
    </div>
  )
}
