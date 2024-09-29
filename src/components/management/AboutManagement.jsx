import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state/state";
import {
  boxShadowPrimary,
  buttonPrimary,
  dashboardRootDivStyle,
  deleteButtonStyle,
  deleteIcon,
  editButtonStyle,
  editIcon,
  formStyle,
  inputStyle,
} from "../../utils/StyleUtils";
import { serviceList } from "../../assets/dummyData/dummyData";

export default function AboutManagement() {
  const dispatch = useDispatch();
  const { titleOnDashboard } = bindActionCreators(actionCreators, dispatch);
  const [showServiceModal, setShowServiceModal] = useState(false);
  const [operation, setOperation] = useState("Add New");
  const [selectedService, setSelectedService] = useState({
    title: "",
    description: "",
    imageUrl: "",
  });

  useEffect(() => {
    titleOnDashboard("About Management");
  }, []);

  const handleOnEditService = (service) => {
    setShowServiceModal(true);
    setOperation("Modify");
    setSelectedService(service);
  };

  const ServiceModal = () => (
    <div className="bg-custom-dark bg-opacity-90 backdrop-blur-md fixed left-0 top-0 h-full w-full flex justify-center items-center">
      <form
        className={`border border-gray-600 space-y-3 p-5 bg-custom-dark rounded-xl`}
      >
        <div className="w-full text-xl font-bold border-b border-primary pb-2">
          <span className="text-primary">{operation} Service</span>
          <span
            className="fa-solid fa-xmark float-end text-custom-light-high text-2xl hover:text-primary cursor-pointer"
            onClick={() => setShowServiceModal(false)}
          ></span>
        </div>
        <div className="space-y-1">
          <p className="text-primary font-medium">Service title</p>
          <input
            className={`${inputStyle} w-96`}
            type="text"
            name="serviceTitle"
            value={selectedService.title}
            onChange={(e) =>
              setSelectedService((prev) => ({ ...prev, title: e.target.value }))
            }
            required
          />
        </div>

        <div className="space-y-1">
          <p className="text-primary font-medium">Service Image</p>
          <input
            className={`${inputStyle} w-96 text-custom-light-low`}
            type="file"
            name="service-image"
            required
          />
        </div>

        <div className="space-y-1">
          <p className="text-primary font-medium">Service Description</p>
          <textarea
            className={`${inputStyle} w-96`}
            type="text"
            name="serviceDescription"
            value={selectedService.description}
            onChange={(e) =>
              setSelectedService((prev) => ({
                ...prev,
                description: e.target.value,
              }))
            }
            required
          />
        </div>

        <div className="text-center">
          <button className={`${buttonPrimary} w-56`}>Apply</button>
        </div>
      </form>
    </div>
  );

  const handleAddNewService = () => {
    setSelectedService({ title: "", description: "", imageUrl: "" });
    setShowServiceModal(true);
    setOperation("Add New");
  };

  return (
    <>
      {showServiceModal && <ServiceModal />}

      <div className="space-y-5">
        <div className={dashboardRootDivStyle}>
          <p className="text-xl text-primary font-bold">
            <i className="fa-solid fa-table-columns w-8"></i>About
          </p>
          <form className={formStyle}>
            <div className="space-y-1">
              <p className="text-primary font-medium">Title 1</p>
              <input
                className={`${inputStyle} w-96`}
                type="text"
                name="titleOne"
                required
              />
            </div>

            <div className="space-y-1">
              <p className="text-primary font-medium">Title 2</p>
              <input
                className={`${inputStyle} w-96`}
                type="text"
                name="titleTwo"
                required
              />
            </div>

            <div className="space-y-1">
              <p className="text-primary font-medium">Description 1</p>
              <textarea
                className={`${inputStyle} w-full`}
                type="text"
                name="descTwo"
                required
              />
            </div>

            <div className="space-y-1">
              <p className="text-primary font-medium">Description 2</p>
              <textarea
                className={`${inputStyle} w-full`}
                type="text"
                name="descThree"
                required
              />
            </div>

            <div className="space-y-1">
              <p className="text-primary font-medium">Profile Photo</p>
              <input
                className={`${inputStyle} w-96 text-custom-light-low`}
                type="file"
                name="profile-photo"
                required
              />
            </div>
            <button className={`${buttonPrimary} w-56 mx-auto`}>Apply</button>
          </form>
        </div>

        <div className={dashboardRootDivStyle}>
          <p className="text-xl text-primary font-bold">
            <i className="fa-solid fa-layer-group w-8"></i>Services
          </p>
          <div className={formStyle}>
            <div className="space-y-1 border-b border-custom-light-low pb-5">
              <p className="text-primary font-medium">Header Text</p>
              <input
                className={`${inputStyle} w-96`}
                type="text"
                name="headerText"
                required
              />
              <button className={`${buttonPrimary} w-40 ms-5`}>Apply</button>
            </div>

            <div className="space-y-5">
              {/* <p className="text-primary text-lg font-bold">Current Services</p> */}
              <button
                className="text-custom-light-high font-bold text-left hover:text-primary border-b border-custom-light-low hover:border-primary"
                onClick={() => handleAddNewService()}
              >
                <span className="fa-solid fa-square-plus w-6"></span>Add New
                Service
              </button>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {serviceList.map((service, index) => (
                  <div
                    key={index}
                    className="text-center p-4 rounded-lg space-y-2 bg-custom-dark"
                  >
                    <p className="text-primary text-lg font-bold">
                      {service.title}
                    </p>
                    <span
                      className={`${service.imageUrl} text-4xl text-custom-light-low`}
                    ></span>
                    <p className="text-custom-light-high">
                      {service.description}
                    </p>
                    <div className="flex gap-2 text-white">
                      <button
                        className={editButtonStyle}
                        onClick={() => handleOnEditService(service)}
                      >
                        <span className={editIcon}></span> Edit
                      </button>
                      <button className={deleteButtonStyle}>
                        <span className={deleteIcon}></span> Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
