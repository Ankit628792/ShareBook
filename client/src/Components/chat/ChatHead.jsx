import React from 'react'
import { Avatar } from '@material-ui/core'


const ChatHead = ({friend}) => {
    return (
        <>
                <div className="flex">
                <Avatar className={`w-12 h-12 mr-4 relative flex flex-shrink-0 ${friend?.image_url ? 'shadow' : 'btn-bg' }`}>
                    {friend?.image_url ?
                        <img src={friend?.image_url} className="w-full h-full object-cover" alt="" />
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
