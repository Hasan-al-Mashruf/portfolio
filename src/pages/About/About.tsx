import React from "react";
import "./About.css";
import { AiOutlineDownload } from "react-icons/ai";
import {
  bootstraoLogo,
  nodejsLogo,
  reactLogo,
  wordpressLogo,
} from "../../assets";

const About: React.FC = () => {
  return (
    <div className="grid grid-cols-3 ">
      <div className="about-section text-white text-center h-screen py-10 relative pt-20 overflow-y-scroll p-5 col-span-2">
        <div className="w-5/6 mx-auto">
          <h1 className="text-xl text-center leading-[36px] relative z-10">
            Hello, I’m a Moeenudin Ahmad, web-developer based on Bangladsh. I
            have rich experience in web site design & building and
            customization. Also I am good at html, css, wordpress, php, jquery,
            bootstrap.
          </h1>
          <button className="btn mt-5 bg-[#1d1e21] text-white text-[14px] border-0">
            <AiOutlineDownload className="text-xl" /> Download CV
          </button>
        </div>
        <div className="absolute top-3 w-full left-0">
          <h1 className=" text-[90px] text-[#3d3d3d3b] uppercase font-bold">
            About Me
          </h1>
        </div>

        <div className="content pt-36 grid grid-cols-2 gap-10 text-left">
          <h3 className="text-2xl font-semibold">
            My <span> Services</span>
          </h3>
          <h3 className="text-xl "></h3>
          <div className="bg-gray-600 rounded-2xl shadow-xl">
            <div className="pb-10 p-8">
              <img src={wordpressLogo} alt="" className="w-[50px] mb-5" />
              <h4 className="text-[16px]">
                Front-end Developer - React, Angular
              </h4>
              <small className="text-[12px] opacity-50">
                2013-Present | Facebook Inc.
              </small>
              <p className="mt-5 text-sm leading-6 text-[14px]">
                Collaborate with creative and development teams on the execution
                of ideas.
              </p>
            </div>
          </div>
          <div className="bg-gray-600 rounded-2xl shadow-xl">
            <div className="pb-10 p-8">
              <img src={reactLogo} alt="" className="w-[50px] mb-5" />
              <h4 className="text-[16px]">
                Front-end Developer - React, Angular
              </h4>
              <small className="text-[12px] opacity-50">
                2013-Present | Facebook Inc.
              </small>
              <p className="mt-5 text-sm leading-6 text-[14px]">
                Collaborate with creative and development teams on the execution
                of ideas.
              </p>
            </div>
          </div>
          <div className="bg-gray-600 rounded-2xl shadow-xl">
            <div className="pb-10 p-8">
              <img src={nodejsLogo} alt="" className="w-[50px] mb-5" />
              <h4 className="text-[16px]">
                Front-end Developer - React, Angular
              </h4>
              <small className="text-[12px] opacity-50">
                2013-Present | Facebook Inc.
              </small>
              <p className="mt-5 text-sm leading-6 text-[14px]">
                Collaborate with creative and development teams on the execution
                of ideas.
              </p>
            </div>
          </div>
          <div className="bg-gray-600 rounded-2xl shadow-xl">
            <div className="pb-10 p-8">
              <img src={bootstraoLogo} alt="" className="w-[50px] mb-5" />
              <h4 className="text-[16px]">
                Front-end Developer - React, Angular
              </h4>
              <small className="text-[12px] opacity-50">
                2013-Present | Facebook Inc.
              </small>
              <p className="mt-5 text-sm leading-6 text-[14px]">
                Collaborate with creative and development teams on the execution
                of ideas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
