import React, { useState, useEffect, useRef } from 'react'
import logo from '../../assets/images/logo1.jpeg' ;
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import axios from 'axios'
import { io } from 'socket.io-client'
import Conversation from './Conversation';
import ChatHead from './ChatHead';
import Message from './Message';
import SendIcon from '@material-ui/icons/Send';


const Chat = () => {
    const userSession = useSelector((state) => state.userReducer.userSession);
    const history = useHistory()
    if (!userSession) {
        history.push('/signin')
    }

    const [showPeople, setshowPeople] = useState(true)
    const chatPeople = () => {
        showPeople ? setshowPeople(false) : setshowPeople(true)
    }

    const scrollRef = useRef()
    const socket = useRef()
    const [conversations, setConversations] = useState([])
    const [currentChat, setCurrentChat] = useState(null)
    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState("")
    const [arrivalMessage, setArrivalMessage] = useState(null)
    const [friend, setFriend] = useState([])

    useEffect(() => {
        socket.current = io(`ws:https://sharebook-chat.herokuapp.com`)        
        socket.current.on('getMessage', (data) => {
            setArrivalMessage({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now()
            })
        })
    }, [])


    useEffect(() => {
        arrivalMessage && currentChat?.members.includes(arrivalMessage.sender) && setMessages((prev) => [...prev, arrivalMessage])
    }, [arrivalMessage, currentChat])

    useEffect(() => {
        socket.current.emit('addUser', userSession.userId)
        socket.current.on('getUsers', (users) => {
        })
    }, [userSession])


    useEffect(() => {
        const getConversations = async () => {
            try {
                const res = await axios.get(`/api/conversations/${userSession.userId}`)
                setConversations(res.data)
            } catch (error) {
                console.log(error)
            }
        }

        getConversations()
    }, [userSession?.userId])


    useEffect(() => {
        const getMessages = async () => {
            try {
                const res = await axios.get(`/api/messages/${currentChat?._id}`)
                setMessages(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getMessages()
    }, [currentChat])


    const handleSubmit = async (e) => {
        e.preventDefault();
        const message = {
            senderId: userSession.userId,
            text: newMessage,
            conversationId: currentChat._id
        }
        const receiverId = currentChat?.members.find(member => member !== userSession.userId)
        socket.current.emit('sendMessage', {
            senderId: userSession.userId,
            receiverId,
            text: newMessage
        })
        try {
            const res = await axios.post('/api/messages', message)
            setMessages([...messages, res.data])

            setNewMessage('')
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        const friendId = currentChat?.members.find((m) => m !== userSession.userId)
        const getUser = async () => {
            try {
                const res = await axios(`/user?userId=${friendId}`)
                setFriend(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getUser()
    }, [currentChat])


    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages])


    return (
        <>
            <div className="bg-white py-0 md:py-10">
                <div className="chats shadow-lg max-w-6xl mx-auto flex antialiased rounded text-gray-200 bg-gray-50 border border-gray-200 overflow-hidden" style={{ height: `calc(100vh - 4rem)` }}>
                    <div className="flex-1 flex flex-col">
                        <main className="flex-grow flex flex-row min-h-0 relative">
                            <section className={`absolute md:relative top-0 left-0 right-0 bottom-0 h-auto flex flex-col flex-none bg-gray-50 overflow-auto ${showPeople ? 'w-full' : 'w-0'} group lg:max-w-sm md:w-2/5 transition-all duration-300 ease-in-out`} style={{ zIndex: 30 }}>
                                <div className="header bg-white px-4 py-3 flex flex-row items-center flex-none justify-between">
                                    <div className="w-48 mx-auto items-center relative flex flex-shrink-0">
                                        <img className="rounded-sm w-full h-full object-cover" alt="logo"
                                            src={logo} />
                                        {/* <h1 className="text-2xl mx-3 font-bold hidden sm:block h-text">Chats</h1> */}
                                    </div>
                                    <button className="md:hidden bg-gray-800 p-2 mr-6 rounded-full text-gray-50 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition-all duration-300 ease-in-out" 
                                    onClick={chatPeople}>
                                        <KeyboardBackspaceIcon />
                                    </button>
                                </div>
                                <div className="search-box p-4 flex-none">
                                    <form onsubmit="">
                                        <div className="relative">
                                            <label>
                                                <input className="rounded-full py-2 pr-6 pl-10 w-full bg-white focus:outline-none text-gray-900 shadow-md focus:shadow-lg transition duration-300 ease-in"
                                                    type="text" value="" placeholder="Search Messenger" />
                                                <span className="absolute top-0 left-0 mt-2 ml-3 inline-block">
                                                    <svg viewBox="0 0 24 24" className="w-6 h-6">
                                                        <path fill="#bbb"
                                                            d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                                                    </svg>
                                                </span>
                                            </label>
                                        </div>
                                    </form>
                                </div>

                                <div className="contacts p-2 flex-1 overflow-y-scroll">
                                    {
                                        conversations.map((c, i) => (
                                            <div key={i} onClick={() => (setCurrentChat(c))}>
                                                <div onClick={chatPeople}>
                                                <Conversation key={i} conversation={c} currentUser={userSession} />
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>

                            </section>
                            <section className="flex flex-col flex-auto border-l border-gray-400 z-20">
                                {
                                    currentChat ?
                                        <>
                                            <div className="chat-header px-6 py-4 flex flex-row flex-none justify-between items-center bg-white shadow-md z-30">
                                                <ChatHead friend={friend} />

                                                <button href="/chats" className="bg-gray-800 p-2 mr-4 rounded-full md:hidden text-gray-50 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" onClick={chatPeople}>
                                                    <ChatRoundedIcon />
                                                </button>

                                            </div>

                                            <div className="chat-body p-4 flex-1 overflow-y-scroll overflow-x-hidden z-10 ">
                                                {messages.map((m, i) => (
                                                    <div ref={scrollRef}>
                                                        <Message key={i} message={m} own={m.senderId === userSession.userId} />
                                                    </div>
                                                ))}
                                            </div>

                                            <div class="chat-footer flex-none z-20 bg-white">
                                                <div class="chat-footer flex-none z-20 bg-white">
                                                    <form class="flex flex-row items-center p-4" onSubmit={handleSubmit}>
                                                        <div class="relative flex-grow mx-3">
                                                            <input class="rounded-full py-2 pl-3 pr-10 w-full border border-gray-800 focus:border-gray-700 bg-white shadow-lg focus:outline-none text-gray-500 focus:shadow-md"
                                                                type="text"
                                                                placeholder="Type a message ..."
                                                                onChange={(e) => setNewMessage(e.target.value)}
                                                                value={newMessage}
                                                            />
                                                        </div>
                                                        <button type="submit" onClick={handleSubmit} class="flex flex-shrink-0 focus:outline-none mx-2 block text-gray-900 hover:text-gray-700 w-6 h-6">
                                                            <SendIcon />
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                        </>
                                        :
                                        <span className="text-center text-gray-500 text-5xl mt-64">Open a conversation <br /> to start a chat</span>
                                }
                            </section>
                        </main>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chat
