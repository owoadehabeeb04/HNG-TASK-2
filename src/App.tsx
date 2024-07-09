import "./App.css";
import { Route, Routes } from "react-router-dom";
import Shop from "./pages/shop";
import ProductDetails from "./pages/productDetails";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import PaymentConfirmation from "./pages/paymentConfirmation";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/productDescription/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/paymentConfirmation" element={<PaymentConfirmation />} />
      </Routes>
    </>
  );
}

export default App;
