import { Link } from "react-router";
import Container from "./commonLayouts/Container";

const Banner = () => {
    return (
        <Container>
            <Link to="#">
                <img className="object-cover sm:mt-8" src="images/banner.png" alt="banner image" />
            </Link>
        </Container>
    );
};

export default Banner;