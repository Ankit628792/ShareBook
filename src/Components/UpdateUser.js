import React from 'react'

function UpdateUser() {

    const handleUser = (e) => {
        e.preventDefault();

    }
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageZoom}
            transition={pageTransition} className="grid place-items-center my-10">
            <div className="bg-white shadow-lg overflow-hidden sm:rounded-lg max-w-screen-lg p-4 pt-0 md:max-w-screen-md sm:max-w-screen-sm">
                <div className="px-4 py-0 sm:py-4 sm:px-6 relative flex items-center justify-between">
                    <div>
                        <h3 className="text-lg leading-6 font-medium h-text">Applicant Information</h3>
                        <p className="my-1 max-w-2xl p-text">#{userSession.userId}</p>
                        <p className="p-text inline-block">Verified User <VerifiedUserIcon className="text-green-500" /> </p>
                    </div>
                    <div className="h-24 w-24 sm:w-28 sm:h-28 rounded-full">
                        <img className="w-full h-full object-cover rounded-full" src="https://images.unsplash.com/photo-1622796476782-35e5163bbd6f?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2MHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                    </div>
                </div>
                <div className="border-t border-gray-200">
                    <dl>
                        <div className="px-4 py-5 sm:grid border-gray-50 border sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-base font-medium h-text">User name</dt>
                            <dd className="mt-1 text-sm p-text sm:mt-0 sm:col-span-2">
                                <input type="text" className="bg-white" onChange={handleUser} />
                            </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid border-gray-50 border sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-base font-medium h-text">Contact Number</dt>
                            <dd className="mt-1 text-sm p-text sm:mt-0 sm:col-span-2">
                                <input type="tel" className="bg-white" onChange={handleUser} />
                            </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid border-gray-50 border sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-base font-medium h-text">City Location</dt>
                            <dd className="mt-1 text-sm p-text sm:mt-0 sm:col-span-2">
                                <input type="text" className="bg-white" onChange={handleUser} />
                            </dd>
                        </div>
                        <div className="px-4 py-5 sm:grid border-gray-50 border sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-base font-medium h-text">Email address</dt>
                            <dd className="mt-1 text-sm p-text sm:mt-0 sm:col-span-2">
                                <input type="email" className="bg-white" onChange={handleUser} />
                            </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid border-gray-50 border sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-base font-medium h-text">Password</dt>
                            <dd className="mt-1 text-sm p-text sm:mt-0 sm:col-span-2">
                                <input type="password" className="bg-white" onChange={handleUser} />
                            </dd>
                        </div>
                        <div className="px-4 py-5 sm:grid border-gray-50 border sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-base font-medium h-text">About</dt>
                            <dd className="mt-1 text-sm p-text sm:mt-0 sm:col-span-2">
                                <textarea className="resize-none" placeholder="Describe yourself here..." onChange={handleUser}></textarea>
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
            </div>
        </motion.div>
    )
}

export default UpdateUser
