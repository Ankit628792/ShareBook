import React, { useRef, useState, useEffect } from 'react'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import { motion } from 'framer-motion'
import { pageTransition, pageZoom } from '../../util';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import dummyImg from '../../assets/images/dummy.png'
import axios from 'axios';

function UserInfo() {

    const userSession = useSelector((state) => state.userReducer.userSession);
    
    const history = useHistory()
    if(!userSession){
        history.push('/signin')
    }
    
    const { username, email, password, location, about, phone, _id, image_url } = userSession;
    const [data, setData] = useState({ username, email, password, location, about, phone, _id });
    
    const [isEdit, setisEdit] = useState(false)
    const [isLoading, setisLoading] = useState(false)

    const [image, setImage] = useState();
    const [preview, setPreview] = useState(image_url);
    const fileInputRef = useRef();

    useEffect(() => {
        if (image) {
            const reader = new FileReader();
            reader.onload = () => {
                setPreview(reader.result)
            }
            reader.readAsDataURL(image)
        } else {
            setPreview(null)
        }
    }, [image])


    const handleUser = (e) => {
        e.preventDefault();
        const { name, value } = e.target
        setData({ ...data, [name]: value })

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = new FormData();
        userData.append('image', image);
        userData.append('username', data.username)
        userData.append('phone', data.phone)
        userData.append('location', data.location)
        userData.append('about', data.about)
            isLoading(true)
        axios.patch(`/updateuser:${_id}`, userData)
            .then((res) => {
                isLoading(false)
                if (res.status === 201) {
                    setisEdit(false)
                } else {
                    console.log('updation error')
                }
            });
    }
    

    return (
        <>
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
                    <div className="h-24 w-24 sm:w-28 sm:h-28 rounded-full cursor-pointer border border-1 shadow-md">
                        {
                            preview || image_url ?
                                <img className="w-full h-full object-cover rounded-full" src={preview || image_url} alt="profile_pic" onClick={() => (fileInputRef.current.click())} />
                                :
                                (
                                    <img src={dummyImg} className="w-full h-full object-cover rounded-full" onClick={(e) => {
                                        e.preventDefault();
                                        fileInputRef.current.click();
                                    }} alt="" />
                                )
                        }
                        <input type="file" disabled={!isEdit} name="image" className="hidden" ref={fileInputRef} accept="image/*" onChange={(e) => {
                            const file = e.target.files[0];
                            if (file && file.type.substring(0, 5) === 'image') {
                                setImage(file)
                            } else {
                                window.alert('Only Image allowed')
                                setImage(null)
                            }
                        }} />
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="border-t border-gray-200">
                        <dl>
                            <div className="px-4 py-5 sm:grid border-gray-50 border sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-base font-medium h-text">User name</dt>
                                <dd className="mt-1 text-sm p-text sm:mt-0 sm:col-span-2">
                                    <input disabled={!isEdit} type="text" name="username" className="border-none outline-none" value={data.username} onChange={handleUser} />
                                </dd>
                            </div>
                            <div className="px-4 py-5 sm:grid border-gray-50 border sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-base font-medium h-text">Email address</dt>
                                <dd className="mt-1 text-sm p-text sm:mt-0 sm:col-span-2">
                                    <input disabled type="email" name="email" className="border-none outline-none" value={data.email} onChange={handleUser} />
                                </dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid border-gray-50 border sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-base font-medium h-text">Password</dt>
                                <dd className="mt-1 text-sm p-text sm:mt-0 sm:col-span-2">
                                    <input disabled type="password" name="password" className="border-none outline-none" value={data.password} onChange={handleUser} />
                                </dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid border-gray-50 border sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-base font-medium h-text">Contact Number</dt>
                                <dd className="mt-1 text-sm p-text sm:mt-0 sm:col-span-2">
                                    <input disabled={!isEdit} type="number" name="phone" className="border-none outline-none" value={data.phone} onChange={handleUser} />
                                </dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid border-gray-50 border sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-base font-medium h-text">City Location</dt>
                                <dd className="mt-1 text-sm p-text sm:mt-0 sm:col-span-2">
                                    <input disabled={!isEdit} type="text" name="location" className="border-none outline-none" value={data.location} onChange={handleUser} />
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
                                    {isLoading ? 'Saving...' : 'Save'}
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
                </>
    )
}

export default UserInfo
