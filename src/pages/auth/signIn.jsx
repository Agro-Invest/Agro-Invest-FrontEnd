import React, { useState } from 'react';
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { apiLogin } from "../../services/auth"
import { toast } from "react-toastify";
import Background from "../../pages/pics/background.png"
import MailIcon from "../../pages/dashboard/icons/mailIcon.png"

const SignIn = () => {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  
  
  const navigate = useNavigate();

  const { register, 
    handleSubmit, 
    formState: { errors },
   } = useForm({ reValidateMode: "onBlur", mode: "all" });


  const addToLocalStorage = (accesstoken, user) => {
    localStorage.setItem("accessToken", accesstoken);
    localStorage.setItem("firstName", user.firstName);
    localStorage.setItem("lastName", user.lastName);
  };

  const onSubmit = async (data) => {
    console.log(data)
    setIsSubmitting(true);

    try {
      const res = await apiLogin({
        email: data.email,
        password: data.password,
      });

      console.log("Response: ", res.data.user);

      addToLocalStorage(res.data.accesstoken, res.data.user);

      toast.success(res.data.message);
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);

    } catch (error) {
      console.log(error);
      toast.error("Invalid credentials, please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleCreateAccount = () => {
    navigate("/createaccount");
  };

  return (
    <div className="relative bg-[#135c47] h-screen w-full">
      <img
        src={Background}
        alt="Background"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="flex flex-col gap-y-5 items-center justify-center pt-10">
        <span className="relative z-10 text-[#dbf7ef] text-3xl font-bold">
          Agro<span className="text-[#23d46f]">Invest</span>
        </span>
        <div className="z-10 h-auto w-[500px] bg-white border-2 border-gray-400
                rounded-lg flex flex-col items-center py-5 px-5">

          <div className="text-3xl font-bold">Sign In</div>
          <div className="text-gray-400 mb-4 flex text-center">Enter your credentials to access your account</div>

          <form
            
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-y-5 w-full items-center px-5">

            <div className="w-full">
              <label htmlFor="email" className="block text-gray-700 text-sm font-normal mb-1">Email</label>
              <div className="relative">
                <input
                  id="email"
                  type="text"
                  placeholder="Enter username or email"
                  className="w-full h-10 px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1eb45e]"
                  {...register("email", {
                    required: "email or email is required",
                    pattern: {
                      value: /^[\w\-.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                      message: "Invalid email format"
                    }
                  })}
                />
                <span className="absolute inset-y-0 right-3 flex items-center">
                  <img src={MailIcon} alt="" className="h-5 w-5" />
                </span>
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
              </div>
            </div>

            <div className="w-full">
              <label htmlFor="password" className="block text-gray-700 text-sm font-normal mb-1">Password</label>
              <div className="relative">
                <input
                  id="password"
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Enter password"
                  className="w-full h-10 px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1eb45e]"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                <span className="absolute inset-y-0 right-3 flex items-center cursor-pointer" onClick={togglePasswordVisibility}>
                  {passwordVisible ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
                </span>
                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
              </div>
            </div>

            <button
              type="submit"
              className={`w-full h-10 bg-[#23d46f] text-white text-sm font-normal rounded-lg mt-4 ${isSubmitting ? "cursor-not-allowed" : ""}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Signing In..." : "Sign In"}
            </button>
          </form>

          <div className="text-center mt-4">
            Don't have an account?{" "}
            <span className="text-[#23d46f] cursor-pointer font-medium" onClick={handleCreateAccount}>
              Sign up
            </span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SignIn;
