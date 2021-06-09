import React from 'react'
import { motion } from 'framer-motion'
import { pageSlide, pageZoom, pageTransition } from '../util'
import Service from '../Components/Service'
import AboutPage from '../Components/AboutPage'

function About() {
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageZoom}
            transition={pageTransition}
        >
           <AboutPage />
            <Service />
        </motion.div>
    )
}

export default About
