import React from 'react'

interface IBrandLink {
  image: string
  text: string
}

const BrandLink = (props: IBrandLink) => {
  return (
    <a href={'#'} className="brand-link">
      <img src={props.image}
           alt={props.text}
           className="brand-image img-circle elevation-3"
           style={{opacity: .8}} />
      <span className="brand-text font-weight-light">{props.text}</span>
    </a>
  )
}

export default BrandLink
