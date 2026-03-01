import React from 'react'
import ResultCard from '../components/ResultCard'

const CollectionPage = () => {
  const data = JSON.parse(localStorage.getItem('collection')) || []
  console.log(data.length)

  return (
    <>
      {data.length > 1 ? (
        <div className="w-full max-w-8xl mx-auto px-6">
          <div className="flex flex-wrap gap-4 my-8">
            {data.map((item, idx) => (
              <ResultCard key={idx} idx={idx} item={item} />
            ))}
          </div>
        </div>
      ) : (
        <h1>sdf</h1>
      )}
    </>
  )
}

export default CollectionPage
