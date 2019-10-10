import React, { useContext, Fragment } from 'react'
import Avatar from './Avatar'

export enum NetworkVisibility {
  Online = 'online',
  Offline = 'offline',
  Unknown = 'unknown'
}

interface IProps {
  state?: NetworkVisibility
}

const AdminCard = (props: IProps) => {

  // TODO: add some default photo
  const avatarUrl = 'assets/images/babyboss.png'

  const networkVisibility = (visibility?: NetworkVisibility) => {
    switch (visibility) {
      case NetworkVisibility.Online:
        return <Fragment><i className='fa fa-circle text-success text-sm' /> Online</Fragment>
      case NetworkVisibility.Offline:
        return <Fragment><i className='fa fa-circle text-red text-sm' /> Offline</Fragment>
      case NetworkVisibility.Unknown:
      default:
        return <Fragment><i className='fa fa-circle text-gray text-sm' /> N/A</Fragment>
    }
  }

  return (
    <div className='user-panel'>
      <div className='pull-left image'>
        <Avatar url={avatarUrl} width={48} height={48} />
      </div>
      <div className='pull-left info'>
        <p>'N/A'}</p>
        <span className='text-sm'>{networkVisibility(props.state)}</span>
      </div>
    </div>
  )
}

export default AdminCard
