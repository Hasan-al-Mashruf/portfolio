import React from "react";
import "./About.css";
import { AiOutlineDownload } from "react-icons/ai";
const About: React.FC = () => {
  return (
    <div className="grid grid-cols-2 ">
      <div className="about-section text-white text-center h-screen py-10">
        <div className="w-[700px] mx-auto relative">
          <h1 className="text-xl text-center px-16 leading-[36px] pt-20 relative z-10">
            Hello, I’m a Moeenudin Ahmad, web-developer based on Bangladsh. I
            have rich experience in web site design & building and
            customization. Also I am good at html, css, wordpress, php, jquery,
            bootstrap.
          </h1>
          <button className="btn mt-5 bg-[#1d1e21] text-white text-[14px] border-0">
            <AiOutlineDownload className="text-xl" /> Download CV
          </button>
          <div className="absolute -top-2 w-full left-0">
            <h1 className=" text-[130px] text-[#3d3d3d3b] uppercase font-bold">
              About Me
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-red-900 col-span-2"></div>
    </div>
  );
};

export default About;
