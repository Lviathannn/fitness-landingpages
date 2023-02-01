import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";

type Props = {};

export default function Navbar({}: Props) {
  const flexBetween = "flex items-center justify-between";

  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <img src={Logo} alt="" />
            <div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} gap-8 text-sm`}>
                <p className="">Home</p>
                <p className="">Benefits</p>
                <p className="">Our Classes</p>
                <p className="">Contact Us</p>
              </div>
              <div className="">
                <p>Sign In</p>
                <button className="">Become a Member </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
