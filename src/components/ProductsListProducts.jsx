import { useState } from "react";
import productsList from "../../public/products/ProductsListPageProducts";
import ProductLayout from "./commonLayouts/ProductLayout";
import Pagination from "./Pagination";
import MenuIcon from "../icons/MenuIcon";
import { TfiAngleDown } from "react-icons/tfi";

const ProductsListProducts = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [sortByCategories, setSortByCategories] = useState("Popularity");
    const [sortByPrice, setSortByPrice] = useState("Price Low-to-High");

    const itemsRange = {
        start: 0,
        end: 16
    };

    itemsRange.start = currentPage === 1 ? 0 : (currentPage * 16) - 16;
    itemsRange.end = currentPage * 16;

    return (
        <div>
            <h2 className="text-[#303030] text-4xl font-['Poppins'] font-semibold leading-[46px] mb-6">Products</h2>
            <div className="flex justify-between items-center">
                <div>
                    <p className="text-[#303030] font-['Montserrat'] leading-6">Showing {itemsRange.start + 1} - {itemsRange.end} of {productsList.length}</p>
                </div>
                <div className="flex items-center">
                    <span className="text-[#303030] font-['Montserrat'] leading-6 mr-4">Sort by</span>

                    <div className="flex gap-[45px]">
                        <div className="after:content-[''] relative after:absolute after:w-[1px] after:h-[32px] after:bg-[#CBCBCB] after:top-1/2 after:-right-6 after:-translate-y-1/2">
                            <select className="w-[150px] text-[#FF624C] font-['Montserrat'] font-bold leading-6 cursor-pointer appearance-none outline-none" name="categories" value={sortByCategories} onChange={e => setSortByCategories(e.target.value)}>
                                <option value="popularity" className="text-black">Popularity</option>
                                <option value="rating" className="text-black">Rating</option>
                                <option value="availability" className="text-black">Availability</option>
                            </select>
                            <TfiAngleDown className="absolute text-sm top-1/2 -translate-1/2 right-0 pointer-events-none text-[#303030]" />
                        </div>

                        <div className="after:content-[''] relative after:absolute after:w-[1px] after:h-[32px] after:bg-[#CBCBCB] after:top-1/2 after:-right-6 after:-translate-y-1/2">
                            <select className="w-[216px] text-[#FF624C] font-['Montserrat'] font-bold leading-6 cursor-pointer appearance-none outline-none" name="categories" value={sortByPrice} onChange={e => setSortByPrice(e.target.value)}>
                                <option value="priceLowToHigh" className="text-black">Price Low-to-High</option>
                                <option value="priceHighToLow" className="text-black">Price High-to-Low</option>
                            </select>
                            <TfiAngleDown className="absolute text-sm top-1/2 -translate-1/2 right-0 pointer-events-none text-[#303030]" />
                        </div>

                        <MenuIcon />
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap mt-[52px]">
                {productsList.slice(itemsRange.start, itemsRange.end).map(p => (
                    <ProductLayout
                        key={p.id}
                        title={p.title}
                        category={p.category}
                        discountTag={p.discountTag}
                        discountPercent={p.discountTag ? p.discountPercent : ""}
                        rating={p.rating}
                        totalRatings={p.totalRatings}
                        price={p.price}
                        previousPrice={p.discountTag ? p.previousPrice : ""}
                    />
                ))}
            </div>

            <Pagination totalItems={productsList.length} itemsPerPage={16} currentPage={currentPage} onPageChange={setCurrentPage} />
        </div>
    );
};

export default ProductsListProducts;