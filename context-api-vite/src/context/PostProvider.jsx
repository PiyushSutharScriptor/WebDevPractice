import React from 'react'
import { createContext } from 'react'

const PostContext = createContext()

const PostProvider = ({children}) => {
  return (
    <div>
        <PostContext.Provider value='Post Text'>
            {children}
        </PostContext.Provider>
    </div>
  )
}

export {PostContext}
export default PostProvider