import React, { useEffect } from 'react'
import { getPhoto, getVideo } from '../api/mediaApi'
import { setQuery, setLoading, setError, setResults } from '../redux/features/searchSlice'
import { useDispatch, useSelector } from 'react-redux'

const ResultGrid = () => {

  const { query, activeTab, results, loading, error } = useSelector((store) => store.search)
  const dispatch = useDispatch()

  useEffect(() => {
    const getData = async () => {

      try {

        let data = [];
        dispatch(setLoading())
        if (activeTab == 'photos') {
          let response = await getPhoto(query)
          data = response.map((item) => ({
            id: item.id,
            type: 'photo',
            title: item.alt_description,
            thumbnail: item.urls.small,
            src: item.urls.full,
          }))
        }
        else if (activeTab == 'videos') {
          let response = await getVideo(query)
          data = response.map((item) => ({
            id: item.id,
            type: 'video',
            title: item.user.name || 'videoTitle',
            thumbnail: item.image,
            src: item.video_files[0].link,
          }))
        }

        // console.log(data)
        dispatch(setResults(data))
      }
      catch (err) {
        dispatch(setError(err))
      }
    }

    getData()

  }, [query, activeTab])

  if(error) return <h1>Error in fetching data</h1>
  if(loading) return <h1>Loading....</h1>


  return (
    <>
      <div>ResultGrid</div>
      {
        results.map((item,idx)=>{
          return item.title
        })  
      }
    </>
  )
}

export default ResultGrid