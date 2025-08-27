import { Routes, Route } from "react-router";
import Layout from "./components/commonLayouts/Layout"
import HomePage from "./pages/HomePage"
import ProductsListPage from "./pages/ProductsListPage"
import ProductDetailsPage from "./pages/ProductDetailsPage"
import CheckoutPage from "./pages/CheckoutPage"
import BlogPage from "./pages/BlogPage"
import ContactPage from "./pages/ContactPage"
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import auth from "./firebase/firebaseconfig";
import { removeUser, setUser } from "./slices/authSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        dispatch(setUser({
          uid: user.uid,
          name: user.displayName || null,
          email: user.email,
          emailVerified: user.emailVerified,
          photoURL: user.photoURL || null
        }));
      }
      else {
        dispatch(removeUser());
      }
    });


    return () => unsubscribe();
  }, [dispatch]);


  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/products-list" element={<ProductsListPage />} />
        <Route path="/product-details" element={<ProductDetailsPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
};

export default App;