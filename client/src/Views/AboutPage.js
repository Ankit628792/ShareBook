import React from 'react'
import { motion } from 'framer-motion'
import { pageSlide, pageZoom, pageTransition } from '../util'
import About from '../Components/static/About'

function AboutPage() {
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageZoom}
            transition={pageTransition}
        >
            <About />
        </motion.div>
    )
}

export default AboutPage
