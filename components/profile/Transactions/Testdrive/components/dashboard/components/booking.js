import React from "react";

import RecordsList from "Components/RecordsList";
import { listOptions } from "Components/Helpers/helpers";
import RctSectionLoader from "Components/RctSectionLoader";

import Moment from "moment";

const CustomerList = ({
  tableData,
  loading,
  title,
  action,
  SetSingleBooking,
  cancelBooking, changeBook
}) => {
  const columns = [
    {
      name: "id",
      options: { display: "excluded", filter: false, sort: false }
    },
    {
      label: "Name",
      name: "contact",
      options: {
        customBodyRender: (value, tableMeta) => {
          const { firstName, lastName } = value;
          const id = tableMeta.rowData[0];
          return (
            <div>
              <span style={{ color: "rgba(0,0,0,0.7)" }}>
                {firstName + " " + lastName}
              </span>
            </div>
          );
        }
      }
    },
    {
      label: "Email",
      name: "contact",
      options: {
        customBodyRender: value => {
          const { email } = value;
          return <span style={{ color: "rgba(0,0,0,0.7)" }}>{email}</span>;
        }
      }
    },
    {
      label: "Service",
      name: "service",
      options: {
        customBodyRender: value => {
          return <span style={{ color: "rgba(0,0,0,0.7)" }}>{value}</span>;
        }
      }
    },
    {
      label: "Model",
      name: "content",
      options: {
        customBodyRender: value => {
          const { model, date, timeslot, description } = value;
          return <span style={{ color: "rgba(0,0,0,0.7)" }}>{model}</span>;
        }
      }
    },
    {
      label: "Schedule",
      name: "content",
      options: {
        customBodyRender: value => {
          const { model, date, timeslot, description } = value;
          return (
            <span style={{ color: "rgba(0,0,0,0.7)" }}>
              {Moment(date).format("lll")}
            </span>
          );
        }
      }
    },
    {
      label: "Status",
      name: "status",
      options: {
        customBodyRender: value => {
          return <span style={{ color: "rgba(0,0,0,0.7)" }}>{value}</span>;
        }
      }
    },
    {
      label: "Remarks",
      name: "remarks"      
    },
    {
      label: "Action",
      name: "action",
      options: {
        customBodyRender: (value, tableMeta) => {
          if(tableMeta.rowData[6] == "Cancelled" || tableMeta.rowData[5] == "Complete"){
            return (<div></div>)
          }
          else if(tableMeta.rowData[6] == "Change Request"){
            return (<div><a href="#" onClick={(e)=> {cancelBooking(tableMeta.rowData[0])}} class="badge badge-danger">Cancel</a></div>)
          }
          else {
          return (<div><a href="#" class="badge badge-warning" onClick={()=> {changeBook(tableMeta.rowData[0])} }>Reschedule</a> &nbsp;&nbsp; <a href="#" onClick={(e)=> {cancelBooking(tableMeta.rowData[0])}} class="badge badge-danger">Cancel</a></div>)
          }
        }
      }
    }
  ];

  listOptions.customToolbarSelect = (
    selectedRows,
    displayData,
    setSelectRows
  ) => null;

  return (
    <div>
      <div className="d-flex flex-fill justify-content-center">
        <span style={{ textAlign: "center" }}>Test Drive Booking Details</span>
      </div>

      <div
        className="rct-block"
        style={{
          margin: 20,
          borderRadius: 10,
          boxShadow:
            "0 5px 9px 0 rgba(0,0,0,0.15), 0 8px 25px 0 rgba(0,0,0,0.15)"
        }}
      >
        <RecordsList
          title={title}
          columns={columns}
          data={tableData}
          options={listOptions}
        />
        {loading && <RctSectionLoader />}
      </div>
    </div>
  );
};

export default CustomerList;
