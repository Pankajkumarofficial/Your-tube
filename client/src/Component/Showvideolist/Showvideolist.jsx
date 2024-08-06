import React from 'react'
import { useSelector } from 'react-redux'
import Showvideo from "../Showvideo/Showvideo"

const Showvideolist = ({ videoid }) => {
  const vids = useSelector(state => state.videoreducer)

  return (
    <div className="Container_ShowVideoGrid">
      {
        vids?.data.filter(q => q._id === videoid).map(vi => {
          return (
            <div className="video_box_app" key={vi._id}>
              <Showvideo vid={vi} />
            </div>
          )
        })
      }
    </div>
  )
}

export default Showvideolist