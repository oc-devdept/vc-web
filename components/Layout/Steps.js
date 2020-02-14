import React, { Component } from "react";
// import Link from "next/link";
class Steps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          id: "01 Select",
          step: "the Car",
          arrow: "˃",
          image: "/static/steps/step01.png",
          description:
            "We have a range of vehicles that fulfil all different needs. Begin the process by selecting your ideal vehicle."
        },
        {
          id: "02 Build",
          step: "the Exterior",
          arrow: "˃",
          image: "/static/steps/step02.png",
          description:
            "After selecting your vehicle, pick your favourite color for your vehicle's exterior."
        },
        {
          id: "03 Build",
          step: "the Interior",
          arrow: "˅",
          image: "/static/steps/step03.png",
          description:
            "Configure your vehicle's interior with different types and colours of seating fabrics."
        },
        {
          id: "04 Configure",
          step: "the Rims",
          arrow: "˂",
          image: "/static/steps/step04.png",
          description:
            "We provide a variety of rims for each vehicle. Pick up a set for yours."
        },
        {
          id: "05 Accessories",
          step: "Add-On",
          arrow: "˂",
          image: "/static/steps/step05.png",
          description:
            "Last but not least, take a look at the various accessories available and upgrade your driving experience."
        },
        {
          id: "06 Get",
          step: "Your Car",
          arrow: "",
          image: "/static/steps/step06.png",
          description:
            "Congratulations! We will notify you when your vehicle is ready for collection."
        }
      ]
    };
  }

  render() {
    return (
      <section className="best-sellers-area">
        <div className="container">
          <div className="section-title without-bg">
            <h2>Get Your Preferred Cars in 6 Steps!</h2>
          </div>
          <div className="d-flex flex-row">
            {this.state.list.slice(0, 3).map((l, key) => (
              <div className="step text-center m-2 p-2" key={key}>
                <h3 className="text-center">
                  <span className="stepArrow font-weight-bold font-italic">
                    {l.id}
                  </span>{" "}
                  {l.step}{" "}
                  <span className="float-right stepArrow"> {l.arrow} </span>{" "}
                </h3>
                <img className="stepImgs" src={l.image}></img>
                <p className="text-justify">{l.description}</p>
              </div>
            ))}
          </div>
          <div className="reverseStepRow">
            {this.state.list.slice(3, 6).map((l, key) => (
              <div className="step text-center m-2 p-2" key={key}>
                <h3 className="text-center">
                  <span className="stepArrow font-weight-bold font-italic">
                    {l.id}
                  </span>{" "}
                  {l.step}{" "}
                  <span className="float-left stepArrow"> {l.arrow} </span>{" "}
                </h3>
                <img className="stepImgs" src={l.image}></img>
                <p className="text-justify">{l.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Steps;
