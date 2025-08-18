import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import FullscreenIcon from "../icons/FullscreenIcon";

const ProductDetailsCarousel = () => {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [showFullScreen, setShowFullScreen] = useState(false);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);

    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
    }, []);

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };

    const settings2 = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
        arrows: false
    };

    return (
        <div>
            {/* First Slider */}
            <Slider className="max-w-[833px]" {...settings} asNavFor={nav2} ref={slider => (sliderRef1 = slider)}>
                <div className="relative max-w-[370px] sm:max-w-full">
                    <img className="w-full h-auto" src="/images/product-details-image.png" alt="Product Image" />
                    <div
                        className="absolute top-2 right-2 cursor-pointer"
                        onClick={() => setShowFullScreen(true)}
                    >
                        <FullscreenIcon />
                    </div>
                </div>
                <div className="relative max-w-[370px] sm:max-w-full">
                    <img className="w-full h-auto" src="/images/product-details-image.png" alt="Product Image" />
                    <div
                        className="absolute top-2 right-2 cursor-pointer"
                        onClick={() => setShowFullScreen(true)}
                    >
                        <FullscreenIcon />
                    </div>
                </div>
                <div className="relative max-w-[370px] sm:max-w-full">
                    <img className="w-full h-auto" src="/images/product-details-image.png" alt="Product Image" />
                    <div
                        className="absolute top-2 right-2 cursor-pointer"
                        onClick={() => setShowFullScreen(true)}
                    >
                        <FullscreenIcon />
                    </div>
                </div>
            </Slider>

            {/* Second Slider */}
            <Slider
                className="w-[350px] mt-8"
                asNavFor={nav1}
                ref={slider => (sliderRef2 = slider)}
                {...settings2}
            >
                <div className="">
                    <img src="/images/product-details-preview.png" alt="Product Details Preview" />
                </div>
                <div className="">
                    <img src="/images/product-details-preview.png" alt="Product Details Preview" />
                </div>
                <div className="">
                    <img src="/images/product-details-preview.png" alt="Product Details Preview" />
                </div>
            </Slider>

            {/* Fullscreen Modal */}
            {showFullScreen && (
                <div className="fixed inset-0 bg-black/50 w-full h-screen flex items-center justify-center">
                    <img className="scale-120" src="/images/product-details-image.png" alt="Product Image" />

                    <button className="absolute top-[13%] right-[21%] text-2xl cursor-pointer font-bold transition text-[#FF624C]" onClick={() => setShowFullScreen(false)}>&#10005;</button>
                </div>
            )}
        </div>
    );
};

export default ProductDetailsCarousel;