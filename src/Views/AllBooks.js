import React from 'react'
import books from '../json/books'
import Book from '../Components/Book'
import { motion } from 'framer-motion'
import { pageSlide, pageZoom, pageTransition, shuffleArray } from '../util'
import Loader from '../Components/Loader'

function AllBooks() {
    const [isLoading, setisLoading] = useState(true)
    const bookList = shuffleArray(books.books)
    isLoading(false);
    return (
        <>
        {
            isLoading ? <Loader />
        :
    <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageZoom}
        transition={pageTransition}
    >
        <h1 className="text-center py-5 mt-5 text-xl bg-pink-200 font-semibold">Available Books in the Book Rack</h1>
        <div className="w-full max-w-full flex flex-wrap py-12 bg-gray-100 xl:px-10">
            {
                bookList.map((book) => (
                    <Book key={book.ISBN} id={book.ISBN} author={book.author} title={book.title} image={book.image} summary={book.summary} price={book.price} />
                ))
            }

        </div>
    </motion.div>
        }
        </>
    )
}

export default AllBooks
