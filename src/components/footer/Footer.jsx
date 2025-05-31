import { Link } from "react-router";
import Button from "../button/Button";
import Container from "../container/Container";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
const Footer = () => {
    return (
        <Container>
            <footer>
                <div className="bg-[linear-gradient(90deg,_rgba(244,244,244,1)_28%,_rgba(217,217,217,1)_45%)] h-[531px] rounded-[25px] pt-[114px] pl-[100px]">
                    <h3 className="text-[#303030] text-4xl leading-[46px] font-semibold font-['Poppins']">Get Our Updates</h3>
                    <p className="max-w-[514px] text-[#303030] text-xl leading-[30px] font-['Montserrat'] mt-4">Browse our wide selection of electronics and
                        find the perfect promo for you from newsletter.</p>

                    <input className="text-[#303030] font-['Montserrat'] leading-6 border border-[#303030] rounded-[10px] py-6 pl-6 w-[470px] mt-8 mb-4" type="text" placeholder="Enter your email address ..." />
                    <br />
                    <Button value="Subscribe" />
                </div>

                <div className="mt-[100px] flex justify-between">
                    <div className="w-[349px]">
                        <div>
                            <img src="images/logo.webp" alt="logo" />
                        </div>
                        <ul className="flex flex-col gap-3 mt-[158px]">
                            <li className="relative">
                                <BsFillTelephoneFill className="text-[#303030] opacity-[75%]" />
                                <Link className="absolute top-1/2 -translate-y-1/2 left-[28px] text-[#303030] font-['Montserrat'] leading-6" to="tel:+1 (555) 123-4567">+1 (555) 123-4567</Link>
                            </li>
                            <li className="relative">
                                <IoIosMail className="text-[#303030] opacity-[75%]" />
                                <Link className="absolute top-1/2 -translate-y-1/2 left-[28px] text-[#303030] font-['Montserrat'] leading-6" to="mailto:information@eshop.com">information@eshop.com</Link>
                            </li>
                            <li className="relative">
                                <FaLocationDot className="text-[#303030] opacity-[75%]" />
                                <Link className="absolute top-1/2 -translate-y-1/2 left-[28px] text-[#303030] font-['Montserrat'] leading-6" to="https://maps.app.goo.gl/DipLafPdoiQoKjnv7" target="_blank">123 Main Street, Anytown USA</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xl text-[#303030] font-semibold font-['Poppins'] leading-[30px]">Links</h4>
                        <ul className="flex flex-col gap-3 text-[#303030] font-['Montserrat'] leading-6 mt-6">
                            <li>Products List</li>
                            <li>Order Tracking</li>
                            <li>Products Guide</li>
                            <li>Shopping Cart</li>
                            <li>Tech Blog</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xl text-[#303030] font-semibold font-['Poppins'] leading-[30px]">Supports</h4>
                        <ul className="flex flex-col gap-3 text-[#303030] font-['Montserrat'] leading-6 mt-6">
                            <li>About Us</li>
                            <li>Privacy Policy</li>
                            <li>Return Policy</li>
                            <li>Help Centre</li>
                            <li>Store Locations</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xl text-[#303030] font-semibold font-['Poppins'] leading-[30px]">Categories</h4>
                        <ul className="flex flex-col gap-3 text-[#303030] font-['Montserrat'] leading-6 mt-6">
                            <li>Computers & Tablets</li>
                            <li>Mobile Phones & Accessories</li>
                            <li>TV & Home Theater</li>
                            <li>Audio & Headphones</li>
                            <li>Cameras & Camcorders</li>
                            <li>Gaming Equipment</li>
                            <li>Home Appliances</li>
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
                                <li>Twitter</li>
                                <li>Instagram</li>
                                <li>Facebook</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </Container>
    );
};

export default Footer;