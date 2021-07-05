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
                <Avatar className="w-16 h-16 relative flex flex-shrink-0 btn-bg" >
                    {user?.image ?
                        <img src={user?.image} className="conversationImg" alt="" />
                        : user?.username ? user?.username[0] : ''
                    }
                </Avatar>

                <div className="flex-auto min-w-0 ml-4 mr-6 block">
                    <div className="flex items-center justify-between">
                        <div className="min-w-0">
                            <h1 className="h-text text-base font-semibold">{user?.username}</h1>
                            {/* <p className="truncate">{lastMsg?.text}</p> */}
                        </div>
                        {/* <p className="ml-2 whitespace-no-wrap">10min</p> */}
                    </div>
                </div>
                <div className="animate-ping bg-gray-900 user-text shadow-lg w-3 h-3 mr-4 rounded-full flex flex-shrink-0 block"></div>
            </div>

        </>
    )
}

export default Conversation


// // execute simultaneous requests 
// axios.all([
//     axios.get('https://api.github.com/users/mapbox'),
//     axios.get('https://api.github.com/users/phantomjs')
//   ])
//   .then(responseArr => {
//     //this will be executed only when all requests are complete
//     console.log('Date created: ', responseArr[0].data.created_at);
//     console.log('Date created: ', responseArr[1].data.created_at);
//   });
  
//   // logs:
//   // => Date created:  2011-02-04T19:02:13Z
//   // => Date created:  2017-04-03T17:25:46Z

  

// axios.all([
//     axios.get('https://api.github.com/users/mapbox'),
//     axios.get('https://api.github.com/users/phantomjs')
//   ])
//   .then(axios.spread((user1, user2) => {
//     console.log('Date created: ', user1.data.created_at);
//     console.log('Date created: ', user2.data.created_at);
//   }));
  
//   // logs:
//   // => Date created:  2011-02-04T19:02:13Z
//   // => Date created:  2017-04-03T17:25:46Z
