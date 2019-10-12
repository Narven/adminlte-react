import React, { Fragment } from 'react'

interface IProps {
  title?: string,
  body?: JSX.Element[]
  footer?: JSX.Element[],
  extraClass?: string,
  children?: JSX.Element | undefined
}

const Box = (props: IProps) => {
  return (
    <div className={`box box-warning ${props.extraClass}`}>
      <div className='box-header with-border'>
        <h3 className='box-title'>{props.title && props.title.toString()}</h3>
      </div>

      <div className='box-body'>
        {(props.body && props.body && props.body.length > 0) && props.body.map((item, index) => {
          return <Fragment key={index}>{item}</Fragment>
        })}
        {props.children}
      </div>

      <div className='box-footer'>
        {props.footer && props.footer.map((item: JSX.Element, index) => {
          return (
            <div key={index} className='col-sm-3 col-xs-6'>
              {item}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Box
