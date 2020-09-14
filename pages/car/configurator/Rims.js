import React, { Component } from "react";
import VariantSelection from "Components/configurator/VariantSelection";
import VariantInfo from "Components/configurator/VariantInfo";

class Rims extends Component {
  constructor(props) {
    super(props);

    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  handleOptionChange(event) {
    const { id } = event.target;
    this.props.selectedProductRims(id);
  }

  isValidated() {
    return !!this.props.ProductRims.id;
  }

  render() {
    console.log("rims props: ", this.props);
    const { ProductRims } = this.props;
    return (
      <div className="configure-sect row">
        <div className="configure-gall col-lg-8 d-flex flex-column">
          <VariantInfo images={ProductRims.images} name={ProductRims.name} />
        </div>
        <div className="configure-opt col-lg-4 d-flex flex-column">
          <VariantSelection
            title="04 Rims"
            objects={ProductRims.data.fields["Rims"].objects}
            handleOptionChange={this.handleOptionChange}
            selectedId={ProductRims.id}
            stockHistory={ProductRims.stockhistory}
          />
        </div>
      </div>
    );
  }
}

export default Rims;
