import React from 'react'
import Showvideo from '../Showvideo/Showvideo'
import "./Showvideogrid.css"

const Showvideogrid = ({ vid }) => {
    return (
        <div className="Container_ShowVideoGrid">
            {
                vid?.reverse().map(vi => {
                    return (
                        <div key={vi._id} className="video_box_app">
                            <Showvideo vid={vi} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Showvideogrid

