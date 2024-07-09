/* eslint-disable @typescript-eslint/no-explicit-any */
import { stateContextType } from "../dataTypes.tsx";
import { useStateContext } from "../context/stateContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const {
    cartProducts,
    clickAddress,
    address,
    totalPrice,
    setTotalPrice,
    setAddressOrPayment,
    setCartProducts,
  }: stateContextType = useStateContext();
  console.log({ cartProducts });
  console.log(address, clickAddress);
  const deliveryFee: number = 5000;
  console.log({ totalPrice });

  useEffect(() => {
    const totalPriceFromStorage = localStorage.getItem("totalPrice");
    if (totalPriceFromStorage) {
      setTotalPrice(parseFloat(totalPriceFromStorage));
    }
  }, []);
  const navigate = useNavigate();
  const [cardOrBank, setCardOrBank] = useState(0);
  const typesOfPayment = ["Card Payment", "Bank Transfer"];
  const handlePayment = () => {
    if (setCartProducts) {
      setCartProducts([]);
    }
    localStorage.setItem("cartProducts", JSON.stringify([]));
    navigate("/paymentConfirmation/");
  };

  return (
    <div className=" w-[1250px] max-w-full xl:px-0 px-4 sm:px-12 py-12 xl:mx-auto  mx-auto  gap-9 sm:gap-12 lg:gap-24  grid lg:grid-cols-2 ">
      <div className="sm:hidden flex flex-col">
        {cartProducts?.map((cart, i) => (
          <div
            key={i}
            className="border-b border-[#A3A3A3] rounded-[0px] my-4 flex justify-between items-center px-4 py-4"
          >
            <div className="flex items-center gap-3">
              <img
                className="w-[90px] h-[90px]"
                src={cart?.productImage}
                alt=""
              />

              <h1 className="font-medium text-base font-Inter leading-[24px] ">
                {cart?.productName}
              </h1>
            </div>

            <p className="font-Inter text-[20px] leading-[32px] ">
              {" "}
              ₦
              {(
                parseFloat(cart?.productPrice.replace(/[^0-9.-]+/g, "")) *
                cart?.quantity
              ).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
      <div className="border border-[#EBEBEB] rounded-[10px] py-8 px-6 ">
        <h1 className="pb-2 font-Inter font-medium leading-[16px] text-xl ">
          Summary
        </h1>
        <div className="sm:flex flex-col  hidden">
          {cartProducts?.map((cart, i) => (
            <div
              key={i}
              className="bg-[#F6F6F6] rounded-[13px] my-4 flex justify-between items-center px-4 py-4"
            >
              <div className="flex items-center gap-6">
                <img
                  className="w-[40px] h-[40px]"
                  src={cart?.productImage}
                  alt=""
                />

                <h1 className="font-medium  lg:text-base font-Inter leading-[24px] ">
                  {cart?.productName}
                </h1>
              </div>

              <p className="font-Inter text-[20px] leading-[32px] ">
                {" "}
                ₦
                {(
                  parseFloat(cart?.productPrice.replace(/[^0-9.-]+/g, "")) *
                  cart?.quantity
                ).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="font-Inter text-[14px] leading-[16[x]] text-[#545454]">
              Address
            </h2>
            {/* {address && <p>{address && address[clickAddress]}</p>} */}
          </div>
          <div>
            <h2 className="font-Inter text-[14px] leading-[16[x]] text-[#545454]">
              Delivery Dates
            </h2>

            <p>15 - 20 July 2024</p>
          </div>
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
        </div>
      </div>
      <div>
        <h1 className="font-Inter pb-6 text-[20px] font-bold leading-[16px]">
          Payment
        </h1>
        {typesOfPayment.map((type, i) => (
          <div
            className="bg-[#FFFFFF] items-start flex mb-6 flex-row gap-4 border p-6 rounded-[11px] border-[#D1D1D8]  "
            key={i}
          >
            <div
              className={` ${
                i === cardOrBank
                  ? "border-[#000] p-[0.2rem]"
                  : "border-[#B2B2B2] p-[0.5rem] "
              } border-2 cursor-pointer rounded-full transition-all w-fit`}
              onClick={() => setCardOrBank(i)}
            >
              {i === cardOrBank && (
                <div className="p-[0.3rem] border-[#000] bg-[#000] border rounded-full  transition-all"></div>
              )}
            </div>
            <p>{type}</p>
          </div>
        ))}
        <div className="flex mt-5 gap-6 items-center  w-full  ">
          {/* <Link to="/cart/"> */}
          <button
            onClick={() => setAddressOrPayment(0)}
            className="border py-4  rounded-[6px] border-[#000] bg-[#fff] w-full text-[#000] text-base font-medium flex justify-center items-center "
          >
            Back
          </button>
          {/* </Link> */}
          <div className="w-full">
            <button
              onClick={handlePayment}
              className="border py-4  rounded-[6px] border-[#000] bg-[#000] w-full text-[#fff] text-base font-medium flex justify-center items-center "
            >
              Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
