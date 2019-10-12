import React, { Fragment } from 'react'

interface IProps {
  value: number,
  description: string
}

const ProgressBar = (props: IProps) => {

  const percentage = props.value ? props.value + '%' : '0%'

  return (
    <Fragment>
      <div className='progress'>
        <div className='progress-bar' style={{width: percentage}}/>
      </div>
      <span className='progress-description'>{props.description}</span>
    </Fragment>
  )
}

export default ProgressBar
