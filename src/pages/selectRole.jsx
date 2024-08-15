import Background from "./pics/background.png";
import FarmerIcon from "./dashboard/icons/farmerIcon.png";
import InvestorIcon from "./dashboard/icons/investorIcon.png"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SelectRole = () => {
    const [selectedRole, setSelectedRole] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/createaccount");
    };

    const handleRoleChange = (e) => {
        setSelectedRole(e.target.value);
    };


    return (
        <div className="relative bg-[#135c47] h-screen w-full">
            <img
                src={Background}
                alt="Background"
                className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="flex flex-col gap-y-5 items-center justify-center pt-16">

                <span className="relative z-10 text-[#dbf7ef] text-3xl font-bold">
                    Agro<span className="text-[#23d46f]">Invest</span>
                </span>

                <div className="z-10 h-auto w-[470px] bg-white border-2 border-gray-400
                rounded-lg flex flex-col items-center py-5 px-10">

                    <div className="text-3xl font-bold">
                        Select your role
                    </div>
                    <div className="text-gray-400 mb-8">Enter your credentials to access your account</div>

                    <form className="flex flex-col gap-y-5 w-full items-center" onSubmit={handleSubmit}>

                        <div className={`flex items-center justify-between h-16 w-full 
                        border px-3 rounded-lg ${selectedRole === "farmer" ? "border-[#23d46f]" : "border-gray-400"}`}>

                            <label htmlFor="farmer"
                                className="text-gray-700 text-2xl font-bold flex items-center flex-row gap-x-3">
                                <div className="h-10 w-10 rounded-lg bg-[#f0f0f0] flex items-center justify-center">
                                    <img src={FarmerIcon} alt="" className="size-6" />
                                </div>
                                Farmer
                            </label>

                            <div>
                                <input
                                    type="radio"
                                    id="farmer"
                                    name="role"
                                    value="farmer"
                                    checked={selectedRole === "farmer"}
                                    onChange={handleRoleChange}
                                    className="form-radio h-5 w-5 rounded-full cursor-pointer"
                                />
                            </div>
                        </div>

                        <div className={`flex items-center justify-between h-16 w-full 
                        border px-3 rounded-lg ${selectedRole === "investor" ? "border-[#23d46f]" : "border-gray-400"}`}>

                            <label htmlFor="investor"
                                className="text-gray-700 text-2xl font-bold flex items-center flex-row gap-x-3">
                                <div className="h-10 w-10 rounded-lg bg-[#f0f0f0] flex items-center justify-center">
                                    <img src={InvestorIcon} alt="" className="h-6 w-8" />
                                </div>
                                Investor
                            </label>

                            <div>
                                <input
                                    type="radio"
                                    id="investor"
                                    name="role"
                                    value="investor"
                                    checked={selectedRole === "investor"}
                                    onChange={handleRoleChange}
                                    className="form-radio h-5 w-5 rounded-full cursor-pointer"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="h-14 w-full bg-[#23d46f] text-white py-2 rounded-lg hover:bg-[#1fa45b] transition-colors duration-300">
                            Continue
                        </button>

                    </form>

                    <div className="mt-4 text-gray-400">
                        Already have an account? <a href="/signin" className="text-[#23d46f]">Signin</a>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default SelectRole;
