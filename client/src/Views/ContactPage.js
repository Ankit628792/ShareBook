import React from 'react'
import { motion } from 'framer-motion'
import { pageZoom, pageTransition } from '../util'
import Contact from '../Components/static/Contact'

function ContactPage() {
  return (
    <>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageZoom}
        transition={pageTransition}
      >
        <Contact />
      </motion.div>
    </>
  )
}

export default ContactPage
