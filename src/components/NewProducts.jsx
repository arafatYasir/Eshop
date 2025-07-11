import Container from "./commonLayouts/Container";
import ProductLayout from "./commonLayouts/ProductLayout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "./Button";
import { useState } from "react";
import newProducts from "../../public/products/NewProducts";
import { TfiAngleDown } from "react-icons/tfi";


const NewProducts = () => {
    const [showingProducts, setShowingProducts] = useState(newProducts.filter(p => p.id <= 5));
    const [selectedCategory, setSelectedCategory] = useState("Mobiles")

    const handleLoadMore = () => {
        setShowingProducts(newProducts);
    }

    return (
        <div className="mb-20">
            <Container>
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-4xl text-[#303030] font-['Poppins'] leading-[46px] font-semibold">New Products</h2>
                    </div>
                    <div className="flex items-center gap-4 relative">
                        <p className="text-[#303030] font-['Montserrat'] leading-6">Sort by</p>
                        <select className="w-[233px] text-[#FF624C] font-['Montserrat'] font-bold leading-6 outline-none cursor-pointer appearance-none" name="categories" value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
                            <option value="" className="text-black">All Categories</option>
                            <option value="computers" className="text-black">Computers</option>
                            <option value="mobiles" className="text-black">Mobiles</option>
                            <option value="tablets" className="text-black">Tablets</option>
                            <option value="accessories" className="text-black">Accessories</option>
                        </select>
                        <TfiAngleDown className="absolute text-sm top-1/2 -translate-1/2 right-0 pointer-events-none text-[#303030]" />
                    </div>
                </div>
                <div className="mt-12 flex items-center justify-between flex-wrap gap-[20px]">
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