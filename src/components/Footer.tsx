import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { logo, linkedin } from "../assets";

const Footer = () => {
  return (
    <footer className="footer bg-gradient-to-br text-[#8c8d8e] from-[#191919] to-stone-800 mt-10 w-full text-neutral-content ">
      <div className="p-10 flex items-center justify-between">
        <aside>
          <div className="text-center lg:text-left">
            <img
              src={logo}
              width={50}
              height={50}
              alt="EACC.dev logo"
              className="rounded-xl mx-auto lg:mx-0"
            />
            <p className="mt-5 font-light">
              Unlock the future of legal research with our AI-powered solution,
              <br />
              designed to streamline case processing and deliver quicker
              <br />
              outcomes. Tailored for India’s commercial courts, this
              <br />
              cutting-edge engine enhances judicial efficiency and supports
              <br />
              faster dispute resolution.
            </p>
            <div className="flex justify-center lg:justify-start mt-5 space-x-2">
              <Link to="https://www.linkedin.com/in/anujbhuyar/">
                <div className="p-2 bg-dark-grey-bg rounded-lg">
                  <img src={linkedin} width={25} height={25} alt="LinkedIn" />
                </div>
              </Link>
              {/* <Link href="https://x.com/anujsbhuyar">
                <div className="p-2 bg-dark-grey-bg rounded-lg">
                  <img src={x} width={25} height={25} alt="X" />
                </div>
              </Link> */}
              {/* <Link href="#">
              <div className="p-2 bg-dark-grey-bg rounded-lg">
                <Image
                  src="/insta.svg"
                  width={25}
                  height={25}
                  alt="Instagram"
                />
              </div>
            </Link> */}
            </div>
          </div>
        </aside>
        <div className="flex flex-col  justify-start items-start">
          <a href="#">
            <Button variant="link" className="text-[#8c8d8e] bg-transparent">
              Home
            </Button>
          </a>
          <a href="/#video">
            <Button variant="link" className="text-[#8c8d8e] bg-transparent">
              About
            </Button>
          </a>
          <a href="#features">
            <Button variant="link" className="text-[#8c8d8e] bg-transparent">
              Features
            </Button>
          </a>
          <a href="#Testimonials">
            <Button variant="link" className="text-[#8c8d8e] bg-transparent">
              Testimonials
            </Button>
          </a>
          <a href="#Contact">
            <Button variant="link" className="text-[#8c8d8e] bg-transparent">
              Contact
            </Button>
          </a>
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-between items-center border-t border-[#656d76] pt-4 mt-4 space-y-4 lg:space-y-0">
        <p>© 2024 21bubbles. All rights reserved.</p>
        <div className="flex space-x-4">
          <Link to="/privacy-policy">
            <Button variant="link" className="text-[#8c8d8e] bg-transparent">
              Privacy Policy
            </Button>
          </Link>
          <Link to="/tos">
            <Button variant="link" className="text-[#8c8d8e] bg-transparent">
              Terms & Conditions
            </Button>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
