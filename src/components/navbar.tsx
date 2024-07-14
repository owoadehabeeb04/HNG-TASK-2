import { useState } from "react";
import Search from "../../src/assets/icons/Vector.svg";
import favorites from "../../src/assets/icons/Favorites.svg";
import cart from "../../src/assets/icons/Cart1.svg";
import user from "../../src/assets/icons/User.svg";
import { RouteConfig, stateContextType } from "../dataTypes.tsx";
import { useStateContext } from "../context/stateContext.tsx";
import { Link } from "react-router-dom";
import hamburger from "../../src/assets/icons/Burger.svg";
import close from "../../src/assets/icons/Close.svg";
const Navbar = () => {
  const routes: RouteConfig[] = [
    { path: "/", text: "Home" },
    { path: "#", text: "About" },
    { path: "#", text: "Contact" },
  ];

  const [clicked, setClicked] = useState<number>();
  const { cartProducts }: stateContextType = useStateContext();
  // useEffect(() => {
  //   const storedCartItems = localStorage.getItem("cartProducts");
  //   if (setCartProducts !== undefined && storedCartItems) {
  //     setCartProducts(JSON.parse(storedCartItems));
  //   }
  // }, []);
  const [toggle, setToggle] = useState(false);
  const click = () => {
    setToggle(!toggle);
  };
  return (
    <div className="lg:px-[2rem] md:px-6 px-4 xl:px-[4.5rem] md:py-2 lg:py-[1rem] border-b border-[##B5B5B5]">
      <nav className="flex flex-row items-center justify-between gap-2 xl:gap-6">
        <div>
          <h1 className="font-Inter text-[18px] lg:text-[18px] xl:text-[33px] font-normal leading-[28px] xl:leading-[48px]">
            IFYTHEL LIGHTS
          </h1>
        </div>
        <div className="lg:block hidden relative w-[513px] max-w-full ">
          <input
            className="rounded-[8px] border-2 border-[#F5F5F5] outline-none bg-[#F5F5F5] w-full  px-[16px] pl-[2rem] py-4 text-[#A4A4A4] placeholder:text-[#A4A4A4] font-semibold font-Inter"
            type="text"
            placeholder="Search"
          />
          <div>
            <img
              src={Search}
              className="absolute left-[10px] top-[1.2rem]"
              alt=""
            />
          </div>
        </div>
        <div className=" cursor-pointer w-fit" onClick={click}>
          {toggle ? (
            <img
              className="lg:hidden w-[150%] block cursor-pointer"
              src={close}
              alt=""
            />
          ) : (
            <img
              className="lg:hidden block cursor-pointer"
              src={hamburger}
              alt=""
            />
          )}
        </div>
        {/* Navlinks */}
        <div className=" lg:flex hidden flex-row items-center gap-[27px] sm:gap-[2rem] xl:gap-[3.25rem]">
          {routes.map((nav: RouteConfig, i: number) => (
            <div key={i}>
              <a
                href={nav?.path}
                onClick={() => setClicked(i)}
                className={`${
                  clicked === i ? "text-[#000] " : "text-[#A4A4A4]"
                } hover:text-[#000] transition-all font-normal font-Inter text-base leading-[19.35px]`}
              >
                {nav?.text}
              </a>
            </div>
          ))}
        </div>
        <div className="lg:flex  hidden items-center gap-2 sm:gap-4">
          <img src={favorites} alt="favorites" />
          <Link to="/cart/">
            <div className="relative">
              <img src={cart} alt="favorites" />{" "}
              <span className="bg-[#ff6347] shadow-lg shadow-black rounded-[100%] text-[white] mr-1 px-1 py-0 text-[0.5rem] absolute left-6 top-[0px]">
                {cartProducts && cartProducts.length}
              </span>
            </div>
          </Link>

          <img src={user} alt="favorites" />
        </div>
      </nav>
      {toggle && (
        <div className="lg:hidden block">
          <div className="flex  gap-4 flex-wrap">
            <div className=" lg:hidden flex flex-row items-center gap-[1rem] sm:gap-[2rem] xl:gap-[3.25rem]">
              {routes.map((nav: RouteConfig, i: number) => (
                <div key={i}>
                  <a
                    href={nav?.path}
                    onClick={() => setClicked(i)}
                    className={`${
                      clicked === i ? "text-[#000] " : "text-[#A4A4A4]"
                    } hover:text-[#000] transition-all font-normal font-Inter text-base leading-[19.35px]`}
                  >
                    {nav?.text}
                  </a>
                </div>
              ))}
            </div>
            <div className="lg:hidden  flex items-center gap-2 sm:gap-4">
              <img src={favorites} alt="favorites" />
              <Link to="/cart">
                <div className="relative">
                  <img src={cart} alt="favorites" />{" "}
                  <span className="bg-[#ff6347] shadow-lg shadow-black rounded-[100%] text-[white] mr-1 px-1 py-0 text-[0.5rem] absolute left-6 top-[0px]">
                    {cartProducts && cartProducts.length}
                  </span>
                </div>
              </Link>

              <img src={user} alt="favorites" />
            </div>
          </div>
          <div className="lg:hidden pb-4  mt-2 flex relative w-[513px] max-w-full ">
            <input
              className="rounded-[8px] border-2 border-[#F5F5F5] outline-none bg-[#F5F5F5] w-full  px-[16px] pl-[2rem] py-2 text-[#A4A4A4] placeholder:text-[#A4A4A4] font-semibold font-Inter"
              type="text"
              placeholder="Search"
            />
            <div>
              <img
                src={Search}
                className="absolute left-[10px] top-[0.87rem]"
                alt=""
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
