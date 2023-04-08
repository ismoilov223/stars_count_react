import React from "react";
import satrIcon from "../assets/star-icon.png";

function Header() {
  return (
    <header>
      <section id="content">
        <div className="star-box w-[48px] h-[48px] rounded-full bg-[#262E38] flex justify-center items-center">
          <img src={satrIcon} alt="" />
        </div>
        <div className="text-content mt-[16px]">
          <h2 className="text-white text-2xl md:text-[28px] font-bold">
            How did we do?
          </h2>
          <p className="font-normal text-sm text-[#969FAD]">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
        </div>
      </section>
    </header>
  );
}

export default Header;
