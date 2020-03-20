import React from "react";
import RecordsList from "Components/RecordsList";
import {
  listOptions,
  formatPrice,
  getDateTime
} from "Components/Helpers/helpers";

export default function PaymentList(props) {
  const { tableData } = props;
  const columns = [
    {
      label: "Name",
      name: "name"
    },
    {
      label: "Amount",
      name: "amount",
      options: {
        customBodyRender: value => {
          return formatPrice(value);
        }
      }
    },
    {
      label: "Status",
      name: "paid",
      options: {
        customBodyRender: value => {
          return value ? "Paid" : "Pending Payment";
        }
      }
    },
    {
      label: "Date Paid",
      name: "datePaid",
      options: {
        customBodyRender: value => {
          return value ? getDateTime(value) : "-";
        }
      }
    }
  ];

  const options = Object.assign({}, listOptions);
  options.search = false;
  options.filter = false;
  options.viewColumns = false;

  return <RecordsList columns={columns} data={tableData} options={options} />;
}
