import React, { Component } from "react"
import { connect } from "react-redux"

import Default from "Components/Layout/PageTemplates/Default"
import Link from 'next/link'

import { getModelData } from "Ducks/model/ModelActions"

class Model extends Component {
  constructor(props) {
    super(props)
  }
  
  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (this.props.selectedModelId != prevProps.selectedModelId) {
      return this.props.selectedModelId
    }
    return null
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot) {
      this.props.getModelData(snapshot)
    }
  }

  componentDidMount() {
    this.props.getModelData(this.props.selectedModelId)
  }

  render() {
    // console.log("model props= ", this.props)

    const options = {
      transitionSpeed: 3000
    }

    return (
      <Default>
        <div className="jumbotron jumbotron-fluid p-0">
          <img 
            src={ this.props.ModelState.header } 
            alt={ this.props.ModelState.name } 
            style={{objectFit:"cover", width:"100%", height:"auto", maxHeight:500}} 
          />
        </div>
        <section className="model-info">
          <div className="container">
            <div className="section-title row align-items-center">
              <div className="col-12">
                <h2>{this.props.ModelState.name}</h2>
              </div>
              <div className="col-12">
                <p>{this.props.ModelState.description}</p>
              </div>
            </div>
            <div className="section-title row">
              <div className="col-12">
                <div className="card-columns model-gallery">
                  { !!this.props.ModelState.images && 
                    this.props.ModelState.images.map(( item, id ) => (
                      <div className="card" key={ id }>
                        <img src={ item.path } style={{width:"100%"}} />
                      </div>
                  ))}
                </div>
              </div>
              <div className="col-12">
                <Link href="/product/grade/[id]" as={`/product/grade/${this.props.ModelState.id}`}> 
                  <a className="btn btn-primary" style={{marginTop:"3rem"}}>Customize</a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Default>
    )
  }
}

Model.getInitialProps = async function({ctx}) {
  const { id } = ctx.query;
  return { selectedModelId: id }; 
}

const mapStateToProps = state => {
  const { ModelState } = state
  return { ModelState }
}

export default connect(
  mapStateToProps,
  {
    getModelData
  }
)(Model)


