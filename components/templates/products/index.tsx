import React from "react";
import Text from "@/components/atoms/text";
import ProductCard from "@/components/organisms/product_card";
import { AppDispatch } from "@/redux/store";
import { fetchProducts } from "@/redux/thunks/productThunk/productThunk";
import { ProductType } from "@/redux/types";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

type ProductsSectionProps = {
  searchQuery: string;
  priceRange: string;
  ratingRange: string;
};

const ProductsSection: React.FC<ProductsSectionProps> = ({
  searchQuery,
  priceRange,
  ratingRange,
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const [products, setProducts] = useState<ProductType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    dispatch(fetchProducts())
      .unwrap()
      .then((data) => setProducts(data));
  }, [dispatch]);

  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((product) => {
      if (priceRange) {
        switch (priceRange) {
          case "price_0_100":
            return product.price >= 0 && product.price <= 100;
          case "price_101_1000":
            return product.price >= 101 && product.price <= 1000;
          case "price_1001_above":
            return product.price >= 1001;
          default:
            return true;
        }
      }
      return true;
    })
    .filter((product) => {
      if (ratingRange) {
        switch (ratingRange) {
          case "rating_1_2":
            return product.rating >= 1 && product.rating <= 2;
          case "rating_2.1_3":
            return product.rating >= 2.1 && product.rating <= 3;
          case "rating_3.1_4":
            return product.rating >= 3.1 && product.rating <= 4;
          case "rating_4.1_5":
            return product.rating >= 4.1 && product.rating <= 5;
          default:
            return true;
        }
      }
      return true;
    });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="w-full lg:px-20 md:px-10 px-5 flex flex-col gap-8 mb-20" id="products">
      <div className="flex gap-4 items-center">
        <div className="h-10 w-5 bg-red-500 rounded-full"></div>
        <Text text="Our Products" color="#DB4444" variant={"large"} />
      </div>

      <div className="w-full flex lg:flex-row flex-col gap-8 justify-between font-semibold items-center">
        <Text text="Explore Our Products" color="#000" variant={"h3"} />

        <div className="w-fit flex justify-center lg:mr-16 m-0">
          <button
            className={`px-4 py-2 mx-1 border rounded ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`px-4 py-2 mx-1 border rounded ${
                currentPage === page ? "bg-red-500 text-white" : ""
              }`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}
          <button
            className={`px-4 py-2 mx-1 border rounded ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>

      <div className="w-full flex gap-8 flex-wrap">
        {currentProducts.map((data) => (
          <ProductCard
            key={data.id}
            id={data.id.toString()}
            title={data.name}
            description={data.description}
            rating={data.rating}
            price={data.price}
            image={data.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsSection;
