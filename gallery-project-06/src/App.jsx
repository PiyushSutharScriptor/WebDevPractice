import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './components/Navbar';
import Bottom from './components/Bottom';
import MainBody from './components/MainBody';

const App = () => {

  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`)
    setUserData(response.data);
  }

   useEffect(()=>{
    getData();
  },[index])

  let printUserData = <div className="loader absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

  if (userData.length > 0) {
    printUserData = userData.map((el,id) => {
      return <div key={id}>
        <a href={el.url} target='_blank'>
          <img className='w-72 h-50 object-cover rounded-xl' src={el.download_url} alt="" />
          <h3 className='ml-5 text-xl font-semibold'>{el.author}</h3>
        </a>
      </div>
    })
  }

  useEffect(()=>{
    console.log(index)
  })
 

  return (
    <div className='bg-black text-white h-full w-full p-5'>
      
      <div><Navbar /></div>
      
      <MainBody  printUserData={printUserData} />

      <Bottom index={index} setIndex={setIndex} setUserData={setUserData} />

    </div>
  )
}

export default App
