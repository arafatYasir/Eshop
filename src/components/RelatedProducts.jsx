import LongArrowIcon from "../icons/LongArrowIcon"
import newProducts from "../../public/products/NewProducts";
import Container from "./commonLayouts/Container";
import ProductLayout from "./commonLayouts/ProductLayout";


const RelatedProducts = () => {


    return (
        <div className="mb-20">
            <Container>
                <div className="flex items-center justify-between">
                    <h2 className="text-[22px] sm:text-4xl text-[#303030] font-['Poppins'] leading-[46px] font-semibold">Related Products</h2>
                    <p className="flex items-center text-[13px] sm:text-base text-[#FF624C] font-['Montserrat'] font-bold leading-6 gap-4 cursor-pointer">View All <LongArrowIcon /></p>
                </div>
                <div className="mt-10 sm:mt-12 flex items-center justify-center sm:justify-between flex-wrap gap-y-5 sm:gap-y-0 sm:gap-x-[20px]">
                    {
                        newProducts.slice(0, 5).map(p => (
                            <ProductLayout key={p.id} title={p.title} category={p.category} discountTag={p.discountTag} discountPercent={p.discountTag ? p.discountPercent : ""} rating={p.rating} totalRatings={p.totalRatings} price={p.price} previousPrice={p.discountTag ? p.previousPrice : ""} />
                        ))
                    }
                </div>
            </Container>
        </div>
    );
};

export default RelatedProducts;