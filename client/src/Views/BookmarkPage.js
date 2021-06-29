import React from "react";
import Bookmark from "../Components/Bookmark";
import { motion } from "framer-motion";
import { pageSlide, pageZoom, pageTransition } from '../util'

function BookmarkPage() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageZoom}
      transition={pageTransition}
    >
      <Bookmark />
    </motion.div>
  );
}
export default BookmarkPage;
