import React from 'react'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import { motion } from 'framer-motion'
import { pageTransition, pageZoom } from '../util';

function UserInfo() {
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
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Applicant Information</h3>
                        <p className="my-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
                        <VerifiedUserIcon className="text-green-500" />
                    </div>
                    <div className="h-24 w-24 sm:w-28 sm:h-28 rounded-full bg-red-400">
                        <img className="w-full h-full object-cover rounded-full" src="https://images.unsplash.com/photo-1622796476782-35e5163bbd6f?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2MHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                    </div>
                </div>
                <div className="border-t border-gray-200">
                    <dl>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Full name</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Margot Foster</dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Application for</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Backend Developer</dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Email address</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">margotfoster@example.com</dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Salary expectation</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">$120,000</dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">About</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
                                qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
                                pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                                </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Attachments</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                                    <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                        <div className="w-0 flex-1 flex items-center">
                                            {/* <PaperClipIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
                                            <span className="ml-2 flex-1 w-0 truncate">resume_back_end_developer.pdf</span>
                                        </div>
                                        <div className="ml-4 flex-shrink-0">
                                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                Download
                                            </a>
                                        </div>
                                    </li>
                                    <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                        <div className="w-0 flex-1 flex items-center">
                                            {/* <PaperClipIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
                                            <span className="ml-2 flex-1 w-0 truncate">coverletter_back_end_developer.pdf</span>
                                        </div>
                                        <div className="ml-4 flex-shrink-0">
                                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                Download
                                            </a>
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

export default UserInfo
