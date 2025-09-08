import Container from "./commonLayouts/Container";
import HeadPhoneIcon from "../icons/HeadPhoneIcon"
import SecurityIcon from "../icons/SecurityIcon"
import DeliveryIcon from "../icons/DeliveryIcon";
import ReturnIcon from "../icons/ReturnIcon";

const Facilities = () => {
    return (
        <Container>
            <div className="flex flex-col lg:flex-row relative pl-8 lg:pl-0 lg:justify-between my-8 lg:my-20 gap-4 lg:gap-0">
                <div className="flex items-center gap-3 sm:gap-6">
                    <div>
                        <HeadPhoneIcon />
                    </div>
                    <div>
                        <h4 className="text-[#303030] text-sm sm:text-base font-['Montserrat'] font-bold leading-6">Responsive</h4>
                        <p className="text-[#303030] text-sm sm:text-base font-['Montserrat'] leading-6 mt-[2px]">Customer service available 24/7</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 sm:gap-6">
                    <div>
                        <SecurityIcon />
                    </div>
                    <div>
                        <h4 className="text-[#303030] text-sm sm:text-base font-['Montserrat'] font-bold leading-6">Secure</h4>
                        <p className="text-[#303030] text-sm sm:text-base font-['Montserrat'] leading-6 mt-[2px]">Certified marketplace since 2017</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 sm:gap-6">
                    <div>
                        <DeliveryIcon />
                    </div>
                    <div>
                        <h4 className="text-[#303030] text-sm sm:text-base font-['Montserrat'] font-bold leading-6">Shipping</h4>
                        <p className="text-[#303030] text-sm sm:text-base font-['Montserrat'] leading-6 mt-[2px]">Free, fast, and reliable worldwide</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 sm:gap-6">
                    <div>
                        <ReturnIcon />
                    </div>
                    <div>
                        <h4 className="text-[#303030] text-sm sm:text-base font-['Montserrat'] font-bold leading-6">Transparent</h4>
                        <p className="text-[#303030] text-sm sm:text-base font-['Montserrat'] leading-6 mt-[2px]">Hassle-free return policy</p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Facilities;