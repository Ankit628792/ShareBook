import React, { useState, useEffect } from 'react'
import { Avatar } from '@material-ui/core'
import axios from 'axios'

function Conversation({ conversation, currentUser }) {
    
    const [user, setUser] = useState()

    useEffect(() => {
        const friendId = conversation.members.find((m) => m !== currentUser.userId)
        const getUser = async () => {
            try {
                const res = await axios(`/api/user/user?userId=${friendId}`)
                setUser(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getUser()
    }, [conversation, currentUser])


    return (
        <>

            <div className="flex justify-between items-center p-3 my-2 cursor-pointer bg-white shadow-sm hover:shadow-lg rounded-lg relative">
                <Avatar className={`w-16 h-16 relative flex flex-shrink-0 ${user?.image_url ? 'shadow' : 'btn-bg' }`} >
                    {user?.image_url ?
                        <img src={user?.image_url} className="w-full h-full object-cover" alt="" />
                        : user?.username ? user?.username[0] : ''
                    }
                </Avatar>

                <div className="flex-auto min-w-0 ml-4 mr-6 block">
                    <div className="flex items-center justify-between">
                        <div className="min-w-0">
                            <h1 className="h-text text-base font-semibold">{user?.username}</h1>
                            <p className="line-clamp-1 truncate">{conversation?.bookname}</p>
                        </div>

                    </div>
                </div>
                <div className="animate-ping bg-gray-900 user-text shadow-lg w-3 h-3 mr-4 rounded-full flex flex-shrink-0 block"></div>
            </div>

        </>
    )
}

export default Conversation

