import React from 'react'

const Bottom = (props) => {
  return (
    <>
        <div className='flex justify-center mt-8'>
        <h1 className='border-2 text-xl rounded border-amber-300 px-6 font-bold py-3'>Page : {props.index}</h1>
      </div>

      <div className='flex gap-6 justify-center mt-4'>
        <button
          className='bg-green-500 px-4 py-3 text-lg mb-4 rounded cursor-pointer font-semibold text-black active:scale-95 '
          style={{opacity:props.index==1 ? 0.5 : 1}}    
          onClick={()=>{
            props.setIndex(props.index-1<1 ? 1 : props.index-1)
            if(props.index>1){
              props.setUserData([])
            }
          }}
        >
          Previous
        </button>

        <button
          className='bg-green-500 px-4 py-3 text-lg mb-4 rounded cursor-pointer font-semibold text-black active:scale-95 '
          onClick={()=>{
            props.setIndex(props.index+1)
            props.setUserData([])
          }}
        >
          Next
        </button>
      </div>
    </>
  )
}

export default Bottom
