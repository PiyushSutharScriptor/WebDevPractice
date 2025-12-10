import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Center = (props) => {
  return (
    <div className='py-8 px-18 flex items-center gap-8 h-[90vh]'>
      <LeftContent />
      <RightContent users={props.users}/>
    </div>
  )
}

export default Center
