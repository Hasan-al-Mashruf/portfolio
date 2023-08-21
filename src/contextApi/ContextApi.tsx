import React, { createContext, useEffect, useState, ReactNode } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/Firebase.config";

type ReceieveDataT = {
  id: number | string;
  servicename: string;
  selectedCategory: string;
  message: string;
  technology: { label: string; value: string }[];
  sitelink: string;
  image: string | null;
};

interface AuthInfo {
  user: string;
  receieveData: ReceieveDataT[];
  setLoader: React.Dispatch<React.SetStateAction<boolean>>;
  loader: boolean;
  setCurrentCat: React.Dispatch<React.SetStateAction<string>>;
}

type ContextApiProps = {
  children: ReactNode;
};

export const NewContext = createContext<AuthInfo | undefined>(undefined);
const ContextApi: React.FC<ContextApiProps> = ({ children }) => {
  const [user, setUser] = useState("hasan");
  const [receieveData, setReceiveData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [currentCat, setCurrentCat] = useState("All");
  const authInfo: AuthInfo = {
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
    void getData();
  }, [loader, currentCat]);
  return (
    <div>
      <NewContext.Provider value={authInfo}>{children}</NewContext.Provider>
    </div>
  );
};

export default ContextApi;
