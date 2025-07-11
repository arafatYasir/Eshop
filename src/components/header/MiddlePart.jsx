import { GoSearch } from "react-icons/go";
import CartIcon from "../../icons/CartIcon";
import UserIcon from "../../icons/UserIcon";
import Container from "../commonLayouts/Container";
import { IoSearchSharp } from "react-icons/io5";
import { TfiSearch } from "react-icons/tfi";
import { Link } from "react-router";
const MiddlePart = () => {
    return (
        <Container>
            <div className="flex justify-between items-center py-8">
                <div>
                    <Link to="/">
                        <img src="images/logo.webp" alt="logo" />
                    </Link>
                </div>
                <div className="flex gap-12">
                    <div className="relative">
                        <input className="w-[308px] text-sm text-[#303030] leading-5 py-[18px] pl-6 border border-[#E5E5E5] rounded-[10px] outline-none" type="text" placeholder="Search Products ..." />

                        <TfiSearch className="text-lg font-bold absolute top-[50%] right-6 translate-y-[-50%]" />
                    </div>

                    <div className="flex gap-[90px] items-center relative">
                        {/* Cart */}
                        <div className="flex items-center gap-5 after:content-[] after:absolute after:top-1/2 after:left-1/2 after:w-[1px] after:h-[32px] after:bg-[#979797] after:-translate-y-1/2 after:-translate-x-1/2">
                            <div>
                                <CartIcon />
                            </div>
                            <div>
                                <p className="text-[#303030] font-['Montserrat'] leading-6 ">Cart</p>
                                <span className="text-[#303030] font-['Montserrat'] leading-6 font-bold">$ 150,00</span>
                            </div>
                        </div>

                        {/* User account */}
                        <div className="flex items-center gap-6">
                            <div>
                                <UserIcon />
                            </div>
                            <div>
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