const Footer = () => {
  return (
    <div className="bg-[#F6F6F6]  py-12 sm:py-[8rem] w-full  flex justify-between items-center   px-[1.5rem]   max-w-full">
      {" "}
      <div className="flex sm:flex-row flex-col flex-wrap sm:gap-0 gap-12 justify-center sm:items-start items-center  sm:justify-between mx-auto w-[1200px] ">
        <div className="flex sm:flex-row flex-col sm:justify-start justify-center sm:items-start items-center  flex-wrap  gap-12">
          <div>
            <h1 className="text-[#000] sm:pb-0 pb-4 font-semibold text-base sm:text-left text-center  font-Inter leading-[23.87px] ">
              About
            </h1>

            <p className="font-Inter  mt-2 text-base font-normal leading-[23.87px] text-center sm:text-left ">
              We Provide Nothing But The Best To Make Your house <br /> Feel
              Like A Home
            </p>
          </div>
          <div>
            <h1 className="text-[#000] sm:pb-0 pb-4 sm:text-left text-center font-semibold text-base font-Inter leading-[23.87px] ">
              Our services{" "}
            </h1>
            <ul className="flex mt-2 sm:text-left text-center flex-col gap-2">
              <li className="font-Inter text-base font-normal leading-[23.87px] sm:text-left text-center ">
                Ceiling fittings
              </li>
              <li className="font-Inter text-base font-normal leading-[23.87px] sm:text-left text-center">
                chandeliers
              </li>
              <li className="font-Inter text-base font-normal leading-[23.87px] sm:text-left text-center ">
                Outdoor Lights
              </li>
              <li className="font-Inter text-base font-normal leading-[23.87px] sm:text-left text-center">
                Dropping Lights
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h1 className="text-[#000] sm:text-left text-center font-semibold text-base font-Inter leading-[23.87px] ">
            Contact Us
          </h1>
          <p className="font-Inter sm:text-left text-center mt-2 text-base font-normal leading-[23.87px]  ">
            +234 8038032833 <br /> @ East- West Road Port Harcourt{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
