import React, { useState } from "react";
import {
  boxShadowPrimary,
  boxShadowSecondary,
  buttonPrimary,
} from "../../utils/StyleUtils";
import AdminRegistration from "./AdminRegistration";

export default function Login() {
  document.title = 'Login';
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isAdminExists, setIsAdminExists] = useState(false)
  return (
    isAdminExists
    ?
    <div className="h-screen w-full flex justify-center items-center bg-gradient-primary">
      <div
        className={`py-12 px-6 rounded-xl ${boxShadowPrimary} flex flex-col justify-center items-center gap-7 text-custom-dark bg-gradient-secondary`}
      >
        <div className="text-center space-y-2 ">
          <span className="fa-solid fa-user-gear text-6xl text-primary"></span>
          <p className="text-xl font-medium text-primary">Portfolio Management</p>
          <p className="text-2xl font-bold text-prim">Please Login</p>
        </div>

        <div className="relative space-y-3">
          <p className="text-center text-red-500">Invalid username or password.</p>
          <div
            className={`rounded-lg overflow-hidden flex items-center ${boxShadowSecondary} bg-white`}
          >
            <i className="fa-solid fa-user-large px-3 "></i>
            <input
              className="outline-none py-3 w-full"
              name="username"
              type="text"
              placeholder="username"
              required
            />
          </div>
          <div
            className={`rounded-lg overflow-hidden flex items-center ${boxShadowSecondary} bg-white`}
          >
            <i className="fa-solid fa-key px-3 "></i>
            <input
              className="outline-none py-3 w-full"
              name="password"
              type={isPasswordVisible ? "text" : "password"}
              placeholder="********"
              required
            />
            <i
              className={`fa-solid ${
                isPasswordVisible ? "fa-eye" : "fa-eye-slash"
              } w-7 mx-3 cursor-pointer hover:text-primary text-center`}
              onClick={() => setIsPasswordVisible((prevState) => !prevState)}
            ></i>
          </div>
        </div>

        <button className={`${buttonPrimary} w-56 font-medium py-3`}>Login</button>
      </div>
    </div>
    :
    <AdminRegistration/>
  );
}
