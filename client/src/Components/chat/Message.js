import React from 'react'
import { format } from 'timeago.js'


function Message({message, own}) {
    return (
        <>
            <div class={`flex flex-row ${own ? `justify-end` : `justify-start` }`}>
                    <div class={`flex group my-1 flex-col ${own ? `items-end` : `items-start`}`}>
                        <h1 class={`px-4 py-2 ${own ? `rounded-t rounded-l bg-gray-900 text-white`: `rounded-t rounded-r bg-white text-gray-900`} shadow-lg max-w-xs lg:max-w-md`}>
                        {message?.text}
                        </h1>
                        <p className="text-xs my-1 text-gray-200 px-1">{format(message?.createdAt)}</p>
                    </div>
            </div>
        </>
    )
}

export default Message
