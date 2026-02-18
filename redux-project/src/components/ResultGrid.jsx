import React from 'react'
import { getPhoto , getVideo } from '../api/mediaApi'
import { setQuery , setLoading, setError, setResults } from '../redux/features/searchSlice'
import { useSelector } from 'react-redux'

const ResultGrid = () => {

  const{query,activeTab,results,loading,error} = useSelector((store)=>store.search)

  const getPhotoData = async()=>{

    if(activeTab=='photos'){
      const data = await getPhoto()
      console.log(data)
    }
  }

  return (
    <>
      <div>ResultGrid</div>
      <button onClick={getPhotoData}>Click Here</button>
    </>
  )
}

export default ResultGrid