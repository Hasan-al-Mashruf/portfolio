import React, { useContext } from "react";
import { Particles } from "../../components";
import "../../components/Header/Header.css";
import "./Home.css";
import { NewContext } from "../../contextApi/ContextApi.jsx";
const Home: React.FC = () => {
  const { user, receieveData } = useContext(NewContext);
  console.log("asslamuaikum", user, receieveData);
  return (
    <div className="myParticles">
      <Particles />
      <div className="content absolute md:left-1/2 top-1/2 -translate-y-1/2 md:-translate-x-1/2 text-center w-full">
        <h1 className="md:text-6xl text-xl text-white">
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
