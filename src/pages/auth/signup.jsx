import { useState } from "react";
import { Button } from "../../components/ui/CustomButton";
import { Label } from "../../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group";
import { Input } from "../../components/ui/input";

const SignUp = () => {
  const [state, setState] = useState("");

  const handleClick = () => {
    setState("continue");
  };
  return (
    <div className=" bg-[url(./grid.png)] w-full bg-cover bg-center bg-green-800 min-h-screen relative overflow-y-hidden">
      <img
        src="./noise.png"
        alt=""
        className="w-full max-h-screen absolute top-0 left-0"
      />
      <div className="w-fit flex items-center flex-col  -translate-x-1/2 h-full mt-[96px] left-1/2 absolute">
        <h4 className="font-bold text-white text-[28px]">
          <a href="/">
            Agro<span className="text-[#1EB45E]">Invest</span>
          </a>
        </h4>
        <form
          className="w-[400px] h-fit bg-white rounded-xl mt-4 p-6 "
          onSubmit={(ev) => {
            ev.preventDefault();
          }}
        >
          {state !== "continue" ? (
            <>
              <h3 className="text-2xl text-center font-semibold">
                Select your role
              </h3>
              <p className="text-gray-500 text-center mb-4">
                Enter your credentials to access your account
              </p>

              <RadioGroup defaultValue="option-one" className="space-y-2">
                <div className="flex items-center space-x-2 p-4 justify-between border rounded-md">
                  <Label htmlFor="option-one">Farmer</Label>
                  <RadioGroupItem value="farmer" id="option-one" />
                </div>
                <div className="flex items-center space-x-2 p-4 justify-between border rounded-md">
                  <Label htmlFor="option-two">Invester</Label>
                  <RadioGroupItem value="invester" id="option-two" />
                </div>
              </RadioGroup>

              <Button
                variant={"primary"}
                className={`w-full h-fit p-3 mt-4`}
                onClick={handleClick}
              >
                Continue
              </Button>
              <div className="flex mt-4  justify-center w-full ">
                <p className="text-gray-500">Already have an account? </p>
                <a href="/signin" className="text-green-500 font-medium ml-2">
                  Log in
                </a>
              </div>
            </>
          ) : (
            <>
              {" "}
              <h3 className="text-2xl text-center font-semibold">
                Create account
              </h3>
              <p className="text-gray-500 text-center mb-4">
                Enter your credentials to complete your account creation
              </p>
              <div className="flex flex-col space-y-[-4px]">
                <div>
                  {" "}
                  <Label htmlFor="name">Name</Label>
                  <Input type="text" id="name" placeholder="Enter your name" />
                </div>
                <div>
                  {" "}
                  <Label htmlFor="name">Email</Label>
                  <Input type="email" id="email" placeholder="Enter email" />
                </div>
                <div>
                  <Label htmlFor="name">Password</Label>
                  <Input
                    type="password"
                    id="password"
                    placeholder="Create password"
                  />
                </div>
              </div>
              <Button
                variant={"primary"}
                className={`w-full mt-1 h-fit p-3`}
                onClick={handleClick}
              >
                Create an account
              </Button>
              <div className="flex mt-4 justify-center w-full ">
                <p className="text-gray-500">Already have an account? </p>
                <a href="/signin" className="text-green-500 font-medium ml-2">
                  Log in
                </a>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default SignUp;
