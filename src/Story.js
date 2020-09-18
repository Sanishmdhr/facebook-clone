import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Story.css"
function Story({ Icon, image, profileSrc, title }) {
  return (
    <React.Fragment>
      {
        Icon &&
        <div style={{ backgroundImage: `url(${image})` }} className="create">
          <Icon/>
          <h4>{title}</h4>
        </div>
      }
      {
        profileSrc && 
        <div style={{ backgroundImage: `url(${image})` }} className="story">
        <Avatar src={profileSrc} className='story__avatar' />
        <h4>{title}</h4>
        </div>
      }
     
    </React.Fragment>

  )
}

export default Story
