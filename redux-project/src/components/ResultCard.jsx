import React from 'react'

const ResultCard = (props) => {
  return (
    <div className='flex mx-auto'>
      {
        props.item.type==='photo' ?
        (<img src={props.item.src} className='object-cover rounded-xl w-60 h-60' alt="image" />) : 
        (<video src={props.item.src} controls/>)
      }

    </div>
  )
}

export default ResultCard