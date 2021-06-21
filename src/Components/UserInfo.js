import React, { useState } from 'react'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import { motion } from 'framer-motion'
import { pageTransition, pageZoom } from '../util';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { patchData } from '../requests/requestData';

function UpdateUser() {

    const userSession = useSelector((state) => state.userReducer.userSession);
    const [isEdit, setisEdit] = useState(false)
    const { username, email, password, location, about, phone , _id} = userSession;
    const [data, setData] = useState({ username, email, password, location, about, phone, _id });

    const handleUser = (e) => {
        e.preventDefault();
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const res = patchData(data, `/updateuser:${_id}`)
        res.then((res) => {
            if (res.status === 201) {
                console.log('update success')
                setisEdit(false)
            }
            else{
                console.log('Updation error')
            }
            
        })
    }

    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageZoom}
            transition={pageTransition} className="about grid place-items-center my-10">
            <div className="bg-white shadow-lg overflow-hidden sm:rounded-lg max-w-screen-lg p-4 pt-0 md:max-w-screen-md sm:max-w-screen-sm">
                <div className="p-4 sm:px-6 relative flex items-center justify-between">
                    <div>
                        <h3 className="text-lg leading-6 font-medium h-text">Applicant Information</h3>
                        <p className="my-1 max-w-2xl p-text">#{userSession.userId}</p>
                        <p className="p-text inline-block">Verified User <VerifiedUserIcon className="text-green-500" /> </p>
                    </div>
                    <div className="h-24 w-24 sm:w-28 sm:h-28 rounded-full">
                        <img className="w-full h-full object-cover rounded-full" src="https://images.unsplash.com/photo-1622796476782-35e5163bbd6f?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2MHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="border-t border-gray-200">
                        <dl>
                            <div className="px-4 py-5 sm:grid border-gray-50 border sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-base font-medium h-text">User name</dt>
                                <dd className="mt-1 text-sm p-text sm:mt-0 sm:col-span-2">
                                    <input disabled={!isEdit} type="text" name="username" className="bg-white border-none outline-none" value={data.username} onChange={handleUser} />
                                </dd>
                            </div>
                            <div className="px-4 py-5 sm:grid border-gray-50 border sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-base font-medium h-text">Email address</dt>
                                <dd className="mt-1 text-sm p-text sm:mt-0 sm:col-span-2">
                                    <input disabled={!isEdit} type="email" name="email" className="bg-white border-none outline-none" value={data.email} onChange={handleUser} />
                                </dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid border-gray-50 border sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-base font-medium h-text">Password</dt>
                                <dd className="mt-1 text-sm p-text sm:mt-0 sm:col-span-2">
                                    <input disabled={!isEdit} type="password" name="password" className="bg-white border-none outline-none" value={data.password} onChange={handleUser} />
                                </dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid border-gray-50 border sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-base font-medium h-text">Contact Number</dt>
                                <dd className="mt-1 text-sm p-text sm:mt-0 sm:col-span-2">
                                    <input disabled={!isEdit} type="number" name="phone" className="bg-white border-none outline-none" value={data.phone} onChange={handleUser} />
                                </dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid border-gray-50 border sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-base font-medium h-text">City Location</dt>
                                <dd className="mt-1 text-sm p-text sm:mt-0 sm:col-span-2">
                                    <input disabled={!isEdit} type="text" name="location" className="bg-white border-none outline-none" value={data.location} onChange={handleUser} />
                                </dd>
                            </div>
                            <div className="px-4 py-5 sm:grid border-gray-50 border sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-base font-medium h-text">About</dt>
                                <dd className="mt-1 text-sm p-text sm:mt-0 sm:col-span-2">
                                    <textarea disabled={!isEdit} className="resize-none border-none outline-none" rows="5" name="about" placeholder="Describe yourself here..." value={data.about} onChange={handleUser}></textarea>
                                </dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid border-gray-50 border sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-base font-medium h-text">Shared Books</dt>
                                <dd className="mt-1 text-sm p-text sm:mt-0 sm:col-span-2">
                                    <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                                        <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                            <div className="w-0 flex-1 flex items-center">
                                                <span className="ml-2 flex-1 w-0 truncate">Book Name </span>
                                            </div>
                                            <div className="ml-4 flex-shrink-0">
                                                <NavLink to="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                    Sharing
                                                </NavLink>
                                            </div>
                                        </li>
                                        <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                            <div className="w-0 flex-1 flex items-center">
                                                <span className="ml-2 flex-1 w-0 truncate">Book Name </span>
                                            </div>
                                            <div className="ml-4 flex-shrink-0">
                                                <NavLink to="#" className="font-medium text-green-600 hover:text-green-500">
                                                    Shared
                                                </NavLink>
                                            </div>
                                        </li>
                                    </ul>
                                </dd>
                            </div>
                        </dl>
                    </div>
                        </form>
                    <div className="flex items-center justify-end">
                        {
                            isEdit ?
                                <>
                                    <motion.button
                                        whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
                                        whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
                                        className="px-6 mx-2 py-3 flex items-center mb-1 mr-1 text-white focus:outline-none btn-bg"
                                        type="submit" onClick={handleSubmit}>
                                        Save
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
                                        whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
                                        className="bg-gray-900 mx-2 px-5 py-3 flex items-center mb-1 shadow-xl text-white rounded-full focus:outline-none hover:bg-gray-800"
                                        type="button" onClick={() => { setisEdit(false) }}>
                                        Cancel
                                    </motion.button>
                                </>
                                :
                                <motion.button
                                whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
                                whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
                                className="btn-bg mx-2 px-6 py-3 flex items-center mb-1 shadow-xl text-white rounded-full focus:outline-none hover:bg-gray-800"
                                type="button" onClick={() => { setisEdit(true) }}>
                                Edit
                            </motion.button>

                        }
                    </div>
            </div>
        </motion.div>
    )
}

export default UpdateUser
