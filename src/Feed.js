import React from 'react'
import './Feed.css'
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'

function Feed() {
  return (
    <div className='feed'>
      <StoryReel/>
      <MessageSender />
      <Post
        profilePic="https://scontent.fktm8-1.fna.fbcdn.net/v/t1.0-9/38818096_972232459625944_7848431320391745536_n.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=CreGs9hPoiIAX-BISbf&_nc_oc=AQmT68od2bH9RPN1eNucDGTUPeiPCzE9z3u7ESLCOidKQDVucE8H80SvbwMQNAFey5lQuPsX64FHUD8XnPpcRCSU&_nc_ht=scontent.fktm8-1.fna&oh=22ff37bc751bef717620aae91b8c933b&oe=5F89E0E7"
        message="It works"
        timestamp="Timestap"
        username="Sanish Manandhar"
        image="https://miro.medium.com/max/12032/0*c-bcoWl4XqWRBUTn"
      />
      <Post
        profilePic="https://scontent.fktm8-1.fna.fbcdn.net/v/t1.0-9/38818096_972232459625944_7848431320391745536_n.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=CreGs9hPoiIAX-BISbf&_nc_oc=AQmT68od2bH9RPN1eNucDGTUPeiPCzE9z3u7ESLCOidKQDVucE8H80SvbwMQNAFey5lQuPsX64FHUD8XnPpcRCSU&_nc_ht=scontent.fktm8-1.fna&oh=22ff37bc751bef717620aae91b8c933b&oe=5F89E0E7"
        message="It works"
        timestamp="Timestap"
        username="Sanish Manandhar"
      />
      <Post/>
    </div>
  )
}

export default Feed
