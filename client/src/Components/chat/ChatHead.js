import React from 'react'
import { Avatar } from '@material-ui/core'


const ChatHead = ({friend}) => {
    return (
        <>
                <div className="flex">
                <Avatar className="w-12 h-12 mr-4 relative flex flex-shrink-0 btn-bg">
                    {friend?.image ?
                        <img src={friend?.image} className="conversationImg" alt="" />
                        : friend?.username ? friend?.username[0] : ''
                    }
                </Avatar>
                   
                    <div className="text-sm">
                        <p className="font-bold text-base">{friend?.username}</p>
                        <p className="max-w-xs line-clamp-1 text-sm">{friend?.about ? friend.about : 'Loading About ...'}</p>
                    </div>
                </div>
        </>
    )
}

export default ChatHead
