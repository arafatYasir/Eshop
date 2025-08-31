import { useEffect, useState } from "react";
import { FiShare2 } from "react-icons/fi";
import { IoIosHeartEmpty, IoMdStar } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { Link } from "react-router";
import { addToCart } from "../../slices/cartSlice";
import {ToastContainer, toast} from "react-toastify"

const ProductLayout = ({ discountTag = false, id, discountPercent, type, title, rating = 1, totalRatings, price, previousPrice, tags }) => {
    const [ratingStars, setRatingStars] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const newRatingArray = new Array(parseInt(rating)).fill(1);
        setRatingStars(newRatingArray);
    }, [rating]);

    if(!tags || tags.length === 0) {return;}

    const handleAddToCart = () => {
        const product = {
            id,
            title,
            price,
            type,
            quantity: 1
        };

        dispatch(addToCart(product));
        toast.success("Item added to cart! Please go to your cart and update it.");
    }

    return (
        <div  className="p-6 group border border-[#C3C3C3] sm:border-transparent sm:hover:border-[#C3C3C3] rounded-[10px] max-w-[285px] relative">
            <div className="relative">
                <img className="w-full" src="/images/product-image.png" alt="product image" />

                {/* Icons */}
                <div className="flex gap-[18px] sm:scale-0 sm:group-hover:scale-100 transition duration-100 cursor-pointer absolute bottom-[6px] left-[50%] -translate-x-1/2">
                    <div onClick={handleAddToCart} className="flex items-center justify-center w-10 h-10 sm:w-[50px] sm:h-[50px] rounded-full border border-[#FF624C] text-[#FF624C] text-3xl hover:bg-[#FF624C] hover:text-white transition duration-100 bg-white">
                        <IoCartOutline size={22} />
                    </div>
                    <div className="flex items-center justify-center w-10 h-10 sm:w-[50px] sm:h-[50px] rounded-full border border-[#FF624C] text-[#FF624C] text-3xl hover:bg-[#FF624C] hover:text-white transition duration-100 bg-white">
                        <IoIosHeartEmpty size={22} />
                    </div>
                    <div className="flex items-center justify-center w-10 h-10 sm:w-[50px] sm:h-[50px] rounded-full border border-[#FF624C] text-[#FF624C] text-3xl hover:bg-[#FF624C] hover:text-white transition duration-100 bg-white">
                        <FiShare2 size={22} />
                    </div>
                </div>
            </div>
            <Link to={`/product-details/${id}`} className="mt-10 block cursor-pointer">
                <p className="text-sm font-['Montserrat'] leading-5 text-[#303030] tracking-[4px] uppercase">{type}</p>

                <h3 className="text-[#303030] font-['Poppins'] text-lg sm:text-xl font-semibold leading-[30px] max-w-[237px] mt-4 group-hover:text-[#FF624C] group-hover:underline decoration-2 transition duration-100">{title.slice(0, 35)}...</h3>

                <div className="flex items-center gap-2 mt-1">
                    <div className="flex text-[#FED550] text-xl">
                        {ratingStars.map((r, i) => <IoMdStar key={i} />)}
                    </div>
                    <span className="text-[#303030] font-['Montserrat'] leading-6">({totalRatings})</span>
                </div>

                <div className="flex items-baseline-last gap-2">
                    <p className={`${discountTag ? "text-[#FF624C]" : "text-[#303030]"} font-['Poppins'] text-[22px] sm:text-2xl font-semibold leading-[30px] mt-5`}>${price}</p>
                    <p className={`text-[#303030] text-sm sm:text-base ${previousPrice ? "opacity-50" : "opacity-0"} leading-16 font-['Montserrat'] line-through`}>{previousPrice ? `$${previousPrice}` : "temp"}</p>
                </div>
            </Link>

            {/* Discount Tag */}
            {discountTag && (
                <div className="absolute top-4 right-4 text-white font-['Montserrat'] font-semibold leading-6 py-[7px] px-5 bg-[#FF624C] rounded-[5px]">{discountPercent}%</div>
            )}

            <ToastContainer />
        </div>
    );
};

export default ProductLayout;