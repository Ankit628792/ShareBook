import React from 'react'
import { motion } from 'framer-motion'
import ChatPage from '../Components/ChatPage'
import { pageSlide, pageZoom, pageTransition } from '../util'

function Chats() {
    return (
        <>
            <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageZoom}
                transition={pageTransition}
            >
                <h1 className="text-center py-3 mt-5 text-lg bg-blue-200 font-semibold">Under Development</h1>

                <ChatPage />
            </motion.div>
        </>
    )
}

export default Chats
