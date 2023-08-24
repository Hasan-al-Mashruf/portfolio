import React, { useContext } from "react";
import { NewContext } from "../../contextApi/ContextApi";
import { useLocation, useNavigate } from "react-router-dom";

interface SigninFormData {
  userName: string;
  email: string;
  password: string;
}

const Signin = () => {
  const { loginUser, user } = useContext(NewContext);
  const navigate = useNavigate();
  const findaUser = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData: SigninFormData = {
      userName: (form.userName as HTMLInputElement)?.value,
      email: (form.email as HTMLInputElement)?.value,
      password: (form.password as HTMLInputElement)?.value,
    };
    loginUser(formData.email, formData.password);
    navigate("/dashbaord");
  };

  return (
    <div className="w-full h-screen flex items-center flex-col justify-center bg-[#f0ffff] relative">
      <div className="overlay"></div>
      <form
        action=""
        onSubmit={findaUser}
        className="w-[460px] shadow-md p-6 rounded-md bg-white"
      >
        <div className="form-control ">
          <input
            type="text"
            placeholder="User Name"
            className="input bg-transparent border-0 border-b border-b-[#747474] rounded-none pl-0 pb-5 pr-2 text-sm"
            name="userName"
            required
          />
        </div>
        <div className="form-control ">
          <input
            type="email"
            placeholder="Email address"
            className="input bg-transparent border-0 border-b border-b-[#747474] rounded-none pl-0 pb-5 pr-2 text-sm"
            name="email"
          />
        </div>
        <div className="form-control ">
          <input
            type="password"
            placeholder="Password...."
            className="input bg-transparent border-0 border-b border-b-[#747474] rounded-none pl-0 pb-5 pr-2 text-sm"
            name="password"
          />
        </div>
        <div className="form-control mt-6 items-baseline flex-row btn-custom">
          <input type="submit" value="Submit" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
};

export default Signin;
