import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import LocalMallIcon from '@material-ui/icons/LocalMall';
import DropDown from "../Components/DropDown";
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';

const redirects = [
    'My Account',
    'BookMarks',
    'Sign Out'
];

function Navbar() {

    const [checkedSate, setCheckedSate] = useState(false)

    const handleCheckedSate = () => {
        checkedSate ? setCheckedSate(false) : setCheckedSate(true)
    }

    return (
        <>

            {/* <!-- hamburger menu --> */}
            <div class="hamburger-menu">
                <label>
                    <input type='checkbox' checked={checkedSate} onClick={handleCheckedSate} />
                    <span class='hamburger-inner'> <span class='hamburger-icon shadow-lg fixed'></span> </span>
                    <ul>
                        <li onClick={handleCheckedSate}> <NavLink to="/">Home</NavLink></li>
                        <li onClick={handleCheckedSate}> <NavLink to="/allbooks">Books Rack</NavLink></li>
                        <li onClick={handleCheckedSate}> <NavLink to="/about">About</NavLink></li>
                        <li onClick={handleCheckedSate}> <NavLink to="/contactus">Contact</NavLink></li>
                        {/* <li onClick={handleCheckedSate}> <NavLink to="/user">User</NavLink></li> */}
                        <li onClick={handleCheckedSate}> <NavLink to="/log">SignUp</NavLink></li>

                    </ul>
                </label>
            </div>
            {/* <!-- hamburger menu --> */}

            <nav className="">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">

                        <div className="flex-shrink-0 hidden md:block flex items-center">
                            <img className="h-8 w-auto mx-auto ml-auto" src="/icons/ms-icon-310x310.png" alt="Workflow" /> <h1 className="font-bold pl-3 text-2xl">ShareBook</h1>
                        </div>
                        <div className="flex-1 flex items-center justify-center sm:items-stretch">
                            <div className="hidden nav md:block sm:ml-6">
                                <div className="flex space-x-4">
                                    <NavLink to="/" className="text-gray-900 hover:text-blue-600 px-4 py-2 rounded-md text-lg font-medium">Home</NavLink>

                                    <NavLink to="/allbooks" className="text-gray-900 hover:text-blue-600 px-4 py-2 rounded-md text-lg font-medium">All Books</NavLink>

                                    <NavLink to="/about" className="text-gray-900 hover:text-blue-600 px-4 py-2 rounded-md text-lg font-medium">About</NavLink>

                                    <NavLink to="/contactus" className="text-gray-900 hover:text-blue-600 px-4 py-2 rounded-md text-lg font-medium">Contact</NavLink>
                                </div>
                            </div>
                        </div>

                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <a href="/chats" className="bg-gray-800 p-2 mr-4 rounded-full text-gray-50 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                <ChatRoundedIcon />
                            </a>
                            <a href="/bookmarks" className="bg-gray-800 p-2 mr-4 rounded-full text-gray-50 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                <LocalMallIcon />
                            </a>
                            <DropDown
                                className="header__langDropDown"
                                items={redirects}
                            />
                        </div>
                    </div>
                </div>

            </nav>
        </>
    )
}

export default Navbar
