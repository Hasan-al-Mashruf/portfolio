import React, { useEffect, useState, useContext } from "react";
import "./Dashboard.css";
import { db, storage } from "../../firebase/Firebase.config.js";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { NewContext } from "../../contextApi/ContextApi.jsx";
import AddServices from "./addServices/AddServices.js";
import ShowServices from "./showServices/ShowServices.js";

const Dashboard: React.FC = () => {
  const { receieveData, loader, setLoader } = useContext(NewContext);
  const [technology, setTechnology] = useState([]);
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
    const sitelink = form.sitelink.value;
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
    setTechnology([]);
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
        setLoader(!loader);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    };
    addToDB();
  }, [newProjects]);

  return (
    <div>
      <div className="grid grid-cols-3 m-10 gap-14">
        <AddServices
          findaProject={findaProject}
          technology={technology}
          setTechnology={setTechnology}
        />
        <ShowServices receieveData={receieveData} />
      </div>
    </div>
  );
};

export default Dashboard;
