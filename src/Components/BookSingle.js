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
                <h1 className="font-bold uppercase text-2xl">{bookDetails.title}</h1>
                <h2 className="capitalize font-bold my-3">Author : <span className="font-medium text-gray-700">{bookDetails.author}</span> </h2>
                <h1 className="font-semibold">Summary :</h1>
                <p className="text-sm">{bookDetails.summary}</p>
              </div>
              <div>
                <div className="inline-block align-bottom mr-5">
                  <span className="text-2xl leading-none align-baseline">$</span>
                  <span className="font-bold text-5xl leading-none align-baseline">{bookDetails.price.displayValue}</span>
                </div>
                <div className="inline-block align-bottom">
                  <button className="bg-blue-500 opacity-75 hover:opacity-100 text-white hover:bg-blue-700 rounded-full px-10 py-2 font-semibold"> Chat Now</button>
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
