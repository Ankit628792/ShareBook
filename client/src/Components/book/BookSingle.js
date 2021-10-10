import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { motion } from 'framer-motion'
import { pageTransition, pageZoom } from "../../util";
import BookmarkRoundedIcon from "@material-ui/icons/BookmarkRounded";
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch, useSelector } from "react-redux";
import { addToBookmark, removeFromBookmark } from "../../actions";
import { useHistory } from "react-router-dom";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function BookSingle() {

  const userSession = useSelector((state) => state.userReducer.userSession)
  const history = useHistory()

  const dispatch = useDispatch();

  const bookmarks = useSelector((state) => state.bookmarkReducer.bookmark)

  const { id } = useParams();
  const toastify = (text) =>  toast(`${text}`, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  });


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
  
  const deleteBook = () => {
    axios.delete(`/api/books/deleteBook/${bookDetails?.bookId}`).then((res) => res.status==200 && toastify('Book Removed Successfully !') && history.goBack()).catch(() => toastify('Please try after sometimes'))
  }

  const addToBookmarks = () => {
    toastify('Added to Bookmark')
    setIsBookmarked(true);
    dispatch(addToBookmark(bookDetails))
  };
  
  const removeFromBookmarks = () => {
    toastify('Removed from Bookmark')
    setIsBookmarked(false)
    dispatch(removeFromBookmark(id))
  }

  useEffect(() => {
    const bIndex = bookmarks.findIndex((book) => book.bookId == id);
    if (bIndex >= 0) {
      setIsBookmarked(true);
    } else {
      setIsBookmarked(false);
    }
  }, [])

  const createConv = async () => {
    const senderId = userSession.userId
    const receiverId = bookDetails.userId
    const bookname = bookDetails.bookname
    const conv = {senderId, receiverId , bookname}
    axios.post(`/api/conversations`, conv)
    .then((res) => (res.status == 200 && history.push('/chats')))
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
                    bookDetails?.description.slice(0, 1000).split(".").map((list, i) => (!list == '' &&
                      <li key={i} className="list-disc list-item">
                        <p className="text-sm p-text">{list}</p>
                      </li>
                    ))
                  }
                </ul>

                {bookDetails?.agreement && 
                <>
                <h2 className="capitalize font-bold my-3 flex">Agreement: </h2>
                
                <p className="font-medium p-text">
                  <input type="checkbox" required className="w-5 h-5 mr-1" />
                  <span>I accept the agreement to return the book in {bookDetails?.agreement} months to the owner without any delay.</span>
                </p>
                </>
                }
              </div>
              <div>
                
                  {userSession?.userId !== bookDetails?.userId ?

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
                    :
                    <motion.button
                        whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
                        whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
                        className="px-4 py-3 flex items-center mb-1 mr-1 text-white focus:outline-none bg-red-600 hover:bg-red-800"
                        type="button"
                        onClick={deleteBook}
                        >
                        <DeleteIcon className="mr-1" />Remove
                      </motion.button>
                }
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </motion.div>
    </>


  );
}
export default BookSingle;
