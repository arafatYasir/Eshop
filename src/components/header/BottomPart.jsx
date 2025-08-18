import { Link } from "react-router";
import Container from "../commonLayouts/Container";
import { IoIosMenu } from "react-icons/io";
import { TfiAngleDown } from "react-icons/tfi";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../../menuSlice";

const BottomPart = () => {
    const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
    const [isCategoriesDropdownOpen, setIsCategoriesDropdownOpen] = useState(false);
    const productsDropdownRef = useRef(null);
    const categoriesDropdownRef = useRef(null);
    const isMenuOpen = useSelector(store => store.menu.showMenu);
    const dispatch = useDispatch();

    const handleCloseMenu = () => {
        dispatch(closeMenu());
    }


    useEffect(() => {
        const handleCloseDropdown1 = (e) => {
            if (categoriesDropdownRef.current && !categoriesDropdownRef.current.contains(e.target)) {
                setIsCategoriesDropdownOpen(false);
            }
        }
        const handleCloseDropdown2 = (e) => {
            if (productsDropdownRef.current && !productsDropdownRef.current.contains(e.target)) {
                setIsProductsDropdownOpen(false);
            }
        }

        document.addEventListener("mousedown", handleCloseDropdown1);
        document.addEventListener("mousedown", handleCloseDropdown2);

        return () => {
            document.removeEventListener("mousedown", handleCloseDropdown1);
            document.removeEventListener("mousedown", handleCloseDropdown2);
        };
    }, []);

    // Another useEffect to handle body scroll lock when the sidebar is open
    useEffect(() => {
        if(isMenuOpen) {
            document.body.style.overflow = "hidden";
        }
        else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        }
        
    }, [isMenuOpen])

    return (
        <>
            {/* ----Desktop Navbar---- */}
            <nav className="bg-[#FF624C] py-6 font-['Montserrat'] hidden sm:block">
                <Container>
                    <div className="flex justify-between">
                        <ul className="flex items-center gap-20 text-white font-bold leading-6">
                            <li className="relative" ref={categoriesDropdownRef}>
                                <button className="flex items-center gap-4 cursor-pointer" to="#" onClick={() => setIsCategoriesDropdownOpen(!isCategoriesDropdownOpen)}>
                                    <IoIosMenu className="text-3xl" />
                                    All Categories
                                </button>

                                {isCategoriesDropdownOpen && (
                                    <div className="absolute top-[80%] left-0 mt-2 w-72 z-50 bg-white rounded-xl shadow-lg border border-gray-100 p-4 space-y-2 font-['Poppins']">
                                        <a href="#" className="block px-4 py-2 rounded-lg text-sm text-[#303030] hover:bg-gray-100 transition duration-150">
                                            Computers & Tablets
                                        </a>

                                        <a href="#" className="block px-4 py-2 rounded-lg text-sm text-[#303030] hover:bg-gray-100 transition duration-150">
                                            Mobile & Accessories
                                        </a>

                                        <a href="#" className="block px-4 py-2 rounded-lg text-sm text-[#303030] hover:bg-gray-100 transition duration-150">
                                            TV & Home Theater
                                        </a>

                                        <a href="#" className="block px-4 py-2 rounded-lg text-sm text-[#303030] hover:bg-gray-100 transition duration-150">
                                            Audio & Headphones
                                        </a>

                                        <a href="#" className="block px-4 py-2 rounded-lg text-sm text-[#303030] hover:bg-gray-100 transition duration-150">
                                            Cameras & Camcorders
                                        </a>

                                        <a href="#" className="block px-4 py-2 rounded-lg text-sm text-[#303030] hover:bg-gray-100 transition duration-150">
                                            Gaming Equipment
                                        </a>

                                        <a href="#" className="block px-4 py-2 rounded-lg text-sm text-[#303030] hover:bg-gray-100 transition duration-150">
                                            Home Appliances
                                        </a>
                                    </div>
                                )}
                            </li>
                            <li ref={productsDropdownRef} className="relative">
                                <button onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)} className="flex items-center gap-2 cursor-pointer" to="/products-list">
                                    Products
                                    <TfiAngleDown className={`${isProductsDropdownOpen ? "rotate-180" : ""} transition text-sm font-bold`} />
                                </button>
                                {isProductsDropdownOpen && (
                                    <div className="absolute top-[80%] left-0 mt-2 w-64 z-50 bg-white rounded-xl shadow-lg border border-gray-100 p-4 space-y-2 font-['Poppins']">
                                        <Link
                                            to="/products-list"
                                            className="block px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-150"
                                            onClick={() => setIsProductsDropdownOpen(false)}
                                        >
                                            <p className="text-sm font-semibold text-[#303030]">Product 1</p>
                                        </Link>

                                        <Link
                                            to="/products-list"
                                            className="block px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-150"
                                            onClick={() => setIsProductsDropdownOpen(false)}
                                        >
                                            <p className="text-sm font-semibold text-[#303030]">Product 2</p>
                                        </Link>

                                        <Link
                                            to="/products-list"
                                            className="block px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-150"
                                            onClick={() => setIsProductsDropdownOpen(false)}
                                        >
                                            <p className="text-sm font-semibold text-[#303030]">Product 3</p>
                                        </Link>
                                    </div>
                                )}
                            </li>
                            <li>
                                <Link to="/blog">Blog</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>

                        <ul className="flex items-center gap-20 text-white font-bold leading-6">
                            <li>
                                <Link to="#">LIMITED SALE</Link>
                            </li>
                            <li>
                                <Link to="#">Best Seller</Link>
                            </li>
                            <li>
                                <Link to="#">New Arrival</Link>
                            </li>
                        </ul>
                    </div>
                </Container>
            </nav>

            {/* ----Mobile Navbar---- */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300"
                    onClick={handleCloseMenu}
                ></div>
            )}

            {/* Sidebar Menu */}
            <div className={`fixed inset-0 w-[75%] max-w-[320px] z-50 bg-white sm:hidden rounded-r-2xl shadow-xl transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-500 ease-in-out`}>

                {/* Header */}
                <div className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-[#ffffff] to-[#f9f9f9] rounded-tr-2xl border-b border-gray-200">
                    <h2 className="text-2xl font-bold text-[#303030] tracking-wide">Menu</h2>
                    <button onClick={handleCloseMenu} className="text-3xl text-[#303030] hover:text-[#ff624c] transition duration-200">
                        &times;
                    </button>
                </div>

                {/* Menu Links */}
                <ul className="flex flex-col px-6 py-6 space-y-6">
                    {[
                        "All Categories",
                        "Products",
                        "Blog",
                        "Contact",
                        "Limited Sale",
                        "Best Seller",
                        "New Arrival",
                    ].map((item, index) => (
                        <li
                            key={index}
                            className="relative text-lg font-medium text-[#303030] cursor-pointer group transition-colors duration-200"
                        >
                            {item}
                            {/* Hover underline animation */}
                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#ff624c] group-hover:w-full transition-all duration-300 rounded"></span>
                        </li>
                    ))}
                </ul>
            </div>

        </>
    );
};

export default BottomPart;