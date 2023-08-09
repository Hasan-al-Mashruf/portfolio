import { useState, useEffect } from "react";
import projectsData from "../../assets/projects.json";
import "./Portfolio.css";
import { Particles } from "../../components";
import { AiOutlineLink } from "react-icons/ai";
import { Link } from "react-router-dom";
interface ProjectsT {
  id: number;
  name: string;
  img: string;
  tech: string;
  completed?: boolean;
  category: string;
  link: string;
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
      <div className="grid lg:grid-cols-3 grid-col-1">
        <div className="about-section text-white h-screen py-10 relative pt-20 overflow-y-scroll p-5 lg:col-span-2">
          <div className="absolute top-3 w-full left-0">
            <h1 className=" md:text-[90px] text-[56px] text-[#3d3d3d3b] uppercase font-bold text-center">
              Portfolio
            </h1>
          </div>
          <div className="content pt-36 grid md:grid-cols-4 grid-cols-1 gap-10 items-center">
            <h2 className="font-semibold text-[20px] ">
              My <span>portfolio</span>
            </h2>
            <div className="md:col-span-3">
              <ul className="flex md:justify-end flex-wrap">
                {categories.map((category, index) => (
                  <li
                    key={index}
                    className={`md:mr-1 mr-6 cursor-pointer font-semibold md:text-[16px] text-[14px] leading-7 md:pl-8 ${
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
          <div className="main-content grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-14 mt-10">
            {projects.map((project, index) => (
              <Link to={project.link} target="blank">
                <div key={index}>
                  <div className="card bg-base-100 shadow-xl h-[360px] relative overflow-hidden">
                    <figure className="absolute top-0 left-0 right-0 p-4 card-image">
                      <img src={project.img} alt="Shoes" />
                    </figure>
                    <AiOutlineLink className="absolute left-1/2 -translate-x-1/2 z-50 text-3xl icon" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="bg-red-900 lg:block hidden">
          <Particles />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
