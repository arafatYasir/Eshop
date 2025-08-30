import { Link, Navigate } from "react-router";
import Container from "../components/commonLayouts/Container";
import CartProduct from "../components/CartProduct";
import cartProducts from "../../public/products/CartProducts";
import Button from "../components/Button";
import Facilities from "../components/Facilities";
import { useSelector } from "react-redux";

const CartPage = () => {
    const {user, loading} = useSelector(state => state.auth);
    
    if(!user) {
        return <Navigate to="/login" />
    }
    return (
        <Container >
            <div className="font-['Montserrat'] text-[#303030] text-base leading-6 flex gap-10 mt-16">
                <Link to="/" className="relative after:content-[''] after:absolute after:w-[1px] after:h-[20px] after:bg-[#4A4A4A] after:top-1/2 after:-translate-y-1/2 after:right-[-19px]">Home</Link>
                <span className="font-bold">Cart</span>
            </div>

            <h2 className="text-[#303030] font-['Poppins'] text-3xl sm:text-[56px] font-bold leading-[68px] mt-12">Your Cart</h2>

            <div className="hidden md:block h-[88px] py-8 px-[56px] bg-[#F4F4F4] rounded-[15px] mt-[28px] uppercase text-[#303030] font-['Montserrat'] font-bold leading-6">
                <span className="w-[50%] inline-block">Product</span>
                <span className="w-[16.5%] inline-block">Price</span>
                <span className="w-[16.5%] inline-block">Qty</span>
                <span className="w-[16.5%] inline-block">Total</span>
            </div>

            <div className="space-y-8 md:space-y-0">
                {cartProducts.map(product => (
                    <CartProduct key={product.id} category={product.category} title={product.title} variant={product.variant} price={product.price} totalPrice={product.price} />
                ))}
            </div>

            <div className="text-right mt-8 mb-8 md:mb-0">
                <div className="sm:hidden">
                    <Button value="Update Cart" paddingX="20px" paddingY="10px" />
                </div>
                <div className="hidden sm:block">
                    <Button value="Update Cart" paddingX="40px" paddingY="16px" />
                </div>
            </div>

            <div className="border-t mt-[100px] border-[#CBCBCB] hidden md:block">
                <Facilities />
            </div>
        </Container>
    );
};

export default CartPage;