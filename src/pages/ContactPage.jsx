import { Link } from "react-router";
import Container from "../components/commonLayouts/Container"
import ContactForm from "../components/ContactForm";
import AdditionalContactInfo from "../components/AdditionalContactInfo";
const ContactPage = () => {
    return (
        <Container>
            <div className="mt-8">
                <iframe className="rounded-[22px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9934.81839189418!2d90.36261392372765!3d23.80698329533074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c105f81691d5%3A0x4aa9bd97de918f7b!2sSher-E-Bangla%20National%20Cricket%20Stadium!5e1!3m2!1sen!2sbd!4v1752035748159!5m2!1sen!2sbd" width="100%" height="600" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className="font-['Montserrat'] text-[#303030] text-base leading-6 flex gap-10 mt-16">
                <Link to="/" className="relative after:content-[''] after:absolute after:w-[1px] after:h-[20px] after:bg-[#4A4A4A] after:top-1/2 after:-translate-y-1/2 after:right-[-19px]">Home</Link>
                <span className="font-bold">Contact</span>
            </div>

            <div className="flex flex-col gap-y-10 sm:gap-y-0 sm:flex-row justify-between items-start mt-12 mb-20">
                <ContactForm />
                <AdditionalContactInfo />
            </div>
        </Container>
    );
};

export default ContactPage;