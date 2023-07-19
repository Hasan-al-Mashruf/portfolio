import React from "react";
import { Particles } from "../../components";
import "../../components/Header/Header.css";
import "./Home.css";
const Home: React.FC = () => {
  return (
    <div className="myParticles">
      <Particles />
      <div className="content absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 text-center">
        <h1 className="text-6xl text-white">
          <span>Moeenuddin</span> Ahmad
        </h1>
        <h2 className="text-2xl text-white mt-1 opacity-75">
          Full stack web developer
        </h2>
      </div>
    </div>
  );
};

export default Home;
