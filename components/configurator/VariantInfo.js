import React from "react";


const VariantInfo = ({ images, name }) => {
  return (
    <React.Fragment>
      
          <div>
            <img src={images[0]} className="configCoverImg align-self-center" />
          </div>

     
      <h3 className="text-uppercase text-center my-3">{name}</h3>
    </React.Fragment>
  );
};

export default VariantInfo;
