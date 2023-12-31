import { doc, updateDoc } from "firebase/firestore";
import React, { useContext } from "react";
import { db } from "../../firebase/Firebase.config.js";
import { NewContext } from "../../contextApi/ContextApi.jsx";

type ReceieveDataT = {
  id: number | string;
  servicename: string;
  selectedCategory: string;
  message: string;
  technology: { label: string; value: string }[];
  sitelink: string;
  image: string | null;
};

type ModalProps = {
  setSelectedData: React.Dispatch<
    React.SetStateAction<undefined | ReceieveDataT>
  >;
  selectedData: undefined | ReceieveDataT;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  showModal?: boolean;
};

const Modal: React.FC<ModalProps> = ({
  setSelectedData,
  selectedData,
  setShowModal,
}) => {
  const { setLoader, loader } = useContext(NewContext);
  const updateData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const newSitelink = (form.sitelink as HTMLInputElement)?.value || "";
    const newServiceName = (form.servicename as HTMLInputElement)?.value || "";
    const newMessage = (form.message as HTMLTextAreaElement).value || "";
    type Selectdatatype = {
      id: string;
    };

    doc(db, "projects", (selectedData as Selectdatatype)?.id);

    const washingtonRef = doc(
      db,
      "projects",
      (selectedData as Selectdatatype)?.id
    );

    try {
      await updateDoc(washingtonRef, {
        servicename: newServiceName,
        message: newMessage,
        sitelink: newSitelink,
      });
      setLoader(!loader);
    } catch (error) {
      console.error("Error updating document:", error);
    }

    setShowModal(false);
  };
  return (
    <div>
      {/* You can open the modal using ID.showModal() method */}

      <dialog id="my_modal_3" className="modal">
        <form method="dialog" className="modal-box" onSubmit={void updateData}>
          <div className="form-control ">
            <input
              type="text"
              placeholder="Service Name"
              className="input bg-transparent border-0 border-b border-b-[#747474] rounded-none pl-0 pb-5 pr-2 text-sm"
              name="servicename"
              required
            />
          </div>
          <div className="form-control ">
            <input
              type="text"
              placeholder="project live link"
              className="input bg-transparent border-0 border-b border-b-[#747474] rounded-none pl-0 pb-5 pr-2 text-sm"
              name="sitelink"
              required
            />
          </div>
          <div className="form-control">
            <textarea
              className="textarea bg-transparent border-0 border-b border-b-[#747474] rounded-none pl-0 pb-5 pr-2 text-sm "
              placeholder="Description...."
              name="message"
              required
            ></textarea>
          </div>
          <div className="form-control mt-6 items-baseline flex-row btn-custom">
            <input type="submit" value="Submit" className="btn btn-primary" />
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default Modal;
