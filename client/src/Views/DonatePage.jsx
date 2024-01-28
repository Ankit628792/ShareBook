import React from 'react'
import { motion } from 'framer-motion'
import { pageZoom, pageTransition } from '../util'
import Donate from '../Components/static/Donate'

function DonatePage() {
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageZoom}
            transition={pageTransition}
        >
            <Donate />
        </motion.div>
    )
}

export default DonatePage
