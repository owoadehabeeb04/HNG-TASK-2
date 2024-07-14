export type productsProps = {
  productName: string;
  name: string;
  productImage: string;
  productPrice: string | number;
  current_price: { NGN: (string | number)[] }[];
  slashedProductPrice: string | number;
  ProductCategory: string;
  productDetails1: string;
  productDetails2: string;
  productDetails3: string;
  id: string;
  unique_id: string;
  photos: { url: string }[];
};
export type cartProps = {
  productName: string;
  name: string;
  productImage: string;
  productPrice: string | number;
  current_price: { NGN: (string | number)[] }[];
  slashedProductPrice: string | number;
  ProductCategory: string;
  productDetails1: string;
  productDetails2: string;
  productDetails3: string;
  id: string;
  quantity: number;
  available_quantity: number;
  unique_id: string;
  photos: { url: string }[];
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
  setTotalPrice?: React.Dispatch<React.SetStateAction<string>>;
  setAddressOrPayment?: React.Dispatch<React.SetStateAction<number>>;
  addressOrPayment?: number;
  setClickAddress?: React.Dispatch<React.SetStateAction<number>>;
  clickAddress?: number;
  address?: addressProps[];
  setAddress?: React.Dispatch<React.SetStateAction<addressProps[]>>;
  
};
