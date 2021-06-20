import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import LocalMallIcon from '@material-ui/icons/LocalMall';
import DropDown from "../Components/DropDown";
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import { useSelector } from 'react-redux';

const userLinks = [{
    id: 0,
    redirect: '/myaccount',
    navText: 'My Account'
},
{
    id: 1,
    redirect: '/mybook',
    navText: 'My Books'
},
{
    id: 2,
    redirect: '/signout',
    navText: 'Signout'
},
];
const nonUserLinks = [{
    id: 0,
    redirect: '/signup',
    navText: 'Signup'
},
{
    id: 1,
    redirect: '/signin',
    navText: 'Signin'
},
]

function Navbar() {

    // const userSession = useSelector((state) => state.userReducer.userSession)
    const userSession = {
        username: 'Ankit'
    }

    const [checkedSate, setCheckedSate] = useState(false)

    const handleCheckedSate = () => {
        checkedSate ? setCheckedSate(false) : setCheckedSate(true)
    }

    return (
        <>
            {/* <!-- hamburger menu --> */}
            <div className="hamburger-menu">
                <label>
                    <input type='checkbox' checked={checkedSate} onClick={handleCheckedSate} />
                    <span className='hamburger-inner'> <span className='hamburger-icon shadow-lg fixed'></span> </span>
                    <ul>
                        <li onClick={handleCheckedSate}> <NavLink to="/">Home</NavLink></li>
                        <li onClick={handleCheckedSate}> <NavLink to="/allbooks">Books Shelf</NavLink></li>
                        <li onClick={handleCheckedSate}> <NavLink to="/about">About</NavLink></li>
                        <li onClick={handleCheckedSate}> <NavLink to="/contactus">Contact</NavLink></li>
                        {/* <li onClick={handleCheckedSate}> <NavLink to="/user">User</NavLink></li> */}
                        {
                            userSession ? 
                            <li onClick={handleCheckedSate}> <NavLink to="/signout">Signout</NavLink></li>
                            :
                            <li onClick={handleCheckedSate}> <NavLink to="/signup">SignUp</NavLink></li>
                        }

                    </ul>
                </label>
            </div>
            {/* <!-- hamburger menu --> */}

            <nav className="navbar">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">

                        <div className="flex-shrink-0 hidden lg:flex items-center justify-center">
                            <img className="h-10 w-auto mx-auto ml-auto inline-block" src="/icons/ms-icon-310x310.png" alt="ShareBook" /> <h1 className="font-bold pl-3 text-3xl inline-block">ShareBook</h1>
                        </div>
                        <div className="flex-1 flex items-center justify-center sm:items-stretch">
                            <div className="hidden nav md:block sm:ml-6">
                                <div className="flex space-x-4">
                                    <NavLink to="/" className="text-gray-900 px-4 py-2 rounded-md text-lg font-medium">Home</NavLink>

                                    <NavLink to="/allbooks" className="text-gray-900 px-4 py-2 rounded-md text-lg font-medium">Books Shelf</NavLink>

                                    <NavLink to="/about" className="text-gray-900 px-4 py-2 rounded-md text-lg font-medium">About</NavLink>

                                    <NavLink to="/contactus" className="text-gray-900 px-4 py-2 rounded-md text-lg font-medium">Contact</NavLink>
                                </div>
                            </div>
                        </div>

                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <NavLink to="/bookmarks" className="bg-gray-800 p-2 mr-4 rounded-full text-gray-50 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 shadow-lg focus:ring-white">
                                <LocalMallIcon />
                            </NavLink>
                            {
                                userSession ? 
                                <>
                                <NavLink to="/chats" className="bg-gray-800 p-2 mr-4 rounded-full text-gray-50 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 shadow-lg focus:ring-white">
                                    <ChatRoundedIcon />
                                </NavLink>
                                <DropDown
                                    className="header__langDropDown"
                                    item={userLinks}
                                    userName={userSession.username[0]}
                                />
                                </>
                                :
                                <DropDown
                                    className="header__langDropDown"
                                    item={nonUserLinks}
                                />

                            }
                            </div>
                    </div>
                </div>

            </nav>
        </>
    )
}

export default Navbar
