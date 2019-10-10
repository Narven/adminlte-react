import React, { Component } from 'react'
import { connect } from 'react-redux'
import IState from '../../interfaces/IState'
import IManager from '../../interfaces/IManager'

interface IProps {
  managerId: number,
  manager?: IManager
  fetchManager?: Function
}

class ManagerHeader extends Component<IProps> {
  render() {
    const { manager } = this.props
    console.debug('manager', manager)
    if(!manager) {
      return null
    }
    return <div>Title: {manager!.title}</div>
  }
}

const mapStateToProps = (state: IState, ownProps: IProps) => {
  return {
    managers: state.managers.find(manager => manager.id === ownProps.managerId)
  }
}

export default connect(mapStateToProps)(ManagerHeader)
