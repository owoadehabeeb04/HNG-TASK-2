import close from "../../src/assets/icons/Close.svg";
import { stateContextType } from "../dataTypes.tsx";
import { useStateContext } from "../context/stateContext.tsx";
import { Link } from "react-router-dom";

const Address = () => {
  const {
    setAddressOrPayment,
    setAddress,
    address,
    setClickAddress,
    clickAddress,
  }: stateContextType = useStateContext();

  console.log(setAddress);
  console.log({ address });
  return (
    <div className="w-[1250px] max-w-full xl:px-0 px-4 sm:px-12 py-8 sm:py-12 xl:mx-auto ">
      <h1 className="text-[#000] font-semibold text-[20px] leading-[24px] ">
        Select Address
      </h1>

      <div className="mt-8">
        {address &&
          address.map((addres, i) => (
            <>
              {" "}
              <div
                key={i}
                className="bg-[#F6F6F6] flex justify-between items-center mb-4 py-8 px-6 "
              >
                <div className="flex gap-4 items-start">
                  <div
                    className={` ${
                      i === clickAddress
                        ? "border-[#000] p-[0.2rem]"
                        : "border-[#B2B2B2] p-[0.5rem] "
                    } border-2 cursor-pointer rounded-full transition-all w-fit`}
                    onClick={() => setClickAddress(i)}
                  >
                    {i === clickAddress && (
                      <div className="p-[0.3rem] border-[#000] bg-[#000] border rounded-full  transition-all"></div>
                    )}
                  </div>
                  <div>
                    <p className="text-[#17183B] pb-4 font-normal text-base leading-[24px] font-Inter">
                      {addres?.name}
                    </p>
                    <p className="text-[#17183B] pb-2 font-normal text-[14px] sm:text-base leading-[24px] font-Inter">
                      {addres?.subName}
                    </p>
                    <p className="text-[#17183B] font-normal  text-[14px] sm:text-base leading-[24px] font-Inter">
                      {addres?.phoneNo}
                    </p>
                  </div>
                </div>
                <div className=" hidden sm:flex gap-4 items-center">
                  <p className="cursor-pointer font-normal font-Inter text-base leading-8 underline">
                    Edit
                  </p>
                  <img className="cursor-pointer" src={close} alt="close" />
                </div>
              </div>
              <div className=" flex sm:hidden gap-4  mb-4 items-center">
                <p className="cursor-pointer font-normal font-Inter text-[14px] sm:text-base leading-8 underline">
                  Edit
                </p>
                <img className="cursor-pointer" src={close} alt="close" />
              </div>
            </>
          ))}
      </div>

      <p className="cursor-pointer mt-12 font-Inter text-[14px] font-normal leading-[16px]  underline">
        Add New Address
      </p>
      <div className="flex mt-5 gap-6 items-end justify-end">
        <Link to="/cart">
          <button className="border py-4 px-14 rounded-[6px] border-[#000] bg-[#fff] w-fit text-[#000] text-base font-normal flex justify-center items-center ">
            Back
          </button>
        </Link>
        <button
          className="border py-4 px-14 rounded-[6px] border-[#000] bg-[#000] w-fit text-[#fff] text-base font-normal flex justify-center items-center "
          onClick={() => setAddressOrPayment(1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Address;
