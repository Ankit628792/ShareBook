import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { motion } from 'framer-motion'

function Modal() {
    return (
        <div className="w-full modal grid place-items-center">
        <div className="max-w-xs sm:max-w-md bg-white rounded-md py-5">
            <h1 className='text-2xl sm:text-3xl font-semibold h-text text-center py-8'>Do you want to delete conversation ?</h1>
            <div className="flex text-sm py-4 flex-row items-center justify-evenly">
                <motion.button
                    whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
                    whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
                    className="bg-gray-900 px-5 py-3 flex items-center mb-1 shadow-xl text-white rounded-full focus:outline-none hover:bg-gray-800"
                    type="button"
                >
                    <ArrowBackIcon /> &nbsp;Cancel
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
                    whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
                    className="px-5 py-3 flex items-center mb-1 mr-1 text-white focus:outline-none btn-bg"
                    type="button">
                        <DeleteIcon /> &nbsp;Delete
                </motion.button>
            </div>
        </div>
                        </div>
    )
}

export default Modal
