import React from "react";
import Review from "./Review";

export default function Hero() {
  return (
    <>
      {/* linear-gradient(90deg, #F87516 0%, #5E11FF 100%); */}
      <div className="flex flex-wrap text-center md:text-start mt-12 mx-5">
        <div className="px-5 md:mr-36  md:mx-0 mx-auto">
          <p className=" bg-gradient-to-r from-[#F87516] to-[#5E11FF] to-50% text-transparent bg-clip-text font-sora font-semibold text-lg">
            Transform 
          </p>
          <p className="bg-gradient-to-r from-[#F87516] to-[#5E11FF] to-50% text-transparent bg-clip-text font-sora font-semibold text-lg">
          Your Website
          </p>
          <p className="text-white/80 font-sora mt-2">With Motion </p>
          <p className="text-white/80 font-sora">Art Effect</p>
        </div>
        <div>
          <div className="text-white/80 md:text-6xl text-4xl my-5 md:my-0 font-normal font-sora">
            <h1 className="mb-2">Attract Your Visitors</h1>
            <p className="mb-2">Attention With</p>
            <p>Colorful</p>
            <p className="my-4 bg-gradient-to-r from-[#F87516] to-[#5E11FF] to-50% text-transparent bg-clip-text font-sora font-medium">
              Motion Art Effect
            </p>
          </div>

          <div className="text-white/70 font-outfit text-md">
            <p>
              Unleash the power of creativity with Motion Art for Elementor -
              your ultimate
            </p>
            <p>
              solution for seamlessly integrating captivating animations
              into your website.{" "}
            </p>
          </div>
        </div>

      </div>
      <div className="flex text-center justify-center my-20 text-white/80 font-sora text-xl" >
        <p>
        Trusted by thousands of users around the world
        </p>
      </div>

      <div className="flex flex-wrap md:justify-between justify-center mx-auto ">
        <Review img={`https://res-console.cloudinary.com/dekobspwg/thumbnails/v1/image/upload/v1716035776/bXlfYXNzZXN0L0NvcHlfb2ZfbW90aW9uYXJ0ZWZmZWN0LWltZzJfaGVucXRi/drilldown`}/>
        <Review img={`https://res-console.cloudinary.com/dekobspwg/thumbnails/v1/image/upload/v1716035777/bXlfYXNzZXN0L0NvcHlfb2ZfbW90aW9uYXJ0ZWZmZWN0LWltZzFfeWx4bTNv/drilldown`}/>
        <Review img={`https://res-console.cloudinary.com/dekobspwg/thumbnails/v1/image/upload/v1716035776/bXlfYXNzZXN0L0NvcHlfb2ZfbW90aW9uYXJ0ZWZmZWN0LWltZzNfZXNpdWh0/drilldown`}/>


      </div>
    </>
  );
}
