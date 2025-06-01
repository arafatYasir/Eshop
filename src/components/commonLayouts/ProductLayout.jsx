import { FiShare2 } from "react-icons/fi";
import { IoIosHeartEmpty, IoMdStar } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
const ProductLayout = () => {
    return (
        <div className="p-6 group cursor-pointer border border-transparent hover:border-[#C3C3C3] rounded-[10px]">
            <div>
                <img src="images/product-image.png" alt="product image" />

                <div className="flex justify-evenly">
                    <div className="flex items-center justify-center w-[50px] h-[50px] rounded-full border border-[#FF624C] text-[#FF624C] text-3xl hover:bg-[#FF624C] hover:text-white">
                        <IoCartOutline />
                    </div>
                    <div className="flex items-center justify-center w-[50px] h-[50px] rounded-full border border-[#FF624C] text-[#FF624C] text-3xl hover:bg-[#FF624C] hover:text-white">
                        <IoIosHeartEmpty />
                    </div>
                    <div className="flex items-center justify-center w-[50px] h-[50px] rounded-full border border-[#FF624C] text-[#FF624C] text-3xl hover:bg-[#FF624C] hover:text-white">
                        <FiShare2/>
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <p className="text-sm font-['Montserrat'] leading-5 text-[#303030] tracking-[4px] uppercase">Phone</p>
                <h3 className="text-[#303030] font-['Poppins'] text-xl font-semibold leading-[30px] max-w-[237px] mt-4 group-hover:text-[#FF624C] group-hover:underline">IPhone 13 High Quality Value Buy Best Cam...</h3>
                <div className="flex items-center gap-2 mt-1">
                    <div className="flex text-[#FED550] text-xl">
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                    </div>
                    <span className="text-[#303030] font-['Montserrat'] leading-6">(100)</span>
                </div>
                <p className="text-[#303030] font-['Poppins'] text-2xl font-semibold leading-[30px] mt-5">$999.00</p>
            </div>
        </div>
    );
};

export default ProductLayout;