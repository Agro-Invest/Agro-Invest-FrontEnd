import Background from "../pics/background.png";
import MailIcon from "../../pages/dashboard/icons/mailIcon.png"
import React, { useState } from 'react';
import { Eye, EyeOff, PhoneCallIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { apiSignup } from "../../services/auth";
import { toast } from "react-toastify";
import { motion } from "framer-motion";


const CreateAccount = () => {

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);


    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm({ reValidateMode: "onBlur", mode: "all" });

    const onSubmit = async (data) => {
        console.log(data);
        setIsSubmitting(true);
        let payload = {
            firstName: data.firstName,
            lastName: data.lastName,
            username: data.username,
            phoneNumber: data.phoneNumber,
            email: data.email,
            gender: data.gender,
            country: data.country,
            role: data.role,
            password: data.password,
            confirmPassword: data.confirmPassword,
            termsAndConditions: data.termsAndConditions || false,
        };

        try {
            const res = await apiSignup(payload);
            console.log(res);
            toast.success(res.data);
            navigate("/signin");
        } catch (error) {
            console.log(error);
            toast.error("An Error Occurred!");
        } finally {
            setIsSubmitting(false);
        }
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleSignin = () => {
        navigate("/signin");
    };

    return (
        <div className="relative bg-[#135c47] h-screen w-full">
            <img
                src={Background}
                alt="Background"
                className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="flex flex-row gap-x-20 text-center items-center justify-center pt-1">
                <motion.div
                    className="flex flex-row gap-x-5 text-center items-center justify-center pt-1"
                    initial={{ x: '-100vw' }}
                    animate={{ x: 0 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 40 }}
                >
                    <div className="z-[100] text-center">
                        <div className="ml-3">
                            <div className="text-3xl font-bold text-white z-[100]">
                                Create Account
                            </div>
                            <div className="text-white mb-4">
                                Enter Your Credentials To Create An Account
                            </div>
                            <div className="flex flex-row relative mb-7">
                                <div className="h-0.5 w-72 bg-white left-10 absolute"></div>
                                <div className="h-0.5 w-56 bg-white absolute left-56"></div>
                                <div className="h-4 w-4 rounded-full bg-white absolute left-56 -top-2"></div>

                            </div>
                        </div>

                        <span className="relative z-10 text-[#dbf7ef] text-8xl font-bold">
                            <a href="/">
                                {" "}
                                Agro<span className="text-[#23d46f]">Invest</span>
                            </a>
                        </span>
                    </div>
                </motion.div>

                <div className="z-[100] pt-10">
                    <motion.div
                        className="z-[100] pt-10"
                        initial={{ x: '100vw' }}
                        animate={{ x: 0 }}
                        transition={{ type: 'spring', stiffness: 100, damping: 40 }}
                    >
                        <div className="z-10 h-auto w-[500px] bg-white border-2 border-gray-400
                          rounded-lg flex flex-col items-center justify-center py-5 px-5">

                            <form
                                onSubmit={handleSubmit(onSubmit)}
                                className="flex flex-col gap-y-5 w-full items-center">

                                <div className="flex flex-col gap-3">
                                    <div className="flex gap-4">
                                        <div className="w-1/2">
                                            <label htmlFor="firstName" className="w-full block text-gray-700 text-sm font-normal" >First Name</label>
                                            <input
                                                id="firstName"
                                                type="text"
                                                placeholder="Enter your first name"
                                                className="w-full h-8 px-2 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1eb45e]"
                                                {...register("firstName", {
                                                    required: "First name is required", minLength: {
                                                        value: 2,
                                                        message: "Length must be more than 2 characters",
                                                    },
                                                })}
                                            />
                                            {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName.message}</p>}
                                        </div>

                                        <div className="w-1/2">
                                            <label htmlFor="lastName" className="block text-gray-700 text-sm font-normal" >Last Name</label>
                                            <input
                                                id="lastName"
                                                type="text"
                                                placeholder="Enter your last name"
                                                className="w-full h-8 px-9 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1eb45e]"
                                                {...register("lastName", {
                                                    required: "Last name is required", minLength: {
                                                        value: 2,
                                                        message: "Length must be more than 2 characters",
                                                    },
                                                })}
                                            />
                                            {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName.message}</p>}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3">
                                    <div className="flex gap-4">
                                        <div className="w-1/2">
                                            <label className="w-full block text-black text-sm font-normal" htmlFor="password">
                                                Password
                                            </label>
                                            <div className="relative">
                                                <input
                                                    id="password"
                                                    type={passwordVisible ? "text" : "password"}
                                                    placeholder="Enter password"
                                                    className="w-full h-8 px-2 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1eb45e]"
                                                    {...register("password", {
                                                        required: "Password is required",
                                                        minLength: {
                                                            value: 8,
                                                            message: "Must be at least 8 characters",
                                                        },
                                                    })}
                                                />
                                                <span className="absolute inset-y-0 right-3 flex items-center cursor-pointer" onClick={togglePasswordVisibility}>
                                                    {passwordVisible ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
                                                </span>
                                                {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
                                            </div>
                                        </div>

                                        <div className="w-1/2">
                                            <label className="w-full block text-black text-sm font-normal" htmlFor="confirmPassword">
                                                Confirm Password
                                            </label>
                                            <div className="relative">
                                                <input
                                                    id="confirmPassword"
                                                    type={passwordVisible ? "text" : "password"}
                                                    placeholder="Confirm password"
                                                    className="w-full h-8 px-2 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1eb45e]"
                                                    {...register("confirmPassword", {
                                                        required: "Confirm your password",
                                                        validate: value =>
                                                            value === watch("password") || "Passwords do not match"
                                                    })}
                                                />
                                                <span className="absolute inset-y-0 right-3 flex items-center cursor-pointer" onClick={togglePasswordVisibility}>
                                                    {passwordVisible ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
                                                </span>
                                                {errors.confirmPassword && <p className="text-red-500 text-xs">{errors.confirmPassword.message}</p>}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-1/2">
                                            <label
                                                htmlFor="email"
                                                className="block text-black text-sm font-normal">
                                                Email Address
                                            </label>
                                            <div className="relative">
                                                <input
                                                    id="email"
                                                    type="text"
                                                    placeholder="Enter email"
                                                    className="w-full h-8 px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1eb45e]"
                                                    {...register("email", { required: "Email is required" })}
                                                />
                                                <span className="absolute inset-y-0 right-3 flex items-center">
                                                    <img src={MailIcon} alt="" className="h-5 w-5" />
                                                </span>
                                                {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                                            </div>
                                        </div>

                                        <div className="w-1/2">
                                            <label
                                                htmlFor="phoneNumber"
                                                className="block text-black text-sm font-normal">
                                                Phone Number
                                            </label>
                                            <div className="relative">
                                                <input
                                                    id="phoneNumber"
                                                    type="text"
                                                    placeholder="Enter phone"
                                                    className="w-full h-8 px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1eb45e]"
                                                    {...register("phoneNumber", { required: "Number is required" })}
                                                />
                                                <span className="absolute inset-y-0 right-3 flex items-center">
                                                    <PhoneCallIcon className="h-5 w-5" />
                                                </span>
                                                {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-1/2">
                                            <label htmlFor="gender"
                                                className="block text-gray-700 text-sm font-normal">Gender</label>
                                            <select
                                                id="gender"
                                                className="w-full h-8 px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1eb45e]"
                                                {...register("gender", {
                                                    required: "Gender is required"
                                                })}
                                            >
                                                <option value="">Select Gender</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                            </select>
                                            {errors.gender && <p className="text-red-500 text-xs">{errors.gender.message}</p>}
                                        </div>

                                        <div className="w-1/2">
                                            <label htmlFor="country" className="block text-gray-700 text-sm font-normal">Country</label>
                                            <select
                                                id="country"
                                                className="w-full h-8 px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1eb45e]"
                                                {...register("country", {
                                                    required: "Country is required"
                                                })}
                                            >
                                                <option value="">Select Country</option>
                                                <option value="ghana">Ghana</option>
                                                <option value="nigeria">Nigeria</option>
                                                <option value="south-africa">South Africa</option>
                                            </select>
                                            {errors.country && <p className="text-red-500 text-xs">{errors.country.message}</p>}
                                        </div>

                                        <div className="w-1/2">
                                            <label htmlFor="Role" className="block text-gray-700 text-sm font-normal">Role</label>
                                            <select
                                                id="Role"
                                                className="w-full h-8 px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1eb45e]"
                                                {...register("Role")}
                                            >
                                                <option value="">Select Role</option>
                                                <option value="Farmer">Farmer</option>
                                                <option value="Investor">Investor</option>
                                            </select>
                                            {errors.country && <p className="text-red-500 text-xs">{errors.country.message}</p>}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-center">
                                    <input
                                        type="checkbox"
                                        name="termsAndConditions"
                                        id="termsAndConditions"
                                        {...register("termsAndConditions", { required: "Agree to T & Cs" })}
                                    />
                                    <label htmlFor="termsAndConditions" className="text-[10pt] flex gap-[0.2rem] ml-2">
                                        I agree<a href="#" className="text-blue-500">Terms and Conditions</a>
                                    </label>
                                    {errors.termsAndConditions && <p className="text-red-500 text-xs ml-2">{errors.termsAndConditions.message}</p>}
                                </div>


                                <button
                                    type="submit"
                                    className={`w-full h-8 bg-[#23d46f] text-white text-sm font-normal rounded-lg ${isSubmitting ? "cursor-not-allowed" : ""}`}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Creating Account..." : "Create Account"}
                                </button>
                            </form>

                            <div className="text-center mt-1">
                                Already have an account?{" "}
                                <span className="text-[#23d46f] cursor-pointer font-medium" onClick={handleSignin}>
                                    Sign in
                                </span>
                            </div>

                        </div>
                    </motion.div>
                </div>

            </div>
        </div>
    );
};

export default CreateAccount;
