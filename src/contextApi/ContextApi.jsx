import React, { createContext, useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/Firebase.config";
export const NewContext = createContext();

const ContextApi = ({ children }) => {
  const [user, setUser] = useState("hasan");
  const [receieveData, setReceiveData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [currentCat, setCurrentCat] = useState("All");
  const authInfo = {
    user,
    receieveData,
    setLoader,
    loader,
    setCurrentCat,
  };

  useEffect(() => {
    const getData = async () => {
      if (currentCat === "All") {
        try {
          const querySnapshot = await getDocs(collection(db, "projects"));
          const newData = querySnapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setReceiveData(newData);
        } catch (error) {
          console.error("Error fetching data: ", error);
        }
      } else {
        try {
          const q = query(
            collection(db, "projects"),
            where("selectedCategory", "==", currentCat)
          );
          const querySnapshot = await getDocs(q);
          const newData = querySnapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setReceiveData(newData);
        } catch (error) {
          console.error("Error fetching data: ", error);
        }
      }
    };
    getData();
  }, [loader, currentCat]);
  console.log(currentCat);
  return (
    <div>
      <NewContext.Provider value={authInfo}>{children}</NewContext.Provider>
    </div>
  );
};

export default ContextApi;
