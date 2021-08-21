import React from 'react'
import Home from '../Components/static/Home'
import { motion } from 'framer-motion'
import { pageSlide, pageTransition } from '../util'
import Feedback from '../Components/form/Feedback'

function HomePage() {

    return (
        <>
            <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageSlide}
                transition={pageTransition}
            >
                <Home />
            </motion.div>
            <Feedback />
        </>
    )
}

export default HomePage
