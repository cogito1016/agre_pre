import { BrowserRouter, Route } from "react-router-dom";
import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/cart" component={Cart} />
    </BrowserRouter>
  );
};

export default Navigation;
