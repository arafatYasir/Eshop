import { useState } from "react";
import { LuPlus } from "react-icons/lu";
import { PiMinus } from "react-icons/pi";

const CartQuantity = () => {
    const [count, setCount] = useState(1);

    const handleUpdate = (action) => {
        if(action === "increment") {
            setCount(prevCount => prevCount + 1);
        }
        else if(action === "decrement" && count > 1) {
            setCount(prevCount => prevCount - 1);
        }
    }

    return (
        <div className="flex items-center gap-4">
            <button className="cursor-pointer" onClick={() => handleUpdate("decrement")}>
                <PiMinus className="text-lg" />
            </button>
            <input className="w-10 h-10 rounded-full bg-[#f4f4f4] text-center text-[#303030] font-['Montserrat'] font-bold leading-6" disabled type="text" value={count} />
            <button className="cursor-pointer" onClick={() => handleUpdate("increment")}>
                <LuPlus className="text-lg"  />
            </button>
        </div>
    );
};

export default CartQuantity;