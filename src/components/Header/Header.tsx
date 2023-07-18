import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { GoPerson } from "react-icons/go";
import { AiOutlineSetting } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { BiLogoBlogger } from "react-icons/bi";
import { TiContacts } from "react-icons/Ti";

import "./Header.css";

const Header = () => {
  return (
    <div className="navbar bg-black h-screen flex-col justify-between items-start p-0 w-12">
      <div className="flex-1 items-center justify-center w-full">
        <ul className="menu menu-horizontal nav-link p-0">
          <li>
            <Link to="/">
              <GoHome />
            </Link>
            <Link to="/about">
              <GoPerson />
            </Link>
            <Link to="/resume">
              <AiOutlineSetting />
            </Link>
            <Link to="/portfolio">
              <BsEye />
            </Link>
            <Link to="/">
              <BiLogoBlogger />
            </Link>
            <Link to="/">
              <TiContacts />
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
