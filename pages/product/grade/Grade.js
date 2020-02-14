import React, { Component } from "react"
// import { connect } from "react-redux"

// import { selectedProductGrade, getProductGradeData } from "Ducks/product/ProductActions"

class Grade extends Component {
  constructor(props) {
    super(props)

    this.handleOptionChange = this.handleOptionChange.bind(this)
  }

  handleOptionChange(event) {
    const { id } = event.target
    this.props.selectedProductGrade(id)
    this.props.getProductGradeData(id)
  }

  isValidated() {
    return !!this.props.ProductGrade.id
  }

  render() {
    const { fields } = this.props.ProductGrade.data
    // console.log("grade props= ", this.props)
    return(
      <div className="configure-sect row">
        <div className="configure-gall col-lg-8 d-flex flex-column">
          <img src={ this.props.ProductGrade.images } className="configCoverImg align-self-center"/>
        <h3 className="text-uppercase text-center m-2">{ this.props.ProductGrade.name }</h3>      
        <p>{ this.props.ProductGrade.description }</p>
        <button
          className="d-flex align-items-center px-2 py-1"
          style={{border:"1px solid #4b6674", backgroundColor:'transparent', width:'max-content'}}
        >
          <i className='fas fa-car mr-1' style={{color:"#4b6674", fontSize:24}}/>
          <a href='/contact-us'>
            <p style={{fontSize:12, color:"#4b6674"}}>BOOK TEST DRIVE</p>
          </a>
        </button>
        </div>
        <div className="configure-opt col-lg-4">
          <h3 className="configure-opt-title">01 Grade</h3>
          <ul className="list-unstyled">
            {!!fields &&
              fields.map(( item, id ) => (
                <li className="configure-list"
                  key={ id }
                  id= { item.id }
                  style={item.id == this.props.ProductGrade.id ? 
                    {border: "2px solid #F29D30", color: "#F29D30", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", fontWeight:"bold"} : 
                    {border: "1px solid #DEE2E6"}
                  }
                  onClick={ this.handleOptionChange }
                >
                  {item.name}<br/>
                  ${item.selling_Price}
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   const { ProductGrade } = state.ProductState
//   return { ProductGrade }
// }

// export default connect(
//   mapStateToProps,
//   {
//     selectedProductGrade,
//     getProductGradeData
//   }
// )(Grade)

export default Grade