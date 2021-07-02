import React, { useState, useEffect } from 'react'
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
                <h1 className="text-center py-5 mt-5 text-xl bg-blue-200 font-semibold">Available Books in the Book Shelf</h1>
                <AllBooks />
            </motion.div>
        </>
    )
}

export default AllBooksPage
