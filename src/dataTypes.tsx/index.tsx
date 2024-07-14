/* eslint-disable @typescript-eslint/no-explicit-any */
export type productsProps = {
  productName: string;
  name: string;
  productImage: string;
  productPrice: string | number;
  current_price: any;
  slashedProductPrice: string | number;
  ProductCategory: string;
  productDetails1: string;
  productDetails2: string;
  productDetails3: string;
  id: string;
  unique_id: string;
  photos: any;
};
export type cartProps = {
  productName: string;
  name: string;

  productImage: string;
  productPrice: any;
  current_price: any;
  slashedProductPrice: any;
  ProductCategory: string;
  productDetails1: string;
  productDetails2: string;
  productDetails3: string;
  id: string;
  quantity: number;
  available_quantity: number;
  // id: string;
  unique_id: string;
  photos: any;
};

export type RouteConfig = {
  path: string;
  text: string;
};
export type addressProps = {
  name?: string;
  subName?: string;
  phoneNo?: string;
};

export type stateContextType = {
  setCartProducts?: React.Dispatch<React.SetStateAction<cartProps[]>>;
  cartProducts?: cartProps[];
  setGottenProducts?: React.Dispatch<React.SetStateAction<productsProps[]>>;
  gottenProducts?: productsProps[];
  cartProps?: cartProps[];
  productProps?: productsProps[];
  totalPrice?: string;
  setTotalPrice?: React.Dispatch<React.SetStateAction<string>> | any;
  setAddressOrPayment?: React.Dispatch<React.SetStateAction<number>> | any;
  addressOrPayment?: number;
  setClickAddress?: React.Dispatch<React.SetStateAction<any>> | any;
  clickAddress?: any;
  address?: any[];
  setAddress?: React.Dispatch<React.SetStateAction<addressProps[]>>;
};
