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
  const [projects, setProjects] = useState<ProjectsT[]>([]);
  const categories: string[] = ["All", "Photo", "Video", "Music", "anc"];

  useEffect(() => {
    setProjects(projectsData);
  }, []);
  return (
    <div>
      <div className="grid grid-cols-2 ">
        <div className="about-section text-white h-screen py-10 relative p-5 overflow-scroll">
          <div className="absolute top-5 w-full left-0">
            <h1 className=" text-[130px] text-[#3d3d3d3b] uppercase font-bold text-center">
              Portfolio
            </h1>
          </div>
          <div className="content pt-36 grid grid-cols-2 gap-14">
            <h2>My portfolio</h2>
            <div>
              <ul className="flex justify-end">
                {categories.map((category, index) => (
                  <li key={index} className="mr-3 px-5">
                    {category}
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
