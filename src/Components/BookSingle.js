import React, { useEffect, useState } from "react";
import "./BookSingle.css";
import { useParams } from "react-router";
import books from '../json/books'
import { motion } from 'framer-motion'
import { pageTransition, pageZoom } from "../util";
function BookSingle() {


  // const addToBookmarks = (item) => {
  //   dispatch({
  //     type: "ADD_TO_BOOKMARKS",
  //     item: {
  //       ...productDetails,
  //       id: id,
  //     },
  //   });
  // };

  const { id } = useParams();
  const bookList = books.books;

  const bookDetails = JSON.parse(localStorage.getItem('singlebook'))

  // const index = bookList.findIndex((book) => book.ISBN == id)
  // console.log(index)

  // const bookDetails = bookList[index]

  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const summaryList = bookDetails.summary.split(".");


  return (
    (id == bookDetails.id) &&
    <>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageZoom}
        transition={pageTransition}
        className="min-w-screen min-h-screen flex items-center p-5 lg:p-10 overflow-hidden">
        <div className="w-full max-w-5xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
          <div className="md:flex items-center -mx-10">
            <div className="h-2/4 w-3/4 sm:w-1/2 md:w-2/5 mx-auto sm:object-cover md:h-1/4 px-10 mb-10 md:mb-0 md:px-5">
              <div className="relative">
                <img src={bookDetails.image} className="w-full h-full relative z-10" alt="" />
                <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-10 md:px-5">
              <div className="mb-10">
                <h1 className="font-bold uppercase text-2xl h-text">{bookDetails.title}</h1>
                <h2 className="capitalize font-bold my-3">Author : <span className="font-medium p-text">{bookDetails.author}</span> </h2>
                <h1 className="font-semibold h-text">Summary :</h1>
                <ul>
                  {
                    summaryList.map((list) => ( !list == '' &&
                  <li className="list-disc list-item">
                    <p className="text-sm p-text">{list}</p>
                  </li>
                    ))
                  }
                </ul>
              </div>
              <div>
                <div className="flex items-center">
                <div className="inline-block mr-5">
                  <span className="text-xl leading-none mx-1">EUR</span>
                  <span className="font-bold text-3xl leading-none">{bookDetails.price.displayValue}</span>
                </div>
                <motion.button
              whileHover={{scale: 1.05, transition: { duration: 0.1 }}}
              whileTap={{ scale: 0.95 , transition:{duration: 0.1}}}
              className="mb-2 md:mb-0 bg-gray-900 px-6 py-3 shadow-md hover:shadow-lg tracking-wider text-white rounded-full hover:bg-gray-800 focus:outline-none"
              type="button">Chat Now
            </motion.button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>

  );
}
export default BookSingle;
