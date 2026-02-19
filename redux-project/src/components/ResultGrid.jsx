import React, { useEffect } from 'react'
import { getPhoto, getVideo } from '../api/mediaApi'
import { setQuery, setLoading, setError, setResults } from '../redux/features/searchSlice'
import { useSelector } from 'react-redux'

const ResultGrid = () => {

  const { query, activeTab, results, loading, error } = useSelector((store) => store.search)


  useEffect(() => {
    const getData = async () => {

      let data;

      if (activeTab == 'photos') {
        let response = await getPhoto(query)
        data = response.map((item)=>({
          id:item.id,
          type:'photo',
          title:item.alt_description,
          thumbnail:item.urls.small,
          src:item.urls.full,
        }))
      }
      else if (activeTab == 'videos') {
        let response = await getVideo(query)
        data = response.map((item)=>({
          id:item.id,
          type:'video',
          title:item.user.name || 'videoTitle',
          thumbnail:item.image,
          src:item.video_files[0].link, 
        }))
      }

      console.log(data)
    }

    getData()

  }, [query, activeTab])


  return (
    <>
      <div>ResultGrid</div>
      {/* <button className='border-2 px-2 py-1 mx-2' onClick={getPhotoData}
      >Click Here</button> */}
    </>
  )
}

export default ResultGrid