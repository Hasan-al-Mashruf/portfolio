import { Route, Routes } from "react-router-dom";

import Main from "./layout/Main";
import { About, Home } from "./pages";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
