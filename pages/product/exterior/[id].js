import React, { Component } from "react";
import Default from "Components/Layout/PageTemplates/Default";
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

class Product extends Component {
    constructor(props) {
      super(props)
      this.state = {
        // selectedGradeId: this.props.data.fields.Color.objects[0].productId,
        selectedExteriorId: "",
      }

      this.handleClick = this.handleClick.bind(this)
    }
    handleClick(event) {
      const { id } = event.target
      this.setState({
        ...this.state,
        selectedExteriorId: id
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
              <p>02 Exterior</p>
                <ul className="p-0 list-unstyled">
                  {this.props.data.fields.Color.objects.map(( item, id ) => (
                    <li 
                      key= { id }
                      id={ item.id }
                      style={ item.id == this.state.selectedExteriorId ? {border: "2px solid orange"} : {border: "1px solid #DEE2E6"}}
                      onClick={ this.handleClick }
                    >
                      { item.name }<br/>
                      ${ item.price }
                    </li>
                  ))}
                </ul>
              <button>
                Back
              </button>
              <Link href={`/product/interior/${this.state.selectedGradeId}`}>
                <button disabled={!(!!this.state.selectedExteriorId)}>03 Interior</button>
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
  const res = await fetch(`http://159.65.14.175:3001/api/products/specificVariantExterior/${id}`)
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