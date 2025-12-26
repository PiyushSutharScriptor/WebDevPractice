import React from 'react'
import axios from 'axios'

const Axios = () => {

    const getDataAxios = ()=>{
        const response = axios.get('https://jsonplaceholder.typicode.com/todos/4')
        console.log(response);
    }

    const getDataAxiosAsync = async()=>{
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/4')
        console.log(response);
    }

    const getDataAxiosThen = ()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos/4')
        .then(response => console.log(response))
    }

    const getDataAxiosThenCatch = ()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos/4')
        .then(response => console.log(response))
        .catch(err => console.log(err))
    }

    const getDataAxiosJsonData = async()=>{
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/4')
        console.log(response.data);   
    }

    const getDataAxiosDataDestruct = async()=>{
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos/4')
        console.log(data);
    }

    return (
        <>
            <div>
                <h1>Axios API : (without Async)</h1>
                <button onClick={getDataAxios}>Get Data (Axios)</button>
            </div>

            <div>
                <h1>Axios API : (with Async)</h1>
                <button onClick={getDataAxiosAsync}>Get Data (Axios Async)</button>
            </div>

            <div>
                <h1>Axios API : (with .then)</h1>
                <button onClick={getDataAxiosThen}>Get Data (Axios .then)</button>
            </div>

            <div>
                <h1>Axios API : (with .then and .catch)</h1>
                <button onClick={getDataAxiosThenCatch}>Get Data (Axios .then & .catch)</button>
            </div>

            <div>
                <h1>Axios API : (json data)</h1>
                <button onClick={getDataAxiosJsonData}>Get Json Data (Axios async)</button>
            </div>

            <div>
                <h1>Axios API : (data with destructring)</h1>
                <button onClick={getDataAxiosDataDestruct}>Get Data with destructring (Axios async)</button>
            </div>

        </>
    )
}

export default Axios
