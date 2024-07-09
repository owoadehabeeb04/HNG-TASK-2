/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { cartProps, stateContextType } from "../dataTypes.tsx";
import { useStateContext } from "../context/stateContext.tsx";
import close from "../../src/assets/icons/Close.svg";
import { Link } from "react-router-dom";
const MyCart = () => {
  const {
    cartProducts,
    setCartProducts,
    setTotalPrice,
    totalPrice,
  }: stateContextType = useStateContext();

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartProducts");
    if (setCartProducts !== undefined && storedCartItems) {
      setCartProducts(JSON.parse(storedCartItems));
    }
  }, [setCartProducts]);
  const increaseQuantity = (index: number) => {
    if (!cartProducts || !setCartProducts) {
      console.error("Cart products is not available.");
      return;
    }
    const updatedCartProducts: cartProps[] = [...cartProducts];
    if (index >= 0 && index < updatedCartProducts.length) {
      const updatedQuantity = updatedCartProducts[index].quantity + 1;

      const updatedProduct = {
        ...updatedCartProducts[index],
        quantity: updatedQuantity,
      };

      updatedCartProducts[index] = updatedProduct;

      setCartProducts(updatedCartProducts);

      localStorage.setItem("cartProducts", JSON.stringify(updatedCartProducts));

      return updatedCartProducts;
    } else {
      console.error("Index out of bounds");
    }
  };

  const decreaseQuantity = (index: number) => {
    if (!cartProducts || !setCartProducts) {
      console.error(
        "Cart products or setCartProducts function is not available."
      );
      return;
    }
    const updatedCartProducts: cartProps[] = [...cartProducts];
    if (
      index >= 0 &&
      index < updatedCartProducts.length &&
      updatedCartProducts[index].quantity > 1
    ) {
      const updatedQuantity = updatedCartProducts[index].quantity - 1;

      const updatedProduct = {
        ...updatedCartProducts[index],
        quantity: updatedQuantity,
      };

      updatedCartProducts[index] = updatedProduct;

      setCartProducts(updatedCartProducts);

      localStorage.setItem("cartProducts", JSON.stringify(updatedCartProducts));

      return updatedCartProducts;
    } else {
      console.error("Index out of bounds");
    }
  };

  const deleteProduct = (index: number) => {
    if (setCartProducts) {
      setCartProducts((prevCartProducts) => {
        const updatedCartProducts = prevCartProducts.filter(
          (_e, i: number) => i !== index
        );
        localStorage.setItem(
          "cartProducts",
          JSON.stringify(updatedCartProducts)
        );
        return updatedCartProducts;
      });
    }
  };
  const priceTotal =
    cartProducts?.map(
      (cartprice: cartProps) =>
        parseFloat(cartprice.productPrice.replace(/[^0-9.-]+/g, "")) *
        cartprice.quantity
    ) ?? [];

  const theTotal: number =
    priceTotal.length > 0
      ? priceTotal.reduce((acc: number, price: number) => acc + price, 0)
      : 0;

  useEffect(() => {
    if (!isNaN(theTotal) && theTotal) {
      setTotalPrice(theTotal.toFixed(2));
    }
  }, [theTotal, setTotalPrice]);
  const deliveryFee: number = 5000;
  useEffect(() => {
    if (!isNaN(theTotal) && theTotal) {
      const formattedTotal = theTotal.toFixed(2);
      setTotalPrice(formattedTotal);
      localStorage.setItem("totalPrice", formattedTotal);
    }
  }, [theTotal, setTotalPrice]);

  return (
    <>
      {" "}
      <div className="w-[1250px] mx-auto  px-[1.5rem] max-w-full">
        <div>
          <h1 className="text-[20px]  pt-[40px] sm:pt-[80px]  leading-[24px] font-normal font-Inter">
            My cart
          </h1>
        </div>
        <div className="py-4 sm:py-8">
          {cartProducts?.map((cart, i) => (
            <div
              className="flex w-full max-[340px]:flex-col gap-2 max-[340px]:items-start sm:gap-8 items-center py-4 border-b border-[#A3A3A3]"
              key={i}
            >
              <div className="fixed-image-size w-[120px">
                <img
                  className="w-full sm:w-[90px] h-[90px]"
                  src={cart?.productImage}
                  alt={cart?.productName}
                />
              </div>

              <div className="flex sm:flex-row flex-col  w-full justify-between ">
                <div>
                  <h1 className="font-medium">{cart?.productName}</h1>
                </div>
                <div className=" flex gap-4  items-center">
                  <div className="flex gap-4 items-center">
                    <span
                      className="cursor-pointer"
                      onClick={() => decreaseQuantity(i)}
                    >
                      -
                    </span>

                    <span className="w-[40px] flex justify-center items-center border border-[##D9D9D9]  h-[40px] px-4 py-2 rounded-[4px] ">
                      {cart?.quantity}
                    </span>
                    <span
                      className="cursor-pointer"
                      onClick={() => increaseQuantity(i)}
                    >
                      +
                    </span>
                  </div>
                  <div>
                    <p className="font-Inter text-[20px] font-medium leading-[32px] text-[#000]">
                      ₦
                      {(
                        parseFloat(
                          cart?.productPrice.replace(/[^0-9.-]+/g, "")
                        ) * cart?.quantity
                      ).toLocaleString()}
                    </p>
                  </div>
                  <div className="fixed-image-size h-[30px] w-[30px]">
                    <img
                      className="w-full cursor-pointer"
                      src={close}
                      alt="close"
                      onClick={() => deleteProduct(i)}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="px-6 sm:px-16 py-0 sm:py-12">
        <h1 className="text-[20px]  text-[#000] pb-[40px] pt-[80px]  leading-[24px] font-semibold font-Inter">
          Order Summary
        </h1>
        <div className="flex flex-col gap-2">
          <div className="flex font-medium justify-between items-center">
            <p>Sub Total</p>
            <p>
              ₦ {""}
              {totalPrice && parseFloat(totalPrice).toLocaleString()}
            </p>
          </div>
          <div className="flex font-medium justify-between items-center">
            <p className="text-[#545454]">Delivery fee</p>
            <p>
              ₦ {""}
              {deliveryFee.toLocaleString()}
            </p>
          </div>
          <div className="flex font-medium justify-between items-center">
            <p> Total</p>
            <p>
              ₦ {""}
              {totalPrice &&
                (parseFloat(totalPrice) + deliveryFee).toLocaleString()}
            </p>
          </div>
        </div>
        <Link to="/checkout">
          <div className=" flex w-full sm:w-fit mx-auto cursor-pointer justify-center items-center mt-6">
            <button className="w-full sm:w-fit rounded-[6px] font-Inter text-base leading-6 text-center  sm:px-24 py-3 bg-[#000] border border-[#000] text-white">
              Checkout
            </button>
          </div>
        </Link>
      </div>
    </>
  );
};

export default MyCart;
