import { useState } from "react";
import Container from "../components/commonLayouts/Container";
import { TfiAngleDown } from "react-icons/tfi";

const ProductsListPage = () => {
    const [showCategories, setShowCategories] = useState(true);
    const [showBrands, setShowBrands] = useState(true);
    const [showPrice, setShowPrice] = useState(true);
    const [brandsLimit, setBrandsLimit] = useState(7);

    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(5000);
    const [minInput, setMinInput] = useState("0");
    const [maxInput, setMaxInput] = useState("5000");

    // const updateSlider = (type, value) => {
    //     if(value === "") {
    //         if(type === "min") {
    //             setMinValue("")
    //         }
    //         else if(type === "max") {
    //             setMaxValue("");
    //         }
    //         return;
    //     }

    //     const parsedValue = parseInt(value);

    //     if(isNaN(parsedValue)) {
    //         return;
    //     }

    //     if(type === "min" && parsedValue >= 0 && parsedValue <= 5000) {
    //         const newMin = Math.min(parsedValue, maxValue);
    //         setMinValue(newMin);
    //     } else if(type === "max" && parsedValue <= 5000 && parsedValue >= 0) {
    //         const newMax = Math.max(parsedValue, minValue);
    //         setMaxValue(newMax);
    //     }
    // }

    const handleMinInputChange = (e) => {
        const value = e.target.value;
        setMinInput(value);

        const parse = parseInt(value);
        if (!isNaN(parse) && parse >= 0 && parse <= maxValue) {
            setMinValue(parse);
        }
    }

    const handleMaxInputChange = (e) => {
        const value = e.target.value;
        setMaxInput(value);

        const parse = parseInt(value);
        if (!isNaN(parse) && parse <= 5000 && parse >= minValue) {
            setMaxValue(parse);
        }
    }

    const handleSliderChange = (type, value) => {
        const parse = parseInt(value);

        if (type === "min" && parse <= maxValue) {
            setMinValue(parse);
            setMinInput(parse.toString());
        }
        else {
            if (parse >= minValue) {
                setMaxValue(parse);
                setMaxInput(parse.toString());
            }
        }
    }

    const minPercent = (minValue / 5000) * 100;
    const maxPercent = (maxValue / 5000) * 100;

    const categories = [
        {
            id: 1,
            title: "Computers & Tablets"
        },
        {
            id: 2,
            title: "Mobiles & Accessories"
        },
        {
            id: 3,
            title: "TV & Home Theater"
        },
        {
            id: 4,
            title: "Audio & Headphones"
        },
        {
            id: 5,
            title: "Cameras & Camcorders"
        },
        {
            id: 6,
            title: "Gaming Equipment"
        },
        {
            id: 7,
            title: "Home Appliances"
        }
    ];

    const brands = [
        {
            id: 1,
            title: "Apple",
            available: 565,
        },
        {
            id: 2,
            title: "Samsung",
            available: 432,
        },
        {
            id: 3,
            title: "ASUS",
            available: 330,
        },
        {
            id: 4,
            title: "Dell",
            available: 250,
        },
        {
            id: 5,
            title: "Lenovo",
            available: 200,
        },
        {
            id: 6,
            title: "HP",
            available: 98,
        },
        {
            id: 7,
            title: "Panasonic",
            available: 17,
        },
        {
            id: 8,
            title: "Sony",
            available: 150,
        },
        {
            id: 9,
            title: "LG",
            available: 120,
        },
        {
            id: 10,
            title: "Microsoft",
            available: 75,
        }
    ]

    return (
        <Container>
            <div className="flex gap-[26px] mt-16 mb-20">
                <div className="w-[355px] p-12 bg-[#F4F4F4] rounded-[25px]">
                    {/* Categories */}
                    <div className="flex items-center justify-between mb-5">
                        <h3 className="text-xl text-[#303030] font-['Montserrat'] font-bold leading-[30px]">Categories</h3>
                        <button className={`${showCategories ? "rotate-180" : ""} transition cursor-pointer text-sm text-[#303030]`} onClick={() => setShowCategories(!showCategories)}><TfiAngleDown /></button>
                    </div>
                    {showCategories && (
                        <ul className="flex flex-col gap-3 border-b border-[#CFCFCF] pb-10">
                            {categories.map(category => (
                                <li key={category.id} className="flex items-center gap-2">
                                    <input type="checkbox" id={category.title} />
                                    <label className="text-[#303030] font-['Montserrat'] leading-6" htmlFor={category.title}>{category.title}</label>
                                </li>
                            ))}
                        </ul>
                    )}


                    {/* Brands */}
                    <div className="flex items-center justify-between mt-10 mb-5">
                        <h3 className="text-xl text-[#303030] font-['Montserrat'] font-bold leading-[30px]">Brands</h3>
                        <button className={`${showBrands ? "rotate-180" : ""} transition cursor-pointer text-sm text-[#303030]`} onClick={() => setShowBrands(!showBrands)}><TfiAngleDown /></button>
                    </div>

                    {showBrands && (
                        <div className="border-b border-[#CFCFCF] pb-10">
                            <ul className="flex flex-col gap-3 ">
                                {brands.slice(0, brandsLimit).map(brand => (
                                    <li key={brand.id} className="flex items-center gap-2 relative">
                                        <input type="checkbox" id={brand.title} />
                                        <label className="text-[#303030] font-['Montserrat'] leading-6" htmlFor={brand.title}>
                                            <span>{brand.title}</span>
                                            <span className="absolute top-0 right-0">({brand.available})</span>
                                        </label>
                                    </li>
                                ))}
                            </ul>

                            {brands.length > brandsLimit && (
                                <button className="text-[#303030] inline font-['Montserrat'] font-bold leading-6 border-b border-[#303030] mt-5 cursor-pointer" onClick={() => setBrandsLimit(brands.length)}>More Brands</button>
                            )}
                        </div>
                    )}

                    {/* Price */}
                    <div className="flex items-center justify-between mt-10 mb-5">
                        <h3 className="text-xl text-[#303030] font-['Montserrat'] font-bold leading-[30px]">Price</h3>
                        <button className={`${showPrice ? "rotate-180" : ""} transition cursor-pointer text-sm text-[#303030]`} onClick={() => setShowPrice(!showPrice)}><TfiAngleDown /></button>
                    </div>

                    {showPrice && (
                        <div>
                            <div className="flex justify-between">
                                <input
                                    className="w-[124px] h-[74px] text-center border border-[#ABABAB] rounded-[10px] focus:outline-none font-['Montserrat'] text-[#303030] leading-6"
                                    type="text"
                                    value={minInput}
                                    onChange={handleMinInputChange}
                                />
                                <input
                                    className="w-[124px] h-[74px] text-center border border-[#ABABAB] rounded-[10px] focus:outline-none font-['Montserrat'] text-[#303030] leading-6"
                                    type="text"
                                    value={maxInput}
                                    onChange={handleMaxInputChange}
                                />
                            </div>

                            <div className="mt-[30px]">
                                <div className="relative w-full h-0.5 bg-[#C3C3C3]">
                                    <div
                                        className="absolute h-full bg-[#FF624C]"
                                        style={{ left: `${minPercent}%`, width: `${maxPercent - minPercent}%` }}
                                    ></div>

                                    <div className="relative">
                                        <input
                                            type="range"
                                            className="absolute top-0 left-0 w-full h-full appearance-none cursor-pointer pointer-events-none z-10"
                                            min={0}
                                            max={5000}
                                            value={minValue === "" ? "" : minValue}
                                            step={50}
                                            onChange={(e) => handleSliderChange("min", e.target.value)}
                                        />
                                    </div>
                                    <div className="relative">
                                        <input
                                            type="range"
                                            className="absolute top-0 left-0 w-full h-full appearance-none cursor-pointer pointer-events-none z-10"
                                            min={0}
                                            max={5000}
                                            value={maxValue === "" ? "" : maxValue}
                                            step={50}
                                            onChange={(e) => handleSliderChange("max", e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div></div>
            </div>
        </Container>
    );
};

export default ProductsListPage;