import React, { useContext } from "react";

const DeleteModal: React.FC = () => {
  return (
    <div>
      {/* You can open the modal using ID.showModal() method */}

      <dialog id="my_modal_4" className="modal">
        <form method="dialog" className="modal-box">
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

export default DeleteModal;
