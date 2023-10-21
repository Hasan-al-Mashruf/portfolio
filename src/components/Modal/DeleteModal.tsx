import React, { useContext } from "react";
import "./DeleteModal.css";

type ReceieveDataT = {
  id: number | string;
  servicename: string;
  selectedCategory: string;
  message: string;
  technology: { label: string; value: string }[];
  sitelink: string;
  image: string | null;
};

type DeleteModalProps = {
  deleteIt: (id: string | number) => void;
  selectedData: ReceieveDataT | null;
};

const DeleteModal: React.FC<DeleteModalProps> = ({
  deleteIt,
  selectedData,
}) => {
  return (
    <div className="deleteModal">
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <form method="dialog" className="flex items-center flex-col">
            <h4 className="text-center">
              Do you really want to delete{" "}
              <span className="text-red-400">{selectedData?.servicename}</span>
            </h4>
            <div className="mt-5">
              <button className="btn">Close</button>
              <button
                className="btn ml-3"
                onClick={() => deleteIt(selectedData.id)}
              >
                Confirm
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default DeleteModal;
