import { GoSearch } from "react-icons/go";
import CartIcon from "../../icons/CartIcon";
import UserIcon from "../../icons/UserIcon";
import Container from "../commonLayouts/Container";
import { IoSearchSharp } from "react-icons/io5";
import { TfiSearch } from "react-icons/tfi";
import { Link } from "react-router";
import { useEffect, useRef, useState } from "react";
const MiddlePart = () => {
    const [showSearch, setShowSearch] = useState(false);
    const searchRef = useRef(null);

    const handleShowSearch = () => {
        setShowSearch(prev => !prev);
    }

    useEffect(() => {
        const handleHideSearch = (e) => {
            if(searchRef.current && !searchRef.current.contains(e.target.value)) {
                setShowSearch(false);
            }
        }
        document.addEventListener("mousedown", handleHideSearch);

        return () => document.removeEventListener("mousedown", handleHideSearch);
    }, [])

    return (
        <Container>
            <div className="flex justify-between items-center px-2 py-6 sm:py-8 sm:px-0 ">
                <div>
                    <Link to="/">
                        <img className="w-[110px] object-cover sm:w-full" src="images/logo.webp" alt="logo" />
                    </Link>
                </div>
                <div className="flex items-center gap-12">
                    <div className="relative">
                        <input ref={searchRef} className={`w-[308px] ${!showSearch && "hidden"} sm:inline text-sm text-[#303030] leading-5 py-[18px] pl-6 border border-[#E5E5E5] rounded-[10px] outline-none`} type="text" placeholder="Search Products ..." />

                        <TfiSearch className="text-lg font-bold absolute top-[50%] right-6 translate-y-[-50%] hidden sm:block" />

                        <TfiSearch onClick={handleShowSearch} className="text-xl sm:text-lg font-bold absolute top-[50%] right-[-30px] sm:right-6 translate-y-[-50%] mt-1 sm:mt-0 sm:hidden" />
                    </div>

                    <div className="flex gap-[25px] sm:gap-[90px] items-center relative">
                        {/* Cart */}
                        <div className="flex items-center gap-5 sm:after:content-[] sm:after:absolute sm:after:top-1/2 sm:after:left-1/2 sm:after:w-[1px] sm:after:h-[32px] sm:after:bg-[#979797] sm:after:-translate-y-1/2 sm:after:-translate-x-1/2">
                            <div className="w-[28px] sm:w-[32px]">
                                <CartIcon width="full" />
                            </div>
                            <div className="hidden sm:block">
                                <p className="text-[#303030] font-['Montserrat'] leading-6 ">Cart</p>
                                <span className="text-[#303030] font-['Montserrat'] leading-6 font-bold">$ 150,00</span>
                            </div>
                        </div>

                        {/* User account */}
                        <div className="flex items-center gap-6">
                            <div className="w-[24px] sm:w-[28px]">
                                <UserIcon width="full" />
                            </div>
                            <div className="hidden sm:block">
                                <p className="text-[#303030] font-['Montserrat'] leading-6 ">User</p>
                                <span className="text-[#303030] font-['Montserrat'] leading-6 font-bold">Account</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default MiddlePart;