import { Link } from "react-router";
import Container from "../commonLayouts/Container";
import { IoIosMenu } from "react-icons/io";
import { TfiAngleDown } from "react-icons/tfi";
import { useEffect, useRef, useState } from "react";

const BottomPart = () => {
    const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
    const [isCategoriesDropdownOpen, setIsCategoriesDropdownOpen] = useState(false);
    const productsDropdownRef = useRef(null);
    // const categoriesDropdownRef = useRef(null);

    useEffect(() => {
        const handleCloseDropdown = (e) => {
            console.log(productsDropdownRef.current.contains(e.target));
            if (productsDropdownRef.current && !productsDropdownRef.current.contains(e.target)) {
                setIsProductsDropdownOpen(false);
            }
        }

        document.addEventListener("mousedown", handleCloseDropdown);

        return () => document.removeEventListener("mousedown", handleCloseDropdown);
    }, []);

    console.log(isProductsDropdownOpen);

    return (
        <nav className="bg-[#FF624C] py-6 font-['Montserrat']">
            <Container>
                <div className="flex justify-between">
                    <ul className="flex items-center gap-20 text-white font-bold leading-6">
                        <li className="relative"
                            onMouseEnter={() => {
                                setIsCategoriesDropdownOpen(true);
                                setIsProductsDropdownOpen(false);
                            }}
                            onMouseLeave={() => setIsCategoriesDropdownOpen(false)}
                        >
                            <button className="flex items-center gap-4 cursor-pointer" to="#">
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
                                    <a href="#" className="block px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-150">
                                        <div className="text-sm font-semibold text-[#303030]">Product 1</div>
                                    </a>

                                    <a href="#" className="block px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-150">
                                        <div className="text-sm font-semibold text-[#303030]">Product 2</div>
                                    </a>

                                    <a href="#" className="block px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-150">
                                        <div className="text-sm font-semibold text-[#303030]">Product 3</div>
                                    </a>
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