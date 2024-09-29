import React, { useEffect } from "react";
import {
  boxShadowSecondary,
  buttonPrimary,
  dashboardRootDivStyle,
  formStyle,
  inputStyle,
} from "../../utils/StyleUtils";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state/state";

export default function InfoManagement() {
  const dispatch = useDispatch();
  const { titleOnDashboard } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    titleOnDashboard("Info Management");
  }, []);
  return (
    <div className="space-y-5">
      <div className={dashboardRootDivStyle}>
        <p className="text-xl text-primary font-bold">
          {" "}
          <i className="fa-solid fa-circle-info w-8"></i>Portfolio Info
        </p>

        <form className={formStyle}>
          <div className="space-y-1">
            <p className="text-primary font-medium">Portfolio Name</p>
            <input
              className={`${inputStyle} w-96`}
              type="text"
              name="portfolioName"
              required
            />
          </div>

          <div className="space-y-1">
            <p className="text-primary font-medium">Portfolio Title</p>
            <input
              className={`${inputStyle} w-96`}
              type="text"
              name="portfolioTitle"
              required
            />
          </div>

          <div className="space-y-1">
            <p className="text-primary font-medium">Favicon</p>
            <input
              className={`${inputStyle} w-96 text-custom-light-low`}
              type="file"
              name="favicon"
              required
            />
          </div>
          <button className={`${buttonPrimary} w-40`}>Apply</button>
        </form>
      </div>

      <div className={dashboardRootDivStyle}>
        <p className="text-xl text-primary font-bold">
          {" "}
          <i className="fa-solid fa-thumbs-up w-8"></i>Social Links
        </p>

        <form className={formStyle}>
        <div
            className={`rounded-lg flex items-center w-96 text-custom-light-high`}
          >
            <i className="fa-brands fa-instagram px-3"></i>
            <input
              className="outline-none bg-transparent border-b"
              name="instagram"
              type="text"
              placeholder="instagram"
              required
            />
          </div>

          <div
            className={`rounded-lg flex items-center w-96 text-custom-light-high`}
          >
            <i className="fa-brands fa-facebook px-3 "></i>
            <input
              className="outline-none bg-transparent border-b"
              name="facebook"
              type="text"
              placeholder="facebook"
              required
            />
          </div>

          <div
            className={`rounded-lg flex items-center w-96 text-custom-light-high`}
          >
            <i className="fa-brands fa-youtube px-3 "></i>
            <input
              className="outline-none bg-transparent border-b"
              name="youtube"
              type="text"
              placeholder="youtube"
              required
            />
          </div>

          <div
            className={`rounded-lg flex items-center w-96 text-custom-light-high`}
          >
            <i className="fa-brands fa-x-twitter px-3 "></i>
            <input
              className="outline-none bg-transparent border-b"
              name="xAccount"
              type="text"
              placeholder="X"
              required
            />
          </div>

          <div
            className={`rounded-lg flex items-center w-96 text-custom-light-high`}
          >
            <i className="fa-brands fa-linkedin-in px-3 "></i>
            <input
              className="outline-none bg-transparent border-b"
              name="linkedIn"
              type="text"
              placeholder="linkedin"
              required
            />
          </div>

          <button className={`${buttonPrimary} w-40`}>Apply</button>
        </form>
      </div>
    </div>
  );
}
