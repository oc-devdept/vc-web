import React, { Component } from "react"
import { connect } from "react-redux"
import Default from "Components/Layout/PageTemplates/Default"
import Link from 'next/link'

import { getProductGrades, selectedProductGrade } from "../../../redux/ducks/product/ProductActions.js"

class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedGradeId: this.props.ProductState.productGradeId
    }

    this.handleOptionChange = this.handleOptionChange.bind(this)
    this.selectedGrade = this.selectedGrade.bind(this)
  }
  
  componentDidMount() {
    this.props.getProductGrades(this.props.selectedModelid)
  }

  //TODO: convert to update global state instead of local state
  handleOptionChange(event) {
    const { id } = event.target
    this.setState({
      selectedGradeId: id
    })
    this.props.selectedProductGrade(id)
  }

  selectedGrade(event) {
    // event.preventDefault()
    this.props.selectedProductGrade(this.state.selectedGradeId)
  }

  render(){
    console.log("props: ", this.props)
    // console.log("state: ", this.state)

    const { data } = this.props.ProductState
    // console.log("data= ", data)

    return (
      <Default>
        <section className="contact-area pb-60">
          <div className="container">
            <div className="section-title">
              <p>01 Grade</p>
                <ul className="p-0 list-unstyled">
                  {!!data &&
                    data.fields.map(( item, id ) => (
                      <li
                        key={ id }
                        id= { item.id }
                        style={ item.id == this.state.selectedGradeId ? 
                          {border: "2px solid orange"} : 
                          {border: "1px solid #DEE2E6"}
                        }
                        onClick={ this.handleOptionChange }
                      >
                        {item.name}<br/>
                        {item.selling_Price}
                      </li>
                    ))
                  }
                </ul>
              <Link href={`/model/${this.props.selectedModelid}`}>
                <a>Back</a>
              </Link>
              <Link href={`/product/exterior/${this.state.selectedGradeId}`}>
                <a disabled={!(!!this.state.selectedGradeId)}>02 Exterior</a>
              </Link>
            </div>
          </div>
        </section>
      </Default>
    )
  }
}

// This can be removed after wiring model page to redux store
Product.getInitialProps = async function({ctx}) {
  const { id } = ctx.query
  return { selectedModelid: id }
}

const mapStateToProps = state => {
  const { ProductState } = state
  return { ProductState }
}

export default connect(
  mapStateToProps,
  {
    getProductGrades,
    selectedProductGrade
  }
)(Product)