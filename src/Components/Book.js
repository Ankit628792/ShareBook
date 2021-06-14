import React, {useState} from 'react'
import { motion } from "framer-motion";
import { useHistory } from 'react-router';

function Book({ id, author, title, image, summary, price }) {

    const history = useHistory();
    const [isBookmarked, setIsBookmarked] = useState(false);

    const onBookClick = () => {
        history.push(`/book/${id}`) ;
        const singleBook = { id, author, title, image, summary, price }
        // console.log(singleBook)
        localStorage.setItem('singlebook', JSON.stringify(singleBook))
    } 
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
            }} className="book flex flex-col max-w-xs lg:max-w-md mx-auto my-7" onClick={onBookClick}>
                <div className="bg-white shadow-md rounded-3xl p-4 hover:shadow-xl cursor-pointer">
                    <div className="flex flex-col lg:flex lg:flex-row items-center">
                        <motion.div layoutId={id} className="h-26 w-40 lg:h-48 lg:w-48  lg:mb-0 mb-3">
                            <img src={image}
                                alt="Just a flower" className=" w-full h-48 object-fill shadow-md hover:shadow-lg lg:object-cover lg:h-48 lg:w-48 rounded-2xl" />
                        </motion.div>
                        <div className="flex-auto ml-3 justify-evenly py-2 pl-2">
                            <div className="flex flex-wrap ">
                                <div className="w-full flex-none text-xs s-text font-medium ">
                                    {author}
                                </div>
                                <h2 className="flex-auto text-xl font-medium h-text">{title}</h2>
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

                            <p className="pb-3 max-w-sm p-text">
                                {summary && summary.slice(0, 80)}....
                            </p>

                            <div className="flex pb-3 border-t border-gray-200 "></div>
                        </div>
                    </div>
                </div>
            </motion.div>
    
    )
}

export default Book
