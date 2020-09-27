import React from "react";

function PageTitle(props) {
  const { title, caption } = props;
  return (
    <React.Fragment>
      <h1
        className="text-white"
        style={{ fontWeight: 400, paddingBottom: "10px", }}
      >
        {title}
      </h1>
      {/* <hr style={{ border: "3px solid #fff", width: 80 }} /> */}
      <p className="text-white">{caption}</p>
    </React.Fragment>
  );
}

export default PageTitle;
