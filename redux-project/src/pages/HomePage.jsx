import React from 'react'
import SearchBar from '../components/SearchBar'
import Tabs from '../components/Tabs'
import ResultGrid from '../components/ResultGrid'
import { useSelector } from 'react-redux'

const HomePage = () => {

    const { query } = useSelector((store) => store.search)
    // console.log(query)

    return (
        <div>
            <SearchBar />

            {query === "" ?
                <div className="flex items-center justify-center h-[60vh]">
                    <div className="text-4xl font-bold text-blue-700 tracking-wide text-center drop-shadow-md">
                        🔎 Search Something!
                    </div>
                </div> :
                <>
                    <Tabs />
                    <ResultGrid />
                </>
            }

        </div>
    )
}

export default HomePage