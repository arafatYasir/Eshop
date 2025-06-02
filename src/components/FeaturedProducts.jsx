import Container from "./commonLayouts/Container";
import ProductLayout from "./commonLayouts/ProductLayout";
import { HiArrowLongRight } from "react-icons/hi2";
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
                left: "-30px",
                zIndex: 10
            }}
            onClick={onClick}
        >
            <LiaAngleLeftSolid className="text-[#303030] absolute left-1/2 -translate-x-1/2" size={20} />
        </div>
    );
}

const FeaturedProducts = () => {
    const products = [
        {
            id: 1,
            category: "Phone",
            title: "iPhone 13 Pro Max - 128GB - Sierra Blue",
            rating: 5,
            totalRatings: 321,
            previousPrice: 1299,
            price: 1099,
            discountTag: true,
            discountPercent: 20
        },
        {
            id: 2,
            category: "Laptop",
            title: "MacBook Air M2 - 13 inch - Midnight",
            rating: 5,
            totalRatings: 215,
            previousPrice: 1499,
            price: 1349,
            discountTag: true,
            discountPercent: 25
        },
        {
            id: 3,
            category: "Headphone",
            title: "Sony WH-1000XM5 Wireless Noise-Canceling",
            rating: 4,
            totalRatings: 189,
            previousPrice: 399,
            price: 349,
            discountTag: true,
            discountPercent: 63
        },
        {
            id: 4,
            category: "Watch",
            title: "Apple Watch Series 9 - GPS - 45mm",
            rating: 4,
            totalRatings: 143,
            price: 459,
            discountTag: false,
        },
        {
            id: 5,
            category: "Camera",
            title: "Canon EOS R50 Mirrorless Vlogging Camera",
            rating: 4,
            totalRatings: 76,
            previousPrice: 979,
            price: 899,
            discountTag: true,
            discountPercent: 50
        },
        {
            id: 6,
            category: "Tablet",
            title: "iPad Pro 12.9-inch (6th Gen) M2 Chip",
            rating: 5,
            totalRatings: 301,
            price: 1299,
            discountTag: false,
        },
        {
            id: 7,
            category: "Accessories",
            title: "Anker 737 Power Bank - 140W USB-C",
            rating: 5,
            totalRatings: 65,
            previousPrice: 159,
            price: 129,
            discountTag: true,
            discountPercent: 30
        },
        {
            id: 8,
            category: "Gaming",
            title: "PlayStation 5 Disc Edition Console",
            rating: 4,
            totalRatings: 425,
            previousPrice: 599,
            price: 549,
            discountTag: true,
            discountPercent: 55
        },
        {
            id: 9,
            category: "Monitor",
            title: "LG UltraGear 27” QHD Nano IPS 165Hz Gaming Monitor",
            rating: 5,
            totalRatings: 142,
            previousPrice: 399,
            price: 349,
            discountTag: true,
            discountPercent: 10
        },
        {
            id: 10,
            category: "Speaker",
            title: "JBL Flip 6 Portable Bluetooth Speaker",
            rating: 4,
            totalRatings: 387,
            price: 99,
            discountTag: false,
        },
    ];

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
    };
    return (
        <div className="mb-20">
            <Container>
                <div className="flex justify-between items-center">
                    <h2 className="text-4xl text-[#303030] font-['Poppins'] leading-[46px] font-semibold">Featured Products</h2>
                    <p className="flex items-center text-[#FF624C] font-['Montserrat'] font-bold leading-6 gap-4">View All <HiArrowLongRight className="text-2xl" /></p>
                </div>
                <Slider {...settings} className="mt-12 px-9">
                    {
                        products.map(p => (
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