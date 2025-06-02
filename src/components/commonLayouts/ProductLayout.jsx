import { useEffect, useState } from "react";
import { FiShare2 } from "react-icons/fi";
import { IoIosHeartEmpty, IoMdStar } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

const ProductLayout = ({ discountTag = false, category, title, rating = 1, totalRatings, price, previousPrice }) => {
    const [ratingStars, setRatingStars] = useState([]);

    useEffect(() => {
        const newRatingArray = new Array(rating).fill(1);
        setRatingStars(newRatingArray);
    }, [rating])

    return (
        <div className="p-6 group cursor-pointer border border-transparent hover:border-[#C3C3C3] rounded-[10px] max-w-[285px]">
            <div className="relative">
                <img className="w-full" src="images/product-image.png" alt="product image" />

                {/* Icons */}
                <div className="flex gap-[18px] scale-0 group-hover:scale-100 transition duration-100 absolute bottom-[6px] left-[50%] -translate-x-1/2">
                    <div className="flex items-center justify-center w-[50px] h-[50px] rounded-full border border-[#FF624C] text-[#FF624C] text-3xl hover:bg-[#FF624C] hover:text-white transition duration-100">
                        <IoCartOutline />
                    </div>
                    <div className="flex items-center justify-center w-[50px] h-[50px] rounded-full border border-[#FF624C] text-[#FF624C] text-3xl hover:bg-[#FF624C] hover:text-white transition duration-100">
                        <IoIosHeartEmpty />
                    </div>
                    <div className="flex items-center justify-center w-[50px] h-[50px] rounded-full border border-[#FF624C] text-[#FF624C] text-3xl hover:bg-[#FF624C] hover:text-white transition duration-100">
                        <FiShare2 />
                    </div>
                </div>

                {/* Discount Tag */}
                {discountTag && (
                    <div className="absolute top-[-8px] right-[-10px] text-white font-['Montserrat'] font-semibold leading-6 py-[7px] px-5 bg-[#FF624C] rounded-[5px]">50%</div>
                )}
            </div>
            <div className="mt-10">
                <p className="text-sm font-['Montserrat'] leading-5 text-[#303030] tracking-[4px] uppercase">{category}</p>

                <h3 className="text-[#303030] font-['Poppins'] text-xl font-semibold leading-[30px] max-w-[237px] mt-4 group-hover:text-[#FF624C] group-hover:underline transition duration-100">{title.slice(0, 35)}...</h3>

                <div className="flex items-center gap-2 mt-1">
                    <div className="flex text-[#FED550] text-xl">
                        {ratingStars.map((r, i) => <IoMdStar key={i} />)}
                    </div>
                    <span className="text-[#303030] font-['Montserrat'] leading-6">({totalRatings})</span>
                </div>

                <div className="flex items-baseline-last gap-2">
                    <p className={`${discountTag ? "text-[#FF624C]" : "text-[#303030]"} font-['Poppins'] text-2xl font-semibold leading-[30px] mt-5`}>${price}</p>
                    <p className={`text-[#303030] ${previousPrice ? "opacity-50" : "opacity-0"} leading-16 font-['Montserrat'] line-through`}>{previousPrice ? previousPrice : "temp"}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductLayout;