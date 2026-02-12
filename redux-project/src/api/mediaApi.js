import axios from 'axios'   

const U_KEY = import.meta.env.VITE_UNSPLASH_KEY
const P_KEY = import.meta.env.VITE_PEXELS_KEY


export const getData = async(query,page=1,per_page=15)=>{
    try{
        const res = await axios.get('https://api.unsplash.com/search/photos',{
            params:{query,page,per_page},
            headers:{Authorization:`Client-ID ${U_KEY}`}
        })
        // console.log(res)
        // return res.data
        return res.data.results
    }
    catch(err){
        console.log("Error : " , err);
    }
}


export const getVideo = async(query,per_page=15)=>{
    try{
        const res = await axios.get('https://api.pexels.com/videos/search',{
            params:{query,per_page},
            headers:{Authorization:P_KEY}
        })

        // return res
        // return res.data
        return res.data.videos

    }
    catch(err){
        console.log("Error : " , err)
    }
}