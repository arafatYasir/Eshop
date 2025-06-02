import Banner from "../components/Banner";
import Facilities from "../components/Facilities";
import FeaturedProducts from "../components/FeaturedProducts";
import NewProducts from "../components/NewProducts";
import OfferSection from "../components/OfferSection";

const HomePage = () => {
    return (
        <main>
            <Banner />
            <Facilities />
            <FeaturedProducts />
            <OfferSection />
            <NewProducts />
        </main>
    );
};

export default HomePage;