import React, { Component } from "react";
import { connect } from "react-redux";

import DefaultLayout from "Components/Layout/PageTemplates/Default";
import RctSectionLoader from "Components/RctSectionLoader";
import Link from "next/link";

import { getModelData } from "Ducks/model/ModelActions";

class Model extends Component {
  constructor(props) {
    super(props);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (this.props.selectedModelId != prevProps.selectedModelId) {
      return this.props.selectedModelId;
    }
    return null;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot) {
      this.props.getModelData(snapshot);
    }
  }
  componentDidMount() {
    this.props.getModelData(this.props.selectedModelId);
  }

  render() {
    const { loading, ModelData } = this.props;
    return (
      <DefaultLayout>
        {loading ? (
          <RctSectionLoader />
        ) : ModelData ? (
          <section className="model-info">
            <div className="jumbotron jumbotron-fluid p-0">
              <img
                src={this.props.ModelData.header[0].path}
                alt={this.props.ModelData.name}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "auto",
                  maxHeight: 500
                }}
              />
            </div>
            <div className="container">
              <div className="section-title row align-items-center">
                <div className="col-12">
                  <h1>{this.props.ModelData.name}</h1>
                </div>
                <div className="col-12">
                  <p>{this.props.ModelData.description}</p>
                </div>
              </div>
              <div className="section-title row">
                <div className="col-12">
                  <div className="card-columns model-gallery">
                    {!!this.props.ModelData.images &&
                      this.props.ModelData.images.map((item, id) => (
                        <div className="card" key={id}>
                          <img src={item.path} style={{ width: "100%" }} />
                        </div>
                      ))}
                  </div>
                </div>
                <div className="col-12">
                  <Link
                    href="/product/grade/[id]"
                    as={`/product/grade/${this.props.ModelData.id}`}
                  >
                    <a
                      className="btn btn-primary"
                      style={{ marginTop: "3rem" }}
                    >
                      Customize
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <div>
            <p>error</p>
          </div>
        )}
      </DefaultLayout>
    );
  }
}

Model.getInitialProps = async function({ ctx }) {
  const { id } = ctx.query;
  return { selectedModelId: id };
};

const mapStateToProps = ({ ModelState }) => {
  const { loading, ModelData } = ModelState;
  return { loading, ModelData };
};

export default connect(mapStateToProps, {
  getModelData
})(Model);
