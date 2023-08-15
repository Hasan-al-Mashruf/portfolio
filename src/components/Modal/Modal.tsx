import { doc, updateDoc } from "firebase/firestore";
import React from "react";
import { db } from "../../firebase/Firebase.config.js";
const Modal = ({ setSelectedData, selectedData }) => {
  console.log(selectedData);
  const updateData = async (e) => {
    e.preventDefault();
    setSelectedData(null);
    const form = e.target;
    const newservicename = form.name.value;
    console.log(newservicename);
    const washingtonRef = doc(db, "projects", selectedData.id);
    await updateDoc(washingtonRef, {
      servicename: newservicename,
    });
  };
  return (
    <div>
      {/* You can open the modal using ID.showModal() method */}

      <dialog id="my_modal_3" className="modal">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
        <form method="dialog" className="modal-box" onSubmit={updateData}>
          <div className="form-control ">
            <input
              type="text"
              placeholder="Service Name"
              className="input bg-transparent border-0 border-b border-b-[#747474] rounded-none pl-0 pb-5 pr-2 text-sm"
              name="name"
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
