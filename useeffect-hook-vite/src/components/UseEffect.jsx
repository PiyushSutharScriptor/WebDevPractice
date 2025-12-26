import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    const[num, setNum] = useState(0);
    const[num1, setNum1] = useState(10);
    const[num2, setNum2] = useState(10);
    const[num3, setNum3] = useState(0);
    /*
    ==>this will runs everytime
    useEffect(()=>{
        console.log("useEffect running...")
    })
    */

    
    // ==>this will run only 1 time because of empty [] dependencies 
    useEffect(()=>{
        console.log("one time useEffect running...")
    },[])
    
    //runs when num state change
    useEffect(()=>{
        console.log("useEffect running...")
    },[num])

    //runs only for num1 not for num2 
    // because the num2 is not defined in dependencies []
    useEffect(()=>{
        console.log("Running for Num 1")
    },[num1])


    //runs for both num1 and num2
    useEffect(()=>{
        console.log("Running for both Num1 and Num2")
    },[num1,num2])

    //function call in useEffect 
    // function funCall(){
    //     console.log("Num 3 is running..")
    // }
    const funCall = ()=>{
        console.log("Num 3 is running...")
    }
    useEffect(()=>{
        funCall();
    },[num3])


  return (
    <>
        <div>
            <h1>Basic UseEffect Print (see console)</h1>
        </div>

        <hr />

        <div>
            <h1>useEffect with num : </h1> 
            <h2>Num : {num}</h2>
            <button onClick={()=>{
                setNum(num+1)
            }}>Add</button>
            {/* the useEffect keep running on click */}
        </div>

        <hr />

        <div>
            <h1>useEffect with only with num1 : </h1> 
            <h2>Num 1 : {num1}</h2>
            <h2>Num 2 : {num2}</h2>

            <button onClick={()=>{
                setNum1(num1+1)
            }}>Add Num 1</button>

            <button onClick={()=>{
                setNum2(num2+10)
            }}>Add Num 2</button>
        </div>

        <hr />

        <div>
            <h1>function call in useEffect</h1>
            <h2>Num 3 : {num3}</h2>
            <button onClick={()=>{
                setNum3(num3+1)
            }}>Click To Change</button>
        </div>

        <hr />
    </>
  )
}

export default UseEffect
