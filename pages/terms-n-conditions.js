import React, { Component } from "react";
import DefaultLayout from "Components/Layout/PageTemplates/Default";
import { makeStyles } from '@material-ui/core/styles';


// T&C Data
import { TNCData } from "Components/data/tnc-data";

class TermsAndConditions extends Component {
  render() {
    return (
      <DefaultLayout>
        <div className="a4-page-max-width">
        {TNCData.map((tnc, index) => (
          <div className="tnc-area" eventKey={index} key={index}>
            <h3>{tnc.title}</h3>
            {tnc.sections.length > 0 &&
             tnc.sections.map((section, indx) => (
              <div className="tnc-section" key={indx}>
                <h6>{section.subtitle}</h6>
                <p>{section.description}</p>
                <p>{section.description2}</p>
                <p>{section.description3}</p>
                <p>{section.description4}</p>
                <p>{section.description5}</p>
              </div>
            ))}
          </div>
        ))}
        </div>
      </DefaultLayout>
    );
  }
}

export default TermsAndConditions;
