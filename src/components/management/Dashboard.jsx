import React, { useEffect } from "react";
import Chart from "./Chart";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state/state";

export default function Dashboard() {
  const dispatch = useDispatch();
  const { titleOnDashboard } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    titleOnDashboard("Dashboard");
  }, []);
  return (
    <div className={`bg-custom-dark p-5 rounded-xl space-y-5`}>
      <div className="grid grid-cols-3 gap-5">
        <div className="flex flex-col justify-center p-5 bg-custom-light-low bg-opacity-20 border-l-4 border-primary text-custom-light-high rounded-lg gap-2">
          <p className="text-xl font-medium text-primary">Total Site Visits</p>
          <div className="flex items-center text-2xl font-bold">
            <p className="">1245</p>
            <i className="ms-auto me-0 fa-regular fa-eye text-primary"></i>
          </div>
        </div>

        <div className="flex flex-col justify-center p-5 bg-custom-light-low bg-opacity-20 border-l-4 border-primary text-custom-light-high rounded-lg gap-2">
          <p className="text-xl font-medium text-primary">Total Blog Posts</p>
          <div className="flex items-center text-2xl font-bold">
            <p className="">358</p>
            <i className="ms-auto me-0 fa-regular fa-newspaper text-primary"></i>
          </div>
        </div>

        <div className="flex flex-col justify-center p-5 bg-custom-light-low bg-opacity-20 border-l-4 border-primary text-custom-light-high rounded-lg gap-2">
          <p className="text-xl font-medium text-primary">
            Total Post Categories
          </p>
          <div className="flex items-center text-2xl font-bold">
            <p className="">25</p>
            <i className="ms-auto me-0 fa-solid fa-list text-primary"></i>
          </div>
        </div>
      </div>

      <div className="rounded-lg overflow-hidden h-96 bg-custom-light-low bg-opacity-20">
        <Chart />
      </div>
    </div>
  );
}
