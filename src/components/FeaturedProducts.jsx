import Container from "./commonLayouts/Container";
import ProductLayout from "./commonLayouts/ProductLayout";
import { HiArrowLongRight } from "react-icons/hi2";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";
import featuredProducts from "../../public/products/FeaturedProducts";
import LongArrowIcon from "../icons/LongArrowIcon";

// ---- Mobile Slider Arrow Functions ----

function SampleNextArrowMobile(props) {
    const { className, style, onClick } = props;
    return (
        <div
            style={{
                ...style,
                display: "flex",
                justifyContent: "center",
                background: "white",
                alignItems: "center",
                width: "40px",
                height: "40px",
                border: "1px solid #303030",
                borderRadius: "50%",
                right: "-20px",
                zIndex: 10
            }}
            className={className}
            onClick={onClick}
        >
            <LiaAngleRightSolid className="text-[#303030] absolute left-1/2 -translate-x-1/2" size={16} />
        </div>
    );
}

function SamplePrevArrowMobile(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "flex",
                background: "white",
                justifyContent: "center",
                alignItems: "center",
                width: "40px",
                height: "40px",
                border: "1px solid #303030",
                borderRadius: "50%",
                left: "-20px",
                zIndex: 10,
            }}
            onClick={onClick}
        >
            <LiaAngleLeftSolid className="text-[#303030] absolute left-1/2 -translate-x-1/2" size={16} />
        </div>
    );
}

// ---- PC Slider Arrow Functions ----
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "flex",
                background: "white",
                justifyContent: "center",
                alignItems: "center",
                width: "40px",
                height: "40px",
                border: "1px solid #303030",
                borderRadius: "50%",
                left: "-4px",
                zIndex: 10,
            }}
            onClick={onClick}
        >
            <LiaAngleLeftSolid className="text-[#303030] absolute left-1/2 -translate-x-1/2" size={16} />
        </div>
    );
}

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            style={{
                ...style,
                display: "flex",
                justifyContent: "center",
                background: "white",
                alignItems: "center",
                width: "40px",
                height: "40px",
                border: "1px solid #303030",
                borderRadius: "50%",
                right: "0px",
                zIndex: 10
            }}
            className={className}
            onClick={onClick}
        >
            <LiaAngleRightSolid className="text-[#303030] absolute left-1/2 -translate-x-1/2" size={16} />
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
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 415,
                settings: {
                    slidesToShow: 1,
                    nextArrow: <SampleNextArrowMobile />,
                    prevArrow: <SamplePrevArrowMobile />,
                }
            }
        ]
    };

    return (
        <div className="mb-20">
            <Container>
                <div className="flex justify-between items-center px-2 sm:p-0">
                    <h2 className="text-[22px] sm:text-4xl text-[#303030] font-['Poppins'] leading-[46px] font-semibold">Featured Products</h2>
                    <p className="flex items-center text-[13px] sm:text-base text-[#FF624C] font-['Montserrat'] font-bold leading-6 gap-4">View All <LongArrowIcon width="25px" /></p>
                </div>

                <Slider {...settings} className="mt-12 sm:px-9 max-w-[285px] mx-auto sm:min-w-full">
                    {
                        featuredProducts.map(p => (
                            <div className="flex items-center justify-center" key={p.id}>
                                <ProductLayout title={p.title} category={p.category} discountTag={p.discountTag} discountPercent={p.discountTag ? p.discountPercent : ""} rating={p.rating} totalRatings={p.totalRatings} price={p.price} previousPrice={p.discountTag ? p.previousPrice : ""} />
                            </div>
                        ))
                    }
                </Slider>
            </Container>
        </div>
    );
};

export default FeaturedProducts;