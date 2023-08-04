import React from "react";
import { CiLocationArrow1 } from "react-icons/ci";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FiPhoneIncoming } from "react-icons/fi";
import { SiFreelancer } from "react-icons/si";
import { FiCornerDownRight } from "react-icons/fi";
import "./Contact.css";
const Contact: React.FC = () => {
  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="about-section text-white h-screen py-10 relative pt-20 overflow-y-scroll p-5">
          <div className="absolute top-3 w-full left-0">
            <h1 className=" text-[90px] text-[#3d3d3d3b] uppercase font-bold text-center">
              Contact
            </h1>
          </div>
          <div className="content pt-36 grid grid-cols-2 gap-6">
            <h3 className="text-2xl font-semibold mb-5">
              Get <span> in Touch</span>
            </h3>
            <h3 className="text-2xl font-semibold"></h3>

            <div className="bg-gray-600 rounded-xl shadow-xl contact">
              <div className="flex p-5 items-center">
                <CiLocationArrow1 />
                <div className="ml-5">
                  <h2 className="text-base font-bold text-white leading-[20px]">
                    Address
                  </h2>
                  <p className="text-[15px] leading-[26px]">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-600 rounded-xl shadow-xl contact">
              <div className="flex p-5 items-center">
                <HiOutlineMailOpen />
                <div className="ml-5">
                  <h2 className="text-base font-bold text-white leading-[20px]">
                    Mail
                  </h2>
                  <p className="text-[15px] leading-[26px]">
                    mashruf125@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-600 rounded-xl shadow-xl contact">
              <div className="flex p-5 items-center">
                <FiPhoneIncoming />
                <div className="ml-5">
                  <h2 className="text-base font-bold text-white leading-[20px]">
                    Phone
                  </h2>
                  <p className="text-[15px] leading-[26px]">01842351008</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-600 rounded-xl shadow-xl contact">
              <div className="flex p-5 items-center">
                <SiFreelancer />
                <div className="ml-5">
                  <h2 className="text-base font-bold text-white leading-[20px]">
                    Freelance
                  </h2>
                  <p className="text-[15px] leading-[26px]">Available</p>
                </div>
              </div>
            </div>
          </div>

          <div className="content pt-36 mt-5">
            <h3 className="text-2xl font-semibold mb-5">
              Contact <span> form</span>
            </h3>
            <h3 className="text-2xl font-semibold"></h3>
            <div className="bg-gray-600 rounded-2xl shadow-xl px-7 py-10">
              <form action="">
                <div className="grid grid-cols-2 gap-6">
                  <div className="form-control ">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="input bg-transparent border-0 border-b border-b-[#747474] rounded-none pl-0 pb-5 pr-2 text-sm"
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="text"
                      placeholder="Email Address"
                      className="input bg-transparent border-0 border-b border-b-[#747474] rounded-none pl-0 pb-5 pr-2 text-sm"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <div className="form-control">
                    <textarea
                      className="textarea bg-transparent border-0 border-b border-b-[#747474] rounded-none pl-0 pb-5 pr-2 text-sm "
                      placeholder="Your Message...."
                    ></textarea>
                  </div>
                </div>
                <div className="form-control mt-6 items-baseline flex-row btn-custom">
                  <FiCornerDownRight />
                  <input
                    type="submit"
                    value="Submit"
                    className="btn btn-primary border-0 p-0 text-base ml-2"
                    style={{ width: "fit-content" }}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="bg-red-900"></div>
      </div>
    </div>
  );
};

export default Contact;
