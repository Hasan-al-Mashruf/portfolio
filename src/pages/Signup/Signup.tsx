import React, { useContext } from "react";
import { NewContext } from "../../contextApi/ContextApi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase/Firebase.config";
interface SignupFormData {
  userName: string;
  email: string;
  password: string;
}

const Signup = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const { createUser, user } = useContext(NewContext);
  const findaUser = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData: SignupFormData = {
      userName: (form.userName as HTMLInputElement)?.value,
      email: (form.email as HTMLInputElement)?.value,
      password: (form.password as HTMLInputElement)?.value,
    };

    createUser(formData.email, formData.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: formData.userName,
        })
          .then(() => {
            navigate(from, { replace: true });
          })
          .catch((error) => {});
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
        // ..
      });
  };
  return (
    <div className="w-full h-screen flex items-center flex-col justify-center bg-[#f0ffff] relative">
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
        <Link to="/signin">Sign in</Link>
        <div className="form-control mt-6 items-baseline flex-row btn-custom">
          <input type="submit" value="Submit" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
};

export default Signup;
