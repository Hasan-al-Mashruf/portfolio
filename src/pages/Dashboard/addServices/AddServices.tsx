import React from "react";
import { MultiSelect } from "react-multi-select-component";

type AddServicesProps = {
  findaProject: (e: React.FormEvent<HTMLFormElement>) => void;
  setTechnology: React.Dispatch<
    React.SetStateAction<{ label: string; value: string }[]>
  >;
  technology: { label: string; value: string }[];
};

const AddServices: React.FC<AddServicesProps> = ({
  findaProject,
  setTechnology,
  technology,
}) => {
  const options = [
    { label: "Typescript", value: "Typescript" },
    { label: "React", value: "React" },
    { label: "Javascript", value: "Javascript" },
    { label: "Wordpress ", value: "Wordpress" },
    { label: "Html ", value: "Html" },
    { label: "Css ", value: "Css" },
    { label: "Bootstrap ", value: "Bootstrap" },
    { label: "Tailwind-Css ", value: "Tailwind-Css" },
    {
      label: "Jquery-Owl-carousel, Swipe-slide",
      value: "Jquery-Owl-carousel, Swipe-slide",
    },
    { label: "Firebase ", value: "Firebase" },
    { label: "Nodejs ", value: "Nodejs" },
  ];

  const categories: string[] = [
    "All",
    "Html Templates",
    "Wordpress",
    "React",
    "Mern stack",
  ];

  return (
    <div>
      <form action="" onSubmit={findaProject}>
        <div className="form-control ">
          <input
            type="text"
            placeholder="Service Name"
            className="input bg-transparent border-0 border-b border-b-[#747474] rounded-none pl-0 pb-5 pr-2 text-sm"
            name="name"
            required
          />
        </div>
        <div className="form-control ">
          <input
            type="text"
            placeholder="project live link"
            className="input bg-transparent border-0 border-b border-b-[#747474] rounded-none pl-0 pb-5 pr-2 text-sm"
            name="sitelink"
            required
          />
        </div>
        <div className="form-control">
          <textarea
            className="textarea bg-transparent border-0 border-b border-b-[#747474] rounded-none pl-0 pb-5 pr-2 text-sm "
            placeholder="Description...."
            name="message"
            required
          ></textarea>
        </div>
        <div className="form-control">
          <label htmlFor="">Find any technology</label>
          <MultiSelect
            options={options}
            value={technology}
            onChange={setTechnology}
            labelledBy="Select"
          />
        </div>
        <div className="form-control">
          <label htmlFor="">Select a category</label>
          <select name="selectS" required className="dropdown-container">
            {categories.map((category, index) => (
              <React.Fragment key={index}>
                <option value={category}>{category}</option>
              </React.Fragment>
            ))}
          </select>
        </div>

        <div className="form-control ">
          <input type="file" name="image" id="" required />
        </div>
        <div className="form-control mt-6 items-baseline flex-row btn-custom">
          <input type="submit" value="Submit" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
};

export default AddServices;
