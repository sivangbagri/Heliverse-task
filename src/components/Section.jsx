import React from "react";
import LongCard from "./LongCard";

export default function Section() {
  return (
    <div>
      <div className="text-center text-white my-20 ">
        <p className="text-4xl font-medium font-sora mb-2">
          Apply On Any Section Or Enable For{" "}
        </p>
        <p className="text-4xl font-medium font-sora my-2">Whole Page </p>
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-2 ">
        <LongCard
          title="Apply On Section"
          content="Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website. "
          img={`https://res-console.cloudinary.com/dekobspwg/thumbnails/v1/image/upload/v1716035778/bXlfYXNzZXN0L0NvcHlfb2ZfbW90aW9uYXJ0ZWZmZWN0LWltZzExX215cTk2aA==/drilldown`}
        />
        <LongCard
          title="Apply On Page"
          className={"md:mt-20"}
          content="Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation."
          img={`https://res-console.cloudinary.com/dekobspwg/thumbnails/v1/image/upload/v1716035777/bXlfYXNzZXN0L0NvcHlfb2ZfbW90aW9uYXJ0ZWZmZWN0LWltZzEwX2l0c2ljbQ==/drilldown`}
        />
      </div>
    </div>
  );
}
