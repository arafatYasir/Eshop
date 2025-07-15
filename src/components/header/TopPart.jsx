import { Link } from "react-router";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import Container from "../commonLayouts/Container";
import { useEffect, useRef, useState } from "react";
import { TfiAngleDown } from "react-icons/tfi";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const TopPart = () => {
    const [selectedCountry, setSelectedCountry] = useState({ name: 'English (US)', value: 'US', flag: 'https://flagcdn.com/16x12/us.png' });
    const [currency, setCurrency] = useState({ name: 'US Dollar (USD)', value: 'USD' });
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const countries = [
        { name: 'English (US)', value: 'US', flag: 'https://flagcdn.com/16x12/us.png' },
        { name: 'English (UK)', value: 'GB', flag: 'https://flagcdn.com/16x12/gb.png' },
        { name: 'English (CA)', value: 'CA', flag: 'https://flagcdn.com/16x12/ca.png' },
        { name: 'English (AU)', value: 'AU', flag: 'https://flagcdn.com/16x12/au.png' },
        { name: 'German', value: 'DE', flag: 'https://flagcdn.com/16x12/de.png' },
        { name: 'French', value: 'FR', flag: 'https://flagcdn.com/16x12/fr.png' },
    ]

    const currencies = [
        { name: 'US Dollar (USD)', value: 'USD' },
        { name: 'British Pound (GBP)', value: 'GBP' },
        { name: 'Canadian Dollar (CAD)', value: 'CAD' },
        { name: 'Australian Dollar (AUD)', value: 'AUD' },
        { name: 'Euro (EUR)', value: 'EUR' },
        { name: 'Bangladeshi Taka (BDT)', value: 'BDT' },
        { name: 'Indian Rupee (INR)', value: 'INR' },
        { name: 'Pakistani Rupee (PKR)', value: 'PKR' },
    ];

    const handleSelect = (country) => {
        setSelectedCountry(country);
        setIsOpen(false);
    }

    useEffect(() => {
        const handleCloseDropdown = (e) => {
            if(dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleCloseDropdown);

        return () => document.removeEventListener("mousedown", handleCloseDropdown);
    }, []);

    return (
        <div className="border-b border-[#BFBFBF] py-[10px] sm:py-[22px]">
            <Container>
                <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-y-[10px] sm:gap-0">
                    {/* Left part */}
                    <div className="flex justify-center gap-10 sm:gap-[50px]">
                        <Link className="flex items-center gap-2 font-['Montserrat'] leading-5 text-[#303030] relative after:content-[''] after:absolute after:w-[1px] after:h-5 sm:after:h-[32px] after:bg-[#CBCBCB] after:right-[-22px] sm:after:right-[-25px] after:top-[50%] after:-translate-1/2 text-[13px] sm:text-sm" to="https://maps.app.goo.gl/DipLafPdoiQoKjnv7" target="_blank">
                            <IoLocationOutline size={20} className="hidden sm:inline" />
                            123 Main Street, Anytown USA
                        </Link>

                        <Link className="flex items-center gap-2 font-['Montserrat'] leading-5 text-[#303030] text-[13px] sm:text-sm" to="tel:+18234523">
                            <BsTelephone size={18} className="hidden sm:inline" />
                            +1 (555) 123-4567
                        </Link>
                    </div>

                    {/* Right part */}
                    <div className="flex items-center gap-10 sm:gap-[50px] text-sm text-[#303030]">
                        {/* ----Currency selection---- */}
                        <div className="relative after:content-[''] after:absolute after:w-[1px] after:h-5 sm:after:h-[32px] after:top-[50%] after:right-[-20px] sm:after:right-[-25px] after:bg-[#CBCBCB] after:-translate-y-1/2">
                            <select
                                className="w-[55px] appearance-none cursor-pointer outline-none text-[11.5px] sm:text-base"
                                name="currency"
                                value={currency?.value || ""}
                                onChange={(e) => {
                                    const targetedCurrency = currencies.find(c => c.value === e.target.value);
                                    setCurrency(targetedCurrency);
                                }}
                            >
                                {
                                    currencies.map(currency => <option key={currency?.value} value={currency?.value}>{currency?.value}</option>)
                                }
                            </select>
                            <TfiAngleDown className="absolute top-1/2 -translate-1/2 left-[43px] pointer-events-none text-[#303030] text-[11px] sm:text-base" />
                        </div>

                        {/* ----Language selection---- */}
                        <div className="relative after:content-[''] after:absolute after:w-[1px] after:h-5 sm:after:h-[32px]  after:top-[50%] after:right-[-19px] sm:after:right-[-25px] after:bg-[#CBCBCB] after:-translate-y-1/2" ref={dropdownRef}>
                            <select
                                className="w-[112px] hidden"
                                name="country"
                                value={selectedCountry?.value || ""}
                                onChange={(e) => {
                                    const targetedCountry = countries.find(c => c.value === e.target.value);
                                    setSelectedCountry(targetedCountry);
                                }}
                            >
                                {
                                    countries.map(country => <option key={country?.value} value={country?.value}>{country?.name}</option>)
                                }
                            </select>

                            {/* Custom dropdown */}
                            <div
                                className="p-2 cursor-pointer flex items-center"
                                onClick={() => setIsOpen(!isOpen)}>
                                {selectedCountry &&
                                    <>
                                        <img className="w-[27px] h-[16px] mr-2" src={selectedCountry?.flag} alt={`${selectedCountry?.name} country flag`} />
                                        <span className="mr-2 text-[11.5px] sm:text-base">{selectedCountry?.name}</span>
                                        <TfiAngleDown className="text-[#303030] text-[11px] sm:text-base" />
                                    </>
                                }
                            </div>

                            {/* Country list */}
                            {isOpen && (
                                <ul className="absolute w-[125px] sm:w-[150px] border border-gray-300 bg-white shadow-lg z-10">
                                    {countries.map(country => (
                                        <li className="flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer"
                                            key={country?.value}
                                            onClick={() => handleSelect(country)} >
                                            <img className="w-[27px] h-[16px] mr-2" src={country?.flag} alt={`${country?.name} country flag`} />
                                            
                                            <span className="text-[11.5px] sm:text-base">{country?.name}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {/* Social media links */}
                        <div className="flex items-center gap-4 sm:gap-6 text-lg">
                            <Link to="#">
                                <FaFacebookF className="text-sm sm:text-base" />
                            </Link>
                            <Link to="#">
                                <FaTwitter className="text-sm sm:text-base" />
                            </Link>
                            <Link to="#">
                                <FaInstagram className="text-sm sm:text-base" />
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default TopPart;