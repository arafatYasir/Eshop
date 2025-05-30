import { Outlet } from "react-router";
import Header from "../header/Header";

const Layout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <h2>Footer</h2>
        </div>
    );
};

export default Layout;