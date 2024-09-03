import Text from "@/components/atoms/text";
import React, { ChangeEvent, useState } from "react";
import { navData } from "./navdata";
import Link from "next/link";
import { LuHeart, LuShoppingCart } from "react-icons/lu";
import { FiSearch } from "react-icons/fi";
import { useSelector } from "react-redux";
import { RootState, useAppSelector } from "@/redux/store";
import { IoIosMenu, IoMdClose } from "react-icons/io";

type HeaderProps = {
  setSearchQuery: (query: string) => void;
};
const Header = ({ setSearchQuery }: HeaderProps) => {
  const [nav, setNav] = useState(false);
  const totalQuantity = useAppSelector(
    (state: RootState) => state.cart.totalQuantity
  );
  const totalPrice = useAppSelector((state: RootState) => state.cart.totalPrice);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };
  return (
    <div className="w-full bg-[#f5f5f5] z-10 lg:px-20 md:px-10 px-5 py-10 border-b border-black flex justify-between items-center fixed top-0">
      <div className="font-semibold">
        <Text text="Exclusive" color="#000" variant={"h3"} />
      </div>

      <div className="lg:flex lg:gap-8 hidden">
        {navData.map((data) => (
          <Link href={""} className="text-semibold" key={data.text}>
            <Text text={data.text} color="#000" variant={"normal"} />
          </Link>
        ))}
      </div>

      <div className="lg:flex gap-4 items-center hidden">
        <div className="px-5 py-2 flex items-center gap-4 bg-[#ffffff] rounded-3xl">
          <input
            placeholder="search"
            onChange={handleSearchChange}
            className="border-none outline-none bg-[#ffffff]"
          />
          <FiSearch />
        </div>
        <LuHeart className="text-2xl" />
        {/* <LuShoppingCart className="text-2xl" /> */}
        <div className="flex items-center gap-2">
          <LuShoppingCart className="text-2xl" />
          <div className="text-sm font-semibold">
            {totalQuantity} items - ${totalPrice.toFixed(2)}
          </div>
        </div>
      </div>

      <div className="lg:hidden text-4xl" onClick={() => setNav(!nav)}>
        {nav ? <IoMdClose /> : <IoIosMenu />}
      </div>

      {nav && (
        <div className="lg:hidden absolute top-0 left-0 bg-black flex flex-col h-screen w-[59%] px-5 items-center py-20 gap-20">
          <div className="flex flex-col gap-8 ">
            {navData.map((data) => (
              <Link href={""} className="text-semibold" key={data.text}>
                <Text text={data.text} color="#fff" variant={"normal"} />
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-4 items-center w-full">
            <div className="px-5 py-2 flex items-center gap-4 bg-[#F5F5F5] rounded-3xl w-full">
              <input
                placeholder="search"
                onChange={handleSearchChange}
                className="border-none outline-none bg-[#F5F5F5] w-full"
              />
              <FiSearch />
            </div>
            <LuHeart className="text-2xl" />
            {/* <LuShoppingCart className="text-2xl" /> */}
            <div className="flex items-center gap-2">
              <LuShoppingCart className="text-2xl" />
              <div className="text-sm font-semibold text-white">
                {totalQuantity} items - ${totalPrice.toFixed(2)}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
