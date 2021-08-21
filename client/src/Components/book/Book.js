import React from 'react'
import { motion } from "framer-motion";
import { useHistory } from 'react-router';
import { pageZoom } from '../../util';

function Book({ id, title, category, location, image, summary }) {

    const history = useHistory();
    const onBookClick = () => {
        history.push(`/book/${id}`);
    }

    return (
        <motion.div initial="hidden" animate="visible" variants={{ 
            hidden: { scale: 0, },
            visible: {
                scale: 1,
                transition: {
                    delay: 0.5
                }
            },
        }} className="book bg-white max-w-xs shadow-md mx-auto rounded-3xl p-4 hover:shadow-xl cursor-pointer flex items-center justify-center">
            <div className="flex flex-col md:flex-row items-center">
                <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageZoom}
                    layoutId={id} className="imgBx rounded-sm flex items-center justify-center p-2 lg:mb-0 mb-3" onClick={onBookClick}>
                    <img loading="lazy" src={`static/media/${image}`}
                        alt="Book" className="w-full rounded-md h-full object-fill shadow-md hover:shadow-lg lg:object-cover lg:h-48 lg:w-48" />
                </motion.div>
                <div className="p-2">
                    <div onClick={onBookClick}>
                        <div className="flex flex-wrap">
                            <p className="w-full flex-none text-xs s-text font-medium line-clamp-1">
                                {category}
                            </p>
                            <h2 className="flex-auto text-lg md:text-xl font-medium h-text line-clamp-2">{title}</h2>
                        </div>
                        <div className="flex-1 inline-flex items-center text-sm py-1 sm text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
                                </path>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                            <h6>{location || `India`}</h6>
                        </div>

                        <p className="max-w-sm p-text line-clamp-3">
                            {summary}
                        </p>
                    </div>

                    <div className="flex mt-3 border-t border-gray-200 "></div>
                </div>
            </div>
        </motion.div>

    )
}

export default Book
