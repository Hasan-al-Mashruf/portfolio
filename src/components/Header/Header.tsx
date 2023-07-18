import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { GoPerson } from "react-icons/go";
import { AiOutlineSetting } from "react-icons/ai";
import "./Header.css";
import Particles from "../particles/Particles";
const Header: React.FC = () => {
  return (
    <div className="flex">
      <div className="navbar bg-black h-screen flex-col justify-between items-start p-0 w-12">
        <div className="flex-1 items-center justify-center w-full">
          <ul className="menu menu-horizontal nav-link p-0">
            <li>
              <Link to="/">
                <GoHome />
              </Link>
              <Link to="/">
                <GoPerson />
              </Link>
              <Link to="/">
                <AiOutlineSetting />
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
      <div className="flex-1 relative myParticles">
        <Particles />
      </div>
    </div>
  );
};

export default Header;
