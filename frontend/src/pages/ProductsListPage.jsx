import { useEffect, useState } from "react";
import Container from "../components/commonLayouts/Container";

import ProductsListLeftSide from "../components/ProductsListLeftSide";
import ProductsListProducts from "../components/ProductsListProducts";
import { useLocation } from "react-router";

const ProductsListPage = () => {
    const [selectedCategories, setSelectedCategories] = useState("");
    const [selectedBrands, setSelectedBrands] = useState("");

    const location = useLocation();

    let categoryName = location.search;
    categoryName = categoryName.slice(3, categoryName.length).split("%20").join(" ");

    useEffect(() => {
        setSelectedCategories(prev => [...prev, categoryName]);

    }, [categoryName])

    return (
        <Container>
            <div className="flex flex-col xl:items-start xl:flex-row gap-[25px] mt-5 sm:mt-16 mb-20 sm:px-5 xl:px-0">
                {/* Left Side */}
                <ProductsListLeftSide selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} selectedBrands={selectedBrands} setSelectedBrands={setSelectedBrands} />

                {/* Right Side */}
                <ProductsListProducts selectedCategories={selectedCategories} selectedBrands={selectedBrands} />
            </div>
        </Container>
    );
};

export default ProductsListPage;