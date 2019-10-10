import React from 'react'

interface IProps {
  url?: string,
  width?: number,
  height?: number
}

const Avatar = (props: IProps) => {

  const width = props.width ? props.width : 100
  const height = props.height ? props.height : 100
  const url = props.url ? props.url : `https://picsum.photos/id/239/${width}/${height}`

  return (
    <img
      className="profile-user-img img-responsive img-circle"
      src={url}
      style={{ width, height }}
      alt="User" width={width} height={height}/>
  )
}

export default Avatar
