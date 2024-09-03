import Text from "@/components/atoms/text";
import { addToCart, removeFromCart } from "@/redux/slices/cart/cartSlice";
import { AppDispatch, RootState, useAppDispatch, useAppSelector } from "@/redux/store";
import React, { useState } from "react";
import { LuHeart } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";

interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  rating: number;
  price: number;
  image: string;
}

const ProductCard = ({
  id,
  title,
  description,
  rating,
  price,
  image,
}: ProductCardProps) => {
  const [hover, setHover] = useState(false);

  const dispatch = useAppDispatch();

  const isInCart = useAppSelector((state: RootState) =>
    state.cart.items.some((item) => item.id === id)
  );

  const handleAddOrRemove = () => {
    if (isInCart) {
      dispatch(removeFromCart(id));
    } else {
      dispatch(addToCart({ id, title, price, quantity: 1 }));
    }
  };

  const truncatedDescription =
    description.length > 100
      ? description.substring(0, 100) + "..."
      : description;

  return (
    <div
      className="lg:w-[22%] md:w-[40%] w-[100%] flex flex-col gap-4 relative mb-10 cursor-pointer"
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="w-full bg-[#F5F5F5] flex justify-center items-center h-[250px]">
        <img src={image} className="h-[60%]" />
      </div>

      {hover && (
        <div
          className="absolute bottom-32 w-full text-white text-base flex justify-center items-center py-3"
          onClick={handleAddOrRemove}
          style={{
            backgroundColor: isInCart ? "#DB4444" : "#000000",
          }}
        >
          {isInCart ? "Remove from Cart" : "Add to cart"}
        </div>
      )}

      <div
        className="lg:hidden absolute bottom-32 w-full text-white text-base flex justify-center items-center py-3"
        onClick={handleAddOrRemove}
        style={{
          backgroundColor: isInCart ? "#DB4444" : "#000000",
        }}
      >
        {isInCart ? "Remove from Cart" : "Add to cart"}
      </div>

      <div className="flex flex-col gap-4 w-full">
        <Text text={title} color="#000" variant={"normal"} />
        <div>
          <Text text={truncatedDescription} color="#000" variant={"xsmall"} />
        </div>
        <div className="flex gap-2 font-semibold justify-between">
          <Text text={`$ ${price}`} color="#DB4444" variant={"xsmall"} />
          <div className="flex gap-4">
            <Text text={"Rating"} color="#000" variant={"xsmall"} />
            <Text text={`${rating}`} color="#DB4444" variant={"xsmall"} />
          </div>
        </div>
      </div>

      <div className="absolute top-5 right-5">
        <LuHeart className="text-2xl" />
      </div>
    </div>
  );
};

export default ProductCard;
