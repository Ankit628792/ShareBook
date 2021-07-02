import React from 'react'
import { format } from 'timeago.js'


function Message({message, own}) {
    return (
        <>
            <div class={`flex flex-row ${own ? `justify-end` : `justify-start` }`}>
                {/* <div class="w-8 h-8 relative flex flex-shrink-0 mr-4">
                                        <img class="shadow-md rounded-full w-full h-full object-cover"
                                            src="https://randomuser.me/api/portraits/women/33.jpg"
                                            alt=""
                                        />
                                    </div> */}
                    <div class={`flex group my-1 flex-col ${own ? `items-end` : `items-start`}`}>
                        <h1 class={`px-4 py-2 ${own ? `rounded-t rounded-l bg-gray-900 text-white`: `rounded-t rounded-r bg-white text-gray-900`} shadow-lg max-w-xs lg:max-w-md`}>
                        {message?.text}
                        </h1>
                        <p className="text-xs my-1 text-gray-200 px-1">{format(message?.createdAt)}</p>
                    </div>
            </div>

            {/* <p class="p-4 text-center text-sm text-gray-500">12:40 PM</p>

            <div class="flex flex-row justify-end">
                <div class="messages text-sm text-white grid grid-flow-row gap-2">
                    <div class="flex items-center flex-row-reverse group">
                        <p class="px-6 py-3 rounded-t rounded-l bg-gray-900 user-text shadow-lg max-w-xs lg:max-w-md">Hey! How are you?</p>

                    </div>
                    <div class="flex items-center flex-row-reverse group">
                        <p class="px-6 py-3 rounded-l bg-gray-900 user-text shadow-lg max-w-xs lg:max-w-md">Shall we go for Hiking this weekend?</p>

                    </div>
                    <div class="flex items-center flex-row-reverse group">
                        <div class="block w-64 h-64 relative flex flex-shrink-0 max-w-xs lg:max-w-md" href="#">
                            <img class="absolute shadow-md w-full h-full rounded-l-lg object-cover" src="https://unsplash.com/photos/8--kuxbxuKU/download?force=true&w=640" alt="hiking" />
                        </div>

                    </div>
                    <div class="flex items-center flex-row-reverse group">
                        <p class="px-6 py-3 rounded-b rounded-l bg-gray-900 user-text shadow-lg max-w-xs lg:max-w-md">Lorem ipsum
                            dolor sit
                            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida.</p>

                    </div>
                </div>
            </div> */}

        </>
    )
}

export default Message
