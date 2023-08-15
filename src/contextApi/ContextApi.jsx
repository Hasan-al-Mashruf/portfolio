import React, { createContext, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/Firebase.config";
export const NewContext = createContext();

const ContextApi = ({ children }) => {
  const [user, setUser] = useState("hasan");
  const [receieveData, setReceiveData] = useState([]);
  const [loader, setLoader] = useState(false);
  const authInfo = {
    user,
    receieveData,
    setLoader,
    loader,
  };

  useEffect(() => {
    const getData = async () => {
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
    };
    getData();
  }, [loader]);

  return (
    <div>
      <NewContext.Provider value={authInfo}>{children}</NewContext.Provider>
    </div>
  );
};

export default ContextApi;
