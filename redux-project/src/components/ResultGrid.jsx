import React from 'react'
import { getPhoto , getVideo } from '../api/mediaApi'
import { setQuery , setLoading, setError, setResults } from '../redux/features/searchSlice'
import { useSelector } from 'react-redux'

const ResultGrid = () => {

  const{query,activeTab,results,loading,error} = useSelector((store)=>store.search)

  return (
    <div>ResultGrid</div>
  )
}

export default ResultGrid