import { BrowserRouter, Route } from "react-router-dom";
import Cart from "./cart/Cart";
import Home from "./home/Home";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/cart" component={Cart} />
    </BrowserRouter>
  );
};

export default Navigation;
