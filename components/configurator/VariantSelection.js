import React, { useState, useEffect } from "react";
import { Icon, InlineIcon } from '@iconify/react';
import plusIcon from '@iconify/icons-bi/plus';
import minusOutlined from '@iconify/icons-ant-design/minus-outlined';


import { formatPrice } from "Components/Helpers/helpers";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const VariantSelection = ({
  title,
  objects,
  handleOptionChange,
  selectedId,
  stockHistory,
  category,
  showTab
}) => {
  
  const [isShowing, changeShowing] = useState(true);

  
  useEffect(() => {
    changeShowing(showTab);
  }, [showTab]);

  const checkTooltip = stockhistory => {
    const stockChecklist = [
      "VAC READY",
      "FINAL INSP",
      "STOCK",
      "PORT",
      "ETA",
      "INCOMING",
      "INDENT"
    ];
    if(stockhistory === undefined){
      return ("IN STOCK");
    }
    if (stockhistory.length === 0) {
      return "PRE-ORDER";
    }
    for (const status of stockChecklist) {
      const result = stockhistory.find(
        element => element.status === status && element.stock_count !== 0
      );
      if (!!result) {
        if (status === "VAC READY") {
          return "VAC READY STOCK";
        } else if (status === "FINAL INSP" || status === "STOCK") {
          return "READY STOCK";
        } else if (
          status === "PORT" ||
          status === "ETA" ||
          status === "INCOMING"
        ) {
          return "INCOMING STOCK";
        } else {
          return "PRE-ORDER";
        }
      }
    }
  };

  

  const toggleView = () => {
    console.log("toggle");
    changeShowing(!isShowing);
  }

  const checkWarning = stockhistory => {
    const stockChecklist = [
      "VAC READY",
      "FINAL INSP",
      "STOCK",
      "PORT",
      "ETA",
      "INCOMING",
      "INDENT"
    ];
    if(stockhistory === undefined){
      return (<p className="text-white">IN STOCK</p>);
    }
    if (stockhistory.length === 0) {
      return (
        <p className="mt-auto text-white">
          This option is currently on indent basis. Expected arrival time of{" "}
          <span style={{ color: "red" }}>3-6 months</span>.
        </p>
      );
    }
    for (const status of stockChecklist) {
      
      const result = stockhistory.find(
        element => element.status === status && element.stock_count !== 0
      );
      if (!!result) {
        if (status === "VAC READY") {
          return (
            <p className="mt-auto text-white">VAC Ready Stock. Immediate availability.</p>
          );
        } else if (status === "FINAL INSP" || status === "STOCK") {
          return (
            <p className="mt-auto text-white">
              Ready Stock. Expected waiting time of{" "}
              <span style={{ color: "red" }}>2-4 weeks</span>.
            </p>
          );
        } else if (
          status === "PORT" ||
          status === "ETA" ||
          status === "INCOMING"
        ) {
          return (
            <p className="mt-auto text-white">
              Stock is incoming. Expected arrival time of{" "}
              <span style={{ color: "red" }}>1-3 months</span>.
            </p>
          );
        } else {
          return (
            <p className="mt-auto text-white">
              This option is currently on indent basis. Expected arrival time of{" "}
              <span style={{ color: "red" }}>3-6 months</span>.
            </p>
          );
        }
      }
      else {
        return (
          <p className="mt-auto text-white">
            This option is currently on indent basis. Expected arrival time of{" "}
            <span style={{ color: "red" }}>3-6 months</span>.
          </p>
        );
      }
    }
  };

  const isSelected = (itemId, selected) => {
    if(Array.isArray(selected)){
      if(selected.includes(itemId)){
        return {
          border: "2px solid #000000",
          color: "#F29D30",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          fontWeight: "bold"
        }
      }
    }
    else {
      if(itemId == selected){
        return {
          border: "2px solid #000000",
          color: "#F29D30",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          fontWeight: "bold"
        }
      }      
    }
    return { border: "1px solid #DEE2E6" }
  }

  return (
    <React.Fragment>
      <div className="optionTitleRow">
      <h3 className="configure-opt-title">{title}</h3>
      <div className="configure-icon" onClick={toggleView}>
  { isShowing ? <Icon height={26} icon={minusOutlined} /> : <Icon height={26} icon={plusIcon} /> }</div>
      </div>
      <div className={"optionDisplay"+ (isShowing ? " show" : "")}>    
      <ul className={ "list-unstyled" }>
        {!!objects &&
          objects.map((item, id) => (
            <OverlayTrigger
              key={id}
              placement="top"
              overlay={<Tooltip>{checkWarning(item.stockhistory)}</Tooltip>}
            >
              <li
                className="configure-list d-inline-block align-top"
                id={item.id}
                onClick={() => handleOptionChange(category, title, id)}
                style={{ maxWidth: 120 }}
              >
                <img
                  src={ item.files.length > 0 ? item.files[0].path : "" }
                  alt={item.name}
                  id={item.id}
                  style={isSelected(item.id, selectedId)}
                />
                <br />
                <span
                  id={item.id}
                  style={{ textTransform: "uppercase", fontWeight: 500 }}
                >
                  {item.name}
                </span>
                <br />
                <span id={item.id} style={{ color: "#4B6674" }}>
                  {formatPrice(item.price)}
                </span>
              </li>
            </OverlayTrigger>
          ))}
      </ul>
      {
      /*checkWarning(stockHistory) */ 
      }
      </div>  
    </React.Fragment>
  );
};

export default VariantSelection;
/*
<div className="configure-icon"><Icon icon={plusIcon} onClick={toggleView} height="24" /></div>
*/