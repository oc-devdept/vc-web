import React, { Component } from "react";
import { connect } from "react-redux";

import DefaultLayout from "Components/Layout/PageTemplates/Default";
import RctSectionLoader from "Components/RctSectionLoader";
import Link from "next/link";
import { withRouter } from 'next/router'

import { getModelData } from "Ducks/model/ModelActions";

import AboutHondaFit from "../../components/car/about-honda-fit";
import ChooseGrade from "../../components/car/choose-grade";
import Views from "../../components/car/views";
import Gallery from "../../components/car/gallery";
import ContactUsDetails from "../../components/car/contact-us-details";

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

        if(this.props.noData){
          //console.log("test");
          this.props.router.push("/car/configurator/"+this.props.selectedModelId);
        }
        if (snapshot) {
            this.props.getModelData(snapshot);
        }
      
    }
    componentDidMount() {
        this.props.getModelData(this.props.selectedModelId);
    }

    render() {
        const { loading, ModelData } = this.props;
        const { ProductGradeData, coverPhoto, description, exterior, interior, galleryPhoto, name, id } = ModelData;
        return (
            <DefaultLayout>
               { loading && <RctSectionLoader />}
                {
                    name && (
                        <>
                            <div className="single-banner" style={{backgroundImage: "url(" + coverPhoto.path + ")"}}>
                                <h2>{name}</h2>
                            </div>

                            {
                                ProductGradeData !== 0 && (
                                    <ChooseGrade productData={ProductGradeData} url={this.props.selectedModelId} />
                                )
                            }
                            {
                                description && (
                                    <AboutHondaFit about={description} carName={name} />
                                )
                            }
                            {
                                exterior.length !== 0 && (
                                    <Views exterior={exterior} interior={interior} />
                                )
                            }
                            {
                                galleryPhoto.length !== 0 && (
                                    <Gallery galleryPhoto={galleryPhoto} />
                                )
                            }
                        </>
                    )
                }

                <ContactUsDetails />

                {/* {loading ? (
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
        )} */}
            </DefaultLayout>
        );
    }
}

Model.getInitialProps = async function({ query: id }) {
    return { selectedModelId: id.id };
};

const mapStateToProps = ({ ModelState }) => {
    const { loading, ModelData, noData } = ModelState;
    return { loading, ModelData, noData };
};

export default withRouter(connect(mapStateToProps, {
    getModelData
})(Model));
