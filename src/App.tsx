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

const ProtectedRoutes = ({ children }) => {
  const { user } = useContext(NewContext);
  console.log(user); // Move context usage inside the component
  if (!user) {
    return <Navigate to="/signup" />;
  }
  return children;
};

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoutes>
                <Dashboard />
              </ProtectedRoutes>
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
