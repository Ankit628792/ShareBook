import React from "react";
import "./Bookmark.css";
import { motion } from 'framer-motion'
import emptyBookmarks from "../assets/emptyBookmarks.svg";
import Book from "./Book";
import { pageTransition, pageZoom } from "../util";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Bookmarks() {

  const bookmarks = useSelector((state) => state.bookmarkReducer.bookmark)
  const localBookmarks = JSON.parse(localStorage.getItem('bookmark'))

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageZoom}
      transition={pageTransition} className="bookmarks">
      <h4 className="h-text">Bookmarks</h4>
      {(bookmarks && bookmarks.length > 0 ) ? (
        <div className="flex flex-wrap pb-10">
          {
            bookmarks ? bookmarks.map((book) => (
              <Book key={book.id} id={book.id} author={book.author} title={book.title} image={book.image} summary={book.summary} />
              ))
              :
              localBookmarks.map((book) => {
                <Book key={book.id} id={book.id} author={book.author} title={book.title} image={book.image} summary={book.summary} />
              })
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
              Something's catching your eye? Add your favorite items to
              Bookmarks, and check them out anytime you wish.
            </p>
            <NavLink to="/allbooks"><motion.button
              whileHover={{scale: 1.05, transition: { duration: 0.1 }}}
              whileTap={{ scale: 0.95 , transition:{duration: 0.1}}} className="btn-bg mx-auto lg:mx-0 my-3 py-3 px-7 font-bold tracking-wide text-white focus:shadow-outline focus:outline-none"
            >Go To Books Rack</motion.button></NavLink>
          </div>
        </div>
      )}
    </motion.div>
  );
}
export default Bookmarks;
