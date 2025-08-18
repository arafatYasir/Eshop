import Container from "../components/commonLayouts/Container";

import ProductsListLeftSide from "../components/ProductsListLeftSide";
import ProductsListProducts from "../components/ProductsListProducts";

const ProductsListPage = () => {

    return (
        <Container>
            <div className="flex flex-col sm:flex-row items-start gap-[25px] mt-16 mb-20">
                {/* Left Side */}
                <ProductsListLeftSide />

                {/* Right Side */}
                {/* <ProductsListProducts /> */}
            </div>
        </Container>
    );
};

export default ProductsListPage;