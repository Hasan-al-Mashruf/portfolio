import { Particles } from "../../components";
import "./Resume.css";
const Resume: React.FC = () => {
  return (
    <div>
      <div className="grid grid-cols-3 ">
        <div className="about-section text-white h-screen py-10 relative pt-20 overflow-y-scroll p-5 col-span-2">
          <div className="absolute top-3 w-full left-0">
            <h1 className=" text-[90px] text-[#3d3d3d3b] uppercase font-bold text-center">
              Resume
            </h1>
          </div>
          <div className="content pt-36 grid grid-cols-2 gap-14">
            <h3 className="text-2xl font-semibold">
              My <span> Experiences</span>
            </h3>
            <h3 className="text-2xl font-semibold">
              My <span> Education</span>
            </h3>

            <div className="bg-gray-600 rounded-2xl shadow-xl">
              <div className="pb-10 border-b border-b-slate-700 p-8 min-h-[236px]">
                <h4 className="text-[16px]">
                  Front-end Developer - React, Angular
                </h4>
                <small className="text-[12px] opacity-50">
                  2013-Present | Facebook Inc.
                </small>
                <p className="mt-5 text-sm leading-6 text-[14px]">
                  Collaborate with creative and development teams on the
                  execution of ideas.
                </p>
              </div>
              <div className="pb-10 border-b border-b-slate-700 p-8 min-h-[236px]">
                <h4 className="text-[16px]">
                  Front-end Developer - Bootstrap, Javascript, Wordpress
                </h4>
                <small className="text-[12px] opacity-50">
                  2013-Present | Facebook Inc.
                </small>
                <p className="mt-5 text-sm leading-6 text-[14px]">
                  Collaborate with creative and development teams on the
                  execution of ideas.
                </p>
              </div>
              <div className="pb-10 p-8">
                <h4 className="text-[16px]">Web Design - Wordpress, Shopify</h4>
                <small className="text-[12px] opacity-50">
                  2013-Present | Facebook Inc.
                </small>
                <p className="mt-5 text-sm leading-6 text-[14px]">
                  Collaborate with creative and development teams on the
                  execution of ideas.
                </p>
              </div>
            </div>
            <div className="bg-gray-600 rounded-2xl shadow-xl">
              <div className="pb-10 border-b border-b-slate-700 p-8 min-h-[236px]">
                <h4 className="text-[16px]">National University</h4>
                <small className="text-[12px] opacity-50">
                  2019-23 | Graduated.
                </small>
                <p className="mt-5 text-sm leading-6 text-[14px]">
                  Collaborate with creative and development teams on the
                  execution of ideas.
                </p>
              </div>
              <div className="pb-10 border-b border-b-slate-700 p-8 min-h-[236px]">
                <h4 className="text-[16px]">
                  Front-end Developer - Bootstrap, Javascript, Wordpress
                </h4>
                <small className="text-[12px] opacity-50">
                  2013-Present | Facebook Inc.
                </small>
                <p className="mt-5 text-sm leading-6 text-[14px]">
                  Collaborate with creative and development teams on the
                  execution of ideas.
                </p>
              </div>
              <div className="pb-10 p-8">
                <h4 className="text-[16px]">Web Design - Wordpress, Shopify</h4>
                <small className="text-[12px] opacity-50">
                  2013-Present | Facebook Inc.
                </small>
                <p className="mt-5 text-sm leading-6 text-[14px]">
                  Collaborate with creative and development teams on the
                  execution of ideas.
                </p>
              </div>
            </div>
            <h3 className="text-2xl font-semibold">
              Personal <span> Skills</span>
            </h3>
            <h3 className="text-2xl font-semibold">
              Professional <span> Skills</span>
            </h3>
            <div className="bg-gray-600 rounded-2xl shadow-xl">
              <div className="border-b border-b-slate-700 p-6">
                <h4 className="text-sm">Communication</h4>
                <div className="w-full h-[6px] bg-gray-500 mt-1 relative">
                  <div className="w-[90%]  absolute top-0 left-0 h-full skills-line"></div>
                </div>
              </div>
              <div className="border-b border-b-slate-700 p-6">
                <h4 className="text-sm">Team Work</h4>
                <div className="w-full h-[6px] bg-gray-500 mt-1 relative">
                  <div className="w-[80%]  absolute top-0 left-0 h-full skills-line"></div>
                </div>
              </div>
              <div className="border-b border-b-slate-700 p-6">
                <h4 className="text-sm">Leadership</h4>
                <div className="w-full h-[6px] bg-gray-500 mt-1 relative">
                  <div className="w-[50%]  absolute top-0 left-0 h-full skills-line"></div>
                </div>
              </div>
              <div className="border-b border-b-slate-700 p-6">
                <h4 className="text-sm">Language</h4>
                <div className="w-full h-[6px] bg-gray-500 mt-1 relative">
                  <div className="w-[70%]  absolute top-0 left-0 h-full skills-line"></div>
                </div>
              </div>
            </div>
            <div className="bg-gray-600 rounded-2xl shadow-xl">
              <div className="border-b border-b-slate-700 p-6">
                <h4 className="text-sm">Javascript/React</h4>
                <div className="w-full h-[6px] bg-gray-500 mt-1 relative">
                  <div className="w-[90%]  absolute top-0 left-0 h-full skills-line"></div>
                </div>
              </div>
              <div className="border-b border-b-slate-700 p-6">
                <h4 className="text-sm">Wordpress</h4>
                <div className="w-full h-[6px] bg-gray-500 mt-1 relative">
                  <div className="w-[80%]  absolute top-0 left-0 h-full skills-line"></div>
                </div>
              </div>
              <div className="border-b border-b-slate-700 p-6">
                <h4 className="text-sm">Html/css/bootstrap</h4>
                <div className="w-full h-[6px] bg-gray-500 mt-1 relative">
                  <div className="w-[100%]  absolute top-0 left-0 h-full skills-line"></div>
                </div>
              </div>
              <div className="border-b border-b-slate-700 p-6">
                <h4 className="text-sm">Mern stack</h4>
                <div className="w-full h-[6px] bg-gray-500 mt-1 relative">
                  <div className="w-[70%]  absolute top-0 left-0 h-full skills-line"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-red-900">
          <Particles />
        </div>
      </div>
    </div>
  );
};

export default Resume;
