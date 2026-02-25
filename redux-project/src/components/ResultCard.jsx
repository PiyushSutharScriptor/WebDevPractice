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

      <div className='w-full absolute capitalize bg-linear-to-b from-transparent to-black text-white p-2 bottom-0'>
        <div className='font-medium'>{props.item.title}</div>
        <button className='cursor-pointer mt-2 rounded bg-blue-500 text-white px-1 py-0.5 text-sm font-semibold '>Save</button>
      </div>

    </div>
  )
}

export default ResultCard