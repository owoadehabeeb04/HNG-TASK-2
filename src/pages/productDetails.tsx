import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { productsProps, stateContextType } from "../dataTypes.tsx";
import { useStateContext } from "../context/stateContext";
import Navbar from "../components/navbar.tsx";
import { products } from "../components/products.ts";
import delivery from "../../src/assets/icons/delivery-truck-svgrepo-com (1) 1.svg";
import shop from "../../src/assets/icons/shop-2-svgrepo-com 2.svg";
import Back from "../../src/assets/icons/back.svg";
import Footer from "../components/footer.tsx";
import favorite from "../../src/assets/icons/Favorites.svg";
interface specification {
  brand: string;
  text: string;
}
const ProductDetails = () => {
  const { id } = useParams();

  const {
    gottenProducts,
    setGottenProducts,
    setCartProducts,
    cartProducts,
  }: stateContextType = useStateContext();
  useEffect(() => {
    if (setGottenProducts !== undefined) setGottenProducts(products);
  }, [gottenProducts, setGottenProducts]);
  const ProductDetails = gottenProducts?.filter(
    (product: productsProps) => product?.id === id
  );

  const specification: specification[] = [
    {
      brand: "brand",
      text: "Focale Lightning",
    },
    {
      brand: "colour",
      text: "White",
    },
    {
      brand: "Colour Temperature",
      text: "3000k (Warm white)",
    },
    {
      brand: "Light Bulb Type",
      text: "LEDi",
    },
    {
      brand: "Wattage",
      text: "40W",
    },
    {
      brand: "Dimension",
      text: "56*120",
    },
  ];
  const relatedProducts = gottenProducts?.filter(
    (product: productsProps) =>
      ProductDetails &&
      ProductDetails[0]?.ProductCategory &&
      product?.ProductCategory === ProductDetails[0].ProductCategory &&
      product?.id !== ProductDetails[0].id
  );

  const clickCart = (i: number) => {
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
      alert("added successfully");
    }
  };
  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };

  return (
    <div>
      <Navbar />
      <div className="pt-8 bg-[#FAFAFA]">
        <div className="w-[1250px] mx-auto  px-[1.5rem] max-w-full">
          {/* <div className="py-4 border-b mb-4  border-[#B5B5B5]">
            <Link to="/shop/">
              <img src={Back} alt="back" />
            </Link>
          </div> */}
          <div className="sm:flex hidden">
            <div className="hidden sm:flex items-center gap-6 px-4">
              <Link to="/shop/" className="flex items-center gap-6">
                <p className="font-Inter text-base leading-[16px]  font-normal text-[#A4A4A4]  ">
                  Home
                </p>
                <span className="font-Inter text-base leading-[16px]  font-normal text-[#A4A4A4]  ">
                  {">"}
                </span>
              </Link>
              <Link to="/shop/" className="flex items-center gap-6">
                <p className="font-Inter text-base leading-[16px]  font-normal text-[#A4A4A4]  ">
                  Categories
                </p>
                <span className="font-Inter text-base leading-[16px]  font-normal text-[#A4A4A4]  ">
                  {">"}
                </span>
              </Link>
              <Link to="/shop/" className="flex items-center gap-6">
                <p className="font-Inter text-base leading-[16px]  font-normal text-[#A4A4A4]  ">
                  {ProductDetails && ProductDetails[0]?.ProductCategory}
                </p>
                <span className="font-Inter text-base leading-[16px]  font-normal text-[#A4A4A4]  ">
                  {">"}
                </span>
              </Link>
              <p className="font-Inter text-base leading-[16px]  font-normal text-[#000]  ">
                {ProductDetails && ProductDetails[0]?.productName}
              </p>
            </div>
          </div>
          <img
            className="w-full sm:mt-12 object-contain"
            src={ProductDetails && ProductDetails[0]?.productImage}
            alt={ProductDetails && ProductDetails[0]?.productName}
          />
        </div>
        <div className="px-[1.8125rem] flex flex-col gap-6 mt-8 sm:mt-16">
          <h1 className="text-[34px] sm:text-[40px] font-Inter font-bold leading-[40px]">
            {ProductDetails && ProductDetails[0]?.productName}
          </h1>

          <p className="text-[#000] font-medium font-Inter text-[32px]  flex flex-col sm:flex-row  leading-[48px]">
            {ProductDetails && ProductDetails[0]?.productPrice}{" "}
            <span className="text-[24px] text-[#A0A0A0]  font-Inter font-normal line-through ">
              {ProductDetails && ProductDetails[0]?.slashedProductPrice}{" "}
            </span>
          </p>
          <div className="flex sm:flex-row flex-col gap-6 items-center">
            <button className="border py-4 px-14 rounded-[6px] border-[#000] bg-[#fff] w-full sm:w-fit text-[#000] text-base font-normal flex justify-center items-center ">
              Add to wishlist
            </button>
            <button
              className="border py-4 px-14  w-full sm:w-fit rounded-[6px] border-[#000] bg-[#000]  text-[#fff] text-base font-normal flex justify-center items-center "
              onClick={() => clickCart(0)}
            >
              Add to cart{" "}
            </button>
          </div>
          <div className="sm:w-[50%] grid grid-cols-2 mt-8">
            <div className="flex sm:flex-row flex-col gap-2 items-center">
              <div className="bg-[#F6F6F6] h-[56px] w-[56px] p-4 rounded-[11px] ">
                <img src={delivery} alt="delivery" />
              </div>

              <p className="text-[#717171] font-normal text-[14px] font-Inter leading-[24px]  ">
                Delivery <br /> <span className="text-[#000] ">1-2 day</span>
              </p>
            </div>
            <div className="flex sm:flex-row flex-col sm:justify-start justify-center gap-2 items-center">
              <div className="bg-[#F6F6F6] h-[56px] w-[56px] p-4 rounded-[11px] ">
                <img src={shop} alt="delivery" />
              </div>

              <p className="text-[#717171] sm:justify-start justify-center font-normal text-[14px] font-Inter leading-[24px]  ">
                In Stock <br />{" "}
                <span className="text-[#000] sm:text-left text-center ">
                  Yes
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-[1250px] mx-auto  mt-[80px] px-[1.5rem] max-w-full">
          <div>
            <div className="bg-[#fff] py-12 px-[24px] sm:px-[40px]">
              {" "}
              <h1 className="text-[rgb(0,0,0)] font-Inter text-[24px] leading-[32px] ">
                Description
              </h1>{" "}
              <p className="text-[#9D9D9D] text-[14px] my-8">
                {" "}
                {ProductDetails &&
                  ProductDetails[0]?.productDetails1} <br /> <br />
                {ProductDetails &&
                  ProductDetails[0]?.productDetails2} <br /> <br />
                {ProductDetails && ProductDetails[0]?.productDetails3}{" "}
              </p>
              <h1 className="text-[20px] leading-[24px] font-normal font-Inter">
                Specification
              </h1>
              {specification.map((text, i) => (
                <div
                  key={i}
                  className="flex py-4 border-b border-[#CDCDCD] sm:gap-0 gap-4 justify-between items-center "
                >
                  <p className="text-[#000] text-base leading-[24px] font-Inter font-normal">
                    {text?.brand}
                  </p>
                  <p className="text-[#000] text-base leading-[24px] font-Inter font-normal">
                    {text?.text}{" "}
                  </p>
                </div>
              ))}{" "}
            </div>
          </div>
        </div>
        <div className=" bg-white my-6 sm:my-12  ">
          <div className="w-[1250px] mx-auto bg-white  px-[1.5rem] max-w-full">
            <h1 className="text-[20px]  pt-[80px] pb-[40px] leading-[24px] font-normal font-Inter">
              Related Products
            </h1>
            <div className="grid grid-cols-2  gap-4">
              {relatedProducts?.map((product, i) => (
                <>
                  {" "}
                  <div
                    key={i}
                    className="bg-[#F6F6F6] h-full rounded-[9px] cursor-pointer border-2 gap-1 sm:gap-4 border-[#F6F6F6] w-full py-[1.2rem]  sm:py-[1.5rem] px-4 sm:px-8 flex flex-col justify-center items-center"
                  >
                    <div className="self-end justify-end">
                      <img src={favorite} alt="love" />
                    </div>
                    <Link to={`/productDescription/${product?.id}`}>
                      <div className="flex-grow">
                        <img
                          src={product?.productImage}
                          alt={product?.productName}
                        />
                      </div>
                    </Link>
                    <h1 className="text-[#000] sm:block hidden   flex-grow text-base leading-[24px] text-center font-Inter">
                      {product?.productName}
                    </h1>
                    <h1 className="text-[#000] sm:hidden block flex-grow text-base leading-[24px] text-center font-Inter text-ellipsis overflow-hidden whitespace">
                      {truncateText(product?.productName || "", 28)}
                    </h1>

                    <p className="font-Inter flex-grow text-[1.3rem] sm:text-[1.5rem] font-semibold leading-6 text-center ">
                      {product?.productPrice}
                    </p>
                    <button
                      className="bg-[#000] cursor-pointer flex justify-center items-center gap-2 text-white w-full sm:w-fit py-3 rounded-[0.5rem] sm:px-16"
                      onClick={() => clickCart(i)}
                    >
                      Add To Cart
                    </button>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetails;
