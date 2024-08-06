import React from 'react'
import { useSelector } from 'react-redux'
import WHL from '../../Component/WHL/WHL'

const Watchlater = () => {
  const watchlatervideolist = useSelector((s) => s.watchlaterreducer)
  
  return (
    <WHL page={"Watch Later"} videolist={watchlatervideolist} />
  )
}

export default Watchlater