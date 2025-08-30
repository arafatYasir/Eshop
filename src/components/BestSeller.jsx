import Container from "./commonLayouts/Container";
import ProductLayout from "./commonLayouts/ProductLayout";
import LongArrowIcon from "../icons/LongArrowIcon";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebaseconfig";
import { setBestSellerProducts } from "../slices/productsSlice";
import LoadingSpinner from "./LoadingSpinner";
import Button from "./Button";

const BestSeller = () => {
    const [loading, setLoading] = useState(false);
    const [limit, setLimit] = useState(6);
    const dispatch = useDispatch();
    const bestSellingProducts = useSelector(state => state.products.bestSeller);
    const localStorageProducts = JSON.parse(localStorage.getItem("bestSellingProducts")) || [];

    const handleLoadMore = () => {
        setLimit(limit + 3);
    }

    const fetchProducts = async () => {
        setLoading(true);
        const q = query(collection(db, "Products"), where("tags", "array-contains", "Best Seller"));
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map(doc => {
            const product = doc.data();

            return {
                ...product,
                createdAt: product.createdAt ? product.createdAt.toDate().getTime() : null
            };
        });

        dispatch(setBestSellerProducts(data));
        setLoading(false);
        localStorage.setItem("bestSellingProducts", JSON.stringify(data));
    }

    useEffect(() => {
        if(localStorageProducts.length === 0) {
            fetchProducts();
        }
        else {
            dispatch(setBestSellerProducts(localStorageProducts))
        }
    }, [])

    return (
        <Container>
            <div className="flex flex-col items-center sm:items-start  sm:flex-row sm:justify-between">
                <div className="max-w-[902px]">
                    <div className="flex justify-between items-center">
                        <h2 className="text-[22px] sm:text-4xl text-[#303030] font-['Poppins'] leading-[46px] font-semibold">Best Seller</h2>
                        <p className="flex items-center text-[#FF624C] font-['Montserrat'] font-bold leading-6 gap-4 cursor-pointer text-sm sm:text-base">View All <LongArrowIcon /></p>
                    </div>

                    {(!loading && bestSellingProducts.length > 0) ? <>
                        <div className="flex flex-col items-center sm:items-start sm:flex-row sm:flex-wrap gap-5 sm:gap-1 justify-between mt-12">
                            {
                                bestSellingProducts.slice(0, limit).map(p => (
                                    <ProductLayout key={p.id} title={p.title} category={p.category} discountTag={p.discountTag} discountPercent={p.discountTag ? p.discountPercent : ""} rating={p.rating} totalRatings={p.totalRatings} price={p.price} previousPrice={p.discountTag ? p.previousPrice : ""} tags={p.tags} id={p.id} />
                                ))
                            }
                        </div>

                    
                        {limit !== bestSellingProducts.length ? (
                            <div className="text-center mt-16">
                                <Button handleLoadMore={handleLoadMore} value="Load More" bg="white" color="#FF624C" border={true} />
                            </div>
                        ) : ""}
                    
                    </> : <LoadingSpinner message="Loading Best Selling Products..." />}
                </div>


                <div className="hidden sm:block">
                    <img src="images/best-seller-offer.png" alt="Best seller offer" />
                </div>
            </div>
        </Container>
    );
};

export default BestSeller;