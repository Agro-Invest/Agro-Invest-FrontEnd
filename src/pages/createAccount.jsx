import Background from "./pics/background.png";
import MailIcon from "../pages/dashboard/icons/mailIcon.png";
import React, { useState } from 'react';
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";


const CreateAccount = () => {

    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate();


    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleToDashboard = () => {
        navigate("/dashboard");
      };

    return (
        <div className="relative bg-[#135c47] h-screen w-full">
            <img
                src={Background}
                alt="Background"
                className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="flex flex-col gap-y-5 items-center justify-center pt-8">

                <span className="relative z-10 text-[#dbf7ef] text-3xl font-bold">
                    Agro<span className="text-[#23d46f]">Invest</span>
                </span>

                <div className="z-10 h-auto w-[470px] bg-white border-2 border-gray-400
                rounded-lg flex flex-col items-center py-5 px-10">

                    <div className="text-3xl font-bold">
                        Create Account
                    </div>
                    <div className="text-gray-400 mb-8 flex text-center">Enter your credentials to complete your account
                        creation</div>

                    <form className="flex flex-col gap-y-5 w-full items-center">

                        <div className="w-full">
                            <label className="block text-gray-700 text-sm font-normal mb-1" htmlFor="farmName">
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Enter your name"
                                className="w-full h-12 px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1eb45e]"
                            />
                        </div>

                        <div className="w-full">
                            <label className="block text-black text-sm font-normal mb-1" htmlFor="farmName">
                                Email Address
                            </label>
                            <div className="relative">
                                <input
                                    id="email"
                                    type="text"
                                    placeholder="Enter email"
                                    className="w-full h-12 px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1eb45e]"
                                />
                                <span className="absolute inset-y-0 right-3 flex items-center">
                                    <img src={MailIcon} alt="" className="h-5 w-5" />
                                </span>
                            </div>
                        </div>

                        <div className="w-full">
                            <label className="block text-black text-sm font-normal mb-1" htmlFor="password">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    id="password"
                                    type={passwordVisible ? "text" : "password"}
                                    placeholder="Enter password"
                                    className="w-full h-12 px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1eb45e]"
                                />
                                <span className="absolute inset-y-0 right-3 flex items-center cursor-pointer" onClick={togglePasswordVisibility}>
                                    {passwordVisible ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
                                </span>
                            </div>
                        </div>

                        <button
                        onClick={handleToDashboard}
                            type="submit"
                            className="h-12 w-full bg-[#23d46f] text-white py-2 rounded-lg hover:bg-[#1fa45b] transition-colors duration-300">
                            Continue
                        </button>

                    </form>

                </div>

            </div>
        </div>
    );
};

export default CreateAccount;
