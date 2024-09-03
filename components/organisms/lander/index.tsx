import React, { useState } from "react";
import Text from "@/components/atoms/text";
import { MdArrowRightAlt } from "react-icons/md";

type LanderProps = {
  setPriceRange: (range: string) => void;
  setRatingRange: (range: string) => void;
};

const Lander: React.FC<LanderProps> = ({ setPriceRange, setRatingRange }) => {
  const [showRatings, setShowRatings] = useState(false);
  const [showPrice, setShowPrice] = useState(false);

  return (
    <div className="w-full flex lg:flex-row flex-col mt-32 lg:px-20 md:px-5 px-0 justify-between mb-20">
      <div className="lg:w-1/6 w-full flex lg:border-b-transparent lg:flex-col lg:border-r px-2  border-b lg:border-r-black border-b-black lg;py-20 py-5 gap-8">
        <div className="flex flex-col gap-4">
          <div
            onClick={() => setShowPrice(true)}
            className="hover:cursor-pointer"
          >
            <Text color="#000" text="Sort by Price" variant={"medium"} />
          </div>

          {showPrice && (
            <select
              onChange={(e) => setPriceRange(e.target.value)}
              className="mb-4 w-[90%] px-5 py-3"
            >
              <option value="">Select Price Range</option>
              <option value="price_0_100">0 to 100</option>
              <option value="price_101_1000">101 to 1000</option>
              <option value="price_1001_above">1001 and above</option>
            </select>
          )}
        </div>

        <div className="flex flex-col gap-4">
          <div
            onClick={() => setShowRatings(true)}
            className="hover:cursor-pointer"
          >
            <Text color="#000" text="Sort by Rating" variant={"medium"} />
          </div>
          {showRatings && (
            <select
              onChange={(e) => setRatingRange(e.target.value)}
              className="mb-4 w-[90%] px-5 py-3"
            >
              <option value="">Select Rating Range</option>
              <option value="rating_1_2">1 to 2</option>
              <option value="rating_2.1_3">2.1 to 3</option>
              <option value="rating_3.1_4">3.1 to 4</option>
              <option value="rating_4.1_5">4.1 to 5</option>
            </select>
          )}
        </div>
      </div>

      <div className="lg:w-4/5 w-full bg-black p-20 my-20 flex justify-between">
        <div className="lg:w-2/5 w-full flex flex-col gap-32 font-bold">
          <Text text="Up to 10% off Voucher" color="#fff" variant={"h1"} />
          <a className="flex gap-8 items-center font-semibold" href="#products">
            <Text text="Shop Now" color="#fff" variant={"large"} />
            <MdArrowRightAlt className="text-white text-4xl font-semibold" />
          </a>
        </div>

        <div className="lg:w-2/5 lg:block hidden">
          <img src="/lander_img.png" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Lander;
