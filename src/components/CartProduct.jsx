import ShareIcon from "../icons/ShareIcon";
import TrashIcon from "../icons/TrashIcon";
import CartQuantity from "./CartQuantity"

const CartProduct = ({category, title, variant, price, totalPrice}) => {
    return (
        <div className="h-[294px] flex items-center rounded-[10px] border border-[transparent] transition px-[36px] py-[24px] group relative hover:border-[#CBCBCB]">
            {/* Product Part */}
            <div className="w-[50%] flex items-center gap-[62px]">
                <div>
                    <img className="w-[237px] h-[214px] object-cover" src="/images/product-image.png" alt="Product Image" />
                </div>
                <div>
                    <p className="text-[#303030] font-['Montserrat'] text-sm leading-5 uppercase tracking-[4px]">{category}</p>
                    <h4 className="text-[#303030] font-['Poppins'] text-xl font-semibold leading-[30px] max-w-[314px] mt-4 group-hover:text-[#FF624C] group-hover:underline group-hover:decoration-2">{title}</h4>
                    <p className="text-[#303030] font-['Montserrat'] mt-[46px]">
                        <span className="font-bold mr-2">Variant:</span>
                        <span>{variant}</span>
                    </p>
                </div>
            </div>

            {/* Price Part */}
            <div className="text-[#303030] w-[16.5%] font-['Poppins'] text-xl font-semibold leading-[30px]">${price}</div>

            {/* Quantity Part */}
            <div className="w-[16.5%]">
                <CartQuantity />
            </div>

            {/* Total Price Part */}
            <div className="text-[#303030] w-[16.5%] font-['Poppins'] text-xl font-semibold leading-[30px]">${totalPrice}</div>

            {/* Icons */}
            <div className="hidden absolute top-1/2 right-12 -translate-1/2 group-hover:block">
                <div className="hover:bg-[#FF624C] text-[#FF624C] hover:text-white border border-[#FF624C] transition w-16 h-16 rounded-full flex items-center justify-center cursor-pointer">
                    <TrashIcon />
                </div>
                <div className="hover:bg-[#FF624C] text-[#FF624C] mt-[38px] hover:text-white border border-[#FF624C] transition w-16 h-16 rounded-full flex items-center justify-center cursor-pointer">
                    <ShareIcon />
                </div>
            </div>
        </div>
    );
};

export default CartProduct;