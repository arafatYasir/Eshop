import Container from "./commonLayouts/Container";
import ProductLayout from "./commonLayouts/ProductLayout";
import { HiArrowLongRight } from "react-icons/hi2";

const FeaturedProducts = () => {
    return (
        <div className="mb-20">
            <Container>
                <div className="flex justify-between items-center">
                    <h2 className="text-4xl text-[#303030] font-['Poppins'] leading-[46px] font-semibold">Featured Products</h2>
                    <p className="flex items-center text-[#FF624C] font-['Montserrat'] font-bold leading-6 gap-4">View All <HiArrowLongRight className="text-2xl" /></p>
                </div>
                <div className="flex justify-between">
                    <ProductLayout />
                    <ProductLayout />
                    <ProductLayout />
                    <ProductLayout />
                    <ProductLayout />
                </div>
            </Container>
        </div>
    );
};

export default FeaturedProducts;