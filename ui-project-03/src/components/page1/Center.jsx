import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Center = () => {
  return (
    <div className='py-8 px-18 flex items-center gap-8 bg-blue-700 h-[85vh]'>
      <LeftContent />
      <RightContent />
    </div>
  )
}

export default Center
