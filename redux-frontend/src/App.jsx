import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './redux/slices/counterSlice'

const App = () => {

  const dispatch = useDispatch()
  const count = useSelector((state)=>state.counter.value)

  return (
    <div>
      <h1>{count}</h1>

      <button className='' onClick={()=>{
        dispatch(increment())
      }}>
        Increment
      </button>

      <button className='' onClick={()=>{
        dispatch(decrement())
      }}>
        Increment
      </button>
    </div>
  )
}

export default App