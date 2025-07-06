const OrderedProduct = ({title, quantity, price}) => {
    return (
        <div className="flex gap-[64.5px] border-b border-[#C3C3C3] pb-5">
            <p className="max-w-[250px] text-xl text-[#303030] font-['Montserrat'] leading-[30px]">{title}</p>
            <p className="text-xl text-[#303030] font-['Montserrat'] leading-[30px] font-bold">{quantity}</p>
            <p className="text-xl text-[#303030] font-['Poppins'] leading-[30px] font-semibold">${price}</p>
        </div>
    );
};

export default OrderedProduct;