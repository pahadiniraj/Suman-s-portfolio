import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state/state";
import {
  buttonPrimary,
  dashboardRootDivStyle,
  deleteButtonStyle,
  deleteIcon,
  editButtonStyle,
  editIcon,
  formStyle,
  inputStyle,
} from "../../utils/StyleUtils";
import {
  educationList,
  experiencesList,
} from "../../assets/dummyData/dummyData";

const EducationModal = ({
  showEducationModal,
  operation,
  selectedEducation,
  handleOnChangeInput,
  handleOnCloseModal,
}) => {
  if (!showEducationModal) return null;

  return (
    <div className="bg-custom-dark bg-opacity-90 backdrop-blur-md fixed left-0 top-0 h-full w-full flex justify-center items-center">
      <form
        className={`border border-gray-600 space-y-3 p-5 bg-custom-dark rounded-xl`}
      >
        <div className="w-full text-xl font-bold border-b border-primary pb-2">
          <span className="text-primary">{operation} Education</span>
          <span
            className="fa-solid fa-xmark float-end text-custom-light-high text-2xl hover:text-primary cursor-pointer"
            onClick={handleOnCloseModal}
          ></span>
        </div>
        <div className="space-y-1">
          <p className="text-primary font-medium">From-To Date:</p>
          <input
            className={`${inputStyle} w-96`}
            type="text"
            name="duration"
            value={selectedEducation.duration}
            onChange={handleOnChangeInput}
            required
          />
        </div>

        <div className="space-y-1">
          <p className="text-primary font-medium">Course Name:</p>
          <input
            className={`${inputStyle} w-96`}
            type="text"
            name="courseName"
            value={selectedEducation.courseName}
            onChange={handleOnChangeInput}
            required
          />
        </div>

        <div className="space-y-1">
          <p className="text-primary font-medium">University:</p>
          <input
            className={`${inputStyle} w-96`}
            type="text"
            name="university"
            value={selectedEducation.university}
            onChange={handleOnChangeInput}
            required
          />
        </div>

        <div className="space-y-1">
          <p className="text-primary font-medium">Address:</p>
          <input
            className={`${inputStyle} w-96`}
            type="text"
            name="address"
            value={selectedEducation.address}
            onChange={handleOnChangeInput}
            required
          />
        </div>

        <div className="text-center">
          <button className={`${buttonPrimary} w-56`}>Apply</button>
        </div>
      </form>
    </div>
  );
};

const ExperienceModal = ({
  showExperienceModal,
  operation,
  selectedExperience,
  handleOnChangeInput,
  handleOnCloseModal,
}) => {
  if (!showExperienceModal) return null;

  return (
    <div className="bg-custom-dark bg-opacity-90 backdrop-blur-md fixed left-0 top-0 h-full w-full flex justify-center items-center">
      <form
        className={`border border-gray-600 space-y-3 p-5 bg-custom-dark rounded-xl`}
      >
        <div className="w-full text-xl font-bold border-b border-primary pb-2">
          <span className="text-primary">{operation} Experience</span>
          <span
            className="fa-solid fa-xmark float-end text-custom-light-high text-2xl hover:text-primary cursor-pointer"
            onClick={handleOnCloseModal}
          ></span>
        </div>
        <div className="space-y-1">
          <p className="text-primary font-medium">From-To Date:</p>
          <input
            className={`${inputStyle} w-96`}
            type="text"
            name="duration"
            value={selectedExperience.duration}
            onChange={handleOnChangeInput}
            required
          />
        </div>

        <div className="space-y-1">
          <p className="text-primary font-medium">Job Title:</p>
          <input
            className={`${inputStyle} w-96`}
            type="text"
            name="jobTitle"
            value={selectedExperience.jobTitle}
            onChange={handleOnChangeInput}
            required
          />
        </div>

        <div className="space-y-1">
          <p className="text-primary font-medium">Organization:</p>
          <input
            className={`${inputStyle} w-96`}
            type="text"
            name="organizationName"
            value={selectedExperience.organizationName}
            onChange={handleOnChangeInput}
            required
          />
        </div>

        <div className="space-y-1">
          <p className="text-primary font-medium">Address:</p>
          <input
            className={`${inputStyle} w-96`}
            type="text"
            name="address"
            value={selectedExperience.address}
            onChange={handleOnChangeInput}
            required
          />
        </div>

        <div className="text-center">
          <button className={`${buttonPrimary} w-56`}>Apply</button>
        </div>
      </form>
    </div>
  );
};

export default function ResumeManagement() {
  const dispatch = useDispatch();
  const { titleOnDashboard } = bindActionCreators(actionCreators, dispatch);
  const [showEducationModal, setShowEducationModal] = useState(false);
  const [showExperienceModal, setShowExperienceModal] = useState(false);
  const [operation, setOperation] = useState("Add ");
  const [selectedEducation, setSelectedEducation] = useState({
    duration: "",
    courseName: "",
    university: "",
    address: "",
  });
  const [selectedExperience, setSelectedExperience] = useState({
    duration: "",
    jobTitle: "",
    organizationName: "",
    address: "",
  });

  const handleOnChangeInputEducationModal = (e) => {
    const { name, value } = e.target;
    setSelectedEducation((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOnChangeInputExperienceModal = (e) => {
    const { name, value } = e.target;
    setSelectedExperience((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    titleOnDashboard("Resume Management");
  }, [titleOnDashboard]);

  const handleOnCloseModal = () => {
    setShowEducationModal(false);
    setShowExperienceModal(false);
    setOperation("Add ");
    setSelectedEducation({
      duration: "",
      courseName: "",
      university: "",
      address: "",
    });
    setSelectedExperience({
      duration: "",
      jobTitle: "",
      organizationName: "",
      address: "",
    });
  };

  const handleEditEducation = (education) => {
    setSelectedEducation(education);
    setOperation("Modify ");
    setShowEducationModal(true);
  };

  const handleEditExperience = (experience) => {
    setSelectedExperience(experience);
    setOperation("Modify ");
    setShowExperienceModal(true);
  };

  return (
    <>
      <EducationModal
        showEducationModal={showEducationModal}
        operation={operation}
        selectedEducation={selectedEducation}
        handleOnChangeInput={handleOnChangeInputEducationModal}
        handleOnCloseModal={handleOnCloseModal}
      />
      <ExperienceModal
        showExperienceModal={showExperienceModal}
        operation={operation}
        selectedExperience={selectedExperience}
        handleOnChangeInput={handleOnChangeInputExperienceModal}
        handleOnCloseModal={handleOnCloseModal}
      />
      <div className={dashboardRootDivStyle}>
        <p className="text-xl text-primary font-bold">
          <i className="fa-solid fa-file w-8"></i>Resume
        </p>
        <div className="grid grid-cols-2 gap-5">
          <div className={formStyle}>
            <div className="flex items-center mb-5">
              <p className="text-lg font-bold text-custom-light-high">
                <i className="fa-solid fa-graduation-cap w-8"></i>
                Education
              </p>
              <button
                className="ms-auto me-0 text-custom-light-high font-bold text-left hover:text-primary border-b border-custom-light-low hover:border-primary"
                onClick={() => setShowEducationModal((prevState) => !prevState)}
              >
                <span className="fa-solid fa-square-plus w-6"></span>Add
                Education
              </button>
            </div>
            <div className="space-y-5 text-custom-light-high">
              {educationList.map((education, index) => (
                <div key={index} className="p-2 bg-custom-dark rounded-lg">
                  <p className="font-medium">{education.duration}</p>
                  <p className="font-bold text-lg">{education.courseName}</p>
                  <p className="font-medium text-lg">{education.university}</p>
                  <p className="font-medium">{education.address}</p>
                  <div className="flex gap-2 mt-2">
                    <button
                      className={editButtonStyle}
                      onClick={() => handleEditEducation(education)}
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
          <div className={formStyle}>
            <div className="flex items-center mb-5">
              <p className="text-lg font-bold text-custom-light-high">
                <i className="fa-solid fa-briefcase w-8"></i>
                Experiences
              </p>
              <button
                className="ms-auto me-0 text-custom-light-high font-bold text-left hover:text-primary border-b border-custom-light-low hover:border-primary"
                onClick={() =>
                  setShowExperienceModal((prevState) => !prevState)
                }
              >
                <span className="fa-solid fa-square-plus w-6"></span>Add
                Experience
              </button>
            </div>
            <div className="space-y-5 text-custom-light-high">
              {experiencesList.map((experience, index) => (
                <div key={index} className="p-2 bg-custom-dark rounded-lg">
                  <p className="font-medium">{experience.duration}</p>
                  <p className="font-bold text-lg">{experience.jobTitle}</p>
                  <p className="font-medium text-lg">
                    {experience.organizationName}
                  </p>
                  <p className="font-medium">{experience.address}</p>
                  <div className="flex gap-2 mt-2">
                    <button
                      className={editButtonStyle}
                      onClick={() => handleEditExperience(experience)}
                    >
                      <span className={editIcon}></span> Edit
                    </button>
                    <button className={deleteButtonStyle}><span className={deleteIcon}></span> Remove</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
