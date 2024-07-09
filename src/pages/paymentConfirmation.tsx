import confirm from "../../src/assets/icons/Frame 427319314.svg";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
const PaymentConfirmation = () => {
  return (
    <div>
      <Navbar />
      <div className="w-[1250px] max-w-full xl:px-0 px-4 sm:px-12 py-12 xl:mx-auto gap-24">
        <h1 className=" font-Inter text-[20px] font-semibold leading-[24px]  text-[#17183B] ">
          Payment Confirmation
        </h1>
        <div className="flex w-full justify-center sm:my-12 my-8 lg:my-20 xl:my-28 items-center flex-col ">
          <div className="sm:w-full sm:h-full   h-[300px]">
            <img className="w-full h-full" src={confirm} alt="confirm" />
          </div>
          <div className="flex max-[340px]:flex-col lg:mt-20 sm:mt-12 mt-8 xl:mt-24  w-full lg:gap-24 sm:gap-12 gap-6 xl:gap-32  items-center justify-center">
            <Link
              to="/shop/"
              className="w-full flex justify-center items-center"
            >
              <button className="border py-2 sm:py-4 px-4  sm:px-14 rounded-[6px] border-[#000] bg-[#fff] w-full sm:w-fit text-[#000] text-base font-normal flex justify-center items-center ">
                Back To Home
              </button>
            </Link>
            <Link
              to="/shop/"
              className="w-full flex justify-center items-center"
            >
              <button className="border py-2 sm:py-4 px-4 sm:px-14 rounded-[6px] border-[#000] bg-[#000] w-full sm:w-fit text-[#fff] text-base font-normal flex justify-center items-center ">
                Order Again
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PaymentConfirmation;
