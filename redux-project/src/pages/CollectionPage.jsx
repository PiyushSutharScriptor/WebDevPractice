import React from 'react'
import ResultCard from '../components/ResultCard';

const CollectionPage = () => {

  const data = JSON.parse(localStorage.getItem(('collection')));
  console.log(data)

  return (
    <div>
      {
        data.map((item)=>{
          return <>
          <div>
            <ResultCard item={item} />
          </div>
          </>
        })
      }
    </div>
  )
}

export default CollectionPage