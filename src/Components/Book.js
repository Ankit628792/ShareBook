import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion";
import { useHistory } from 'react-router';
import { pageTransition, pageZoom } from '../util';
// import { useDispatch, useSelector } from 'react-redux';
// import { addToBookmark, removeFromBookmark } from '../actions';
// import BookmarkRoundedIcon from '@material-ui/icons/BookmarkRounded';

function Book({ id, author, title, image, summary }) {
    // const bookmarks = useSelector((state) => state.bookmarkReducer.bookmark)

    // const dispatch = useDispatch();
    const history = useHistory();
    // const [isBookmarked, setIsBookmarked] = useState(false);
    let isBookmarked = false;
    const onBookClick = () => {
        history.push(`/book/${id}`);
        const singleBook = { id, author, title, image, summary, isBookmarked }
        // console.log(singleBook)
        localStorage.setItem('singlebook', JSON.stringify(singleBook))
    }

    // const bookDetails = { id, author, title, summary, image }
    // const addToBookmarks = () => {
    //     setIsBookmarked(true);
    //     dispatch(addToBookmark(bookDetails))
    // };

    // const removeFromBookmarks = () => {
    //     setIsBookmarked(false)
    //     dispatch(removeFromBookmark(id))
    // }

    // useEffect(() => {
    //     const bIndex = bookmarks.findIndex((book) => book.id == id);
    //     if (bIndex >= 0) {
    //         setIsBookmarked(true);
    //     } else {
    //         setIsBookmarked(false);
    //     }
    // }, [bookmarks, id])

    return (
        <motion.div initial="hidden" animate="visible" variants={{
            hidden: {
                scale: 0,
            },
            visible: {
                scale: 1,
                transition: {
                    delay: 0.5
                }
            },
        }} className="book max-w-xs lg:max-w-xs bg-white shadow-md rounded-3xl my-7 mx-auto p-4 hover:shadow-xl cursor-pointer">
                <div className="flex flex-col lg:flex lg:flex-row items-center">
                    <motion.div
                        initial="initial"
                        animate="in"
                        exit="out"
                        variants={pageZoom}
                        layoutId={id} className="h-26 w-40 lg:w-48  lg:mb-0 mb-3" onClick={onBookClick}>
                        <img src={image}
                            alt="Just a flower" className="w-full h-48 object-fill shadow-md hover:shadow-lg lg:object-cover lg:h-48 lg:w-48 rounded-2xl" />
                    </motion.div>
                    <div className="flex-auto ml-3 justify-evenly py-2 pl-2">
                        <div onClick={onBookClick}>
                            <div className="flex flex-wrap">
                                <div className="w-full flex-none text-xs s-text font-medium ">
                                    {author}
                                </div>
                                <h2 className="flex-auto text-xl font-medium h-text line-clamp-1">{title}</h2>
                            </div>
                            <div className="flex-1 inline-flex items-center text-sm py-2 text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
                                    </path>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                                <p>India</p>
                            </div>

                            <p className="max-w-sm p-text line-clamp">
                               {summary}
                            </p>
                        </div>

                        <div className="flex mt-3 border-t border-gray-200 "></div>
                        {/* <div className="flex items-center justify-end">

                                <motion.button
                                    whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
                                    whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
                                    className="px-4 py-3 flex items-center text-white focus:outline-none btn-bg"
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
                            </div> */}
                    </div>
                </div>
        </motion.div>

    )
}

export default Book
