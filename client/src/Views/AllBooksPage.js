import React from 'react'
import { motion } from 'framer-motion'
import { pageZoom, pageTransition } from '../util'
import AllBooks from '../Components/book/AllBooks'

function AllBooksPage() {

    return (
        <>
            <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageZoom}
                transition={pageTransition}
            >
                <AllBooks />
            </motion.div>
        </>
    )
}

export default AllBooksPage
