import React from 'react'
import { getPhoto , getVideo } from '../api/mediaApi'
import { setQuery , setLoading, setError, setResults } from '../redux/features/searchSlice'
import { useSelector } from 'react-redux'

const ResultGrid = () => {

  const{query,activeTab,results,loading,error} = useSelector((store)=>store.search)

  const getPhotoData = async()=>{

    let data;

    if(activeTab=='photos'){
      data = await getPhoto(query)
    }
    else if(activeTab=='videos'){
      data = await getVideo(query)
    }

    console.log(data)
    
  }


  return (
    <>
      <div>ResultGrid</div>
      <button className='border-2 px-2 py-1 mx-2' onClick={getPhotoData}>Click Here</button>
    </>
  )
}

export default ResultGrid