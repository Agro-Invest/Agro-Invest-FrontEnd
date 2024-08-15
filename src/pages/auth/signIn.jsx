import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

const SignIn = () => {
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
        <form className="w-[400px] h-fit bg-white rounded-xl mt-4 p-6 ">
          {" "}
          <h3 className="text-2xl text-center font-semibold">Log in</h3>
          <p className="text-gray-500 text-center">
            Enter your credentials to complete your account creation
          </p>
          <Label htmlFor="name">Email</Label>
          <Input type="email" id="email" placeholder="Enter email" />
          <Label htmlFor="name">Password</Label>
          <Input type="password" id="password" placeholder="Create password" />
          <Button variant={"primary"} className={`w-full mt-2 h-fit p-3`}>
            Log in
          </Button>
          <div className="flex mt-4  justify-center w-full ">
            <p className="text-gray-500">Are you new here? </p>
            <a href="/signup" className="text-green-500 font-medium ml-2">
              Create an account
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
