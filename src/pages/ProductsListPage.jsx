import { useState } from "react";
import Container from "../components/commonLayouts/Container";
import { TfiAngleDown } from "react-icons/tfi";

const ProductsListPage = () => {
    const [showCategories, setShowCategories] = useState(false);
    const [showBrands, setShowBrands] = useState(false);
    const [brandsLimit, setBrandsLimit] = useState(7);

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
                    <div className="flex items-center justify-between my-5">
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
                </div>

                <div></div>
            </div>
        </Container>
    );
};

export default ProductsListPage;