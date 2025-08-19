import ShareIcon from "../icons/ShareIcon";
import TrashIcon from "../icons/TrashIcon";
import CartQuantity from "./CartQuantity"

const CartProduct = ({category, title, variant, price, totalPrice}) => {
    return (
        <div className="sm:h-[294px] flex flex-col md:flex-row items-center rounded-[10px] border sm:border-[transparent] transition px-[36px] py-[24px] group relative hover:border-[#CBCBCB] border-[#CBCBCB]">
            {/* Product Part */}
            <div className="md:w-[50%] flex flex-col md:flex-row items-center gap-y-[20px] md:gap-[62px]">
                <div>
                    <img className="w-[237px] h-[214px] object-cover" src="/images/product-image.png" alt="Product Image" />
                </div>
                <div>
                    <p className="text-[#303030] font-['Montserrat'] text-sm leading-5 uppercase tracking-[4px]">{category}</p>
                    <h4 className="text-[#303030] font-['Poppins'] text-xl font-semibold leading-[30px] max-w-[314px] mt-4 group-hover:text-[#FF624C] group-hover:underline group-hover:decoration-2">{title}</h4>
                    <p className="text-[#303030] font-['Montserrat'] mt-4 md:mt-[46px]">
                        <span className="font-bold mr-2">Variant:</span>
                        <span>{variant}</span>
                    </p>
                </div>
            </div>

            {/* Price Part */}
            <div className="text-[#303030] md:w-[16.5%] font-['Poppins'] text-xl font-semibold leading-[30px] mt-4 md:mt-0"><span className="md:hidden">Price: </span>${price}</div>

            {/* Quantity Part */}
            <div className="md:w-[16.5%] mt-4 md:mt-0">
                <CartQuantity />
            </div>

            {/* Total Price Part */}
            <div className="text-[#303030] md:w-[16.5%] font-['Poppins'] text-xl font-semibold leading-[30px] mt-4 md:mt-0"><span className="md:hidden">Total Price: </span>${totalPrice}</div>

            {/* Icons for desktop */}
            <div className="hidden absolute top-1/2 right-12 -translate-1/2 group-hover:block">
                <div className="hover:bg-[#FF624C] text-[#FF624C] hover:text-white border border-[#FF624C] transition w-16 h-16 rounded-full flex items-center justify-center cursor-pointer">
                    <TrashIcon />
                </div>
                <div className="hover:bg-[#FF624C] text-[#FF624C] mt-[38px] hover:text-white border border-[#FF624C] transition w-16 h-16 rounded-full flex items-center justify-center cursor-pointer">
                    <ShareIcon />
                </div>
            </div>

            {/* Icons for mobile & tablet */}
            <div className="flex md:hidden items-center gap-6 mt-5">
                <div className="active:bg-[#FF624C] text-[#FF624C] active:text-white border border-[#FF624C] transition w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">
                    <TrashIcon width={28} height={28} />
                </div>
                <div className="active:bg-[#FF624C] text-[#FF624C] md:mt-[38px] active:text-white border border-[#FF624C] transition w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">
                    <ShareIcon width={20} height={20} />
                </div>
            </div>
        </div>
    );
};

export default CartProduct;