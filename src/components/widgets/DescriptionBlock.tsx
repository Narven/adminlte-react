import React from 'react'

interface IProps {
  title: string,
  subtitle?: string
  value?: string,
  icon?: string,
  hasRightBorder: boolean
}

const DescriptionBlock = (props: IProps) => {

  const classes = 'fa ' + props.icon
  const border = props.hasRightBorder ? 'description-block border-right' : 'description-block'

  return (
    <div className={border}>
      <span className='description-percentage text-green'>
        <i className={classes} /> {props.value}
      </span>
      <h5 className='description-header'>{props.subtitle}</h5>
      <span className='description-text'>{props.title}</span>
    </div>
  )
}

export default DescriptionBlock
