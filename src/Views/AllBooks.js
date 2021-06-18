import React, {useState} from 'react'
import books from '../json/books'
import Book from '../Components/Book'
import { motion } from 'framer-motion'
import { pageSlide, pageZoom, pageTransition, shuffleArray } from '../util'

function AllBooks() {
    const bookList = shuffleArray(books.books)
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
        <div className="all_book w-full max-w-full grid grid-cols-2 gap-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-3 lg:px-6 py-12 bg-gray-100 xl:px-10">
            {
                bookList.map((book) => (
                    <Book key={book.ISBN} id={book.ISBN} author={book.author} title={book.title} image={book.image} summary={book.summary} price={book.price} />
                ))
            }

        </div>
    </motion.div>
        </>
    )
}

export default AllBooks
