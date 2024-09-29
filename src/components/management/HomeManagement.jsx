import React, { useEffect } from "react";
import {
  buttonPrimary,
  dashboardRootDivStyle,
  formStyle,
  inputStyle,
} from "../../utils/StyleUtils";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state/state";

export default function HomeManagement() {
  const dispatch = useDispatch();
  const { titleOnDashboard } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    titleOnDashboard("Home Management");
  }, []);

  return (
    <div className={dashboardRootDivStyle}>
      <p className="text-xl text-primary font-bold">
        <i className="fa-solid fa-house w-8"></i>Home
      </p>
      <form className={formStyle}>
        <div className="space-y-1">
          <p className="text-primary font-medium">Description 1</p>
          <textarea
            className={`${inputStyle} w-full`}
            type="text"
            name="descOne"
            required
          />
        </div>

        <div className="space-y-1">
          <p className="text-primary font-medium">Description 2</p>
          <textarea
            className={`${inputStyle} w-full`}
            type="text"
            name="descTwo"
            required
          />
        </div>

        <div className="space-y-1">
          <p className="text-primary font-medium">Description 3</p>
          <textarea
            className={`${inputStyle} w-full`}
            type="text"
            name="descThree"
            required
          />
        </div>

        <button className={`${buttonPrimary} w-56 mx-auto`}>Apply</button>
      </form>
    </div>
  );
}
