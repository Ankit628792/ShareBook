import React, { useEffect } from 'react'
import books from '../json/books'
import Book from '../Components/Book'
import Header from '../Components/Header'
import { motion } from 'framer-motion'
import { pageSlide, pageZoom, pageTransition } from '../util'
import Feedback from '../Components/Feedback'

function Home() {

    const bookList = books.books;

    return (
        <>
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageSlide}
            transition={pageTransition}
        >
            <Header />
            {/* <div className="max-w-full flex flex-wrap py-12 bg-gray-100 xl:px-10">
                {
                    bookList.map((book) => (
                        <Book key={book.ISBN} id={book.ISBN} author={book.author} title={book.title} image={book.image} summary={book.summary} price={book.price} />
                    ))
                }

            </div> */}
        </motion.div>
        <Feedback />
        </>
    )
}

export default Home
