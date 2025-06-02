import Banner from "../components/Banner";
import Facilities from "../components/Facilities";
import FeaturedProducts from "../components/FeaturedProducts";
import OfferSection from "../components/OfferSection";

const HomePage = () => {
    return (
        <main>
            <Banner />
            <Facilities />
            <FeaturedProducts />
            <OfferSection />
        </main>
    );
};

export default HomePage;