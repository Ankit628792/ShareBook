import React from "react";
import Signup from "../Components/Signup";
import { motion } from "framer-motion";
import { pageSlide, pageZoom, pageTransition } from '../util'

function Log({ type }) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageSlide}
      transition={pageTransition}
    >
      {type === "signup" && <Signup />}
    </motion.div>
  );
}
export default Log;