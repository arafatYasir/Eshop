import Container from "../components/commonLayouts/Container"
import ProductDetailsCarousel from "../components/ProductDetailsCarousel";

const ProductDetailsPage = () => {
    return (
        <Container>
            <div className="font-['Montserrat'] text-[#303030] text-base leading-6 flex gap-10 mt-16">
                <span className="relative after:content-[''] after:absolute after:w-[1px] after:h-[20px] after:bg-[#4A4A4A] after:top-1/2 after:-translate-y-1/2 after:right-[-19px]">Home</span>
                <span className="relative after:content-[''] after:absolute after:w-[1px] after:h-[20px] after:bg-[#4A4A4A] after:top-1/2 after:-translate-y-1/2 after:right-[-19px]">Computers & Tablets</span>
                <span className="relative after:content-[''] after:absolute after:w-[1px] after:h-[20px] after:bg-[#4A4A4A] after:top-1/2 after:-translate-y-1/2 after:right-[-19px]">Laptop</span>
                <span className="font-bold">NexSUS ROCK Strix Scar 17 Gaming Laptop</span>
            </div>

            <div>
                <ProductDetailsCarousel />
                
            </div>
        </Container>
    );
};

export default ProductDetailsPage;