import { useState } from "react";
import { TfiAngleDown } from "react-icons/tfi";

const BillingForm = () => {
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedState, setSelectedState] = useState("");
    const [selectedCity, setSelectedCity] = useState("");

    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value);
        setSelectedState("");
        setSelectedCity("");
    }

    const handleStateChange = (e) => {
        setSelectedState(e.target.value);
        setSelectedCity("");
    }

    const handleCityChange = (e) => {
        setSelectedCity(e.target.value);
    }

    const countries = {
        Bangladesh: {
            Dhaka: ["Dhaka", "Gazipur", "Narayanganj"],
            Chittagong: ["Chittagong", "Cox's Bazar", "Comilla"]
        },
        India: {
            Delhi: ["New Delhi", "Gurgaon", "Noida"],
            Maharashtra: ["Mumbai", "Pune", "Nagpur"]
        },
        USA: {
            California: ["Los Angeles", "San Francisco", "San Diego"],
            Texas: ["Houston", "Dallas", "Austin"]
        },
        UK: {
            England: ["London", "Manchester", "Liverpool"],
            Scotland: ["Edinburgh", "Glasgow", "Aberdeen"]
        },
        Canada: {
            Ontario: ["Toronto", "Ottawa", "Hamilton"],
            BritishColumbia: ["Vancouver", "Victoria", "Kelowna"]
        }
    };

    return (
        <div>
            <h2 className="text-[#303030] font-['Poppins'] text-[36px] font-semibold leading-[46px]">Billing Details</h2>

            <div className="w-[870px] flex flex-wrap justify-between gap-y-8 mt-10">
                {/* First Name */}
                <div className="flex flex-col gap-3">
                    <label className="text-xl text-[#303030] font-['Montserrat'] font-bold leading-[30px]" htmlFor="firstname">First Name <span className="text-[#FF624C]">*</span></label>
                    <input className="py-[25px] px-[32px] outline-none border border-[#CBCBCB] rounded-[10px] w-[424px] text-[#303030] placeholder:text-[#303030] placeholder:opacity-75 font-['Montserrat'] text-xl leading-[30px]" type="text" id="firstname" placeholder="Amelia Robert" />
                </div>
                {/* Last Name */}
                <div className="flex flex-col gap-3">
                    <label className="text-xl text-[#303030] font-['Montserrat'] font-bold leading-[30px]" htmlFor="lastname">Last Name <span className="text-[#FF624C]">*</span></label>
                    <input className="py-[25px] px-[32px] outline-none border border-[#CBCBCB] rounded-[10px] w-[424px] text-[#303030] placeholder:text-[#303030] placeholder:opacity-75 font-['Montserrat'] text-xl leading-[30px]" type="text" id="lastname" placeholder="Watson" />
                </div>
                {/* Phone Number */}
                <div className="flex flex-col gap-3">
                    <label className="text-xl text-[#303030] font-['Montserrat'] font-bold leading-[30px]" htmlFor="number">Phone Number <span className="text-[#FF624C]">*</span></label>
                    <input className="py-[25px] px-[32px] outline-none border border-[#CBCBCB] rounded-[10px] w-[424px] text-[#303030] placeholder:text-[#303030] placeholder:opacity-75 font-['Montserrat'] text-xl leading-[30px]" type="text" id="number" placeholder="+123 456 7890" />
                </div>
                {/* Email Address */}
                <div className="flex flex-col gap-3">
                    <label className="text-xl text-[#303030] font-['Montserrat'] font-bold leading-[30px]" htmlFor="email">Email Address <span className="text-[#FF624C]">*</span></label>
                    <input className="py-[25px] px-[32px] outline-none border border-[#CBCBCB] rounded-[10px] w-[424px] text-[#303030] placeholder:text-[#303030] placeholder:opacity-75 font-['Montserrat'] text-xl leading-[30px]" type="email" id="email" placeholder="amelia.watson@eshop.com" />
                </div>
                {/* Address */}
                <div className="flex flex-col gap-3">
                    <label className="text-xl text-[#303030] font-['Montserrat'] font-bold leading-[30px]" htmlFor="address">Address <span className="text-[#FF624C]">*</span></label>
                    <input className="py-[25px] px-[32px] outline-none border border-[#CBCBCB] rounded-[10px] w-[870px] text-[#303030] placeholder:text-[#303030] placeholder:opacity-75 font-['Montserrat'] text-xl leading-[30px]" type="text" id="address" placeholder="Home Address, Auxiliary St. 12345, Anywhere State" />
                </div>
                {/* Country */}
                <div className="flex flex-col gap-3">
                    <label className="text-xl text-[#303030] font-['Montserrat'] font-bold leading-[30px]" htmlFor="country">Country <span className="text-[#FF624C]">*</span></label>
                    <div className="relative">
                        <select
                            id="country"
                            value={selectedCountry}
                            onChange={handleCountryChange}
                            className="appearance-none py-[25px] px-[32px] outline-none border border-[#CBCBCB] rounded-[10px] w-[424px] text-[#303030] font-['Montserrat'] text-xl leading-[30px]"
                        >
                            <option value="">Select a country</option>
                            {Object.keys(countries).map(country => (
                                <option key={country} value={country}>{country}</option>
                            ))}
                        </select>
                        <TfiAngleDown className="text-xl text-[#303030] pointer-events-none absolute top-1/2 -translate-y-1/2 right-[28px]" />
                    </div>
                </div>
                {/* State */}
                <div className="flex flex-col gap-3">
                    <label className="text-xl text-[#303030] font-['Montserrat'] font-bold leading-[30px]" htmlFor="state">State <span className="text-[#FF624C]">*</span></label>
                    <div className="relative">
                        <select
                            id="state"
                            value={selectedState}
                            onChange={handleStateChange}
                            className="appearance-none py-[25px] px-[32px] outline-none border border-[#CBCBCB] rounded-[10px] w-[424px] text-[#303030] font-['Montserrat'] text-xl leading-[30px] disabled:opacity-50"
                            disabled={!selectedCountry}
                        >
                            <option value="">Select a state</option>
                            {selectedCountry && (
                                Object.keys(countries[selectedCountry]).map(state => (
                                    <option key={state} value={state}>{state}</option>
                                ))
                            )}
                        </select>
                        <TfiAngleDown className="text-xl text-[#303030] pointer-events-none absolute top-1/2 -translate-y-1/2 right-[28px] " />
                    </div>
                </div>
                {/* City */}
                <div className="flex flex-col gap-3">
                    <label className="text-xl text-[#303030] font-['Montserrat'] font-bold leading-[30px]" htmlFor="city">City <span className="text-[#FF624C]">*</span></label>
                    <div className="relative">
                        <select
                            id="city"
                            value={selectedCity}
                            onChange={handleCityChange}
                            className="appearance-none py-[25px] px-[32px] outline-none border border-[#CBCBCB] rounded-[10px] w-[424px] text-[#303030] font-['Montserrat'] text-xl leading-[30px] disabled:opacity-50"
                            disabled={!selectedState}
                        >
                            <option value="">Select a city</option>
                            {selectedState && (
                                countries[selectedCountry][selectedState].map(city => (
                                    <option key={city} value={city}>{city}</option>
                                ))
                            )}
                        </select>
                        <TfiAngleDown className="text-xl text-[#303030] pointer-events-none absolute top-1/2 -translate-y-1/2 right-[28px] " />
                    </div>
                </div>
                {/* Zip Code */}
                <div className="flex flex-col gap-3">
                    <label className="text-xl text-[#303030] font-['Montserrat'] font-bold leading-[30px]" htmlFor="zip">Zip Code</label>
                    <input className="py-[25px] px-[32px] outline-none border border-[#CBCBCB] rounded-[10px] w-[424px] text-[#303030] placeholder:text-[#303030] placeholder:opacity-75 font-['Montserrat'] text-xl leading-[30px]" type="number" id="zip" placeholder="555555" />
                </div>
                {/* Order Notes */}
                <div className="flex flex-col gap-3">
                    <label className="text-xl text-[#303030] font-['Montserrat'] font-bold leading-[30px]" htmlFor="orderNotes">Order Notes</label>
                    <textarea className="py-[25px] px-[32px] outline-none border border-[#CBCBCB] rounded-[10px] w-[870px] h-[173px] text-[#303030] placeholder:text-[#303030] placeholder:opacity-75 font-['Montserrat'] text-xl leading-[30px] resize-none" type="text" id="orderNotes" placeholder="Enter your order notes ..." />
                </div>
            </div>
        </div>
    );
};

export default BillingForm;