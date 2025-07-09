import { useState } from "react";
import Container from "../components/commonLayouts/Container";
import OrderSummary from "../components/OrderSummary";
import BillingForm from "../components/BillingForm";

const CheckoutPage = () => {
    const [activeTab, setActiveTab] = useState("Information");
    return (
        <Container>
            <div>
                <div className="font-['Montserrat'] text-[#303030] text-base leading-6 flex gap-10 mt-16">
                    <span className="relative after:content-[''] after:absolute after:w-[1px] after:h-[20px] after:bg-[#4A4A4A] after:top-1/2 after:-translate-y-1/2 after:right-[-19px]">Home</span>
                    <span className="relative after:content-[''] after:absolute after:w-[1px] after:h-[20px] after:bg-[#4A4A4A] after:top-1/2 after:-translate-y-1/2 after:right-[-19px]">Cart</span>
                    <span className="font-bold">Checkout</span>
                </div>


                <div className="mt-12">
                    <h1 className="text-center text-[#303030] font-['Poppins'] text-[56px] font-bold leading-[68px]">Checkout</h1>

                    {/* Tabs */}
                    <div className="flex justify-center items-start gap-[70px] mt-11">
                        <div className="flex items-center gap-4">
                            {activeTab === "Information" && (
                                <div className="w-[50px] h-[50px] rounded-full bg-[#FF624C] text-white font-['Montserrat'] flex items-center justify-center font-bold leading-6">01</div>
                            )}
                            <button
                                className={`text-[#303030] font-['Poppins'] text-2xl font-semibold leading-[30px] opacity-25 cursor-pointer ${activeTab === "Information" ? "opacity-100 border-b-[4px] pb-2 border-[#FF624C]" : ""}`}
                                onClick={() => setActiveTab("Information")}
                            >
                                Information
                            </button>
                        </div>
                        <div className="flex items-center gap-4">
                            {activeTab === "Shipping" && (
                                <div className="w-[50px] h-[50px] rounded-full bg-[#FF624C] text-white font-['Montserrat'] flex items-center justify-center font-bold leading-6">02</div>
                            )}
                            <button
                                className={`text-[#303030] font-['Poppins'] text-2xl font-semibold leading-[30px] opacity-25 cursor-pointer ${activeTab === "Shipping" ? "opacity-100 border-b-[4px] pb-2 border-[#FF624C]" : ""}`}
                                onClick={() => setActiveTab("Shipping")}
                            >
                                Shipping
                            </button>
                        </div>
                        <div className="flex items-center gap-4">
                            {activeTab === "Payment" && (
                                <div className="w-[50px] h-[50px] rounded-full bg-[#FF624C] text-white font-['Montserrat'] flex items-center justify-center font-bold leading-6">03</div>
                            )}
                            <button
                                className={`text-[#303030] font-['Poppins'] text-2xl font-semibold leading-[30px] opacity-25 cursor-pointer ${activeTab === "Payment" ? "opacity-100 border-b-[4px] pb-2 border-[#FF624C]" : ""}`}
                                onClick={() => setActiveTab("Payment")}
                            >
                                Payment
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex items-start justify-between my-20">
                    {/* Billing Details */}
                    <BillingForm />

                    {/* Order Summary */}
                    <OrderSummary />
                </div>
            </div>
        </Container>
    );
};

export default CheckoutPage;