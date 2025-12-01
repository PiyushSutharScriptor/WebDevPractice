import React from 'react'

const Card = (props) => {

    console.log(props)

  return (
    <div className='cardComp'>
        <h1>This is card </h1>
        <img src="https://plus.unsplash.com/premium_photo-1752856416727-c54531a650fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDYzfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D" alt="cardImage" />
        <h2>Name : {props.user}</h2>
        <h2>Age : {props.age}</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel est culpa odio fugit harum ullam amet quam repudiandae dolores quisquam?</p>
        <div><img src={props.image} alt="propsImage"/></div>
        <button className='btn'>View Profile</button>
    </div>
  )
}

export default Card
