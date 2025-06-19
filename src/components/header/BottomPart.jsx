import { Link } from "react-router";
import Container from "../commonLayouts/Container";
import { IoIosMenu } from "react-icons/io";
import { TfiAngleDown } from "react-icons/tfi";
import { useEffect, useRef, useState } from "react";

const BottomPart = () => {
    const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
    const [isCategoriesDropdownOpen, setIsCategoriesDropdownOpen] = useState(false);
    const productsDropdownRef = useRef(null);
    const categoriesDropdownRef = useRef(null);

    useEffect(() => {
        const handleCloseDropdown1 = (e) => {
            if(categoriesDropdownRef.current && !categoriesDropdownRef.current.contains(e.target)) {
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

    return (
        <nav className="bg-[#FF624C] py-6 font-['Montserrat']">
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
                                <TfiAngleDown className={`${isProductsDropdownOpen ? "rotate-180" : ""} transition`} />
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
    );
};

export default BottomPart;