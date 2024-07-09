/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import dropdown from "../../src/assets/icons/Vector 9.svg";
import { products } from "./products";
import { productsProps, stateContextType } from "../dataTypes.tsx";
import favorite from "../../src/assets/icons/Vector 15.svg";
import { useStateContext } from "../context/stateContext";
import { Link } from "react-router-dom";
import filter from "../../src/assets/icons/FILTER.svg";
const TheProducts = () => {
  console.log(products);

  const {
    cartProducts,
    setCartProducts,
    setGottenProducts,
    gottenProducts,
  }: stateContextType = useStateContext();
  useEffect(() => {
    if (setGottenProducts !== undefined) setGottenProducts(products);
    console.log({ gottenProducts });
  }, [gottenProducts, setGottenProducts]);
  useEffect(() => {
    const storedCartProducts = localStorage.getItem("cartProducts");
    if (setCartProducts && storedCartProducts) {
      setCartProducts(JSON.parse(storedCartProducts));
    }
    console.log({ cartProducts });
  }, [setCartProducts]);

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  }, [cartProducts]);

  const clickCart = (i: number) => {
    console.log("clicked");
    if (setCartProducts !== undefined && gottenProducts) {
      const productToAdd = { ...gottenProducts[i], quantity: 1 };
      setCartProducts((prevCartProducts) => {
        const updatedCartProducts = [...prevCartProducts, productToAdd];
        localStorage.setItem(
          "cartProducts",
          JSON.stringify(updatedCartProducts)
        );
        return updatedCartProducts;
      });
      console.log({ cartProducts });
      alert("added successfully");
    }
  };
  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };

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
              Selected Products: {gottenProducts?.length}
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
              Results: {gottenProducts?.length}
              <span className="text-[#000] font-normal"></span>
            </h1>
          </main>
        </div>
      </div>
      <div className="md:grid-cols-3 grid-cols-2 grid gap-4 my-4">
        {products.map((product: productsProps, i: number) => (
          <>
            {" "}
            <div
              key={i}
              className="bg-[#F6F6F6] h-full rounded-[9px] cursor-pointer border-2 gap-4 border-[#F6F6F6] w-full py-[1.5rem] px-4 sm:px-8 flex flex-col justify-center items-center"
            >
              <div className="self-end justify-end">
                <img src={favorite} alt="love" />
              </div>
              <Link to={`/productDescription/${product?.id}`}>
                <div className="flex-grow">
                  <img src={product?.productImage} alt={product?.productName} />
                </div>
              </Link>
              <h1 className="text-[#000] sm:block hidden   flex-grow text-base leading-[24px] text-center font-Inter">
                {product?.productName}
              </h1>
              <h1 className="text-[#000] sm:hidden block flex-grow text-base leading-[24px] text-center font-Inter text-ellipsis overflow-hidden whitespace">
                {truncateText(product?.productName || "", 28)}
              </h1>

              <p className="font-Inter flex-grow text-[20px] font-semibold leading-6 text-center ">
                {product?.productPrice}
              </p>
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
    </div>
  );
};

export default TheProducts;
