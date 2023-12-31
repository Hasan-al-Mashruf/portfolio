import React, { createContext, useEffect, useState, ReactNode } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db, auth } from "../firebase/Firebase.config";
import {
  User,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
type ReceieveDataT = {
  id: number | string;
  servicename: string;
  selectedCategory: string;
  message: string;
  technology: { label: string; value: string }[];
  sitelink: string;
  image: string | null;
};

interface UserCredential {
  user: User;
}

interface AuthInfo {
  user: string;
  receieveData: ReceieveDataT[];
  setLoader: React.Dispatch<React.SetStateAction<boolean>>;
  loader: boolean;
  setCurrentCat: React.Dispatch<React.SetStateAction<string>>;
  createUser: (email: string, password: string) => Promise<UserCredential>;
  loginUser: (email: string, password: string) => Promise<UserCredential>;
  contentLoader: boolean;
  setContentLoader: React.Dispatch<React.SetStateAction<boolean>>;
}

type ContextApiProps = {
  children: ReactNode;
};

export const NewContext = createContext<AuthInfo | undefined>(undefined);
const ContextApi: React.FC<ContextApiProps> = ({ children }) => {
  const [user, setUser] = useState(null);
  const [receieveData, setReceiveData] = useState([]);
  const [loader, setLoader] = useState(true);
  const [currentCat, setCurrentCat] = useState("All");
  const [contentLoader, setContentLoader] = useState(true);

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
  }, [contentLoader, currentCat]);

  const createUser = (email: string, password: string) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email: string, password: string) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const authInfo: AuthInfo = {
    user,
    receieveData,
    setLoader,
    loader,
    setCurrentCat,
    createUser,
    loginUser,
    contentLoader,
    setContentLoader,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      }

      setLoader(false);
      console.log(currentUser, loader);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <NewContext.Provider value={authInfo}>{children}</NewContext.Provider>
    </div>
  );
};

export default ContextApi;
