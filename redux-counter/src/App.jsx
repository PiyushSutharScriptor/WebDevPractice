import { useDispatch, useSelector } from 'react-redux'
import { decrement, decrement10, increment, increment5 } from './redux/slices/counterSlice'

const App = () => {

  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.value)

  return (
    <>
      <div className='flex flex-col items-center mt-4 gap-3'>

        <h1 className='border-2 border-green-400 font-bold px-3 py-2 rounded text-3xl bg-yellow-100'>{count}</h1>

        <div className='flex flex-row gap-3'>  
          <button
            className='border-2 border-black bg-zinc-500 text-white px-2 py-2 font-semibold rounded cursor-pointer '
            onClick={() => {
              if(count>=1){
                dispatch(decrement())
              }
              else{
                alert("Value will not go negative")
              }
            }}
          >
            Decrement
          </button>

          <button
            className='border-2 border-black bg-zinc-500 text-white px-2 py-2 font-semibold rounded cursor-pointer '
            onClick={() => {
              dispatch(increment())
            }}
          >
            Increment
          </button>

        </div>

        <div className='flex flex-row gap-3'>  
          <button
            className='border-2 border-black bg-zinc-500 text-white px-2 py-2 font-semibold rounded cursor-pointer '
            onClick={() => {
              if(count>=10){
                dispatch(decrement10())
              }
              else{
                alert("Value will not go negative")
              }
            }}
          >
            Decrement By 10
          </button>

          <button
            className='border-2 border-black bg-zinc-500 text-white px-2 py-2 font-semibold rounded cursor-pointer '
            onClick={() => {
              dispatch(increment5())
            }}
          >
            Increment By 5
          </button>

        </div>


      </div>
    </>
  )
}

export default App