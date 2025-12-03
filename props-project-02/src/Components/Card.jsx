import React from 'react'

const Card = (props) => {
  return (
    <>
      <div className='cardComp'>

        <div className='header'>
          <img src={props.image} />
          <h1>{props.name}</h1>
          <p>{props.role}</p>
        </div>

        <div className='cardBody'>

          <div>
            <p className='pbold'>Followers</p>
            <p>{props.followers}</p>
          </div>
          <div>
            <p className='pbold'>Following</p>
            <p>{props.following}</p>
          </div>
        </div>

        <div className='cardBody'>
          <div>
            <p className='pbold'>Pay</p>
            <p>{props.pay} $/hour</p>
          </div>
          <div>
            <p className='pbold'>company</p>
            <p>{props.company}</p>
          </div>
        </div>

        <div className='bottom'>
          <button className='btn'>Follow</button>
          <button className='btn'>Message</button>
        </div>
      </div>
    </>
  )
}

export default Card
