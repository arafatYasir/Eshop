import Container from "./commonLayouts/Container";
import ProductLayout from "./commonLayouts/ProductLayout";
import { HiArrowLongRight } from "react-icons/hi2";
import ProductLayout2 from "./commonLayouts/ProductLayout2";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            style={{
                ...style,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "40px",
                height: "40px",
                border: "1px solid #303030",
                borderRadius: "50%",
                right: "-30px",
                zIndex: 10
            }}
            className={className}
            onClick={onClick}
        >
            <LiaAngleRightSolid className="text-[#303030] absolute left-1/2 -translate-x-1/2" size={20} />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    console.log(props)
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "40px",
                height: "40px",
                border: "1px solid #303030",
                borderRadius: "50%",
                left: "-50px",
                zIndex: 10
            }}
            onClick={onClick}
        >
            <LiaAngleLeftSolid className="text-[#303030] absolute left-1/2 -translate-x-1/2" size={20} />
        </div>
    );
}

const FeaturedProducts = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 5,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div className="mb-20">
            <Container>
                <div className="flex justify-between items-center">
                    <h2 className="text-4xl text-[#303030] font-['Poppins'] leading-[46px] font-semibold">Featured Products</h2>
                    <p className="flex items-center text-[#FF624C] font-['Montserrat'] font-bold leading-6 gap-4">View All <HiArrowLongRight className="text-2xl" /></p>
                </div>
                <Slider {...settings} className="mt-12">
                    <ProductLayout discountTag={true} category="Phone" title="IPhone 13 High Quality Value Buy Best Cam..." rating={5} totalRatings={100} previousPrice={5100} price="9999" />
                    <ProductLayout discountTag={true} category="Phone" title="IPhone 13 High Quality Value Buy Best Cam..." rating={5} totalRatings={100} previousPrice={5100} price="9999" />
                    <ProductLayout discountTag={true} category="Phone" title="IPhone 13 High Quality Value Buy Best Cam..." rating={5} totalRatings={100} previousPrice={5100} price="9999" />
                    <ProductLayout discountTag={true} category="Phone" title="IPhone 13 High Quality Value Buy Best Cam..." rating={5} totalRatings={100} previousPrice={5100} price="9999" />
                    <ProductLayout discountTag={true} category="Phone" title="IPhone 13 High Quality Value Buy Best Cam..." rating={5} totalRatings={100} previousPrice={5100} price="9999" />
                </Slider>
            </Container>
        </div>
    );
};

export default FeaturedProducts;