import React, { Component } from "react"
import { connect } from "react-redux"

import Default from "Components/Layout/PageTemplates/Default"
import Link from 'next/link'

import { getModelData } from "Ducks/model/ModelActions"

class Model extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getModelData(this.props.selectedModelId)
  }

  render() {
    console.log("props= ", this.props)
    return (
      <Default>
        <section className="contact-area pb-60">
          <div className="container">
            <div className="section-title">
              <h2>{this.props.ModelState.name}</h2>
              <p>{this.props.ModelState.description}</p>
              <Link href="/product/grade/[id]" as={`/product/grade/${this.props.ModelState.id}`}> 
                <a className="btn btn-primary">Customize</a>
              </Link>
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


