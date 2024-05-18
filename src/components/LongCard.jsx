import React from "react";

export default function LongCard({ title, img, content,...props }) {
  return (
    <div className={`bg-[#181129]  rounded-xl border-t-2 border-gray-700 mx-4 p-5 my-8 ${props.className} `}>
      <div>
        <p className="text-2xl font-medium font-sora text-white">
          {title}
        </p>
        <p className="text-gray-400 text-md font-normal font-outfit mt-2">
          {content}
        </p>
      </div>
      <div className="mt-10">
        <img src={img}></img>
      </div>
    </div>
  );
}
