import { IoMdStar } from "react-icons/io";

const ProductDetails = () => {
    return (
        <div>
            {/* Rating */}
            <div className="flex items-center gap-2">
                <div className="flex text-[#FED550] text-[25px]">
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                </div>
                <span className="text-[#303030] text-xl font-['Montserrat'] leading-[30px]">(142)</span>
            </div>

            {/* Product Title */}
            <h2 className="text-[#303030] font-['Poppins'] text-4xl font-semibold leading-[46px] border-b border-[#CBCBCB] pb-6 w-[630px] mt-4">NexSUS ROCK Strix Scar 17 Gaming Laptop 15.7” 1TB SSD 16GB RAM Pro</h2>

            {/* Price */}
            <p className="flex items-baseline gap-5 mt-5">
                <span className="text-[#FF624C] font-['Poppins'] text-[56px] font-bold leading-[68px]">$2,999.99</span>
                <del className="text-[#303030] font-['Montserrat'] text-xl leading-[30px] opacity-50">$5,499.99</del>
            </p>

            {/* Info */}
            <div className="w-[630px] flex flex-col gap-4 mt-12">
                <p className="flex gap-[108px]">
                    <span className="text-[#303030] font-['Poppins'] text-xl font-semibold leading-[30px]">Brand</span>
                    <span className="text-[#303030] font-['Montserrat'] text-xl leading-[30px]">NexSUS Tech Company</span>
                </p>
                <p className="flex gap-[130px]">
                    <span className="text-[#303030] font-['Poppins'] text-xl font-semibold leading-[30px]">Size</span>
                    <span className="text-[#303030] font-['Montserrat'] text-xl leading-[30px]">15.7 x 11.1 x 1.0 inches (W x D x H)</span>
                </p>
                <p className="flex gap-[97px]">
                    <span className="text-[#303030] font-['Poppins'] text-xl font-semibold leading-[30px]">Weight</span>
                    <span className="text-[#303030] font-['Montserrat'] text-xl leading-[30px]">6.28 pounds</span>
                </p>
                <p className="flex gap-[87px]">
                    <span className="text-[#303030] font-['Poppins'] text-xl font-semibold leading-[30px]">Delivery</span>
                    <span className="text-[#303030] font-['Montserrat'] text-xl leading-[30px]">Worldwide</span>
                </p>
                <div className="flex gap-[94px]">
                    <span className="text-[#303030] font-['Poppins'] text-xl font-semibold leading-[30px]">Variant</span>
                    
                    <div className="flex flex-wrap gap-x-1 gap-y-2">
                        <button className="border border-[#979797] rounded-[5px] text-[#303030] font-['Montserrat'] leading-[24px] py-4 px-8 font-bold cursor-pointer hover:bg-[#979797] hover:text-white transition">Off White</button>
                        <button className="border border-[#FFB0A5] rounded-[5px] text-[#FF624C] font-['Montserrat'] leading-[24px] py-4 px-8 font-bold cursor-pointer hover:bg-[#FFB0A5] hover:text-white transition">Space Gray</button>
                        <button className="border border-[#979797] rounded-[5px] text-[#303030] font-['Montserrat'] leading-[24px] py-4 px-8 font-bold cursor-pointer hover:bg-[#979797] hover:text-white transition">Jet Black</button>
                        <button disabled className="border  rounded-[5px]  font-['Montserrat'] leading-[24px] py-4 px-8 font-bold cursor-pointer disabled:text-[#CBCBCB] disabled:border-[#CBCBCB]">Cinnamon Red</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;