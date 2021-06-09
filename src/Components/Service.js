import React from 'react'
import { motion } from 'framer-motion'
import { pageTransition, pageZoom } from '../util'
import './Service.css'
function Service() {
    return (
      <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageZoom}
      transition={pageTransition} className="section">
        <ul className="c-services">
          <li className="c-services__item">
            <h3>Responsive Web Design</h3>
            <p>We leverage the concept of mobile-first design. Through our work, we focus on designing an experience that
              works across different screen sizes.</p>
          </li>
          <li className="c-services__item">
            <h3>UX Auditing</h3>
            <p>If you are unsure of how your app behaves, we can help by doing a detailed UX audit that will highlight most
              of the issues in our services. From that, you can contact us.</p>
          </li>
          <li className="c-services__item">
            <h3>3 Tier Security</h3>
            <p>Your Details, chats and other details are fully secured by us. We have added the security to all the layer of this application i.e. Front-end, Backend and Database.</p>
          </li>
          <li className="c-services__item">
            <h3>24x7 Contact Support</h3>
            <p>We are the service provider. We are always here to help you. You'll get responses within 12-24 hours.</p>
          </li>
          <li className="c-services__item">
            <h3>Mobile Apps Design</h3>
            <p>To reach more customers and the goals of your business, a mobile application is necessary these days. We will
              work on the app design from scratch to final tested prototype.</p>
          </li>
          <li className="c-services__item">
            <h3>UX Research</h3>
            <p>It&rsquo;s important to research deeply for the product you want to build. We help in that by defining the
              user audience, working on user stories, competitive analysis and much more. </p>
          </li>
        </ul>
      </motion.div>
    )
}

export default Service
