import { Outlet } from "react-router-dom";
import { Header } from "../components";

const Main: React.FC = () => {
  return (
    <div className="flex">
      {/* left-side */}
      <Header />

      {/* right-side */}
      <div className="flex-1 relative">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
