import Text from "@/components/atoms/text";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full lg:px-20 px-0 py-10 bg-black flex lg:flex-row flex-col justify-center items-center">
      <div className="w-fit flex flex-col gap-8 mx-auto items-center font-bold">
        <Text text="Important Links" color="#fff" variant={"medium"} />
        <div className="flex lg:flex-row md:flex-row flex-col items-center gap-8 text-xl text-[#F5F5F5] font-normal">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Contact Us</Link>
          <Link href={"/"}>About Us</Link>
          <Link href={"/"}>Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
