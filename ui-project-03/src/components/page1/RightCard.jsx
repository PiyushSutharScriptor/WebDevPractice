import React from 'react'
import RightCardContent from './RightCardContent';
import RightCardImage from './RightCardImage';

const RightCard = (props) => {
  return (
    <div className='h-full w-80 rounded-4xl shrink-0 relative overflow-hidden'>
      <RightCardImage image={props.image}/>
      <RightCardContent intro={props.intro} color={props.color} tag={props.tag} idx={props.idx}/>
    </div>
  )
}

export default RightCard
