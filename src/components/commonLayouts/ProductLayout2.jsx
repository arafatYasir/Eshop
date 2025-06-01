import { useEffect, useState } from "react";
import { FiShare2 } from "react-icons/fi";
import { IoIosHeartEmpty, IoMdStar } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

const ProductLayout2 = ({ discountTag = false, category, title, rating = 1, totalRatings, previousPrice, price, stockPercent }) => {
    const [ratingStars, setRatingStars] = useState([]);

    useEffect(() => {
        const newRatingArray = new Array(rating).fill(1);
        setRatingStars(newRatingArray);
    }, [rating])

    return (
        <div className="p-10 group cursor-pointer border border-transparent hover:border-[#C3C3C3] rounded-[10px] max-w-[464px]">
            <div className="relative bg-amber-200">
                <img className="w-full" src="images/product-image.png" alt="product image" />

                {/* Discount Tag */}
                {discountTag && (
                    <div className="absolute top-0 right-0 w-[100px] h-[100px] text-white text-2xl font-['Poppins'] font-semibold leading-6  bg-[#FF624C] rounded-full flex items-center justify-center">50%</div>
                )}
            </div>
            <div className="mt-10">
                <p className="text-sm font-['Montserrat'] leading-5 text-[#303030] tracking-[4px] uppercase">{category}</p>

                <h3 className="text-[#303030] font-['Poppins'] text-xl font-semibold leading-[30px]  mt-4 group-hover:text-[#FF624C] group-hover:underline transition duration-100">{title}</h3>

                <div className="flex items-center gap-2 mt-1">
                    <div className="flex text-[#FED550] text-xl">
                        {ratingStars.map((r, i) => <IoMdStar key={i} />)}
                    </div>
                    <span className="text-[#303030] font-['Montserrat'] leading-6">({totalRatings})</span>
                </div>

                <div className="flex items-end gap-[10px]">
                    <p className="text-[#303030] font-['Poppins'] text-2xl font-semibold leading-[30px] mt-5 group-hover:text-[#FF624C] transition duration-100">${price}</p>
                    <p className="text-[#303030] font-['Montserrat'] leading-6 opacity-[50%] line-through">${previousPrice}</p>
                </div>

                <div className="h-[30px] bg-[#E0E0E0] rounded-[25px] relative mt-8">
                    <div 
                    className="h-[30px] bg-[#303030] rounded-[25px] "
                    style={{width: stockPercent + "%"}}>
                        <span className="absolute top-1/2 left-1/2 -translate-1/2 uppercase text-white font-bold font-['Montserrat'] leading-6">{stockPercent} Available</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductLayout2;