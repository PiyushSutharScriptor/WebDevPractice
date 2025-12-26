import axios from 'axios'
import React, { useState } from 'react'

const AxiosOpera = () => {

    const getData = async () => {
        const response = await axios.get('https://picsum.photos/v2/list')
        console.log(response);
        console.log(response.data);
    }

    const [data, setData] = useState([])
    const showData = async () => {
        const response = await axios.get('https://picsum.photos/v2/list')
        setData(response.data);
    }

    return (
        <>
            <div>
                <h1>Picsum Data : </h1>
                <button onClick={getData}>Get Picsum data</button>
            </div>

            <div>
                <h1>Show Picsum data : </h1>
                <button onClick={showData}>Click To View Data</button>

                <div>
                    {data.map((el) => {
                        return <img src={el.download_url} alt="" />
                    })}
                </div>

            </div>
        </>
    )
}

export default AxiosOpera
