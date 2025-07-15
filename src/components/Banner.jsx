import { Link } from "react-router";
import Container from "./commonLayouts/Container";

const Banner = () => {
    return (
        <Container>
            <Link to="#">
                <img className="sm:mt-8 w-[95%] mx-auto sm:w-full" src="images/banner.png" alt="banner image" />
            </Link>
        </Container>
    );
};

export default Banner;