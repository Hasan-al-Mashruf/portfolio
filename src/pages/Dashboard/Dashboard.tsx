import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { db, storage } from "../../firebase/Firebase.config.js";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { MultiSelect } from "react-multi-select-component";

const Dashboard: React.FC = () => {
  const [newProjects, setnewProjects] = useState({
    servicename: "",
    selectedCategory: "",
    message: "",
    technology: [],
    image: null, // Initialize image state with null
  });
  const categories: string[] = [
    "All",
    "Html Templates",
    "Wordpress",
    "React",
    "Mern stack",
  ];

  const options = [
    { label: "Typescript 🍇", value: "Typescript" },
    { label: "React 🥭", value: "React" },
    { label: "Javascript🍓", value: "Javascript" },
    { label: "Wordpress 🍓", value: "Wordpress" },
    { label: "Mernstack 🍓", value: "Mernstack" },
  ];

  const [technology, setTechnology] = useState([]);
  const findaProject = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const servicename = (form.elements.namedItem("name") as HTMLInputElement)
      .value;

    const selectedCategory = (
      form.elements.namedItem("selectS") as HTMLSelectElement
    ).value;
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
      () => {},
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          if (url) {
            setnewProjects({
              servicename,
              selectedCategory,
              message,
              technology,
              image: url,
            });
          }
          console.log(url);
        });
      }
    );
    console.log(selectedImage);
    setTechnology([]);
    form.reset();
  };
  console.log(newProjects);
  useEffect(() => {
    const addToDB = async () => {
      if (!newProjects.servicename || !newProjects.message) {
        return;
      }
      try {
        const docRef = await addDoc(collection(db, "projects"), newProjects);
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    };
    addToDB();
  }, [newProjects]);

  console.log(newProjects);
  return (
    <div>
      <div className="grid grid-cols-3 m-10 h-100 items-center">
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
            <div className="form-control">
              <label htmlFor="">Find any technology</label>
              <MultiSelect
                options={options}
                value={technology}
                onChange={setTechnology}
                labelledBy="Select"
              />
            </div>
            {/* <div className="form-control">
              <label htmlFor="">Find any technology</label>
              <select
                name="select"
                multiple
                className="multiselect"
                multiselect-search="true"
                required
              >
                <option value="typescript">Typescript</option>
                <option value="javascript">Javascript</option>
                <option value="react">React</option>
              </select>
            </div> */}
            <div className="form-control">
              <label htmlFor="">select a category</label>
              <select name="selectS" required>
                {categories.map((category, index) => (
                  <React.Fragment key={index}>
                    <option value={category}>{category}</option>
                  </React.Fragment>
                ))}
              </select>
            </div>
            <div className="form-control">
              <textarea
                className="textarea bg-transparent border-0 border-b border-b-[#747474] rounded-none pl-0 pb-5 pr-2 text-sm "
                placeholder="Your Message...."
                name="message"
                required
              ></textarea>
            </div>
            <div className="form-control ">
              <label htmlFor="">upload an image</label>
              <input type="file" name="image" id="" required />
            </div>
            <div className="form-control mt-6 items-baseline flex-row btn-custom">
              <input type="submit" value="Submit" className="btn btn-primary" />
            </div>
          </form>
        </div>
        <div className="col-span-2"></div>
      </div>
    </div>
  );
};

export default Dashboard;
