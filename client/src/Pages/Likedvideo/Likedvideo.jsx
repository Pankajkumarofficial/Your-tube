import React from 'react'
import { useSelector } from 'react-redux'
import WHL from '../../Component/WHL/WHL'

const Likedvideo = () => {
  const likedvideolist = useSelector((state) => state.likedvideoreducer)

  return (
    <WHL page={"Liked Video"} videolist={likedvideolist} />
  )
}

export default Likedvideo