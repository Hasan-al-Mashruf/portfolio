import React from "react";
import { Particles } from "../../components";
import "../../components/Header/Header.css";
const Home: React.FC = () => {
  return (
    <div className="myParticles">
      <Particles />
      <div className="content absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 text-center">
        <h1 className="text-5xl text-white">
          <span>Moeenuddin</span> Ahmad
        </h1>
        <h2 className="text-xl text-gray-400 mt-1">Full stack web developer</h2>
        <div className="absolute"></div>
      </div>
    </div>
  );
};

export default Home;
