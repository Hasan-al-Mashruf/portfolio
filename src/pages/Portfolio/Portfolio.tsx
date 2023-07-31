import { useState, useEffect } from "react";
import projectsData from "../../assets/projects.json";
import "./Portfolio.css";
interface ProjectsT {
  id: number;
  name: string;
  img: string;
  tech: string;
  completed?: boolean;
  category: string;
}

const Portfolio: React.FC = () => {
  const [active, setActive] = useState("All");
  const [projects, setProjects] = useState<ProjectsT[]>([]);
  const allProjects = projectsData;
  const categories: string[] = [
    "All",
    "Html Templates",
    "Wordpress",
    "React",
    "Mern stack",
  ];

  const categorySort = (category: string) => {
    setActive(category);
  };

  useEffect(() => {
    setProjects(allProjects);
  }, []);

  useEffect(() => {
    if (active === "All") {
      setProjects(allProjects);
    } else {
      const updateSorting = allProjects.filter(
        (project) => project.category.toLowerCase() === active.toLowerCase()
      );
      setProjects(updateSorting);
    }
  }, [active]);

  return (
    <div>
      <div className="grid grid-cols-3 ">
        <div className="about-section text-white h-screen py-10 relative pt-20 overflow-y-scroll p-5 col-span-2">
          <div className="absolute top-3 w-full left-0">
            <h1 className=" text-[90px] text-[#3d3d3d3b] uppercase font-bold text-center">
              Portfolio
            </h1>
          </div>
          <div className="content pt-36 grid grid-cols-4 gap-10 items-center">
            <h2 className="font-semibold text-[20px] ">
              My <span>portfolio</span>
            </h2>
            <div className="col-span-3">
              <ul className="flex justify-end">
                {categories.map((category, index) => (
                  <li
                    key={index}
                    className={`mr-3 px-5 cursor-pointer font-semibold text-[16px] pr-0 pl-6 ${
                      active.toLowerCase() === category.toLowerCase()
                        ? "active"
                        : ""
                    }`}
                    onClick={() => categorySort(category)}
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
          <div className="main-content grid grid-cols-3 gap-14 mt-10">
            {projects.map((project, index) => (
              <div key={index}>
                <div className="card bg-base-100 shadow-xl h-[360px] relative overflow-hidden">
                  <figure className="absolute top-0 left-0 right-0 p-4 card-image">
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
