import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

const ProductDetailsCarousel = () => {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);

    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
    }, []);

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const settings2 = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
    };


    return (
        <div>
            {/* First Slider */}
            <h4>First Slider</h4>
            <Slider className="w-[833px] bg-[#D9D9D9]" {...settings} asNavFor={nav2} ref={slider => (sliderRef1 = slider)}>
                <div className="rounded-[25px]">
                    <img className="rounded-[25px]" src="/images/product-details-image.png" alt="Product Image" />
                </div>
                <div>
                    <img src="/images/product-details-image.png" alt="Product Image" />
                </div>
                <div>
                    <img src="/images/product-details-image.png" alt="Product Image" />
                </div>
                <div>
                    <img src="/images/product-details-image.png" alt="Product Image" />
                </div>
                <div>
                    <img src="/images/product-details-image.png" alt="Product Image" />
                </div>
                <div>
                    <img src="/images/product-details-image.png" alt="Product Image" />
                </div>
                <div>
                    <img src="/images/product-details-image.png" alt="Product Image" />
                </div>
            </Slider>

            {/* Second Slider */}
            <h4>Second Slider</h4>
            <Slider
                asNavFor={nav1}
                ref={slider => (sliderRef2 = slider)}
                {...settings2}
            >
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
            </Slider>
        </div>
    );
};

export default ProductDetailsCarousel;