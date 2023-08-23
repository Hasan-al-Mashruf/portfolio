import { Route, Routes } from "react-router-dom";

import Main from "./layout/Main";
import { About, Blog, Contact, Dashboard, Home, Resume, Signin } from "./pages";
import Portfolio from "./pages/Portfolio/Portfolio";

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
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signin" element={<Signin />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
