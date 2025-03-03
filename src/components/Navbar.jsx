import logo from "../assets/jason-lee-logo.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/jason-jonghyuk/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/Jasonlee8263"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
