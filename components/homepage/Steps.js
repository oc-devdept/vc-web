import React, { Component } from "react";
// import Link from "next/link";
class Steps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          // id: "01 Select",
          step: "Step 1",
          // arrow: "˃",
          image: "/static/steps/step1.png",
          description:
            "Select your favourite car model"
        },
        {
          // id: "02 Build",
          step: "Step 2",
          // arrow: "˃",
          image: "/static/steps/step2.png",
          description:
            "Customise your exterior & interior"
        },
        {
          // id: "03 Build",
          step: "Step 3",
          // arrow: "˅",
          image: "/static/steps/step3.png",
          description:
            "Customise your wheels"
        },
        {
          // id: "04 Configure",
          step: "Step 4",
          // arrow: "˂",
          image: "/static/steps/step4.png",
          description:
            "Select your accessories"
        },
        {
          // id: "05 Accessories",
          step: "Step 5",
          // arrow: "˂",
          image: "/static/steps/step5.png",
          description:
            "Select your COE package"
        },
        {
          // id: "06 Get",
          step: "Step 6",
          arrow: "",
          image: "/static/steps/step6.png",
          description:
            "Select your Aftersales Package"
        },
        {
          step: "Step 7",
          image: "/static/steps/step7.png",
          description:
            "Financing your car"
        },
        {
          step: "Step 8",
          image: "/static/steps/step8.png",
          description:
            "Reserve your car"
        }
      ]
    };
  }

  render() {
    return (
      <section className="steps-area">
        <div className="container">
          <div className="section-title without-bg" align="center">
            <h2>CUSTOMISE AND DRIVE HOME YOUR DREAM CAR</h2>
          </div>
          <div className="steps-row">
            {this.state.list.slice(0, 3).map((l, key) => (
              <div className="step text-center m-2 p-2" key={key}>
                <img className="stepImgs mb-3" src={l.image}></img>
                <h3 className="stepBubble text-center mb-3">
                  {l.step}
                </h3>
                
                <p className="text-center">{l.description}</p>
              </div>
            ))}
          </div>
          <div className="steps-row">
            {this.state.list.slice(3, 6).map((l, key) => (
              <div className="step text-center m-2 p-2" key={key}>
                <img className="stepImgs mb-3" src={l.image}></img>
                <h3 className="stepBubble text-center mb-3">
                  {l.step}
                </h3>
                
                <p className="text-center">{l.description}</p>
              </div>
            ))}
          </div>
          <div className="steps-row justify-content-center">
            {this.state.list.slice(6, 8).map((l, key) => (
              <div className="step text-center m-2 p-2" key={key}>
                <img className="stepImgs mb-3" src={l.image}></img>
                <h3 className="stepBubble text-center mb-3">
                  {l.step}
                </h3>
                
                <p className="text-center">{l.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Steps;
