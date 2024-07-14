import Navbar from "../components/navbar";
import { stateContextType } from "../dataTypes.tsx";
import { useStateContext } from "../context/stateContext.tsx";
import empty from "../../src/assets/icons/Frame 427319386.svg";
import MyCart from "../components/mycart.tsx";
import { Link } from "react-router-dom";
import Footer from "../components/footer.tsx";
const Cart = () => {
  const {  cartProducts }: stateContextType = useStateContext();

  // useEffect(() => {
  //   // const storedCartItems = localStorage.getItem("cartProducts");
  //   if (setCartProducts !== undefined && storedCartItems) {
  //     setCartProducts(JSON.parse(storedCartItems));
  //   }
  // }, []);
  return (
    <div>
      <div>
        <Navbar />
        {cartProducts && cartProducts.length > 0 ? (
          <MyCart />
        ) : (
          <div className="flex justify-center gap-[0.6rem] sm:gap-4   items-center flex-col my-6 sm:h-fit h-[60vh]  ">
            <div className="w-2/4 flex justify-center items-center">
              <img className="w-2/4" src={empty} alt="empty cart" />
            </div>
            <h1 className="text-[32px] m-0 max-[900px]:text-4xl text-center  max-[110px]:text-2xl font-OpenSans font-bold max-[640px]:text-[1.2rem]">
              N0 ITEM IN YOUR CART{" "}
            </h1>
            <p className="text-[20px] max-[640px]:mt-2  py-1 leading-normal text-center min-[110px]:leading-6 font-normal font-OpenSans">
              PLEASE CLICK ON THE BUTTON TO START SHOPPING
            </p>
            <Link to="/Shop" className="flex justify-center items-center ">
              <button className=" rounded-[6px]  sm:w-fit w-full bg-black text-white flex justify-center items-center py-4 px-[70px] font-OpenSans font-medium leading-normal max-[1024px]:py-4 max-[1024px]:px-4  max-[480px]:mt-[0rem]">
                <span> Shop Now </span>
              </button>
            </Link>
          </div>
        )}
        <Footer />
      </div>
    </div>
  );
};

export default Cart;
