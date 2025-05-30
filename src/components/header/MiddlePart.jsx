import CartIcon from "../../icons/CartIcon";
import UserIcon from "../../icons/UserIcon";
import Container from "../container/Container"
import { IoSearchSharp } from "react-icons/io5";
const MiddlePart = () => {
    return (
        <Container>
            <div className="flex justify-between items-center py-8">
                <div>
                    <img src="images/logo.webp" alt="logo" />
                </div>
                <div className="flex gap-12">
                    <div className="relative">
                        <input className="w-[308px] text-sm text-[#303030] leading-5 py-[18px] pl-6 border border-[#CCC] rounded-[10px]" type="text" placeholder="Search Products ..." />
                        <IoSearchSharp className="text-2xl absolute top-[50%] right-6 translate-y-[-50%]" />
                    </div>

                    <div className="flex gap-[90px] items-center relative">
                        {/* Cart */}
                        <div className="flex items-center gap-5 after:content-[] after:absolute after:top-1/2 after:left-1/2 after:w-[1px] after:h-[32px] after:bg-[#303030] after:-translate-y-1/2 after:-translate-x-1/2">
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