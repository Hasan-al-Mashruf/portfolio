import { useState, useEffect } from "react";
import projectsData from "../../assets/projects.json";

interface ProjectsT {
  id: number;
  name: string;
  img: string;
  tech: string;
  completed?: boolean;
}

const Portfolio: React.FC = () => {
  const [active, setActive] = useState("all");
  const [projects, setProjects] = useState<ProjectsT[]>([]);
  const categories: string[] = ["All", "Photo", "Video", "Music", "anc"];

  useEffect(() => {
    setProjects(projectsData);
  }, []);
  return (
    <div>
      <div className="grid grid-cols-3 ">
        <div className="about-section text-white h-screen py-10 relative pt-20 overflow-y-scroll p-5 col-span-2">
          <div className="absolute top-3 w-full left-0">
            <h1 className=" text-[90px] text-[#3d3d3d3b] uppercase font-bold text-center">
              Portfolio
            </h1>
          </div>
          <div className="content pt-36 grid grid-cols-2 gap-10 items-center">
            <h2 className="font-semibold text-[20px] ">
              My <span>portfolio</span>
            </h2>
            <div>
              <ul className="flex justify-end">
                {categories.map((category, index) => (
                  <li
                    key={index}
                    className={`mr-3 px-5 cursor-pointer font-semibold text-[16px] pr-0 pl-6 ${
                      active.toLowerCase() === category.toLowerCase()
                        ? "active"
                        : ""
                    }`}
                    onClick={() => setActive(category)}
                  >
                    {active.toLowerCase() === category.toLowerCase() ? (
                      <span>{category}</span>
                    ) : (
                      category
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="main-content grid grid-cols-2 gap-14 mt-10">
            {projects.map((project, index) => (
              <div key={index}>
                <div className="card bg-base-100 shadow-xl">
                  <figure>
                    <img src={project.img} alt="Shoes" />
                  </figure>
                  <div className="card-body text-black">
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-red-900 col-span-2"></div>
      </div>
    </div>
  );
};

export default Portfolio;
