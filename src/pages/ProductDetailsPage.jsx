import Container from "../components/commonLayouts/Container"
import ProductDetails from "../components/ProductDetails";
import ProductDetailsCarousel from "../components/ProductDetailsCarousel";
import HeadPhoneIcon from "../icons/HeadPhoneIcon"
import SecurityIcon from "../icons/SecurityIcon"
import DeliveryIcon from "../icons/DeliveryIcon";
import ReturnIcon from "../icons/ReturnIcon";
import { PiMinus } from "react-icons/pi";
import { LuPlus } from "react-icons/lu";
import { useState } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";
import Button from "../components/Button";
import { AiOutlineShoppingCart } from "react-icons/ai";

const ProductDetailsPage = () => {
    const [quantity, setQuantity] = useState(1);

    const handleChangeQuantity = (e) => {
        const value = parseInt(e.target.value);

        if (isNaN(value)) {
            toast.error('Invalid quantity', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
        else if(value < 0) {
            toast.error('Quantity cannot be negative', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
        else {
            setQuantity(value);
        }
    }

    const handleIncreaseorDecrease = (type) => {
        if (type === "increase") {
            setQuantity(prev => prev + 1);
        } else if(type === "decrease" && quantity - 1 < 0) {
            toast.error('Quantity cannot be negative', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
        else {
            setQuantity(prev => prev - 1);
        }
    };

    return (
        <Container>
            <div className="font-['Montserrat'] text-[#303030] text-base leading-6 flex gap-10 mt-16">
                <span className="relative after:content-[''] after:absolute after:w-[1px] after:h-[20px] after:bg-[#4A4A4A] after:top-1/2 after:-translate-y-1/2 after:right-[-19px]">Home</span>
                <span className="relative after:content-[''] after:absolute after:w-[1px] after:h-[20px] after:bg-[#4A4A4A] after:top-1/2 after:-translate-y-1/2 after:right-[-19px]">Computers & Tablets</span>
                <span className="relative after:content-[''] after:absolute after:w-[1px] after:h-[20px] after:bg-[#4A4A4A] after:top-1/2 after:-translate-y-1/2 after:right-[-19px]">Laptop</span>
                <span className="font-bold">NexSUS ROCK Strix Scar 17 Gaming Laptop</span>
            </div>

            <div className="mt-12 flex justify-between">
                <ProductDetailsCarousel />
                <ProductDetails />
            </div>

            {/* Facilities & Product Quantity */}
            <div className="flex items-center justify-between">
                {/* Facilities */}
                <div className="flex gap-12">
                    <div className="flex items-center gap-6">
                        <div>
                            <DeliveryIcon />
                        </div>
                        <div>
                            <h4 className="text-[#303030] font-['Montserrat'] font-bold leading-6">Free Shipping</h4>
                            <p className="text-[#303030] font-['Montserrat'] leading-6 mt-[2px]">Worldwide available</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <div>
                            <SecurityIcon />
                        </div>
                        <div>
                            <h4 className="text-[#303030] font-['Montserrat'] font-bold leading-6">100% Guaranteed</h4>
                            <p className="text-[#303030] font-['Montserrat'] leading-6 mt-[2px]">Receive product first</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <div>
                            <ReturnIcon />
                        </div>
                        <div>
                            <h4 className="text-[#303030] font-['Montserrat'] font-bold leading-6">Return Available</h4>
                            <p className="text-[#303030] font-['Montserrat'] leading-6 mt-[2px]">See return policy</p>
                        </div>
                    </div>
                </div>

                {/* Product Quantity */}
                <div className="flex items-center gap-[95px]">
                    <button onClick={() => handleIncreaseorDecrease("decrease")} className="w-14 h-14 rounded-full hover:bg-[#F4F4F4] flex items-center justify-center cursor-pointer"><PiMinus className="text-[38px]" /></button>

                    <input disabled type="text" value={quantity} onChange={handleChangeQuantity} className="text-[#303030] text-4xl font-['Poppins'] font-semibold leading-[46px] outline-none w-[45px]" />


                    <button onClick={() => handleIncreaseorDecrease("increase")} className="w-14 h-14 rounded-full hover:bg-[#F4F4F4] flex items-center justify-center cursor-pointer"><LuPlus className="text-[36px]" /></button>
                </div>

                <div className="flex gap-4">
                    <Button value="Buy Now"  />

                    <button className="p-[17px] border border-[#FF624C] rounded-[10px]"><AiOutlineShoppingCart className="text-4xl text-[#FF624C]" /></button>
                </div>
            </div>
            <ToastContainer />
        </Container>
    );
};

export default ProductDetailsPage;