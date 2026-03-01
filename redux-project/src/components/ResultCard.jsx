import React from 'react'

const ResultCard = (props) => {
  return (
    
    <div className='flex relative' key={props.idx}>

      <a target='_blank' href={props.item.url}>
      {
        props.item.type==='photo' ?
        (<img src={props.item.src} className='object-cover rounded-xl w-60 h-60' alt="image" />) : 
        (<video src={props.item.src} autoPlay loop muted className='object-cover rounded-xl w-60 h-60'/>)
      }
      </a>

      <div className='w-full flex justify-center gap-2 items-center absolute capitalize bg-linear-to-b from-transparent to-black text-white p-2 bottom-0'>
        <div className='font-medium h-14 overflow-hidden'>{props.item.title}</div>
        <button className='cursor-pointer rounded px-2 py-1 bg-blue-500 text-white text-sm font-semibold hover:bg-blue-700 active:scale-95'>Save</button>
      </div>

    </div>
  ) 
}

export default ResultCard