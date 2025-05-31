const Button = ({value, paddingX="40px", paddingY="16px"}) => {
    return (
        <button 
        className={`text-white bg-[#FF624C] font-['Montserrat'] text-xl font-bold leading-[30px] rounded-[10px] cursor-pointer`}
        style={{
            padding: `${paddingY} ${paddingX}`
        }}
        >{value}</button>
    );
};

export default Button;