import { Bars } from "react-loader-spinner";

const Loader = () => {
  return (
    <div>
      <Bars
        height="80"
        width="80"
        color="#000"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
