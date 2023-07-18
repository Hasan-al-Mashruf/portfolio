const Resume: React.FC = () => {
  return (
    <div>
      <div className="grid grid-cols-2 ">
        <div className="about-section text-white h-screen py-10 relative p-5">
          <div className="absolute top-5 w-full left-0">
            <h1 className=" text-[130px] text-[#3d3d3d3b] uppercase font-bold text-center">
              Resume
            </h1>
          </div>
          <div className="content pt-36 grid grid-cols-2 gap-14">
            <h3 className="text-xl">My Experiences</h3>
            <h3 className="text-xl ">My Education</h3>

            <div className="bg-gray-600 rounded-2xl shadow-xl">
              <div className="pb-10 border-b border-r-slate-700 p-8">
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
              <div className="pb-10 border-b border-r-slate-700 p-8">
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
              <div className="pb-10 border-b border-r-slate-700 p-8">
                <h4 className="text-[16px]">National University</h4>
                <small className="text-[12px] opacity-50">
                  2019-23 | Graduated.
                </small>
                <p className="mt-5 text-sm leading-6 text-[14px]">
                  Collaborate with creative and development teams on the
                  execution of ideas.
                </p>
              </div>
              <div className="pb-10 border-b border-r-slate-700 p-8">
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
          </div>
        </div>
        <div className="bg-red-900 col-span-2"></div>
      </div>
    </div>
  );
};

export default Resume;
