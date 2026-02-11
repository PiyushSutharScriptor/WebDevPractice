import axios from 'axios'   

const U_KEY = import.meta.env.UNSPLASH_KEY
const P_KEY = import.meta.env.PEXELS_KEY

export const getData = async(query,page=1,per_page=15)=>{
    try{
        const res = await axios.get('https://api.unsplash.com/search/photos',{
            params:{query,page,per_page},
            headers:{Authorization:`Client-ID ${U_KEY}`}
        })
        console.log(res)
    }
    catch(err){
        console.log("Error : " , err);
    }
}