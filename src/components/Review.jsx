import React from "react";

export default function Review({ img }) {
  return (
    <>
      <div className="flex md:mx-3 mt-7">
        <div>
          <img src={img}></img>
        </div>

        <div className="my-auto mx-2">
          <img
            className="h-[20px] w-[155px]"
            src="https://res-console.cloudinary.com/dekobspwg/thumbnails/v1/image/upload/v1716035778/bXlfYXNzZXN0L0NvcHlfb2ZfbW90aW9uYXJ0ZWZmZWN0LWltZzRfaXduZm5n/drilldown"
          ></img>
          <p className="text-white/80 font-sora text-sm mt-3">
            4.5 Score, 9 Reviews
          </p>
        </div>
      </div>
    </>
  );
}
