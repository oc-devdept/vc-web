import React, { Component } from "react"
import { connect } from "react-redux"
import Link from 'next/link'

import Default from "Components/Layout/PageTemplates/Default"

import { getExteriorList, selectedProductExterior } from "../../../redux/ducks/product/ProductActions.js"

class Product extends Component {
  constructor(props) {
    super(props)
    
    this.handleOptionChange = this.handleOptionChange.bind(this)
  }

  componentDidMount() {
    this.props.getExteriorList(this.props.ProductState.productGradeId)
  }

  handleOptionChange(event) {
    const { id } = event.target
    this.props.selectedProductExterior(id)
  }
  
  render(){
    console.log("props: ", this.props)
    const { data } = this.props.ProductState

    return (
      <Default>
        <section className="contact-area pb-60">
          <div className="container">
            <div className="section-title">
              <p>02 Exterior</p>
              <ul className="p-0 list-unstyled">
                {/* {this.props.data.fields.Paintwork.objects.map(( item, id ) => (
                  <li 
                    key= { id }
                    id={ item.id }
                    style={ item.id == this.state.selectedExteriorId ? {border: "2px solid orange"} : {border: "1px solid #DEE2E6"}}
                    onClick={ this.handleClick }
                  >
                    { item.name }<br/>
                    ${ item.price }
                  </li>
                ))} */}
              </ul>
              <Link href="/product/grade/[id]" as={`/product/grade/${this.props.ProductState.productGradeId}`}>
                <button>Back</button>
              </Link>
              <Link href="/product/interior/[id]" as={`/product/interior/${this.props.ProductState.productGradeId}`}>
                <button disabled={!(!!this.props.ProductState.selectedExteriorId)}>03 Interior</button>
              </Link>
            </div>
          </div>
        </section>
      </Default>
    )
  }
}

const mapStateToProps = state => {
  const { ProductState } = state
  return { ProductState }
}

export default connect(
mapStateToProps,
{
    getExteriorList,
    selectedProductExterior
}
)(Product)