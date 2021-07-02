import React from 'react'
import { motion } from 'framer-motion'
import { pageZoom, pageTransition } from '../util'
import Error from '../Components/error/Error'

function ErrorPage() {
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageZoom}
            transition={pageTransition}
        >
            <Error />
        </motion.div>
    )
}

export default ErrorPage
