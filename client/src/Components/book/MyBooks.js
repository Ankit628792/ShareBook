import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { container, pageTransition } from '../../util'
import Book from './Book'
import emptyBookmarks from "../../assets/emptyBookmarks.svg";
import AddBook from './AddBook';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function MyBooks() {
    const userSession = useSelector((state) => state.userReducer.userSession);

    const history = useHistory()
    if (userSession.length < 1) {
        history.push('/signin')
    }

    const [isAddBook, setisAddBook] = useState(false)

    const Books = () => {

        const [books, setbooks] = useState({})

        useEffect(() => {
            fetch(`/api/books/getmybook:${userSession.userId}`)
                .then((response => response.json()))
                .then((bookResponse) => {
                    setbooks(bookResponse)
                })
                .catch((e) => {
                    console.log(e);
                })
        }, [])

        return (
            <>
                <div className="flex items-center justify-between px-8 md:px-20 mt-5">
                    <h4 className="h-text font-medium text-3xl">Bookmarks</h4>
                    <motion.button
                        whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
                        whileTap={{ scale: 0.95, transition: { duration: 0.1 } }} className="btn-bg my-3 py-3 px-7 font-bold tracking-wide text-white focus:shadow-outline focus:outline-none"
                        onClick={() => { setisAddBook(true) }}
                    >Add Book</motion.button>
                </div>
                {books && books.length > 0 ? (
                    <div className="grid grid-cols-1 gap-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 pt-6 pb-10 px-6">
                        {books.map((book) => (
                            <Book key={book.bookId} id={book.bookId} category={book.category} title={book.bookname} image={book.image_url} summary={book.description} />
                        ))
                        }
                    </div>
                ) : (
                    <div className="cart__inner bookmark__inner">
                        <div className="cart__items">
                            <img src={emptyBookmarks} className="cart__empty" alt="" />
                        </div>
                        <div className="cart__checkout">
                            <h4 className="h-text text-xl font-medium my-2">It's empty here.</h4>
                            <p className="p-text mb-2">
                                You have not contributed any book yet.
                            </p>
                        </div>
                    </div>
                )}
            </>
        )
    }

    return (
        <>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={container}
                transition={pageTransition}
                className="bookmarks">

                {
                    isAddBook ?
                        <AddBook setisAddBook={setisAddBook} /> :
                        <Books />
                }


            </motion.div>
        </>
    )
}

export default MyBooks
