import React, { Component, useContext } from 'react'
import { Route } from 'react-router'
import StandardLayout from './StandardLayout'

interface IProps {
  component: Component,
  layout: JSX.Element,
}

// @ts-ignore
const SecureRoute = ({ component: Component, ...rest }) => {

  return (
    <Route {...rest} render={matchProps => (<StandardLayout><Component {...matchProps} /></StandardLayout>)}
    />
  )

  // return (
  //   <Route {...rest} render={matchProps => (
  //     isLogged && token
  //       ? <StandardLayout><Component {...matchProps} /></StandardLayout>
  //       : <Redirect to={'/'} />
  //   )}
  //   />
  // )
}

export default SecureRoute
