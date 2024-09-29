import React, { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state/state";
import { dashboardRootDivStyle, formStyle } from "../../utils/StyleUtils";
import { dummyMessages } from "../../assets/dummyData/dummyData";
import { StyleSheetManager } from "styled-components";
import FilterComponent from "./FilterComponent";
import DataTable from "react-data-table-component";

const columns = [
  {
    id: "serialNum",
    name: "SN",
    selector: (row) => row.sn,
    sortable: true,
    width: "15%",
  },
  {
    id: "senderName",
    name: "Sender Name",
    selector: (row) => row.senderName,
    sortable: true,
    width: "45%",
  },
  {
    id: "subject",
    name: "Subject",
    selector: (row) => row.subject,
    sortable: true,
    width: "40%",
  }
];

const customStyles = {
  subHeader:{
    style: {
      backgroundColor: "none"
    }
  },
  headRow: {
    style: {
      borderRadius: "5px 5px 0 0",
      overflow: "hidden",
      color: "black"
    },
  },
  headCells: {
    style: {
      // backgroundColor: "#27307F",
      fontSize: "14px",
      fontWeight: "bold",
      paddingTop: "10px",
      paddingBottom: "10px"
    },
  },
  rows: {
    style: {
      paddingTop: "10px",
      paddingBottom: "10px",
    },
    highlightOnHoverStyle: {
      backgroundColor: "rgba(128, 128, 128, 0.50)",
    },
  },
  pagination: {
    style: {
      border: "none",
      borderRadius: "0 0 5px 5px",
      backgroundColor: "rgba(0,0,0,0)",
      color: "white",
    },
  },
};

export default function Messages() {
  const dispatch = useDispatch();
  const { titleOnDashboard } = bindActionCreators(actionCreators, dispatch);
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const [filterText, setFilterText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    titleOnDashboard("Messages");
  }, []);

  const subHeaderSearchComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };
    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  const filteredData = dummyMessages.filter(
    (message) =>
      message.senderName.toLowerCase().includes(filterText.toLowerCase()) ||
      message.senderEmail.toLowerCase().includes(filterText.toLowerCase()) ||
      message.subject.toLowerCase().includes(filterText.toLowerCase()) ||
      message.messageContent.toLowerCase().includes(filterText.toLowerCase())
  )
  .map(
    ({
      id,
      senderName,
      subject,
      senderEmail,
      messageContent
    }, index) => ({
      id: id,
      sn: index+1,
      senderName: senderName,
      subject: subject,
      senderEmail: senderEmail,
      messageContent: messageContent
      
    })
  )

  const ViewMessage = ({data}) => (
    <div className="border p-3 m-3">
      <p className="font-bold">{data.senderName} <span className="text-gray-500 font-normal">&lt;{data.senderEmail}&gt;</span> </p>
      <p>Subject: {data.subject}</p>
      <br />
      <p>{data.messageContent}</p>

      
    </div>
  )

  return (
    <div className={`${dashboardRootDivStyle}`}>
      <p className="text-xl text-primary font-bold">
        <i className="fa-solid fa-message w-8"></i>Messages
      </p>

      <div className={`${formStyle}`}>
      <StyleSheetManager shouldForwardProp={(prop) => prop !== "align"}>
        <DataTable
          pagination
          responsive={true}
          paginationResetDefaultPage={resetPaginationToggle}
          subHeader
          subHeaderComponent={subHeaderSearchComponentMemo}
          direction="auto"
          highlightOnHover
          dense
          progressPending={isLoading}
          persistTableHead
          columns={columns}
          data={filteredData}
          customStyles={customStyles}
          expandableRows
          expandableRowsComponent={(row) => (
            <ViewMessage data={row.data} />
          )}
          expandOnRowClicked
          expandableRowsHideExpander
        />
      </StyleSheetManager>
      </div>
    </div>
  );
}
