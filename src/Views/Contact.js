import React from 'react'
import { motion } from 'framer-motion'
import { pageSlide, pageZoom, pageTransition } from '../util'
import ContactForm from '../Components/ContactForm'

function Contact() {
    return (
        <>
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageZoom}
      transition={pageTransition}
    >
      <ContactForm />
    </motion.div>
    </>
    )
}

export default Contact
