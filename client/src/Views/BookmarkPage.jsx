import React from "react";
import Bookmark from "../Components/bookmark/Bookmark";
import { motion } from "framer-motion";
import { pageZoom, pageTransition } from '../util'

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
