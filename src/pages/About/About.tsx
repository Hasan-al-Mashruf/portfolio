import React from "react";
import "./About.css";

import {
  bootstraoLogo,
  nodejsLogo,
  reactLogo,
  wordpressLogo,
} from "../../assets";
import { Particles, ShortURL } from "../../components";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1">
      <div className="about-section text-white text-center h-screen py-10 relative pt-20 overflow-y-scroll p-5 lg:col-span-2">
        <div className="md:w-5/6 mx-auto">
          <h1 className="md:text-xl text-sm leading-[24px] md:text-center md:leading-[36px] relative z-10">
            I specialize in crafting seamless front-end solutions using React,
            JavaScript, and TypeScript, seamlessly integrated with diverse
            backends including Firebase integration with Mern stack. With
            expertise in WordPress, Elementor ensuring 100% pixel-perfect
            design. <br />
            <br /> Let's collaborate to bring your digital ideas to life
            effectively and beautifully.
          </h1>

          <Link to="/contact">
            <button className="btn mt-5 bg-[#1d1e21] text-white text-[14px] border-0">
              Let's Work
            </button>
          </Link>
          <Link to="/portfolio">
            <button className="btn mt-5 bg-[#1d1e21] text-white text-[14px] border-0 ml-3">
              Explore Portfolio
            </button>
          </Link>
        </div>
        <div className="absolute top-3 w-full left-0">
          <h1 className=" md:text-[90px] text-[60px] text-[#3d3d3d3b] uppercase font-bold">
            About Me
          </h1>
        </div>

        <div className="content pt-36 grid md:grid-cols-2 grid-cols-1 gap-10 text-left">
          <h3 className="text-2xl font-semibold">
            My <span> Services</span>
          </h3>
          <h3 className="text-xl "></h3>
          <div className="bg-gray-600 rounded-2xl shadow-xl">
            <div className="pb-10 p-8">
              <img src={reactLogo} alt="" className="w-[50px] mb-5" />
              <h4 className="text-[16px]">
                Front-end Developer - Javascript, React, Typescript
              </h4>
              <small className="text-[12px] opacity-50">
                2022-Present | Full Time.
              </small>
              <p className="mt-5 text-sm leading-6 text-[14px]">
                Delivering seamless user experiences through expertly crafted
                front-end solutions using React, JavaScript, and TypeScript,
                seamlessly integrated with diverse backends for optimal
                performance and functionality.
              </p>
            </div>
          </div>
          <div className="bg-gray-600 rounded-2xl shadow-xl">
            <div className="pb-10 p-8">
              <img src={wordpressLogo} alt="" className="w-[50px] mb-5" />
              <h4 className="text-[16px]">
                Full website design - Wordpress, Elementor/pro, Divi, Astra
              </h4>
              <small className="text-[12px] opacity-50">
                2020-Present | Part time.
              </small>
              <p className="mt-5 text-sm leading-6 text-[14px]">
                Elevating your online presence with captivating website designs
                using WordPress, Elementor (Free/Pro), Astra, or other themes,
                blending creativity and technology to engage users and drive
                results.
              </p>
            </div>
          </div>
          <div className="bg-gray-600 rounded-2xl shadow-xl">
            <div className="pb-10 p-8">
              <img src={nodejsLogo} alt="" className="w-[50px] mb-5" />
              <h4 className="text-[16px]">
                Full stack web developemnt - Mern stack - React, Nodejs,
                Firebase
              </h4>
              <small className="text-[12px] opacity-50">
                2023-Present | Beginner.
              </small>
              <p className="mt-5 text-sm leading-6 text-[14px]">
                Empowering digital visions with end-to-end MERN stack expertise,
                combined with Firebase integration, to create dynamic and secure
                web applications that seamlessly merge powerful front-end
                interfaces with robust back-end functionality.
              </p>
            </div>
          </div>
          <div className="bg-gray-600 rounded-2xl shadow-xl">
            <div className="pb-10 p-8">
              <img src={bootstraoLogo} alt="" className="w-[50px] mb-5" />
              <h4 className="text-[16px]">
                Figma to HTML Template - Html, CSS, BOOTSTRAP, Tailwind css
              </h4>
              <small className="text-[12px] opacity-50">
                2019-Present | Expert.
              </small>
              <p className="mt-5 text-sm leading-6 text-[14px]">
                Achieving 100% pixel perfection and responsiveness for all
                devices while seamlessly translating Figma designs into
                high-quality HTML templates for an exceptional web experience.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#530303] lg:block hidden relative">
        <Particles />
        <ShortURL />
      </div>
    </div>
  );
};

export default About;
