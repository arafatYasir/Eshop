import { useState } from "react";
import productsList from "../../public/products/ProductsListPageProducts";
import ProductLayout from "./commonLayouts/ProductLayout";
import Pagination from "./Pagination";

const ProductsListProducts = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const itemsRange = {
        start: 0,
        end: 16
    };

    itemsRange.start = currentPage === 1 ? 0 : (currentPage * 16) - 16;
    itemsRange.end = currentPage * 16;

    return (
        <div>
            <h2 className="text-[#303030] text-4xl font-['Poppins'] font-semibold leading-[46px] mb-6">Products</h2>
            <div>
                <div>
                    <p className="text-[#303030] font-['Montserrat'] leading-6">Showing {itemsRange.start + 1} - {itemsRange.end} of {productsList.length}</p>
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