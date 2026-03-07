import React from 'react'
import ResultCard from '../components/ResultCard'
import SearchBar from '../components/SearchBar'
import { useSelector } from 'react-redux'
import CollectionCard from '../components/CollectionCard'

const CollectionPage = () => {

  let collection = useSelector(state => state.collection.items)

  return (
    <div>
      <SearchBar />


      <div className="w-full max-w-8xl mx-auto px-6">
        <div className="flex flex-wrap gap-4 my-8 justify-center">
        {
          collection.map((item, idx) => {
            return <div key={idx}>
              <CollectionCard item={item} />
            </div>
          })
        }
      </div>
    </div>

    </div >
  )
}

export default CollectionPage
