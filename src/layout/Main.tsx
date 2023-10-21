import { Outlet } from "react-router-dom";
import { Header } from "../components";
import "./Main.css";

const Main: React.FC = () => {
  return (
    <div className="">
      <div className="flex-1 relative">
        <div className="about-section">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;
