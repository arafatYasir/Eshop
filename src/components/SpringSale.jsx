import Container from "./commonLayouts/Container";
import ProductLayout2 from "./commonLayouts/ProductLayout2";
import { HiArrowLongRight } from "react-icons/hi2";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";
import springSaleProducts from "../../public/products/SpringSellProducts";
import { useEffect, useState } from "react";
import Button from "./Button";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            style={{
                ...style,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "72px",
                height: "72px",
                border: "1px solid #303030",
                borderRadius: "50%",
                right: "-30px",
                zIndex: 10
            }}
            className={className}
            onClick={onClick}
        >
            <LiaAngleRightSolid className="text-[#303030] absolute left-1/2 -translate-x-1/2 bg-transparent" size={26} />
        </div>
    );
}   

const SpringSale = () => {
    const [timerLeft, setTimerLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        const saleEndDate = new Date("June 20, 2025 12:00 PM +0600");
        const currentDate = new Date().getTime();
        const difference = saleEndDate - currentDate;

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((difference % (1000 * 60)) / 1000),
        }
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimerLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [])

    var settings = {
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
    };

    return (
        <div className="mb-20 py-16" style={{ background: "url('/images/spring-sale-bg.png')" }}>
            <Container>
                <div className="flex justify-between items-center">
                    <div className="relative">
                        <h2 className="text-[#303030] text-[56px] font-semibold font-['Poppins'] leading-[68px]">Spring Sale</h2>

                        <div className="flex items-center gap-6 mt-10 mb-[72px]">
                            <div className="flex flex-col items-center">
                                <span className="font-['Poppins'] text-[#FF624C] text-4xl font-semibold leading-[46px]">{timerLeft.days}</span>
                                <span className="text-[#303030] font-['Montserrat'] leading-6">Days</span>
                            </div>

                            <span className="font-['Poppins'] text-[#FF624C] text-4xl font-semibold leading-[46px]">:</span>

                            <div className="flex flex-col items-center">
                                <span className="font-['Poppins'] text-[#FF624C] text-4xl font-semibold leading-[46px]">{timerLeft.hours}</span>
                                <span className="text-[#303030] font-['Montserrat'] leading-6">Hours</span>
                            </div>

                            <span className="font-['Poppins'] text-[#FF624C] text-4xl font-semibold leading-[46px]">:</span>

                            <div className="flex flex-col items-center">
                                <span className="font-['Poppins'] text-[#FF624C] text-4xl font-semibold leading-[46px]">{timerLeft.minutes}</span>
                                <span className="text-[#303030] font-['Montserrat'] leading-6">Minutes</span>
                            </div>

                            <span className="font-['Poppins'] text-[#FF624C] text-4xl font-semibold leading-[46px]">:</span>

                            <div className="flex flex-col items-center">
                                <span className="font-['Poppins'] text-[#FF624C] text-4xl font-semibold leading-[46px]">{timerLeft.seconds}</span>
                                <span className="text-[#303030] font-['Montserrat'] leading-6">Seconds</span>
                            </div>
                        </div>

                        <Button value="Shop Now" />

                        <div className="absolute bottom-[-210px] left-0">
                            <img src="/images/spring-sale-dots.png" alt="background dots" />
                        </div>
                    </div>

                    <div className="max-w-[950px]">
                        <Slider {...settings} className="mt-12 ">
                            {
                                springSaleProducts.map(p => (

                                    <ProductLayout2 key={p.id} title={p.title} category={p.category} discountTag={p.discountTag} discountPercent={p.discountTag ? p.discountPercent : ""} rating={p.rating} totalRatings={p.totalRatings} price={p.price} previousPrice={p.discountTag ? p.previousPrice : ""} stockPercent={p.stockAmount} />

                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default SpringSale;