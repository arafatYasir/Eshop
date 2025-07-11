import { HiArrowLongRight } from "react-icons/hi2";
import bestSellingProducts from "../../public/products/BestSellingProducts";
import Container from "./commonLayouts/Container";
import ProductLayout from "./commonLayouts/ProductLayout";
import LongArrowIcon from "../icons/LongArrowIcon";

const BestSeller = () => {
    return (
        <Container>
            <div className="flex justify-between">
                <div className="max-w-[902px]">
                    <div className="flex justify-between items-center">
                        <h2 className="text-4xl text-[#303030] font-['Poppins'] leading-[46px] font-semibold">Best Seller</h2>
                        <p className="flex items-center text-[#FF624C] font-['Montserrat'] font-bold leading-6 gap-4 cursor-pointer">View All <LongArrowIcon /></p>
                    </div>
                    <div className="flex flex-wrap gap-1 justify-between mt-12">
                        {
                            bestSellingProducts.map(p => (
                                <ProductLayout key={p.id} title={p.title} category={p.category} discountTag={p.discountTag} discountPercent={p.discountTag ? p.discountPercent : ""} rating={p.rating} totalRatings={p.totalRatings} price={p.price} previousPrice={p.discountTag ? p.previousPrice : ""} />
                            ))
                        }
                    </div>
                </div>
                <div>
                    <img src="images/best-seller-offer.png" alt="Best seller offer" />
                </div>
            </div>
        </Container>
    );
};

export default BestSeller;