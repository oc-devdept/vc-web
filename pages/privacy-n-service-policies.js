import React, { Component } from "react";
import DefaultLayout from "Components/Layout/PageTemplates/Default";

// P&SP Data
import { PNSPData } from "Components/data/pnsp-data";

class PrivacyNServicePolices extends Component {
  render() {
    return (
      <DefaultLayout>
        {PNSPData.map((pnsp, index) => (
          <div className="pnsp-area" eventKey={index} key={index}>
            <h3>{pnsp.title}</h3>
            {pnsp.sections.length > 0 &&
             pnsp.sections.map((section, indx) => (
              <div className="pnsp-section" key={indx}>
                <h6>{section.subtitle}</h6>
                <p>{section.description}</p>
                <p>{section.description2}</p>
              </div>
            ))}
          </div>
        ))}
      </DefaultLayout>
    );
  }
}

export default PrivacyNServicePolices;
