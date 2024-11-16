import React from 'react'
type messageType = string

function Popup({ text }: { text: messageType }) { // Now `text` is just a string
    return (
        <div className='bg-green-400 p-2 text-green-800 font-semibold text-xl'>
            {text}
        </div>
    )
}

export default Popup