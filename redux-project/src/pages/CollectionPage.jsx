import React from 'react'
import ResultCard from '../components/ResultCard'
import SearchBar from '../components/SearchBar'
import { useDispatch, useSelector } from 'react-redux'
import CollectionCard from '../components/CollectionCard'
import { clearCollection, clearToast } from '../redux/features/collectionSlice'

const CollectionPage = () => {

  let collection = useSelector(state => state.collection.items)
  const dispatch = useDispatch();

  const clearAllItems = ()=>{
    dispatch(clearCollection(collection))
    dispatch(clearToast())
  }

  return (
    <div>
      <SearchBar />

      <div className="w-full max-w-8xl mx-auto mx-6">

        <div className='flex items-center justify-between px-4 py-4'>
          <h2 className='sm:text-3xl text-2xl font-bold uppercase'>Your Collection</h2>
          <button disabled={collection.length===0} onClick={()=>clearAllItems()} className='bg-red-600 cursor-pointer text-white px-2 py-1 font-semibold rounded hover:bg-red-700'>Clear Collection</button>
        </div>

        <div className="flex flex-wrap gap-4 my-8 justify-center">
          {/* {console.log(collection)} */}
          {
            collection.length > 0 ?
              collection.map((item, idx) => {
                return <div key={idx}>
                  <CollectionCard item={item} />
                </div>
              })
              :
              <div className="flex items-center justify-center h-[60vh]">
                <div className="text-4xl font-bold text-blue-700 tracking-wide text-center drop-shadow-md">
                  🫙 Add Items To Collection!
                </div>
              </div>
          }
        </div>
      </div>

    </div >
  )
}

export default CollectionPage
