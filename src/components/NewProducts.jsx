import Container from "./commonLayouts/Container";
import ProductLayout from "./commonLayouts/ProductLayout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "./Button";
import { useState } from "react";
import products from "../../public/products/NewProducts";


const NewProducts = () => {
    const [showingProducts, setShowingProducts] = useState(products.filter(p => p.id <= 5));
    const [selectedCategory, setSelectedCategory] = useState(null)

    const handleLoadMore = () => {
        setShowingProducts(products);
    }

    return (
        <div className="mb-20">
            <Container>
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-4xl text-[#303030] font-['Poppins'] leading-[46px] font-semibold">New Products</h2>
                    </div>
                    <div className="flex items-center gap-4">
                        <p className="text-[#303030] font-['Montserrat'] leading-6">Sort by</p>
                        <select className="w-[233px] text-[#FF624C] font-['Montserrat'] font-bold leading-6" name="categories" value={selectedCategory || "All Categories"} >
                            <option value="computers">Computers</option>
                            <option value="mobiles">Mobiles</option>
                        </select>
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