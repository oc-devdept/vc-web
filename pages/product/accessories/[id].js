import React, { Component } from "react";
import Default from "Components/Layout/PageTemplates/Default";
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

class Product extends Component {
    constructor(props) {
      super(props)
      this.state = {
        // selectedGradeId: this.props.data.fields.Rims.objects[0].productId, // need to pull off global state
        // selectedRimsId: "",
        selectedOptions: { }
      }

      // Pulls every product option's id and stores it in state
      this.props.data.fields.map(item => {
        Object.values(item).map(value => {
          value.map(item => {
            this.state.selectedOptions[item.id] = false
          })
        })
      })

      this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
      const { id } = event.target
      const value = this.state.selectedOptions[id]
      this.setState({
        // ...this.state,
        selectedOptions: {
          ...this.state.selectedOptions,
          [id]: !value
        }
      })
    }

  render(){
    console.log("props: ", this.props)
    console.log("state: ", this.state)

    return (
      <Default>
        <section className="contact-area pb-60">
          <div className="container">
            <div className="section-title">
              <p>05 Accessories</p>
              <div className="p-0">
                {this.props.data.fields.map(( item, id ) => (
                  <div className="product-option-group" key={ id }>
                    { Object.entries(item).map(([key, value], id) => (
                      <div key={ id }>
                        <p><strong>Product Option Group: { key }</strong></p>
                        <ul className="p-0">
                          { value.map(( item, id ) => (
                            <li 
                              key={ id }
                              id= { item.id }
                              className="product-option list-unstyled" 
                              style={ this.state.selectedOptions[item.id] ? {border: "2px solid orange"} : {border: "1px solid #DEE2E6"}}
                              onClick={ this.handleClick }
                            >
                              { item.productOption.name }<br/>
                              ${ item.productOption.price }
                            </li>                              
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <button>
                Back
              </button>
              <Link href="#">
                <button disabled={true}>Checkout</button>
              </Link>
            </div>
          </div>
        </section>
      </Default>
    )
  }
}

Product.getInitialProps = async function({ctx}) {
  const { id } = ctx.query
  const res = await fetch(`http://159.65.14.175:3001/api/products/specificGradeProductOption/${id}`)
  const data = await res.json()
  return {data}
}

export default Product;

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