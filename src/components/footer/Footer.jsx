import { Link } from "react-router";
import Button from "../Button";
import Container from "../commonLayouts/Container";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
    return (
        <Container>
            <footer>
                <div className="bg-[linear-gradient(90deg,_rgba(244,244,244,1)_28%,_rgba(217,217,217,1)_45%)] h-[531px] rounded-[25px] pt-[114px] pl-[100px]">
                    <h3 className="text-[#303030] text-4xl leading-[46px] font-semibold font-['Poppins']">Get Our Updates</h3>
                    <p className="max-w-[514px] text-[#303030] text-xl leading-[30px] font-['Montserrat'] mt-4">
                        Browse our wide selection of electronics and
                        find the perfect promo for you from newsletter.
                    </p>

                    <input
                        className="placeholder:text-[#303030] placeholder:opacity-75 font-['Montserrat'] leading-6 border border-[#929292] outline-none rounded-[10px] py-6 pl-6 w-[470px] mt-8 mb-4"
                        type="text"
                        placeholder="Enter your email address ..."
                    />
                    <br />
                    <Button value="Subscribe" />
                </div>

                <div className="mt-[100px] flex justify-between pb-20">
                    <div className="w-[349px]">
                        <div>
                            <img src="images/logo.webp" alt="logo" />
                        </div>
                        <ul className="flex flex-col gap-3 mt-[158px]">
                            <li className="relative">
                                <BsFillTelephoneFill className="text-[#303030] opacity-[75%]" />
                                <Link
                                    className="absolute top-1/2 -translate-y-1/2 left-[27px] text-[#303030] font-['Montserrat'] leading-6"
                                    to="tel:+1 (555) 123-4567"
                                >
                                    +1 (555) 123-4567
                                </Link>
                            </li>
                            <li className="relative">
                                <IoIosMail className="text-[#303030] text-lg opacity-[75%]" />
                                <Link
                                    className="absolute top-1/2 -translate-y-1/2 left-[27px] text-[#303030] font-['Montserrat'] leading-6"
                                    to="mailto:information@eshop.com"
                                >
                                    information@eshop.com
                                </Link>
                            </li>
                            <li className="relative">
                                <FaLocationDot className="text-[#303030] opacity-[75%]" />
                                <Link
                                    className="absolute top-1/2 -translate-y-1/2 left-[27px] text-[#303030] font-['Montserrat'] leading-6"
                                    to="https://maps.app.goo.gl/DipLafPdoiQoKjnv7"
                                    target="_blank"
                                >
                                    123 Main Street, Anytown USA
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xl text-[#303030] font-semibold font-['Poppins'] leading-[30px]">Links</h4>
                        <ul className="flex flex-col gap-3 text-[#303030] font-['Montserrat'] leading-6 mt-6">
                            <li><Link to="#" className="hover:underline">Products List</Link></li>
                            <li><Link to="#" className="hover:underline">Order Tracking</Link></li>
                            <li><Link to="#" className="hover:underline">Products Guide</Link></li>
                            <li><Link to="#" className="hover:underline">Shopping Cart</Link></li>
                            <li><Link to="#" className="hover:underline">Tech Blog</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xl text-[#303030] font-semibold font-['Poppins'] leading-[30px]">Supports</h4>
                        <ul className="flex flex-col gap-3 text-[#303030] font-['Montserrat'] leading-6 mt-6">
                            <li><Link to="#" className="hover:underline">About Us</Link></li>
                            <li><Link to="#" className="hover:underline">Privacy Policy</Link></li>
                            <li><Link to="#" className="hover:underline">Return Policy</Link></li>
                            <li><Link to="#" className="hover:underline">Help Centre</Link></li>
                            <li><Link to="#" className="hover:underline">Store Locations</Link></li>
                            <li><Link to="#" className="hover:underline">Careers</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xl text-[#303030] font-semibold font-['Poppins'] leading-[30px]">Categories</h4>
                        <ul className="flex flex-col gap-3 text-[#303030] font-['Montserrat'] leading-6 mt-6">
                            <li><Link to="#" className="hover:underline">Computers & Tablets</Link></li>
                            <li><Link to="#" className="hover:underline">Mobile Phones & Accessories</Link></li>
                            <li><Link to="#" className="hover:underline">TV & Home Theater</Link></li>
                            <li><Link to="#" className="hover:underline">Audio & Headphones</Link></li>
                            <li><Link to="#" className="hover:underline">Cameras & Camcorders</Link></li>
                            <li><Link to="#" className="hover:underline">Gaming Equipment</Link></li>
                            <li><Link to="#" className="hover:underline">Home Appliances</Link></li>
                        </ul>
                    </div>

                    <div>
                        <div>
                            <h4 className="text-xl text-[#303030] font-semibold font-['Poppins'] leading-[30px]">Payments</h4>
                            <img className="mt-6" src="images/payments.png" alt="payment methods" />
                        </div>
                        <div className="mt-[74px]">
                            <h4 className="text-xl text-[#303030] font-semibold font-['Poppins'] leading-[30px]">Follow Us</h4>
                            <ul className="flex flex-col gap-3 text-[#303030] font-['Montserrat'] leading-6 mt-6">
                                <li><Link to="#" className="hover:underline">Twitter</Link></li>
                                <li><Link to="#" className="hover:underline">Instagram</Link></li>
                                <li><Link to="#" className="hover:underline">Facebook</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="h-[1px] bg-[#CBCBCB]"></div>

                <div className="text-[#303030] font-['Montserrat'] text-sm leading-5 flex justify-between mt-2 mb-20 opacity-75">
                    <Link className="" to="#">Copyright © 2023 E-Shop. All Rights Reserved.</Link>

                    <div className="flex gap-2">
                        <Link className="">Privacy Policy</Link>
                        <span>|</span>
                        <Link>Terms & Condition</Link>
                        <span>|</span>
                        <Link>Sitemap</Link>
                    </div>
                </div>
            </footer>
        </Container>
    );
};

export default Footer;