import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="bg-[#262626] flex justify-between text-white py-3 top-0 w-full fixed">
        <div className="flex  cursor-pointer">
            <div >
                <img className="size-10 items-center ml-2" src="https://res-console.cloudinary.com/dekobspwg/thumbnails/v1/image/upload/v1716035776/bXlfYXNzZXN0L0NvcHlfb2ZfbW90aW9uYXJ0ZWZmZWN0LWltZzJfaGVucXRi/drilldown"></img>
            </div>
            <div>
                <p><span className="text-white font-normal text-xl font-sora">envato</span> <span className="text-[#82b440] ml-0 font- text-2xl font-outfit">market</span></p>
            </div>
        </div>
        <div className="pr-5">
            <button className="bg-[#82b440] rounded-md items-center font-sora text-sm py-2 px-5 shadow-sm shadow-black hover:bg-[#82b440]/90">Buy now</button>

        </div>
      </div>
    </>
  );
}
