import React, { useState, useEffect } from 'react'
import books from '../json/books'
import Book from '../Components/Book'
import { motion } from 'framer-motion'
import { container, pageTransition, shuffleArray } from '../util'

function AllBooks() {
    const bookList = shuffleArray(books.books)
    const [userBooks, setuserBooks] = useState({})

    useEffect(() => {
        fetch(`/getbooks`)
            .then((response => response.json()))
            .then((bookResponse) => {
                const bookList = shuffleArray(bookResponse)
                setuserBooks(bookList,)
            })
            .catch((e) => {
                console.log(e);
            })
    }, [])
    return (
        <>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={container}
                transition={pageTransition}
            >
                <h1 className="text-center py-5 mt-5 text-xl bg-blue-200 font-semibold">Available Books in the Book Shelf</h1>
                <div className="all_book w-full max-w-full grid grid-cols-2 gap-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-3 lg:px-6 py-12 bg-gray-100 xl:px-10">
                    {
                        bookList.map((book) => (
                            <Book key={book.ISBN} id={book.ISBN} author={book.author} title={book.title} image={book.image} summary={book.summary} price={book.price} />
                        ))
                    }
                    {userBooks && userBooks.length > 0 ?
                        userBooks.map((book) => (
                            <Book key={book.bookId} id={book.bookId} location={book.location} title={book.bookname} image={book.image_url} summary={book.description} />
                        ))
                        :
                        <>
                        </>
                    }

                </div>
            </motion.div>
        </>
    )
}

export default AllBooks
