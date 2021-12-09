import React from "react";
import { motion } from 'framer-motion'
import emptyBookmarks from "../../assets/emptyBookmarks.svg";
import Book from "../book/Book";
import { pageTransition, container } from "../../util";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Bookmarks() {

  const bookmarks = useSelector((state) => state.bookmarkReducer.bookmark)

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={container}
      transition={pageTransition}
      className="bookmarks">
      <h4 className="h-text">Bookmarks</h4>
      {bookmarks && bookmarks?.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 pt-6 pb-10 px-6">
          {bookmarks.map((book, i) => (
            <Book key={i} id={book?.bookId} category={book?.category} title={book?.bookname} location={book?.location} image={book?.image_url} summary={book?.description} />
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
              Something's catching your eye? Add your favorite items to
              Bookmarks, and check them out anytime you wish.
            </p>
            <NavLink to="/allbooks"><motion.button
              whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
              whileTap={{ scale: 0.95, transition: { duration: 0.1 } }} className="btn-bg mx-auto lg:mx-0 my-3 py-3 px-7 font-bold tracking-wide text-white focus:shadow-outline focus:outline-none"
            >Go To Book Shelf</motion.button></NavLink>
          </div>
        </div>
      )}
    </motion.div>
  );
}
export default Bookmarks;
