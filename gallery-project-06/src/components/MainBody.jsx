import React from 'react'

const MainBody = (props) => {
    return (
        <>
            <div className='flex flex-wrap mt-18 gap-4 items-center justify-center'>
                {props.printUserData}
            </div>
        </>
    )
}

export default MainBody
