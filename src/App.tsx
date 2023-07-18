import { Route, Routes } from "react-router-dom";

import Main from "./layout/Main";
import { About, Home, Resume } from "./pages";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
