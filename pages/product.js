import React, { Component } from "react";
import Default from "Components/Layout/PageTemplates/Default";
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import { connect } from 'react-redux';
// Actions
import {getProductList} from "Ducks/lead/test/TestActions";
class product extends Component {
    constructor(props) {
      super(props)
      this.state = {
      }
      this.props.data.fields.forEach(element => {
        this.state[element.id] = false
      })
      this.handleClick = this.handleClick.bind(this)
    }
    handleClick(event) {
      const { id } = event.target
      const newState = { }
      const resetState = () => {
        Object.keys(this.state).forEach(element => (
          newState[element] = false
        ))
        newState[id] = true
      }
      resetState()
      this.setState(newState)
    }
  render(){
    console.log("props: ", this.props)
    console.log("state: ", this.state)
    return (
      <Default>
        <section className="contact-area pb-60">
          <div className="container">
            <div className="section-title">
              <p>01 Grade</p>
                <ul className="p-0 list-unstyled">
                  {this.props.data.fields.map(( item, id ) => (
                    <li
                      key={ id }
                      id= { item.id }
                      style={ this.state[item.id] == true ? {border: "2px solid orange"} : {border: "1px solid #DEE2E6"}}
                      onClick={ this.handleClick }
                    >
                      {item.name}<br/>
                      {item.selling_Price}
                    </li>
                  ))}
                </ul>
              <button>
                Back
              </button>
              <button>
                02 Exterior
              </button>
            </div>
          </div>
        </section>
      </Default>
    )
  }
}
product.getInitialProps = async function({ctx}) {
  const { id } = ctx.query
  const res = await fetch(`http://159.65.14.175:3001/api/products/specificGrades/${id}`)
  const data = await res.json()
  return {data}
}
export default product
// function mapStateToProps({TestState}) {
//     console.log('product mapStateToProps')
//     const{ProductState} = TestState
//     console.log(ProductState)
//     // const pId = ownProps.match.params.id;
//     // const product = state.posts[pId];
//     return {
//         ProductState
//     };
// }
// export default connect(
// mapStateToProps,
// {
//     getProductList
// }
// )(product);