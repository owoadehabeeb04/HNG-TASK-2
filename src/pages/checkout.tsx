import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Address from "../components/address";
import { stateContextType } from "../dataTypes.tsx";
import { useStateContext } from "../context/stateContext";
import Payment from "../components/payment.tsx";

const Checkout = () => {
  const { addressOrPayment }: stateContextType = useStateContext();
  const checkoutType = ["Address", "Payment"];

  return (
    <div>
      <Navbar />
      <div className="flex justify-between my-12 sm:my-16 items-center  md:px-0  px-4 mx-auto w-[700px] max-w-full">
        {checkoutType.map((checkout, i) => (
          <div className="flex items-center gap-3" key={i}>
            <div
              className={` ${
                i === addressOrPayment
                  ? "border-[#000] p-[0.2rem]"
                  : "border-[#B2B2B2] p-[0.5rem] "
              } border-2 cursor-pointer rounded-full transition-all w-fit`}
            >
              {i === addressOrPayment && (
                <div className="p-[0.5rem] border-[#000] bg-[#000] border rounded-full  transition-all"></div>
              )}
            </div>
            <p
              className={`${
                i === addressOrPayment ? "text-[#000]  " : "text-[#B2B2B2]"
              } text-[19px] leading-[24px] font-medium font-Inter`}
            >
              #{i + 1} <br />
              <span>{checkout}</span>
            </p>
          </div>
        ))}
      </div>
      {addressOrPayment === 0 ? (
        <div>
          <Address />
        </div>
      ) : (
        <div>
            <Payment />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Checkout;
