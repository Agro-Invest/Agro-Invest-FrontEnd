import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Pin,
  TwitterIcon,
} from "lucide-react";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";

const Footer = () => {
  return (
    <div className="bg-[#15624C] w-full overflow-x-hidden ">
      <Container className={`py-[68px] flex text-white`}>
        <div className="w-[40%]">
          <h3 className="text-[32px] font-semibold mb-[20px]">
            Subscribe to our newsletter
          </h3>
          <input
            type="email"
            className="w-[318px] h-[40px] p-2 rounded-[8px] mr-[16px] outline-none focus:outline-2 focus:outline-white/5"
            placeholder="Email address"
          />
          <Button variant={"secondary"} className={"border-white text-white"}>
            Subscribe
          </Button>
        </div>

        <div className="w-[30%] border-l-[0.5px] border-l-[#fff]">
          <ul className="w-full h-full flex justify-center flex-col px-10 gap-2  [&_a:hover]:text-white/60">
            <li>
              <a href="/" className="flex space-x-4 items-center ">
                <span className="mr-4">
                  <Mail size={20} />
                </span>
                info@AgroInvest.com
              </a>
            </li>
            <li>
              <a href="/" className="flex space-x-4 items-center ">
                <span className="mr-4">
                  <Phone size={20} />
                </span>
                (233) 958-2345
              </a>
            </li>
            <li>
              <a href="/" className="flex space-x-4 items-center ">
                <span className="mr-4">
                  <MapPin size={20} />
                </span>
                26th street, Osu, Accra - Ghana
              </a>
            </li>
          </ul>
        </div>
        <div className="w-[30%] border-l-[0.5px] border-l-[#fff] flex flex-col ">
          <ul className="w-full h-fit px-10  flex-col [&_a:hover]:text-white/60 grid grid-cols-2 gap-2">
            <li>
              <a href="/">FAQs</a>
            </li>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="">Terms of Use</a>
            </li>
            <li>
              <a href="/">Contact Us</a>
            </li>
          </ul>
          <ul className="w-full h-full items-end px-10 justify-start flex  [&_a:hover]:text-white/60 [&_li]:mr-3 mt-auto">
            <li>
              <a href="/">
                <Facebook size={20} />
              </a>
            </li>
            <li>
              <a href="/">
                <Instagram size={20} />
              </a>
            </li>
            <li>
              <a href="">
                <Linkedin size={20} />
              </a>
            </li>
            <li>
              <a href="/">
                <TwitterIcon size={20} />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
