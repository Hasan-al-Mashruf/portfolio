import { Link, NavLink } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { GoPerson } from "react-icons/go";
import { AiOutlineSetting } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { TiContacts } from "react-icons/Ti";
import {
  BiLogoFacebook,
  BiLogoGithub,
  BiLogoTwitter,
  BiLogoDiscordAlt,
} from "react-icons/bi";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-black lg:h-screen min-h-full flex-col justify-between items-start p-0 w-12 border-r border-r-[#00fff735] ">
        <div className="logo bg-[#0a8580] w-full flex justify-center">
          <h4 className="text-center text-4xl leading-[65px] text-white ">M</h4>
        </div>
        <div className="flex-1 items-start justify-center w-full">
          <ul className="menu menu-horizontal nav-link p-0">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <GoHome />
              </NavLink>
              <NavLink to="/about">
                <GoPerson />
              </NavLink>
              <NavLink to="/resume">
                <AiOutlineSetting />
              </NavLink>
              <NavLink to="/portfolio">
                <BsEye />
              </NavLink>
              <NavLink to="/contact">
                <TiContacts />
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="justify-center w-full">
          <ul className="menu menu-horizontal nav-link p-0 social-icon">
            <li>
              <Link to="/about">
                <BiLogoGithub />
              </Link>
              <Link to="/resume">
                <BiLogoTwitter />
              </Link>
              <Link to="/resume">
                <BiLogoDiscordAlt />
              </Link>
              <Link to="/">
                <BiLogoFacebook />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
