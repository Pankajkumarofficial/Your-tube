import React from 'react'
import { useSelector } from 'react-redux'
import WHL from '../../Component/WHL/WHL'

const Watchhistory = () => {
  const watchhistoryvideolist = useSelector(s => s.historyreducer)

  return (
    <WHL page={"History"} videolist={watchhistoryvideolist} />
  )
}

export default Watchhistory