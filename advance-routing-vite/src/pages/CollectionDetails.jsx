import React from 'react'
import { useParams } from 'react-router-dom'

const CollectionDetails = () => {

    const params = useParams();
    console.log(params)
    console.log(params.id)

  return (
    <h1>CollectionDetails of {params.id}</h1>
  )
}

export default CollectionDetails