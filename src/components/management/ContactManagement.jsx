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
  contactDetails,
  contactDetails as dummyContactDetails,
} from "../../assets/dummyData/dummyData";

export default function ContactManagement() {
  const dispatch = useDispatch();
  const { titleOnDashboard } = bindActionCreators(actionCreators, dispatch);
  const [showAddPhone, setShowAddPhone] = useState(false);
  const [showAddEmail, setShowAddEmail] = useState(false);
  const [newContact, setNewContact] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [selectedContact, setSelectedContact] = useState("");
  const [address, setAddress] = useState({
    type: "address",
    addressOne: "lauda",
    addressTwo: "",
    country: "",
  });
  const [selectedEmail, setSelectedEmail] = useState("");
  const [contacts, setContacts] = useState(dummyContactDetails);
  const [editStates, setEditStates] = useState({});
  const [editAddressState, setEditAddressState] = useState(false);

  useEffect(() => {
    titleOnDashboard("Contact Management");
    const addressDetails = contactDetails.find(
      (contact) => contact.type === "address"
    );
    if (addressDetails) {
      setAddress(addressDetails);
    }
  }, []);

  const handleCancelAddContact = () => {
    setShowAddPhone(false);
    setNewContact("");
  };

  const handleSaveNewContact = () => {
    if (newContact) {
      setContacts([...contacts, { type: "phone", phone: newContact }]);
      handleCancelAddContact();
    }
  };

  const handleSaveNewEmail = () => {
    handleCancelAddEmail();
  };

  const handleCancelAddEmail = () => {
    setShowAddEmail(false);
    setNewEmail("");
  };

  const handleEditContactChange = (e) => {
    setSelectedContact(e.target.value);
  };

  const handleEditEmailChange = (e) => {
    setSelectedEmail(e.target.value);
  };

  const handleToggleEditContact = (index, contact) => {
    setEditStates((prev) => ({
      [index]: !prev[index],
    }));
    setSelectedContact(contact);
  };

  const handleToggleEditEmail = (index, email) => {
    setEditStates((prev) => ({
      [index]: !prev[index],
    }));
    setSelectedEmail(email);
  };

  const handleSaveContact = (index) => {
    setEditStates((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
    setSelectedContact("");
  };

  const handleSaveEmail = (index) => {
    setEditStates((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
    setSelectedEmail("");
  };

  const handleCancelContactOperation = (index) => {
    setEditStates((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
    setSelectedContact("");
  };

  const handleCancelEmailOperation = (index) => {
    setEditStates((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
    setSelectedEmail("");
  };

  const handleAddressInputChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className={dashboardRootDivStyle}>
      <p className="text-xl text-primary font-bold">
        <i className="fa-solid fa-phone w-8"></i>Contact
      </p>
      <div className="space-y-5">
        <div className={`${formStyle} w-6/12`}>
          <div className="flex items-center mb-5">
            <p className=" font-bold text-custom-light-high">
              <i className="fa-solid fa-phone w-8"></i>
              Phone
            </p>
            <button
              className="ms-auto me-0 text-custom-light-high font-bold text-left hover:text-primary border-b border-custom-light-low hover:border-primary"
              onClick={() => setShowAddPhone((prevState) => !prevState)}
            >
              <span className="fa-solid fa-square-plus w-6"></span>Add Phone
            </button>
          </div>

          {showAddPhone && (
            <div className="space-y-2 border border-primary p-2 rounded-lg bg-custom-dark">
              <p className="text-primary font-medium">Add Phone:</p>
              <input
                className={`${inputStyle} w-full`}
                type="text"
                name="phone"
                placeholder="+1-xxxxxxxxxx"
                value={newContact}
                onChange={(e) => setNewContact(e.target.value)}
                required
              />
              <div className="flex justify-center items-center gap-2 ms-auto me-0">
                <button
                  className={`${editButtonStyle} px-3`}
                  onClick={handleSaveNewContact}
                >
                  Save
                </button>
                <button
                  className={`${deleteButtonStyle} px-3`}
                  onClick={handleCancelAddContact}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {contacts
            .filter((contact) => contact.type === "phone")
            .map((contact, index) => (
              <div
                key={index}
                className="flex items-center text-custom-light-high gap-5 bg-custom-dark p-3 rounded-lg"
              >
                {!editStates[index] ? (
                  <p>{contact.phone}</p>
                ) : (
                  <input
                    className={`outline-none w-full bg-transparent  font-medium ${
                      editStates[index] ? "border-b" : null
                    }`}
                    type="text"
                    name="phone"
                    value={selectedContact}
                    onChange={(e) => handleEditContactChange(e)}
                    required
                  />
                )}

                {editStates[index] ? (
                  <div className="flex justify-center items-center gap-2 ms-auto me-0">
                    <button
                      className={`${editButtonStyle} px-3 bg-primary`}
                      onClick={() => handleSaveContact(index)}
                    >
                      Apply
                    </button>
                    <button
                      className={`${deleteButtonStyle} px-3`}
                      onClick={() => handleCancelContactOperation(index)}
                    >
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  </div>
                ) : (
                  <div className="flex justify-center items-center gap-2 ms-auto me-0">
                    <button
                      className={`${editButtonStyle} px-3`}
                      onClick={() =>
                        handleToggleEditContact(index, contact.phone)
                      }
                    >
                      <i className={editIcon}></i>
                    </button>
                    <button className={`${deleteButtonStyle} px-3`}>
                      <i className={deleteIcon}></i>
                    </button>
                  </div>
                )}
              </div>
            ))}
        </div>

        <div className={`${formStyle} w-6/12`}>
          <div className="flex items-center mb-5">
            <p className=" font-bold text-custom-light-high">
              <i className="fa-solid fa-envelope w-8"></i>
              E-mail
            </p>
            <button
              className="ms-auto me-0 text-custom-light-high font-bold text-left hover:text-primary border-b border-custom-light-low hover:border-primary"
              onClick={() => setShowAddEmail((prevState) => !prevState)}
            >
              <span className="fa-solid fa-square-plus w-6"></span>Add E-mail
            </button>
          </div>

          {showAddEmail && (
            <div className="space-y-2 border border-primary p-2 rounded-lg bg-custom-dark">
              <p className="text-primary font-medium">Add Email:</p>
              <input
                className={`${inputStyle} w-full`}
                type="text"
                name="email"
                placeholder="someone@example.com"
                value={newContact}
                onChange={(e) => setNewEmail(e.target.value)}
                required
              />
              <div className="flex justify-center items-center gap-2 ms-auto me-0">
                <button
                  className={`${editButtonStyle} px-3`}
                  onClick={handleSaveNewEmail}
                >
                  Save
                </button>
                <button
                  className={`${deleteButtonStyle} px-3`}
                  onClick={handleCancelAddEmail}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {contacts
            .filter((contact) => contact.type === "email")
            .map((contact, index) => (
              <div
                key={index + 100}
                className="flex items-center text-custom-light-high gap-5 bg-custom-dark p-3 rounded-lg"
              >
                {!editStates[index + 100] ? (
                  <p>{contact.email}</p>
                ) : (
                  <input
                    className={`outline-none w-full bg-transparent  font-medium ${
                      editStates[index + 100] ? "border-b" : null
                    }`}
                    type="text"
                    name="email"
                    value={selectedEmail}
                    onChange={(e) => handleEditEmailChange(e)}
                    required
                  />
                )}

                {editStates[index + 100] ? (
                  <div className="flex justify-center items-center gap-2 ms-auto me-0">
                    <button
                      className={`${editButtonStyle} px-3 bg-primary`}
                      onClick={() => handleSaveEmail(index + 100)}
                    >
                      Apply
                    </button>
                    <button
                      className={`${deleteButtonStyle} px-3`}
                      onClick={() => handleCancelEmailOperation(index + 100)}
                    >
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  </div>
                ) : (
                  <div className="flex justify-center items-center gap-2 ms-auto me-0">
                    <button
                      className={`${editButtonStyle} px-3`}
                      onClick={() =>
                        handleToggleEditEmail(index + 100, contact.email)
                      }
                    >
                      <i className={editIcon}></i>
                    </button>
                    <button className={`${deleteButtonStyle} px-3`}>
                      <i className={deleteIcon}></i>
                    </button>
                  </div>
                )}
              </div>
            ))}
        </div>

        <div className={`${formStyle} w-6/12`}>
          <div className="flex items-center mb-5">
            <p className=" font-bold text-custom-light-high">
              <i className="fa-solid fa-location-dot w-8"></i>
              Address
            </p>
            {editAddressState ? (
              <div className="flex justify-center items-center gap-2 ms-auto me-0">
                <button className={`${editButtonStyle} px-3 bg-primary`}>
                  Apply
                </button>
                <button
                  className={`${deleteButtonStyle} px-3`}
                  onClick={() => setEditAddressState(false)}
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
            ) : (
              <button
                className="ms-auto me-0 text-custom-light-high font-bold text-left hover:text-primary border-b border-custom-light-low hover:border-primary"
                onClick={() => setEditAddressState((prevState) => !prevState)}
              >
                <span className="fa-solid fa-pen-to-square w-6"></span>Edit
                Address
              </button>
            )}
          </div>
          <div className="text-custom-light-high bg-custom-dark p-3 rounded-lg">
            <div className="space-y-5">
              {editAddressState ? (
                <div className="">
                  <input
                    className={`border-b outline-none w-full bg-transparent  font-medium`}
                    type="text"
                    name="addressOne"
                    value={address.addressOne}
                    onChange={(e) => handleAddressInputChange(e)}
                    required
                  />
                  <input
                    className={`border-b outline-none w-full bg-transparent  font-medium`}
                    type="text"
                    name="addressTwo"
                    value={address.addressTwo}
                    onChange={(e) => handleAddressInputChange(e)}
                    required
                  />
                  <input
                    className={`border-b outline-none w-full bg-transparent  font-medium`}
                    type="text"
                    name="country"
                    value={address.country}
                    onChange={(e) => handleAddressInputChange(e)}
                    required
                  />
                </div>
              ) : (
                <div>
                  <p>{address.addressOne}</p>
                  <p>{address.addressTwo}</p>
                  <p>{address.country}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
