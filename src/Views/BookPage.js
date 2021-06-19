import React from 'react'
import { motion } from 'framer-motion'
import { pageSlide, pageZoom, pageTransition } from '../util'
import Book from '../Components/Book'
import emptyBookmarks from "../assets/emptyBookmarks.svg";
import { NavLink } from "react-router-dom";

function BookPage() {
    const bookmarks = [];
    return (
        <>
            <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageZoom}
                transition={pageTransition}
                className="bookmarks">
                <h4 className="h-text">Bookmarks</h4>
                {bookmarks && bookmarks.length > 0 ? (
                    <div className="grid grid-cols-1 gap-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 pt-6 pb-10 px-6">
                        {bookmarks.map((book) => (
                            <Book key={book.id} id={book.id} author={book.author} title={book.title} image={book.image} summary={book.summary} />
                        ))
                        }
                    </div>
                ) : (
                    <div className="cart__inner bookmark__inner">
                        <div className="cart__items">
                            <img src={emptyBookmarks} className="cart__empty" />
                        </div>
                        <div className="cart__checkout">
                            <h4 className="h-text text-xl font-medium my-2">It's empty here.</h4>
                            <p className="p-text mb-2">
                                You have not contributed any book yet.
                            </p>
                            <NavLink to="/allbooks"><motion.button
                                whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
                                whileTap={{ scale: 0.95, transition: { duration: 0.1 } }} className="btn-bg mx-auto lg:mx-0 my-3 py-3 px-7 font-bold tracking-wide text-white focus:shadow-outline focus:outline-none"
                            >Go To Books Rack</motion.button></NavLink>
                        </div>
                    </div>
                )}

            </motion.div>
        </>
    )
}

export default BookPage
