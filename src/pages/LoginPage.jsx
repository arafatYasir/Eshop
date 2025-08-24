import { useState } from "react";
import Button from "../components/Button";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailLogin = (e) => {
        e.preventDefault();
        // TODO: Implement Firebase email/password login
        console.log("Login with email:", email, password);
    };

    const handleGoogleLogin = () => {
        // TODO: Implement Firebase Google login
        console.log("Login with Google");
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-white px-4">
            <div className="w-full max-w-lg border border-[#CBCBCB] rounded-[12px] p-8 sm:p-10 shadow-sm">
                {/* Title */}
                <h2 className="text-[#303030] font-['Poppins'] text-[22px] sm:text-3xl font-semibold leading-[36px] text-center">
                    Welcome Back
                </h2>
                <p className="text-[#303030] opacity-75 font-['Montserrat'] text-sm sm:text-base mt-2 text-center">
                    Please log in to continue
                </p>

                {/* ----Login form---- */}
                <form onSubmit={handleEmailLogin} className="mt-8 flex flex-col gap-6">
                    {/* Email */}
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="email"
                            className="text-[#303030] font-['Montserrat'] text-sm sm:text-base font-semibold"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="amelia.watson@eshop.com"
                            required
                            className="py-3 px-4 outline-none border border-[#CBCBCB] rounded-[10px] text-[#303030] placeholder:text-[#303030] placeholder:opacity-75 font-['Montserrat'] text-base w-full"
                        />
                    </div>

                    {/* Password */}
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="password"
                            className="text-[#303030] font-['Montserrat'] text-sm sm:text-base font-semibold"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="qwerty"
                            required
                            className="py-3 px-4 outline-none border border-[#CBCBCB] rounded-[10px] text-[#303030] placeholder:text-[#303030] placeholder:opacity-75 font-['Montserrat'] text-base w-full"
                        />
                    </div>

                    {/* Login Button */}
                    <div>
                        <Button value="Login" paddingX="40px" paddingY="16px" />
                    </div>
                </form>

                {/* Divider */}
                <div className="flex items-center gap-3 mt-6">
                    <div className="flex-1 h-px bg-[#CBCBCB]" />
                    <span className="text-[#303030] font-['Montserrat'] text-sm opacity-75">
                        OR
                    </span>
                    <div className="flex-1 h-px bg-[#CBCBCB]" />
                </div>

                {/* Google Login */}
                <div className="mt-6">
                    <button
                        onClick={handleGoogleLogin}
                        className="w-full flex items-center justify-center gap-3 py-3 border border-[#CBCBCB] rounded-[10px] font-['Montserrat'] text-base text-[#303030] hover:bg-[#f8f8f8] transition"
                    >
                        <img
                            src="https://www.svgrepo.com/show/355037/google.svg"
                            alt="Google"
                            className="w-5 h-5"
                        />
                        Continue with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
