import React, { useState, useEffect, useContext } from "react";
import { MultiSelect } from "react-multi-select-component";
import { db, storage } from "../../../firebase/Firebase.config.js";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { NewContext } from "../../../contextApi/ContextApi.jsx";
import "./addServices.css";
type AddServicesProps = {
  setTechnology: React.Dispatch<
    React.SetStateAction<{ label: string; value: string }[]>
  >;
  technology: { label: string; value: string }[];
};

const AddServices: React.FC = () => {
  const [technology, setTechnology] = useState([
    { label: "React", value: "React" },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("");
  const options = [
    { label: "Typescript", value: "Typescript" },
    { label: "React", value: "React" },
    { label: "Javascript", value: "Javascript" },
    { label: "Wordpress ", value: "Wordpress" },
    { label: "Bootstrap ", value: "Bootstrap" },
    { label: "Tailwind-Css ", value: "Tailwind-Css" },
    { label: "Firebase ", value: "Firebase" },
    { label: "Nodejs ", value: "Nodejs" },
    { label: "Jquery", value: "Jquery" },
  ];

  const categories: string[] = [
    "All",
    "Html Templates",
    "Wordpress",
    "Javascript",
    "React",
    "Mern stack",
  ];
  const { receieveData, contentLoader, setContentLoader } =
    useContext(NewContext);

  const [newProjects, setNewProjects] = useState({
    servicename: "",
    selectedCategory: "",
    message: "",
    technology: [] as { label: string; value: string }[],
    sitelink: "",
    image: null as string | null,
  });

  const findaProject = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const servicename = (form.elements.namedItem("name") as HTMLInputElement)
      .value;
    const sitelink = (form.sitelink as HTMLInputElement)?.value || "";
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;
    if (!servicename || !message) {
      return;
    }
    const selectedImage = form.image.files[0];

    const storageRef = ref(storage, `/files/${selectedImage.name}`);
    const uploadTask = uploadBytesResumable(storageRef, selectedImage);
    uploadTask.on(
      "state_changed",
      () => void {},
      (err) => console.log(err),
      () => {
        // download url
        void getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          if (url) {
            console.log(url);
            setNewProjects({
              servicename,
              selectedCategory,
              message,
              technology,
              sitelink,
              image: url,
            });
          }
        });
      }
    );
    void setTechnology([]);
    form.reset();
  };

  useEffect(() => {
    const addToDB = async () => {
      if (!newProjects.servicename || !newProjects.message) {
        alert("bull");
        return;
      }
      try {
        await addDoc(collection(db, "projects"), newProjects);
        setContentLoader(!contentLoader);
        console.log(newProjects);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    };
    addToDB();
  }, [newProjects]);
  return (
    <div className="mx-20 my-12 border border-gray-200 h-full shadow-lg  rounded-md">
      <form
        action=""
        onSubmit={findaProject}
        className="p-10 grid grid-cols-2 gap-10 "
      >
        <div>
          <div className="form-control ">
            <input
              type="text"
              placeholder="Service Name"
              className="input bg-transparent border-0 border-b border-b-[#7474746a] rounded-none pl-0 pb-5 pr-2 text-sm"
              name="name"
              required
            />
          </div>
          <div className="form-control ">
            <input
              type="text"
              placeholder="project live link"
              className="input bg-transparent border-0 border-b border-b-[#7474746a] rounded-none pl-0 pb-5 pr-2 text-sm"
              name="sitelink"
              required
            />
          </div>
          <div className="form-control">
            <textarea
              className="textarea bg-transparent border-0 border-b border-b-[#7474746a] rounded-none pl-0 pb-5 pr-2 text-sm "
              placeholder="Description...."
              name="message"
              required
            ></textarea>
          </div>
          <div className="form-control">
            <label htmlFor="" className="text-white">
              Find any technology
            </label>
            <MultiSelect
              options={options}
              value={technology}
              onChange={setTechnology}
              labelledBy="Select"
              className="border border-[#7474746a] rounded-[3px]"
            />
          </div>
        </div>
        <div>
          <div className="form-control">
            <label htmlFor="" className="text-white">
              Select a category
            </label>
            <select
              name="selectS"
              required
              className="dropdown-container border border-[#7474746a]"
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
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
        </div>
      </form>
    </div>
  );
};

export default AddServices;
