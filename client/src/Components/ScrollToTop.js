import React, { useState } from 'react'
import ArrowUpwardRoundedIcon from '@material-ui/icons/ArrowUpwardRounded';
import { motion } from 'framer-motion';

function ScrollToTop() {
    const [showScroll, setShowScroll] = useState(false)
    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 900) {
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 900) {
            setShowScroll(false)
        }
    };
    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('scroll', checkScrollTop)
    return (
        <>
        <motion.button
        whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
        whileTap={{ scale: 0.95, transition: { duration: 0.1 } }} className="scrollToTop btn-bg p-3 fixed bottom-10 right-10 font-bold text-white"
        onClick={scrollTop}
            style={{ display: showScroll ? 'flex' : 'none' }}
      >
            <ArrowUpwardRoundedIcon fontSize="large" />
      </motion.button>
      </>
    )
}

export default ScrollToTop
