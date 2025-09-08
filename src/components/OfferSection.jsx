import Container from "./commonLayouts/Container"

const OfferSection = () => {
    return (
        <Container>
            <div className="flex flex-col items-center sm:flex-row gap-5 lg:gap-0 sm:justify-between mb-20 sm:px-5 lg:px-0">
                <div><img src="images/offer-image-1.png" alt="Offer 1" /></div>
                <div><img src="images/offer-image-2.png" alt="Offer 2" /></div>
            </div>
        </Container>
    );
};

export default OfferSection;