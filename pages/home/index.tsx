import React, { useState } from "react";
import Header from "@/components/organisms/header";
import Lander from "@/components/organisms/lander";
import Footer from "@/components/templates/footer";
import ProductsSection from "@/components/templates/products";

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [ratingRange, setRatingRange] = useState("");

  return (
    <div className="h-full w-full flex flex-col ">
      <Header setSearchQuery={setSearchQuery} />
      <Lander setPriceRange={setPriceRange} setRatingRange={setRatingRange} />
      <ProductsSection
        searchQuery={searchQuery}
        priceRange={priceRange}
        ratingRange={ratingRange}
      />
      <Footer />
    </div>
  );
};

export default HomeScreen;
