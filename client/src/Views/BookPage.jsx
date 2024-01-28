import React from 'react'
import { motion } from 'framer-motion'
import { pageTransition, pageZoom } from '../util'
import MyBooks from '../Components/book/MyBooks'

function BookPage() {

    return (
        <>
            <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageZoom}
                transition={pageTransition}
                className="bookmarks"
            >
                <MyBooks />
            </motion.div>
        </>
    )
}

export default BookPage
