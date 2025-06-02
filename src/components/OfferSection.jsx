import Container from "./commonLayouts/Container"

const OfferSection = () => {
    return (
        <Container>
            <div className="flex justify-between mb-20">
                <div><img src="images/offer-image-1.png" alt="Offer 1" /></div>
                <div><img src="images/offer-image-2.png" alt="Offer 2" /></div>
            </div>
        </Container>
    );
};

export default OfferSection;