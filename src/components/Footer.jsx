import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="bottom-0 flex flex-wrap  justify-center gap-3 md:justify-between bg-gradient-to-r from-[#F87516] to-[#5E11FF] to-90% font-outfit py-5 px-2 text-sm mt-24 ">
      <p className=" text-white/70 cursor-text">
        © 2023 Copywrite. All rights reserved by QodeMatrix
      </p>
      <div className="flex gap-5">
        <Link
          className=" text-white/70 cursor-pointer"
          to="https://qodematrix.com/docs/motion-art-for-elementor/"
        >
          Documentation
        </Link>
        <Link
          className="flex justify-end text-white/70 cursor-pointer"
          to="https://support.qodematrix.com/"
        >
          Suppport
        </Link>
      </div>
    </div>
  );
}
