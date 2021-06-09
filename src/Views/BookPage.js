import React from 'react'
import { motion } from 'framer-motion'
import { pageSlide, pageZoom, pageTransition } from '../util'

function BookPage() {
    return (
        <>
            <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageZoom}
                transition={pageTransition}
            >
            
            </motion.div>
        </>
    )
}

export default BookPage
