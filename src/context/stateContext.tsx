import { createContext, ReactNode, useContext, useState } from "react";
import { addressProps, cartProps, productsProps } from "../dataTypes.tsx";
interface StateContextProps {
  children: ReactNode;
}

const Context = createContext({});

export const StateContext = ({ children }: StateContextProps) => {
  const [gottenProducts, setGottenProducts] = useState<productsProps[]>([]);
  const [cartProducts, setCartProducts] = useState<cartProps[]>([]);
  const [totalPrice, setTotalPrice] = useState<string>("0");
  const [addressOrPayment, setAddressOrPayment] = useState(0);
  const [address, setAddress] = useState<addressProps[]>([
    {
      name: "15 Jesus Avenue",
      subName: "15 Jesus Avenue. Port Harcourt, Rivers State 5227",
      phoneNo: "(+234) 901-035-3127",
    },
    {
      name: "FCMB Bank",
      subName: "FCMB Bank. Port Harcourt, Rivers State 5227",
      phoneNo: "(+234) 901-035-3127",
    },
  ]);

  const [clickAddress, setClickAddress] = useState<number>(0);

  return (
    <Context.Provider
      value={{
        gottenProducts,
        setGottenProducts,
        cartProducts,
        setCartProducts,
        setTotalPrice,
        totalPrice,
        setAddressOrPayment,
        addressOrPayment,
        setAddress,
        address,
        setClickAddress,
        clickAddress,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
