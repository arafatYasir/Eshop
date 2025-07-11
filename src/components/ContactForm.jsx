import Button from "./Button";

const ContactForm = () => {
    return (
        <div>
            <h2 className="text-[#303030] font-['Poppins'] text-4xl font-semibold leading-[46px]">Contact Us</h2>
            <p className="text-[#303030] font-['Montserrat'] text-xl leading-[30px] mt-3">Have any questions for us? Don’t hesitate to contact us.</p>

            <div className="w-[870px] flex flex-wrap justify-between gap-y-8 mt-10 mb-8">
                {/* Name */}
                <div className="flex flex-col gap-3">
                    <label className="text-xl text-[#303030] font-['Montserrat'] font-bold leading-[30px]" htmlFor="name"> Name <span className="text-[#FF624C]">*</span></label>
                    <input className="py-[25px] px-[32px] outline-none border border-[#CBCBCB] rounded-[10px] w-[870px] text-[#303030] placeholder:text-[#303030] placeholder:opacity-75 font-['Montserrat'] text-xl leading-[30px]" type="text" id="name" placeholder="Amelia Robert Watson" />
                </div>
                {/* Phone Number */}
                <div className="flex flex-col gap-3">
                    <label className="text-xl text-[#303030] font-['Montserrat'] font-bold leading-[30px]" htmlFor="number">Phone Number</label>
                    <input className="py-[25px] px-[32px] outline-none border border-[#CBCBCB] rounded-[10px] w-[345px] text-[#303030] placeholder:text-[#303030] placeholder:opacity-75 font-['Montserrat'] text-xl leading-[30px]" type="text" id="number" placeholder="+123 456 7890" />
                </div>
                {/* Email Address */}
                <div className="flex flex-col gap-3">
                    <label className="text-xl text-[#303030] font-['Montserrat'] font-bold leading-[30px]" htmlFor="email">Email Address <span className="text-[#FF624C]">*</span></label>
                    <input className="py-[25px] px-[32px] outline-none border border-[#CBCBCB] rounded-[10px] w-[510px] text-[#303030] placeholder:text-[#303030] placeholder:opacity-75 font-['Montserrat'] text-xl leading-[30px]" type="email" id="email" placeholder="amelia.watson@eshop.com" />
                </div>
                {/* Message */}
                <div className="flex flex-col gap-3">
                    <label className="text-xl text-[#303030] font-['Montserrat'] font-bold leading-[30px]" htmlFor="message">Message <span className="text-[#FF624C]">*</span></label>
                    <textarea className="py-[25px] px-[32px] outline-none border border-[#CBCBCB] rounded-[10px] w-[870px] h-[241px] resize-none text-[#303030] placeholder:text-[#303030] placeholder:opacity-75 font-['Montserrat'] text-xl leading-[30px]" id="message" placeholder="Your message here..." rows="4"></textarea>
                </div>
            </div>
            <Button value="Submit" paddingX="40px" paddingY="16px" />
        </div>
    );
};

export default ContactForm;