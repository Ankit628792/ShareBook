import React from 'react'
import { motion } from 'framer-motion'
import { pageZoom, pageTransition } from '../util'
import ErrorPage from '../Components/ErrorPage'

function Error() {
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageZoom}
            transition={pageTransition}
        >
           <ErrorPage />
        </motion.div>
    )
}

export default Error
