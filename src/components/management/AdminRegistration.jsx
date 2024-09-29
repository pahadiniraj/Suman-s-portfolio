import React from "react";
import {
  boxShadowPrimary,
  boxShadowSecondary,
  buttonPrimary,
} from "../../utils/StyleUtils";

export default function AdminRegistration() {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-gradient-primary">
      <form
        className={`py-10 px-5 rounded-xl ${boxShadowPrimary} flex flex-col justify-center items-center gap-5 text-custom-dark bg-gradient-secondary w-96`}
      >
        <p className="text-xl font-bold">Administrator Registration</p>

        <div className="space-y-2 w-full">
          <p className="text-sm">Please enter an e-mail for administrator.</p>
          <div
            className={`rounded-lg overflow-hidden flex items-center ${boxShadowSecondary} bg-white `}
          >
            <i className="fa-solid fa-envelope px-3 "></i>

            <input
              className="outline-none py-3 pe-3 w-full"
              name="username"
              type="text"
              placeholder="e-mail"
              required
            />
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" />
            <span className="text-sm">I accept <span className="font-medium text-primary cursor-pointer">terms & conditions</span>.</span>
          </div>
        </div>
        <button type="submit" className={`${buttonPrimary} w-52`}>Register</button>
      </form>
    </div>
  );
}
