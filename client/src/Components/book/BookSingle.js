import React, { useEffect, useState } from "react";
import "./BookSingle.css";
import { useParams } from "react-router";
import { motion } from 'framer-motion'
import { pageTransition, pageZoom } from "../../util";
import BookmarkRoundedIcon from "@material-ui/icons/BookmarkRounded";
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import { useDispatch, useSelector } from "react-redux";
import { addToBookmark, removeFromBookmark } from "../../actions";
import { NavLink } from "react-router-dom";
import axios from 'axios'

function BookSingle() {

  const userSession = useSelector((state) => state.userReducer.userSession)

  const dispatch = useDispatch();

  const bookmarks = useSelector((state) => state.bookmarkReducer.bookmark)

  const { id } = useParams();

  // const bookDetails = JSON.parse(localStorage.getItem('singlebook'))
  const [bookDetails, setbookDetails] = useState(null)

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get(`/api/books/getbook:${id}`)
        setbookDetails(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getBook()
  }, [])

  const [isBookmarked, setIsBookmarked] = useState(false);

  const summaryList = bookDetails?.description.slice(0, 1000).split(".");

  const addToBookmarks = () => {
    setIsBookmarked(true);
    bookDetails.isBookmarked = true
    dispatch(addToBookmark(bookDetails, ...summaryList))
  };

  const removeFromBookmarks = () => {
    setIsBookmarked(false)
    dispatch(removeFromBookmark(id))
  }

  useEffect(() => {
    const bIndex = bookmarks.findIndex((book) => book.id == id);
    if (bIndex >= 0) {
      setIsBookmarked(true);
    } else {
      setIsBookmarked(false);
    }
  }, [])

  const createConv = async () => {
    const senderId = userSession.userId
    const receiverId = bookDetails.userId
    const conv = {senderId, receiverId}
    axios.post(`/api/conversations`, conv)
    .then(() => history.push('/chats'))
    .catch((e) => console.log(e))
  }
  const checkAuth = () => {
    userSession ? createConv() : window.alert('Please Login First ...')
  }

  return (
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
                <img src={bookDetails?.image_url} className="w-full h-full relative z-10" alt="" />
                <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-10 md:px-5">
              <div className="mb-10">
                <h1 className="font-bold uppercase text-2xl h-text">{bookDetails?.bookname}</h1>
                <h2 className="capitalize font-bold my-3 flex">Location :&nbsp;
                  <span className="font-medium p-text">{bookDetails?.location || `India`} </span> </h2>
                <h2 className="capitalize font-bold my-3 flex">Condition :&nbsp;
                  <span className="font-medium p-text">{bookDetails?.condition || `Not Specified`} </span> </h2>
                <h1 className="font-semibold h-text">Summary :</h1>
                <ul>
                  {
                    summaryList?.map((list, i) => (!list == '' &&
                      <li key={i} className="list-disc list-item">
                        <p className="text-sm p-text">{list}</p>
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div>
                
                  {userSession?.userId !== bookDetails?.userId &&

                    <div className="flex text-sm flex-row items-center justify-evenly">
                          <motion.button
                            whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
                            whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
                            className="bg-gray-900 px-4 py-3 flex items-center mb-1 shadow-xl text-white rounded-full focus:outline-none hover:bg-gray-800"
                            type="button"
                            onClick={checkAuth}
                            >
                            <ChatBubbleOutlineIcon className="mr-1" />Chat Now
                          </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
                        whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
                        className="px-4 py-3 flex items-center mb-1 mr-1 text-white focus:outline-none btn-bg"
                        type="button" onClick={isBookmarked ? (removeFromBookmarks) : (addToBookmarks)}>
                        <BookmarkRoundedIcon
                          style={{
                            fill: isBookmarked ? "#fff" : "transparent",
                            stroke: "#fff",
                            strokeWidth: 2,
                          }}
                          className="mr-1"
                        />{isBookmarked ? `Bookmarked` : `Bookmark`}
                      </motion.button>
                    </div>
                }
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>


  );
}
export default BookSingle;
