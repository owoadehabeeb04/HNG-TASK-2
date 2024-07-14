/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import dropdown from "../../src/assets/icons/Vector 9.svg";
// import { products } from "./products";
import { productsProps, stateContextType } from "../dataTypes.tsx";
import favorite from "../../src/assets/icons/Vector 15.svg";
import { useStateContext } from "../context/stateContext";
import { Link } from "react-router-dom";
import filter from "../../src/assets/icons/FILTER.svg";
// import { getProducts } from "../api/getProducts.ts";
import axios from "axios";
const TheProducts = () => {
  const {
    cartProducts,
    setCartProducts,
    setGottenProducts,
    gottenProducts,
  }: stateContextType = useStateContext();

  useEffect(() => {
    const storedCartProducts = localStorage.getItem("cartProducts");
    if (setCartProducts && storedCartProducts) {
      setCartProducts(JSON.parse(storedCartProducts));
    }
  }, [setCartProducts]);

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  }, [cartProducts]);

  const clickCart = (i: number) => {
    if (setCartProducts !== undefined && gottenProducts) {
      const productToAdd = { ...gottenProducts[i] };
      setCartProducts((prevCartProducts: any) => {
        const updatedCartProducts = [...prevCartProducts, productToAdd];
        localStorage.setItem(
          "cartProducts",
          JSON.stringify(updatedCartProducts)
        );
        return updatedCartProducts;
      });
      alert("added successfully");
    }
  };
  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;
  console.log("Public Key:", publicKey);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  useEffect(() => {
    const fetchProducts = async () => {
      console.log("working");
      try {
        const response = await axios.get("/api/products", {
          params: {
            organization_id: "8d8859bc53b749139eaf62129b17e56f",
            reverse_sort: "false",
            page: currentPage,
            size: 10,
            Appid: "EM7DS527TZM9PC4",
            Apikey: "cb27820f38cd4caa9fe75d9609b3c61720240712155207614682", // Use publicKey from environment variables
          },
        });
        console.log({ response });
        console.log("working");

        if (setGottenProducts) setGottenProducts(response?.data?.items);
        setTotalPages(Math.ceil(response?.data?.total / 10));
        console.log({ totalPages });
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    console.log("working");

    fetchProducts();
  }, [currentPage, setGottenProducts, totalPages]);
  const handlePageChange = (page: any) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // console.log(gottenProducts && gottenProducts);
  // console.log(gottenProducts && gottenProducts[1]?.photos[0].url);
  // console.log(
  //   `https://api.timbu.cloud/images/${
  //     gottenProducts && gottenProducts[1]?.photos[0].url
  //   }`
  // );
  // console.log(
  //   "priceeeeeeeeeee",
  //   gottenProducts && gottenProducts[8].current_price[0]["NGN"][0]
  // );
  console.log("gotten products", gottenProducts);
  return (
    <div className="w-[1250px] mx-auto  px-[1.5rem] max-w-full">
      <div>
        <div className="sm:flex hidden items-center mt-6 gap-6">
          <p className="font-Inter text-base leading-[16px]  font-normal text-[#A4A4A4]  ">
            Home
          </p>
          <span className="font-Inter text-base leading-[16px]  font-normal text-[#A4A4A4]  ">
            {">"}
          </span>
          <p className="font-Inter text-base leading-[16px]  font-normal text-[#A4A4A4]  ">
            Categories
          </p>
          <span className="font-Inter text-base leading-[16px]  font-normal text-[#A4A4A4]  ">
            {">"}
          </span>
          <p className="font-Inter text-base leading-[16px]  font-normal text-[#000]  ">
            Chandeliers
          </p>
        </div>
        <div>
          <main className="flex sm:flex-row flex-col  mt-12 items-center justify-between">
            <h1 className="  font-normal text-[#A4A4A4] sm:block hidden  font-Inter text-base leading-[16px] ">
              Selected Products: {gottenProducts && gottenProducts?.length}
              <span className="text-[#000] font-normal"></span>
            </h1>
            <div className="flex sm:w-fit w-full gap-4 flex-row justify-between items-center">
              <div className="sm:hidden block w-full">
                <div className="mt-1 cursor-pointer flex justify-between items-center w-full sm:w-[256px] max-w-full border-2  self-end  bg-[#] text-[#9F9F9F] outline-none  pl-3 pr-4 py-2  bg-[#fff]text-base border-[#D4D4D4]  sm:text-sm rounded-[0.5rem]">
                  <p className="text-[#000]">Filters</p>
                  <span className="cursor-pointer">
                    <img src={filter} alt="dropdown" />
                  </span>
                  {/* </option> */}
                </div>
              </div>
              <div className="w-full">
                <div className="mt-1 cursor-pointer flex justify-between items-center w-full sm:w-[256px] max-w-full border-2  self-end  bg-[#] text-[#9F9F9F] outline-none  pl-3 pr-4 py-2  bg-[#fff]text-base border-[#D4D4D4]  sm:text-sm rounded-[0.5rem]">
                  <p className="text-[#000]">By Price</p>
                  <span className="cursor-pointer">
                    <img src={dropdown} alt="dropdown" />
                  </span>
                  {/* </option> */}
                </div>
              </div>
            </div>
            <h1 className="  font-normal text-[#A4A4A4] sm:hidden self-start block text-left mt-12 mb-4  font-Inter text-base leading-[16px] ">
              Results: {gottenProducts && gottenProducts?.length}
              <span className="text-[#000] font-normal"></span>
            </h1>
          </main>
        </div>
      </div>
      <div className="md:grid-cols-3 grid-cols-2 place-items-center place-content-center  grid gap-4 my-4">
        {gottenProducts &&
          gottenProducts.map((product: productsProps, i: number) => (
            <>
              {" "}
              <div
                key={i}
                className="bg-[#F6F6F6] h-full rounded-[9px] cursor-pointer border-2 gap-4 border-[#F6F6F6] w-full py-[1.5rem] px-4 sm:px-8 flex flex-col justify-center items-center"
              >
                <div className="self-end justify-end">
                  <img src={favorite} alt="love" />
                </div>
                {`https://api.timbu.cloud/images/${product?.photos[0]?.url}` && (
                  <Link to={`/productDescription/${product?.id}`}>
                    <div className="flex-grow">
                      <img
                        src={`https://api.timbu.cloud/images/${product?.photos[0]?.url}`}
                        alt={product?.name}
                        className="w-[160px] h-[160px] object-contain"
                      />
                    </div>
                  </Link>
                )}
                <h1 className="text-[#000] sm:block hidden   flex-grow text-base leading-[24px] text-center font-Inter">
                  {product?.name}
                </h1>
                <h1 className="text-[#000] sm:hidden block flex-grow text-base leading-[24px] text-center font-Inter text-ellipsis overflow-hidden whitespace">
                  {truncateText(product?.name || "", 28)}
                </h1>

                {product.current_price[0]["NGN"] && (
                  <p className="font-Inter flex-grow text-[20px] font-semibold leading-6 text-center ">
                    ₦ {product.current_price[0]["NGN"][0]}
                  </p>
                )}
                <button
                  className="bg-[#000] cursor-pointer flex justify-center items-center gap-2 text-white lg:w-fit w-full py-3 rounded-[0.5rem] lg:px-16"
                  onClick={() => clickCart(i)}
                >
                  Add To Cart
                </button>
              </div>
            </>
          ))}
      </div>
      <div className="flex justify-center my-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-2 py-1 mx-1 bg-gray-200 rounded"
        >
          Prev
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i + 1}
            onClick={() => handlePageChange(i + 1)}
            className={`px-2 py-1 mx-1 ${
              currentPage === i + 1 ? "bg-[black] text-white" : "bg-gray-200"
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-2 py-1 mx-1 bg-gray-200 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TheProducts;
