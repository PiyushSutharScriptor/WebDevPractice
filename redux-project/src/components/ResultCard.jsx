import React from 'react'

const ResultCard = (props) => {
  return (
    <div className='flex relative' key={props.idx}>
      {
        props.item.type==='photo' ?
        (<img src={props.item.src} className='object-cover rounded-xl w-60 h-60' alt="image" />) : 
        (<video src={props.item.src} autoPlay loop muted className='object-cover rounded-xl w-60 h-60'/>)
      }
      <div className='w-full absolute capitalize bg-linear-to-b from-transparent to-black text-white p-2 font-semibold bottom-0'>{props.item.title}</div>
    </div>
  )
}

export default ResultCard