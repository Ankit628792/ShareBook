import React , {useState} from 'react'
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import SendIcon from '@material-ui/icons/Send';

function ChatPage() {

    const [showPeople, setshowPeople] = useState(false)
    const chatPeople =() => {
       showPeople ? setshowPeople(false) : setshowPeople(true)
    }
    return (
        <div className="bg-gray-300 py-6 md:py-14">
            <div className="chats shadow-lg max-w-6xl mx-auto flex antialiased rounded text-gray-200 bg-gray-50 overflow-hidden" style={{ height: '90vh' }}>
                <div className="flex-1 flex flex-col">
                    <main className="flex-grow flex flex-row min-h-0 relative ">
                        <section className={`absolute md:relative top-0 left-0 right-0 bottom-0 h-auto flex flex-col flex-none overflow-auto ${showPeople ? 'w-full' : 'w-0'} group lg:max-w-sm md:w-2/5 transition-all duration-300 ease-in-out bg-gray-100`} style={{zIndex: 30}}>
                            <div className="header px-4 py-2 flex flex-row items-center flex-none justify-between">
                                <div className="w-16 h-16 mx-2 items-center relative flex flex-shrink-0">
                                    <img className="rounded-full w-full h-full object-cover" alt="logo"
                                        src="/icons/ms-icon-310x310.png" />
                                <h1 className="text-2xl mx-3 font-bold hidden sm:block">Chats</h1>
                                </div>
                                <button href="/chats" className="md:hidden bg-gray-800 p-2 mr-6 rounded-full text-gray-50 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition-all duration-300 ease-in-out" onClick={chatPeople}>
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
                            {/* <div className="active-users flex flex-row p-2 overflow-auto w-0 min-w-full">
                                <div className="text-sm text-center mr-4">
                                    <button className="flex-shrink-0 focus:outline-none block bg-white shadow-lg text-gray-600 rounded-full w-20 h-20"
                                        type="button">
                                        <svg className="w-full h-full fill-current" viewBox="0 0 24 24">
                                            <path d="M17 11a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4h4z" />
                                        </svg>
                                    </button>
                                    <p>Your Story</p>
                                </div>
                                <div className="text-sm text-center mr-4"><div className="p-1 border-4 border-blue-600 rounded-full">
                                    <div className="w-16 h-16 relative flex flex-shrink-0">
                                    <img className="shadow-md rounded-full w-full h-full object-cover"
                                        src="https://randomuser.me/api/portraits/women/12.jpg"
                                        alt=""
                                    />
                                </div></div><p>Anna</p></div>
                                <div className="text-sm text-center mr-4"><div className="p-1 border-4 border-transparent rounded-full">
                                    <div className="w-16 h-16 relative flex flex-shrink-0">
                                    <img className="shadow-md rounded-full w-full h-full object-cover"
                                        src="https://randomuser.me/api/portraits/men/75.jpg"
                                        alt=""
                                    />
                                    <div className="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0">
                                        <div className="bg-green-500 rounded-full w-3 h-3"></div>
                                    </div>
                                </div></div><p>Jeff</p></div>
                                <div className="text-sm text-center mr-4"><div className="p-1 border-4 border-blue-600 rounded-full">
                                    <div className="w-16 h-16 relative flex flex-shrink-0">
                                    <img className="shadow-md rounded-full w-full h-full object-cover"
                                        src="https://randomuser.me/api/portraits/women/42.jpg"
                                        alt=""
                                    />
                                </div></div><p>Cathy</p></div>
                                <div className="text-sm text-center mr-4"><div className="p-1 border-4 border-transparent rounded-full">
                                    <div className="w-16 h-16 relative flex flex-shrink-0">
                                    <img className="shadow-md rounded-full w-full h-full object-cover"
                                        src="https://randomuser.me/api/portraits/women/87.jpg"
                                        alt=""
                                    />
                                    <div className="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0">
                                        <div className="bg-green-500 rounded-full w-3 h-3"></div>
                                    </div>
                                </div></div><p>Madona</p></div>
                                <div className="text-sm text-center mr-4"><div className="p-1 border-4 border-transparent rounded-full">
                                    <div className="w-16 h-16 relative flex flex-shrink-0">
                                    <img className="shadow-md rounded-full w-full h-full object-cover"
                                        src="https://randomuser.me/api/portraits/women/23.jpg"
                                        alt=""
                                    />
                                    <div className="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0">
                                        <div className="bg-green-500 rounded-full w-3 h-3"></div>
                                    </div>
                                </div></div><p>Emma</p></div>
                                <div className="text-sm text-center mr-4"><div className="p-1 border-4 border-blue-600 rounded-full">
                                    <div className="w-16 h-16 relative flex flex-shrink-0">
                                    <img className="shadow-md rounded-full w-full h-full object-cover"
                                        src="https://randomuser.me/api/portraits/men/65.jpg"
                                        alt=""
                                    />
                                </div></div><p>Mark</p></div>
                                <div className="text-sm text-center mr-4"><div className="p-1 border-4 border-blue-600 rounded-full">
                                    <div className="w-16 h-16 relative flex flex-shrink-0">
                                    <img className="shadow-md rounded-full w-full h-full object-cover"
                                        src="https://randomuser.me/api/portraits/women/65.jpg"
                                        alt=""
                                    />
                                </div></div><p>Eva</p></div>
                                <div className="text-sm text-center mr-4"><div className="p-1 border-4 border-transparent rounded-full">
                                    <div className="w-16 h-16 relative flex flex-shrink-0">
                                    <img className="shadow-md rounded-full w-full h-full object-cover"
                                        src="https://randomuser.me/api/portraits/men/31.jpg"
                                        alt=""
                                    />
                                    <div className="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0">
                                        <div className="bg-green-500 rounded-full w-3 h-3"></div>
                                    </div>
                                </div></div><p>Max</p></div>
                                <div className="text-sm text-center mr-4"><div className="p-1 border-4 border-blue-600 rounded-full">
                                    <div className="w-16 h-16 relative flex flex-shrink-0">
                                    <img className="shadow-md rounded-full w-full h-full object-cover"
                                        src="https://randomuser.me/api/portraits/men/81.jpg"
                                        alt=""
                                    />
                                </div></div><p>Adam</p></div>
                            </div>  */}
                            <div className="contacts p-2 flex-1 overflow-y-scroll">
                                <div className="flex justify-between items-center p-3 my-2 cursor-pointer bg-white shadow-sm hover:shadow-lg rounded-lg relative">
                                    <div className="w-16 h-16 relative flex flex-shrink-0">
                                        <img className="shadow-md rounded-full w-full h-full object-cover"
                                            src="https://randomuser.me/api/portraits/women/61.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="flex-auto min-w-0 ml-4 mr-6 block">
                                        <div className="flex items-center justify-between text-sm">
                                            <div className="min-w-0">
                                                <h1>Angelina </h1>
                                                <p className="truncate">Ok, see you at the subway in a bit.</p>
                                            </div>
                                            <p className="ml-2 whitespace-no-wrap">Just now</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center p-3 my-2 cursor-pointer bg-white shadow-sm hover:shadow-lg rounded-lg relative">
                                    <div className="w-16 h-16 relative flex flex-shrink-0">
                                        <img className="shadow-md rounded-full w-full h-full object-cover"
                                            src="https://randomuser.me/api/portraits/men/97.jpg"
                                            alt=""
                                        />
                                        <div className="absolute bg-gray-700 p-1 rounded-full bottom-0 right-0">
                                            <div className="bg-green-500 rounded-full w-3 h-3"></div>
                                        </div>
                                    </div>
                                    <div className="flex-auto min-w-0 ml-4 mr-6 block">
                                        <div className="flex items-center justify-between text-sm">
                                            <div className="min-w-0">
                                                <h1 className="font">Tony Stark</h1>
                                                <p className="truncate">Hey, Are you there?</p>
                                            </div>
                                            <p className="ml-2 whitespace-no-wrap">10min</p>
                                        </div>
                                    </div>
                                    <div className="bg-gray-900 user-text shadow-lg w-3 h-3 rounded-full flex flex-shrink-0 block"></div>
                                </div>
                                <div className="flex justify-between items-center p-3 my-2 cursor-pointer bg-white shadow-sm hover:shadow-lg rounded-lg relative">
                                    <div className="w-16 h-16 relative flex flex-shrink-0">
                                        <img className="shadow-md rounded-full w-full h-full object-cover"
                                            src="https://randomuser.me/api/portraits/women/33.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="flex-auto min-w-0 ml-4 mr-6 block">
                                        <div className="flex items-center justify-between text-sm text-gray-600">
                                            <div className="min-w-0">
                                                <h1>Scarlett Johansson</h1>
                                                <p className="truncate">You sent a photo.</p>
                                            </div>
                                            <p className="ml-2 whitespace-no-wrap">1h</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center p-3 my-2 cursor-pointer bg-white shadow-sm hover:shadow-lg rounded-lg relative">
                                    <div className="w-16 h-16 relative flex flex-shrink-0">
                                        <img className="shadow-md rounded-full w-full h-full object-cover"
                                            src="https://randomuser.me/api/portraits/men/12.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="flex-auto min-w-0 ml-4 mr-6 block">
                                        <div className="flex items-center justify-between text-sm text-gray-600">
                                            <div className="min-w-0">
                                                <h1>John Snow</h1>
                                                <p className="truncate">You missed a call John.
                                                </p>
                                            </div>
                                            <p className="ml-2 whitespace-no-wrap">4h</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center p-3 my-2 cursor-pointer bg-white shadow-sm hover:shadow-lg rounded-lg relative">
                                    <div className="w-16 h-16 relative flex flex-shrink-0">
                                        <img className="shadow-md rounded-full w-full h-full object-cover"
                                            src="https://randomuser.me/api/portraits/women/23.jpg"
                                            alt="User2"
                                        />
                                    </div>
                                    <div className="flex-auto min-w-0 ml-4 mr-6 block">
                                        <div className="flex items-center justify-between text-sm text-gray-600">
                                            <div className="min-w-0">
                                                <h1>Emma Watson</h1>
                                                <p className="truncate">You sent a video.
                                                </p>
                                            </div>
                                            <p className="ml-2 whitespace-no-wrap">11 Feb</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="flex justify-between items-center p-3 my-2 cursor-pointer bg-white shadow-sm hover:shadow-lg rounded-lg relative">
                                    <div className="w-16 h-16 relative flex flex-shrink-0">
                                        <img className="shadow-md rounded-full w-full h-full object-cover"
                                            src="https://randomuser.me/api/portraits/women/87.jpg"
                                            alt="User2"
                                        />
                                        <div className="absolute bg-gray-700 p-1 rounded-full bottom-0 right-0">
                                            <div className="bg-green-500 rounded-full w-3 h-3"></div>
                                        </div>
                                    </div>
                                    <div className="flex-auto min-w-0 ml-4 mr-6 block">
                                        <div className="flex items-center justify-between text-sm text-gray-600">
                                            <div className="min-w-0">
                                                <h1>Captain</h1>
                                                <p className="truncate">Ah, it was an awesome..
                                                </p>
                                            </div>
                                            <p className="ml-2 whitespace-no-wrap">1 Feb</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center p-3 my-2 cursor-pointer bg-white shadow-sm hover:shadow-lg rounded-lg relative">
                                    <div className="w-16 h-16 relative flex flex-shrink-0">
                                        <img className="shadow-md rounded-full w-full h-full object-cover"
                                            src="https://randomuser.me/api/portraits/men/45.jpg"
                                            alt="User2"
                                        />
                                    </div>
                                    <div className="flex-auto min-w-0 ml-4 mr-6 block">
                                        <div className="flex items-center justify-between text-sm text-gray-600">
                                            <div className="min-w-0">
                                                <h1>Bruce Lee</h1>
                                                <p className="truncate">You are great.
                                                </p>
                                            </div>
                                            <p className="ml-2 whitespace-no-wrap">23 Jan</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </section>
                        <section className="flex flex-col flex-auto border-l border-gray-400 z-20">
                            <div className="chat-header px-6 py-4 flex flex-row flex-none justify-between items-center bg-white shadow-md z-30">
                                <div className="flex">
                                    <div className="w-12 h-12 mr-4 relative flex flex-shrink-0">
                                        <img className="shadow-md rounded-full w-full h-full object-cover"
                                            src="https://randomuser.me/api/portraits/women/33.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="text-sm">
                                        <p className="font-bold">Scarlett Johansson</p>
                                        <p>Active 1h ago</p>
                                    </div>
                                </div>

                                <button href="/chats" className="bg-gray-800 p-2 mr-4 rounded-full md:hidden text-gray-50 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" onClick={chatPeople}>
                                <ChatRoundedIcon />
                            </button>

                            </div>
                            <div className="chat-body p-4 flex-1 overflow-y-scroll z-10">
                                <div className="flex flex-row justify-start">
                                    <div className="w-8 h-8 relative flex flex-shrink-0 mr-4">
                                        <img className="shadow-md rounded-full w-full h-full object-cover"
                                            src="https://randomuser.me/api/portraits/women/33.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="messages text-sm text-gray-700 grid grid-flow-row gap-2">
                                        <div className="flex items-center group">
                                            <p className="px-6 py-3 rounded-t rounded-r bg-white shadow-lg max-w-xs lg:max-w-md text-gray-200">Hey! How are you?</p>
                                           
                                        </div>
                                        <div className="flex items-center group">
                                            <p className="px-6 py-3 rounded-r bg-white shadow-lg max-w-xs lg:max-w-md text-gray-200">Shall we go for Hiking this weekend?</p>
                                           
                                        </div>
                                        <div className="flex items-center group">
                                            <p className="px-6 py-3 rounded-b rounded-r bg-white shadow-lg max-w-xs lg:max-w-md text-gray-200">Lorem ipsum
                                                dolor sit
                                                amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                                dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida.</p>
                                           
                                        </div>
                                    </div>
                                </div>
                                <p className="p-4 text-center text-sm text-gray-500">FRI 3:04 PM</p>
                                <div className="flex flex-row justify-end">
                                    <div class="messages text-sm text-white grid grid-flow-row gap-2">
                                        <div class="flex items-center flex-row-reverse group">
                                            <p class="px-6 py-3 rounded-t rounded-l bg-gray-900 user-text shadow-lg max-w-xs lg:max-w-md">Hey! How are you?</p>
                                            
                                        </div>
                                        <div class="flex items-center flex-row-reverse group">
                                            <p class="px-6 py-3 rounded-l bg-gray-900 user-text shadow-lg max-w-xs lg:max-w-md">Shall we go for Hiking this weekend?</p>
                                            
                                        </div>
                                        <div class="flex items-center flex-row-reverse group">
                                            <p class="px-6 py-3 rounded-b rounded-l bg-gray-900 user-text shadow-lg max-w-xs lg:max-w-md">Lorem ipsum
                                                dolor sit
                                                amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                                dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida.</p>
                                            
                                        </div>
                                    </div>
                                </div>
                                <p class="p-4 text-center text-sm text-gray-500">SAT 2:10 PM</p>
                                <div class="flex flex-row justify-start">
                                    <div class="w-8 h-8 relative flex flex-shrink-0 mr-4">
                                        <img class="shadow-md rounded-full w-full h-full object-cover"
                                            src="https://randomuser.me/api/portraits/women/33.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div class="messages text-sm text-gray-700 grid grid-flow-row gap-2">
                                        <div class="flex items-center group">
                                            <p class="px-6 py-3 rounded-t rounded-r bg-white shadow-lg max-w-xs lg:max-w-md text-gray-200">Hey! How are you?</p>
                                            
                                        </div>
                                        <div class="flex items-center group">
                                            <p class="px-6 py-3 rounded-r bg-white shadow-lg max-w-xs lg:max-w-md text-gray-200">Shall we go for Hiking this weekend?</p>
                                            
                                        </div>
                                        <div class="flex items-center group">
                                            <p class="px-6 py-3 rounded-b rounded-r bg-white shadow-lg max-w-xs lg:max-w-md text-gray-200">Lorem ipsum
                                                dolor sit
                                                amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                                dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida.</p>
                                            
                                        </div>
                                    </div>
                                </div>
                                <p class="p-4 text-center text-sm text-gray-500">12:40 PM</p>
                                <div class="flex flex-row justify-end">
                                    <div class="messages text-sm text-white grid grid-flow-row gap-2">
                                        <div class="flex items-center flex-row-reverse group">
                                            <p class="px-6 py-3 rounded-t rounded-l bg-gray-900 user-text shadow-lg max-w-xs lg:max-w-md">Hey! How are you?</p>
                                            
                                        </div>
                                        <div class="flex items-center flex-row-reverse group">
                                            <p class="px-6 py-3 rounded-l bg-gray-900 user-text shadow-lg max-w-xs lg:max-w-md">Shall we go for Hiking this weekend?</p>
                                            
                                        </div>
                                        <div class="flex items-center flex-row-reverse group">
                                            <a class="block w-64 h-64 relative flex flex-shrink-0 max-w-xs lg:max-w-md" href="#">
                                                <img class="absolute shadow-md w-full h-full rounded-l-lg object-cover" src="https://unsplash.com/photos/8--kuxbxuKU/download?force=true&w=640" alt="hiking" />
                                            </a>
                                            
                                        </div>
                                        <div class="flex items-center flex-row-reverse group">
                                            <p class="px-6 py-3 rounded-b rounded-l bg-gray-900 user-text shadow-lg max-w-xs lg:max-w-md">Lorem ipsum
                                                dolor sit
                                                amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                                dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida.</p>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="chat-footer flex-none z-20 bg-white">
                                <div class="flex flex-row items-center p-4">
                                    
                                    <button type="button" class="flex flex-shrink-0 focus:outline-none mx-2 block text-gray-900 hover:text-gray-700 w-6 h-6">
                                        <svg viewBox="0 0 20 20" class="w-full h-full fill-current">
                                            <path d="M11,13 L8,10 L2,16 L11,16 L18,16 L13,11 L11,13 Z M0,3.99406028 C0,2.8927712 0.898212381,2 1.99079514,2 L18.0092049,2 C19.1086907,2 20,2.89451376 20,3.99406028 L20,16.0059397 C20,17.1072288 19.1017876,18 18.0092049,18 L1.99079514,18 C0.891309342,18 0,17.1054862 0,16.0059397 L0,3.99406028 Z M15,9 C16.1045695,9 17,8.1045695 17,7 C17,5.8954305 16.1045695,5 15,5 C13.8954305,5 13,5.8954305 13,7 C13,8.1045695 13.8954305,9 15,9 Z" />
                                        </svg>
                                    </button>
                                    
                                    <div class="relative flex-grow mx-3">
                                        <label>
                                            <input class="rounded-full py-2 pl-3 pr-10 w-full border border-gray-800 focus:border-gray-700 bg-white shadow-lg focus:bg-gray-900 focus:outline-none text-gray-500 focus:shadow-md"
                                                type="text" placeholder="Type Your Message ..." />
                                        </label>
                                    </div>
                                    <button type="button" class="flex flex-shrink-0 focus:outline-none mx-2 block text-gray-900 hover:text-gray-700 w-6 h-6">
                                        <SendIcon />
                                    </button>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default ChatPage
