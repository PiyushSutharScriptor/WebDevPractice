import { createSlice } from "@reduxjs/toolkit";
import { Bounce, ToastContainer, toast } from 'react-toastify';

const initialState = {
    items:JSON.parse(localStorage.getItem("collection")) || []
}

const collectionSlice = createSlice({
    name:"collection",
    initialState,
    reducers:{
        addCollection:(state,action)=>{
            const alreadyExists = state.items.find(
                item => item.id==action.payload.id
            )

            if(!alreadyExists){
                state.items.push(action.payload)
                localStorage.setItem('collection',JSON.stringify(state.items))
            }
        },
        removeCollection:(state,action)=>{
            state.items = state.items.filter(
                item=> item.id!==action.payload
            )
            console.log(state.items)
            localStorage.setItem('collection', JSON.stringify(state.items))
        },
        clearCollection:(state)=>{
            state.items = [];
            localStorage.setItem('collection',JSON.stringify(state.items))
        },
        addToast : ()=>{
            toast.success('Added To Collection', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,    
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        },
        removeToast : ()=>{
            toast.error('Removed From Collection', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,    
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        },
        clearToast : ()=>{
            toast.error('Removed All From Collection', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,    
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
    }  
})


export const{
    addCollection,
    removeCollection,
    clearCollection,
    addToast,
    removeToast,
    clearToast,
} = collectionSlice.actions;
export default collectionSlice.reducer;
 