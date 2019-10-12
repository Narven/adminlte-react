import React, { Fragment } from 'react'
import PageHeader from '../widgets/PageHeader'

export interface IPage {
  title?: string,
  children?: any
}

const Page = (props: IPage) => {

  return (
    <Fragment>
      <PageHeader pageTitle={props.title ? props.title : ''} />
      <section className='content'>
        <div className='container-fluid'>
          {props.children}
        </div>
      </section>
    </Fragment>
  )
}

export default Page
