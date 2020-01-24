import React from 'react'

const AccessoriesCartItem = props => {
  return(
    <div className="accessories-cart-item d-flex flex-row align-items-center mb-2">
      <div className="col-1 p-0 pr-1">
        <p style={{fontWeight: 600}}>{props.number}</p>
      </div>
      <div className="col-2 p-0 pr-1">
        <img src={props.image} style={{objectFit:"cover", width:50, height:50}}/>
      </div>
      <div className="col-6 p-0 pr-1 text-uppercase">
        <p style={{fontWeight: 600, lineHeight: 1}} className="mb-1">{props.title}</p>
        <p style={{lineHeight: 1}}>{props.name}</p>
      </div>
      <div className="col-3 p-0 pr-1">
        {props.price}
      </div>
    </div>
  )
}

export default AccessoriesCartItem