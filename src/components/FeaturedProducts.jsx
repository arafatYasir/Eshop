import Container from "./commonLayouts/Container";
import ProductLayout from "./commonLayouts/ProductLayout";
import { HiArrowLongRight } from "react-icons/hi2";
import ProductLayout2 from "./commonLayouts/ProductLayout2";

const FeaturedProducts = () => {
    return (
        <div className="mb-20">
            <Container>
                <div className="flex justify-between items-center">
                    <h2 className="text-4xl text-[#303030] font-['Poppins'] leading-[46px] font-semibold">Featured Products</h2>
                    <p className="flex items-center text-[#FF624C] font-['Montserrat'] font-bold leading-6 gap-4">View All <HiArrowLongRight className="text-2xl" /></p>
                </div>
                <div className="flex justify-between mt-12">
                    <ProductLayout discountTag={true} category="Phone" title="IPhone 13 High Quality Value Buy Best Cam..." rating={5} totalRatings={100} previousPrice={5100} price="9999" />
                    <ProductLayout price="2234" />
                    <ProductLayout />
                    <ProductLayout />
                    <ProductLayout />
                </div>
                <ProductLayout2 discountTag={true} category="Phone" title="LP78245 Smart TV OLED 43 Inch 4K HD Dynamic Color Enhancer USB Movie ..." rating={5} totalRatings={100} previousPrice="5058.00" price="9999" stockPercent="50" />
            </Container>
        </div>
    );
};

export default FeaturedProducts;