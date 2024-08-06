import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Leftsidebar from '../../Component/Leftsidebar/Leftsidebar';
import Showvideogrid from '../../Component/Showvideogrid/Showvideogrid';
import Describechannel from './Describechannel';

const Channel = ({ seteditcreatechanelbtn, setvideouploadpage }) => {
  const { cid } = useParams()

  const vids = useSelector(state => state.videoreducer)?.data?.filter(q => q?.videochanel === cid).reverse()

  return (
    <div className="container_Pages_App">
      <Leftsidebar />
      <div className="container2_Pages_App">
        <Describechannel cid={cid} setvideouploadpage={setvideouploadpage} seteditcreatechanelbtn={seteditcreatechanelbtn} />
        <Showvideogrid vids={vids} />
      </div>
    </div>
  )
}

export default Channel