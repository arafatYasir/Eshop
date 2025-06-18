import Container from "../components/commonLayouts/Container";

import ProductsListLeftSide from "../components/ProductsListLeftSide";
import ProductsListProducts from "../components/ProductsListProducts";

const ProductsListPage = () => {

    return (
        <Container>
            <div className="flex items-start gap-[26px] mt-16 mb-20">
                {/* Left Side */}
                <ProductsListLeftSide />

                <ProductsListProducts />
            </div>
        </Container>
    );
};

export default ProductsListPage;