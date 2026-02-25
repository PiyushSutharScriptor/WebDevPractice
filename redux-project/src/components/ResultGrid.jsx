import React, { useEffect } from 'react'
import { getPhoto, getVideo } from '../api/mediaApi'
import { setLoading, setError, setResults } from '../redux/features/searchSlice'
import ResultCard from './ResultCard'
import { useDispatch, useSelector } from 'react-redux'
            
const ResultGrid = () => {

  const { query, activeTab, results, loading, error } = useSelector((store) => store.search)
  const dispatch = useDispatch()

  useEffect(() => {

    if(!query) return ;

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
            url:item.links.html
          }))
        }
        else if (activeTab == 'videos') {
          let response = await getVideo(query)
          // console.log(response)
          data = response.map((item) => ({
            id: item.id,
            type: 'video',
            title: item.user.name || 'videoTitle',
            thumbnail: item.image,
            src: item.video_files[0].link,
            url:item.url
          }))
        }

        // console.log(data)
        dispatch(setResults(data))
      }
      catch (err) {
        dispatch(setError(err.message))
      }
    }

    getData()

  }, [query, activeTab])

  if(error) return <h1>Error in fetching data</h1>
  if(loading) return <h1>Loading....</h1>


  return (
    <div className="w-full max-w-8xl mx-auto px-6">
      <div className="flex flex-wrap gap-4 my-8 justify-center">
        {results.map((item, idx) => (
          <ResultCard idx={idx} item={item} />
        ))}
      </div>
    </div>
  );
}
 
export default ResultGrid