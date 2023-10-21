import { deleteDoc, doc } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { db } from "../../../firebase/Firebase.config.js";
import { NewContext } from "../../../contextApi/ContextApi.jsx";
import { DeleteModal, Modal, Pagination } from "../../../components/index.js";
import "./showServices.css";
type ReceieveDataT = {
  id: number | string;
  servicename: string;
  selectedCategory: string;
  message: string;
  technology: { label: string; value: string }[];
  sitelink: string;
  image: string | null;
};

const ShowServices = () => {
  const { contentLoader, setContentLoader, receieveData } =
    useContext(NewContext);
  const [showModal, setShowModal] = useState(true);
  const [selectedData, setSelectedData] = useState<ReceieveDataT | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const setDataToDeleteOnClick = (data: ReceieveDataT | null) => {
    setSelectedData(data);
    document.getElementById("my_modal_1").showModal();
  };
  const deleteIt = async (id: string | number) => {
    try {
      const docRef = doc(db, "projects", id as string);
      await deleteDoc(docRef);
      setContentLoader(!contentLoader);
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  };

  const openModalData = (data: ReceieveDataT) => {
    setShowModal(true);
    setSelectedData(data);
    (window as any).my_modal_3.showModal();
  };

  // Calculate the start and end index for the current page
  const dataPaginationRate = 5;
  const startIndex = (currentPage - 1) * dataPaginationRate;
  const endIndex = currentPage * dataPaginationRate;
  const currentData = receieveData.slice(startIndex, endIndex);

  return (
    <div className="mx-20 my-12 border border-gray-600 h-full">
      <div className="overflow-x-auto h-[80vh]">
        <table className="table ">
          {/* head */}
          <thead>
            <tr>
              <th>Index</th>
              <th>name</th>

              <th>services</th>
              <th>technology</th>
            </tr>
          </thead>
          <tbody>
            {receieveData.length > 0 &&
              (currentData as ReceieveDataT[])?.map(
                (data: ReceieveDataT, index: number) => (
                  <tr key={index}>
                    <td>
                      <label>{index + 1}</label>
                    </td>
                    <td>
                      <span>{data.servicename}</span>
                    </td>
                    <td>{data.selectedCategory}</td>
                    <td className="technology">
                      {data.technology?.map((tech, index) => (
                        <span key={index}>{tech.value}</span>
                      ))}
                    </td>
                    <td>
                      <button className="btn btn-ghost btn-xs">details</button>
                    </td>
                    <td>
                      <button
                        className="btn btn-ghost btn-xs"
                        onClick={() => setDataToDeleteOnClick(data)}
                      >
                        delete
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-ghost btn-xs"
                        onClick={() => openModalData(data)}
                      >
                        update
                      </button>
                    </td>
                  </tr>
                )
              )}
          </tbody>
        </table>
      </div>
      {/* Page numbers */}
      <Pagination
        totalPages={Math.ceil(receieveData.length / dataPaginationRate)}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      {showModal && (
        <Modal
          selectedData={selectedData}
          setSelectedData={setSelectedData}
          setShowModal={setShowModal}
          showModal={showModal}
        />
      )}
      <DeleteModal deleteIt={deleteIt} selectedData={selectedData} />
    </div>
  );
};

export default ShowServices;
