import { Outlet } from "react-router";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Layout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;