import React from 'react'
import { motion } from 'framer-motion'
import Chat from '../Components/chat/Chat'
import { pageSlide, pageZoom, pageTransition } from '../util'

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
                {/* <h1 className="text-center py-3 mt-5 text-lg bg-blue-200 font-semibold">Under Development</h1> */}

                <Chat />
            </motion.div>
        </>
    )
}

export default ChatPage
