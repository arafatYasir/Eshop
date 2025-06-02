const Button = ({value, paddingX="40px", paddingY="16px", bg="#FF624C", color="white", border=false, borderColor="#FF624C", handleLoadMore}) => {
    return (
        <button onClick={handleLoadMore}
        className={`font-['Montserrat'] text-xl font-bold leading-[30px] rounded-[10px] cursor-pointer`}
        style={{
            padding: `${paddingY} ${paddingX}`,
            background: bg,
            color: color,
            border: border ? `1px solid ${borderColor}` : ""
        }}
        >{value}</button>
    );
};

export default Button;