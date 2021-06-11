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
            <ChatPage />
            </motion.div>
        </>
    )
}

export default Chats
