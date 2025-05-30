import { Link } from "react-router";
import Container from "../container/Container";
import { IoIosMenu } from "react-icons/io";
import { TfiAngleDown } from "react-icons/tfi";

const BottomPart = () => {
    return (
        <nav className="bg-[#FF624C] py-6 font-['Montserrat']">
            <Container>
                <div className="flex justify-between">
                    <ul className="flex items-center gap-20 text-white font-bold leading-6">
                        <li>
                            <Link className="flex items-center gap-4" to="#">
                                <IoIosMenu className="text-3xl" />
                                All Categories
                            </Link>
                        </li>
                        <li>
                            <Link className="flex items-center gap-2" to="#">
                                Products
                                <TfiAngleDown />
                            </Link>
                        </li>
                        <li>
                            <Link to="#">Blog</Link>
                        </li>
                        <li>
                            <Link to="#">Contact</Link>
                        </li>
                    </ul>

                    <ul className="flex items-center gap-20 text-white font-bold leading-6">
                        <li>
                            <Link to="#">LIMITED SALE</Link>
                        </li>
                        <li>
                            <Link to="#">Best Seller</Link>
                        </li>
                        <li>
                            <Link to="#">New Arrival</Link>
                        </li>
                    </ul>
                </div>
            </Container>
        </nav>
    );
};

export default BottomPart;