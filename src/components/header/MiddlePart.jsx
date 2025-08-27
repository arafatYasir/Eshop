import CartIcon from "../../icons/CartIcon";
import UserIcon from "../../icons/UserIcon";
import Container from "../commonLayouts/Container";

import { TfiSearch } from "react-icons/tfi";
import { Link } from "react-router";
import { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { openMenu } from "../../slices/menuSlice";
import { RxCross1 } from "react-icons/rx";
import Button from "../Button";
import { handleSignOut } from "../../firebase/authService";

const MiddlePart = () => {
    const [showSearch, setShowSearch] = useState(false);
    const searchRef = useRef(null);
    const dispatch = useDispatch();
    const {loading, user} = useSelector(state => state.auth);

    const handleOpenMenu = () => {
        dispatch(openMenu())
    }

    useEffect(() => {
        const handleHideSearch = (e) => {
            if (searchRef.current && !searchRef.current.contains(e.target)) {
                console.log("I am running from useeffect.");
                setShowSearch(false);
            }
        }
        document.addEventListener("mousedown", handleHideSearch);

        return () => document.removeEventListener("mousedown", handleHideSearch);
    }, [])

    return (
        <Container>
            <div className={`flex ${showSearch ? "justify-start" : "justify-between"} items-center py-6 sm:py-8 sm:px-0`}>
                <div className="flex items-center gap-2">
                    <FaBars onClick={handleOpenMenu} className={`sm:hidden ${showSearch && "hidden"} text-[#303030] mb-1 text-lg`} />
                    <Link to="/">
                        <img className={`w-[110px] object-cover sm:w-full ${showSearch ? "hidden" : ""}`} src="images/logo.webp" alt="logo" />
                    </Link>
                </div>
                <div className={`flex items-center gap-12`}>
                    <div className={`relative`} ref={searchRef}>
                        <input className={`w-[308px] ${!showSearch && "hidden"} md:inline text-sm text-[#303030] leading-5 py-[18px] pl-6 border border-[#E5E5E5] rounded-[10px] outline-none `} type="text" placeholder="Search Products ..." />

                        {/* ----Laptop & Desktop Search Icon---- */}
                        <TfiSearch className="text-lg font-bold absolute top-[50%] right-6 translate-y-[-50%] hidden sm:block" />

                        {/* ----Mobile & Tablet Search Icon---- */}
                        <>
                            {showSearch ? (
                                <RxCross1 onClick={() => setShowSearch(false)} className="text-xl sm:text-lg font-bold absolute top-[45%] right-[-30px] sm:right-6 translate-y-[-50%] mt-1 sm:mt-0 sm:hidden" />
                            ) : (
                                <TfiSearch onClick={() => setShowSearch(true)} className="text-xl sm:text-lg font-bold absolute top-[50%] right-[-30px] sm:right-6 translate-y-[-50%] mt-1 sm:mt-0 sm:hidden" />
                            )}
                        </>
                    </div>

                    <div className={`flex gap-[25px] sm:gap-[90px] items-center relative ${showSearch ? "hidden" : ""}`}>
                        {/* Cart */}
                        <div className="flex items-center gap-5 sm:after:content-[] sm:after:absolute sm:after:top-1/2 sm:after:left-1/2 sm:after:w-[1px] sm:after:h-[32px] sm:after:bg-[#979797] sm:after:-translate-y-1/2 sm:after:-translate-x-1/2">
                            <div className="w-[28px] sm:w-[32px]">
                                <Link to="/cart"> <CartIcon width="full" /> </Link>
                            </div>
                            <div className="hidden sm:block">
                                <p className="text-[#303030] font-['Montserrat'] leading-6 ">Cart</p>
                                <span className="text-[#303030] font-['Montserrat'] leading-6 font-bold">$ 150,00</span>
                            </div>
                        </div>

                        {/* User account */}
                        {
                            console.log(user)
                        }
                        <Link to={user ? "/dashboard" : "/login"} className={`flex items-center gap-6 ${showSearch ? "hidden" : ""}`}>
                            <div className="w-[24px] sm:w-[28px]">
                                <UserIcon width="full" />
                            </div>
                            <div className="hidden sm:block">
                                <p className="text-[#303030] font-['Montserrat'] leading-6 ">{(user && !loading) ? user.name : "User"}</p>
                                <span className="text-[#303030] font-['Montserrat'] leading-6 font-bold">Account</span>
                            </div>
                        </Link>

                        {(user && !loading) && <Button signOut={handleSignOut} value="Sign Out" paddingX="16px" paddingY="8px" />}
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default MiddlePart;