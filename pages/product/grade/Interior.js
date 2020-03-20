import React, { Component } from "react";
import VariantSelection from "Components/configurator/VariantSelection";
import VariantInfo from "Components/configurator/VariantInfo";

class Interior extends Component {
  constructor(props) {
    super(props);

    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  handleOptionChange(event) {
    const { id } = event.target;
    this.props.selectedProductInterior(id);
  }

  isValidated() {
    return !!this.props.ProductInterior.id;
  }

  render() {
    console.log("interior props: ", this.props);
    const { ProductInterior } = this.props;
    return (
      <div className="configure-sect row">
        <div className="configure-gall col-lg-8 d-flex flex-column">
          <VariantInfo
            images={ProductInterior.images}
            name={ProductInterior.name}
          />
        </div>
        <div className="configure-opt col-lg-4 d-flex flex-column">
          <VariantSelection
            title="03 Interior"
            objects={ProductInterior.data.fields["Material"].objects}
            handleOptionChange={this.handleOptionChange}
            selectedId={ProductInterior.id}
            stockHistory={ProductInterior.stockhistory}
          />
        </div>
      </div>
    );
  }
}

export default Interior;
