import React from 'react'

const DirectAccess = () => {

    let val = 20;

    const changeVal = ()=>{
        console.log(val);
        val++;
        console.log(val);
    }

    return (
        <div>
            <h1>Value : {val}</h1>
            <button onClick={changeVal}>Click Me</button>
        </div>
    )
}

export default DirectAccess
