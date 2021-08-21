import React from 'react'
import { motion } from 'framer-motion'
import Chat from '../Components/chat/Chat'
import { pageZoom, pageTransition } from '../util'

function ChatPage() {
    return (
        <>
            <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageZoom}
                transition={pageTransition}
            >
                <Chat />
            </motion.div>
        </>
    )
}

export default ChatPage
