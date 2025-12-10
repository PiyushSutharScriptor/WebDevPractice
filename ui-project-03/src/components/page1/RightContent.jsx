import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className='h-full p-7 w-2/3 flex flex-nowrap overflow-x-auto  gap-4'>

      {props.users.map((obj,idx)=>{
        return <RightCard image={obj.image} intro={obj.intro} tag={obj.tag} key={idx} idx={idx} color={obj.color} />
      })}
    </div>
  )
}

export default RightContent
