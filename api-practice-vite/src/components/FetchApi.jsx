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

    const getAPIThen = ()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(prom => console.log(prom))
        .catch(err => console.log(err))
    }

    const getAPIFetchJsonData = async()=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/4')
        const data = await response.json()
        console.log(data);
    }   

    const getAPIFetchJsonDataBlk = async()=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json();
        console.log(data);
    }
     
    return (
        <>
            <div>
                <h1>Fetch API : (without async)</h1>
                <button onClick={getAPIData}>Get Data (Fetch)</button>
            </div>

            <div>
                <h1>Fetch API : (with async)</h1>
                <button onClick={getAPIAsync}>Get Data(Fetch Async)</button>
            </div>

            <div>
                <h1>Fetch API : (with .then)</h1>
                <button onClick={getAPIThen}>Get Data (Fetch .then)</button>
            </div>

            <div>
                <h1>Fetch API : (json data with fetch and async)</h1>
                <button onClick={getAPIFetchJsonData}>Get json Data (Fetch async)</button>
            </div>

            <div>
                <h1>Fetch API : (json data with fetch and async) bulk data</h1>
                <button onClick={getAPIFetchJsonDataBlk}>Get Bulk json Data (Fetch async)</button>
            </div>
        </>
    )
}

export default FetchApi
