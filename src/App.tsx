import { Navigate, Route, Routes } from "react-router-dom";

import Main from "./layout/Main";
import {
  About,
  Blog,
  Contact,
  Dashboard,
  Home,
  Resume,
  Signin,
  Signup,
} from "./pages";
import Portfolio from "./pages/Portfolio/Portfolio";
import { useContext } from "react";
import { NewContext } from "./contextApi/ContextApi";
import AddServices from "./pages/Dashboard/addServices/AddServices";
import ShowServices from "./pages/Dashboard/showServices/ShowServices";
import { Header, Loader } from "./components";

const ProtectedRoutes = ({ children }) => {
  const { user, loader } = useContext(NewContext);

  if (loader) {
    return <Loader />;
  }

  if (!user) {
    return (
      <Navigate
        to="/signup"
        state={{ from: window.location.pathname }}
        replace
      />
    );
  }

  return children;
};

const App: React.FC = () => {
  return (
    <div className="relative ml-10">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Main />}>
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Route>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoutes>
              <Dashboard />
            </ProtectedRoutes>
          }
        >
          <Route path="/dashboard" element={<ShowServices />} />
          <Route path="/dashboard/addServices" element={<AddServices />} />
        </Route>
      </Routes>

      <div className="fixed top-0 left-0">
        <Header />
      </div>
    </div>
  );
};

export default App;
