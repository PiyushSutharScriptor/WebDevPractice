import React from 'react'

const FetchApi = () => {

    const getAPIData = () => {
        const data = fetch('https://jsonplaceholder.typicode.com/todos/1')
        console.log(data);
        // the above line will execute before printing the data 
        // the data will be in promise state and process synchronessly
    }

    const getAPIAsync = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        console.log(data);
        //using async and await to wait for the promise to get fulfilled and fetch the data with API
    }
     
    return (
        <>
            <div>
                <h1>Fetch API : (without async)</h1>
                <button onClick={getAPIData}>Get Data through API</button>
            </div>

            <div>
                <h1>Fetch API : (with async)</h1>
                <button onClick={getAPIAsync}>Get Data through API</button>
            </div>
        </>
    )
}

export default FetchApi
