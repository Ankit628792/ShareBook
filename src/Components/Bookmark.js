import React from "react";
import "./Bookmark.css";
import { motion } from 'framer-motion'
import emptyBookmarks from "../assets/emptyBookmarks.svg";
import Book from "./Book";
import { pageTransition, pageZoom } from "../util";

function Bookmarks() {
  // const bookmarks = useSelector((state) => (console.log(state),state.bookmarkReducer.bookmark))
  const bookmarks = JSON.parse(localStorage.getItem('bookmark'))
  console.log(bookmarks)

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageZoom}
      transition={pageTransition} className="bookmarks">
      <h4 className="h-text">Bookmarks</h4>
      {bookmarks.length > 0 ? (
        <div className="flex flex-wrap pb-10">
          {bookmarks.map((book) => (
              <Book key={book.id} id={book.id} author={book.author} title={book.title} image={book.image} summary={book.summary} />
          ))}
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
            <a href="/allbooks"><motion.button
              whileHover={{scale: 1.05, transition: { duration: 0.1 }}}
              whileTap={{ scale: 0.95 , transition:{duration: 0.1}}} className="btn-bg mx-auto lg:mx-0 my-3 py-3 px-7 font-bold tracking-wide text-white focus:shadow-outline focus:outline-none"
            >Go To Books Rack</motion.button></a>
          </div>
        </div>
      )}
    </motion.div>
  );
}
export default Bookmarks;
