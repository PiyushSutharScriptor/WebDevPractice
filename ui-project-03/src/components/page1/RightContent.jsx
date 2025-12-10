import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div className='h-full p-7 w-2/3 flex flex-nowrap overflow-x-auto  gap-4'>

      {props.users.map((obj,idx)=>{
        return <RightCard image={obj.image} intro={obj.intro} tag={obj.tag} key={idx} idx={idx} />
      })}
    </div>
  )
}

export default RightContent
