import { Routes, Route } from "react-router";
import Layout from "./components/commonLayouts/Layout"
import HomePage from "./pages/HomePage"
import ProductsListPage from "./pages/ProductsListPage"
import ProductDetailsPage from "./pages/ProductDetailsPage"
import CheckoutPage from "./pages/CheckoutPage"
import BlogPage from "./pages/BlogPage"
import ContactPage from "./pages/ContactPage"
import CartPage from "./pages/CartPage";


const App = () => {
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
      </Route>
    </Routes>
  );
};

export default App;