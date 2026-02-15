import React from 'react'
// import { getData, getVideo } from './api/mediaApi'
import SearchBar from './components/SearchBar'
import Tabs from './components/Tabs'
import ResultGrid from './components/ResultGrid'

const App = () => {

  return (
    <>
    <div>
      <SearchBar />
      <Tabs />
      <ResultGrid />
    </div>
    </>
  )
}

export default App