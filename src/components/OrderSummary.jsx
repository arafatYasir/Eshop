import InfoIcon from "../icons/InfoIcon";
import Button from "./Button";
import OrderedProduct from "./OrderedProduct";

const OrderSummary = () => {
    return (
        <div className="bg-[#F4F4F4] rounded-[25px] w-full md:w-[594px] pt-10 px-5 md:px-10 pb-14">
            <h4 className="text-2xl text-[#303030] font-['Poppins'] font-semibold leading-[30px]">Order Summary</h4>

            {/* Ordered Products */}
            <div className="flex flex-col gap-5 mt-12">
                <OrderedProduct title="2019 Smart Laptop 256 GB 13 inch Pro Chip Core 1 TB HD SSD" quantity={1} price="1,659.00" />
                <OrderedProduct title="Mobile Watch A Series GPS 7/144 45 mm Red Rubber Band" quantity={1} price="999.00" />
                <OrderedProduct title="LP78245 Smart TV OLED 43 Inch 4K HD Dynamic Color USB HQ" quantity={2} price="4,598.00" />
                <OrderedProduct title="Console Game Stick HD Wireless Bluetooth Connect" quantity={2} price="218.00" />
                <OrderedProduct title="Mini Tablet Pro 16 inch HD Pencil 128 GB System RAM 28" quantity={1} price="259.00" />
            </div>

            {/* Shipping Fee */}
            <div className="flex justify-between md:justify-start md:gap-[254px] mt-5">
                <p className="relative sm:text-xl text-[#303030] font-['Montserrat'] leading-[30px]">Shipping Fee <span className="absolute top-0 right-[-24px]"><InfoIcon width={16} height={16} /></span></p>
                <p className="sm:text-xl text-[#303030] font-['Poppins'] leading-[30px] font-bold">$10.00</p>
            </div>

            {/* Total Price */}
            <div className="md:w-[514px] h-[180px] rounded-[10px] bg-white mt-12 px-[21px] pt-[27px] pb-6">
                <p className="flex justify-between px-[3px] mb-6">
                    <span className="text-[#303030] font-['Poppins'] leading-6 font-bold">Total</span>
                    <span className="sm:text-xl text-[#303030] font-['Poppins'] leading-[30px] font-bold">$4,999.00</span>
                </p>

                <div className="md:hidden text-center">
                    <Button value="Order Now" paddingY="20px" paddingX="70px" />
                </div>
                <div className="hidden md:block">
                    <Button value="Order Now" paddingY="24px" paddingX="179px" />
                </div>
            </div>
        </div>
    );
};

export default OrderSummary;