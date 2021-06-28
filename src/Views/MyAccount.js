import React from 'react'
import { motion } from 'framer-motion'
import UserInfo from '../Components/UserInfo'
import { pageSlide, pageZoom, pageTransition } from '../util'

function MyAccount() {
    return (
        <>
            <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageZoom}
                transition={pageTransition}
            >
                
                <UserInfo />
            </motion.div>
        </>
    )
}

export default MyAccount
