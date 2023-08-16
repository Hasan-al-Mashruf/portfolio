import { deleteDoc, doc } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { db } from "../../../firebase/Firebase.config.js";
import { NewContext } from "../../../contextApi/ContextApi.jsx";
import { Modal } from "../../../components/index.js";
const ShowServices = ({ receieveData }) => {
  const { loader, setLoader } = useContext(NewContext);
  const [showModal, setShowModal] = useState(true);
  const [selectedData, setSelectedData] = useState(null);
  const deleteIt = async (id) => {
    try {
      console.log("Deleting document with ID:", id);
      const docRef = doc(db, "projects", id);
      await deleteDoc(docRef);
      setLoader(!loader);
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  };
  const openModalData = (data) => {
    setShowModal(true);
    setSelectedData(data);
    (window as any).my_modal_3.showModal();
  };
  return (
    <div className="col-span-2">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Index</th>
              <th>image</th>
              <th>name</th>

              <th>services</th>
              <th>technology</th>
            </tr>
          </thead>
          <tbody>
            {receieveData &&
              receieveData?.map((data, index) => (
                <tr key={index}>
                  <td>
                    <label>{index + 1}</label>
                  </td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={`${data.image}`}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge badge-ghost badge-sm">
                      {data.servicename}
                    </span>
                  </td>
                  <td>{data.selectedCategory}</td>
                  <td>
                    {data.technology?.map((tech, index) => (
                      <span className="badge badge-ghost badge-sm" key={index}>
                        {tech.value}
                      </span>
                    ))}
                  </td>
                  <td>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </td>
                  <td>
                    <button
                      className="btn btn-ghost btn-xs"
                      onClick={() => deleteIt(data.id)}
                    >
                      delete
                    </button>
                  </td>
                  <td>
                    <button className="btn" onClick={() => openModalData(data)}>
                      open modal
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {showModal && (
        <Modal
          selectedData={selectedData}
          setSelectedData={setSelectedData}
          setShowModal={setShowModal}
          showModal={showModal}
        />
      )}
    </div>
  );
};

export default ShowServices;
