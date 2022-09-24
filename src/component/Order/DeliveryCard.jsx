import React from 'react'

function DeliveryCard(props) {
  return (
    <div>
        <img src={props.src} alt="img"/>
        <span>{props.discount-2}</span>
        <span>{props.deliverytime}</span>
        <span>{props.restaurant}</span>
        <span>{props.tag}</span>
        <span>{props.rating}</span>
        <span>{props.ruppee}</span>
        <span>{props.orders}</span>
    </div>
  )
}

export default DeliveryCard;