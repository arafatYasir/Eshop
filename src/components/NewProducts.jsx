import Container from "./commonLayouts/Container";
import ProductLayout from "./commonLayouts/ProductLayout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "./Button";
import { useEffect, useRef, useState } from "react";
import newProducts from "../../public/products/NewProducts";
import { TfiAngleDown } from "react-icons/tfi";


const NewProducts = () => {
    const [showingProducts, setShowingProducts] = useState(newProducts.slice(0, 5));
    const [selectedCategory, setSelectedCategory] = useState({ id: 1, name: "All Categories", value: "all" });
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const categories = [
        { id: 1, name: "All Categories", value: "all" },
        { id: 2, name: "Computers", value: "computers" },
        { id: 3, name: "Mobiles", value: "mobiles" },
        { id: 4, name: "Tablets", value: "tablets" },
        { id: 5, name: "Accessories", value: "accessories" },
    ];


    const handleSelectCategory = (category) => {
        setSelectedCategory(category);
        setIsDropdownOpen(false);
    }

    const handleLoadMore = () => {
        setShowingProducts(newProducts);
    }

    useEffect(() => {
        const handleCloseDropdown = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsDropdownOpen(false);
            }
        }

        document.addEventListener("mousedown", handleCloseDropdown);

        return () => document.removeEventListener("mousedown", handleCloseDropdown);
    }, [])

    return (
        <div className="mb-20">
            <Container>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-2 sm:px-0">
                    <div>
                        <h2 className="text-[22px] sm:text-4xl text-[#303030] font-['Poppins'] leading-[46px] font-semibold">New Products</h2>
                    </div>
                    <div className="flex items-center gap-4 relative">
                        <p className="text-[#303030] font-['Montserrat'] leading-6">Sort by</p>

                        <div className="relative" ref={dropdownRef}>
                            <select className="w-[233px] text-[#FF624C] font-['Montserrat'] font-bold leading-6 outline-none cursor-pointer appearance-none hidden" name="categories" value={selectedCategory.value || ""}>

                            </select>


                            {/* Custom dropdown */}
                            <div
                                className="p-2 cursor-pointer flex items-center"
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                                {selectedCategory &&
                                    <>
                                        <span className="mr-10 text-lg font-semibold text-[#FF624C]">{selectedCategory?.name}</span>
                                        <TfiAngleDown className={`text-[#303030] text-[11px] sm:text-base ${isDropdownOpen ? "rotate-180" : ""} transition`} />
                                    </>
                                }
                            </div>

                            {/* Country list */}
                            {isDropdownOpen && (
                                <ul className="absolute w-[125px] sm:w-[150px] border border-gray-300 bg-white shadow-lg z-10">
                                    {categories.map(category => (
                                        <li className="flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer"
                                            key={category?.id}
                                            onClick={() => handleSelectCategory(category)} >
                                            <span className="text-[11.5px] sm:text-base">{category?.name}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                    </div>
                </div>
                <div className="mt-12 flex flex-col sm:flex-row items-center justify-between sm:flex-wrap gap-[20px]">
                    {
                        showingProducts.map(p => (
                            <ProductLayout key={p.id} title={p.title} category={p.category} discountTag={p.discountTag} discountPercent={p.discountTag ? p.discountPercent : ""} rating={p.rating} totalRatings={p.totalRatings} price={p.price} previousPrice={p.discountTag ? p.previousPrice : ""} />
                        ))
                    }
                </div>

                {
                    showingProducts.length === 5 ? (
                        <div className="text-center mt-16">
                            <Button handleLoadMore={handleLoadMore} value="Load More" bg="white" color="#FF624C" border={true} />
                        </div>
                    ) : ""
                }
            </Container>
        </div>
    );
};

export default NewProducts;