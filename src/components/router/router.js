import { Routes, Route } from "react-router-dom";
import { Products } from "../products/products";
import { Cart } from "../cart/cart";
import { Wishlist } from "../wishlist/wishlist";
import { Home } from "../home/home";
import { Profile } from "../authentication/profile";
import { PrivateRoute } from "./privateRoute";
import { Login } from "../authentication/login";
import { ForgotPassword } from "../authentication/forgotPassword";
import { Signup } from "../authentication/singup";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/password/forgot" element={<ForgotPassword />} />
      <PrivateRoute path="/cart" element={<Cart />} />
      <PrivateRoute path="/wishlist" element={<Wishlist />} />
      <PrivateRoute path="/profile" element={<Profile />} />
    </Routes>
  );
}