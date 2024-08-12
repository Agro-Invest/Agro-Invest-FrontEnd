import { Container } from "./ui/Container";
import { Button } from "./ui/Button";

const Navbar = () => {
  return (
    <div className="bg-[#F2F2F7] h-[80px] w-full overflow-x-hidden ">
      <Container className={`flex justify-between w-full h-full items-center`}>
        <h4 className="font-bold text-[#15624C] text-[28px]">
          <a href="/">
            {" "}
            Agro<span className="text-[#1EB45E]">Invest</span>
          </a>
        </h4>
        <nav className=" ml-auto mr-[40px]">
          <ul className="flex space-x-4  ">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#for-farmers">For farmers</a>
            </li>
            <li>
              {" "}
              <a href="/browseprojects">Browse projects</a>
            </li>
            <li>
              {" "}
              <a href="#about-us">About Us</a>
            </li>
          </ul>
        </nav>
        <div className="space-x-4">
          <Button variant={"secondary"}>Log in</Button>
          <Button variant={"primary"}>Sign up</Button>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
