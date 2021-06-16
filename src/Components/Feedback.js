import React from 'react'
import { motion } from 'framer-motion'
import { pageTransition, pageZoom } from '../util'

function Feedback() {
	return (
		<section>
			<motion.div
				initial="initial"
				animate="in"
				exit="out"
				variants={pageZoom}
				transition={pageTransition} className="feedback bg-black text-white py-10">
				<div className="container mx-auto flex flex-col md:flex-row my-6 md:my-24">
					<div className="flex flex-col w-full lg:w-1/3 pl-12 py-12">
						<p className="text-yellow-300 text-lg uppercase tracking-loose">REVIEW</p>
						<h1 className="text-3xl md:text-5xl my-4 leading-relaxed md:leading-snug">Leave us a feedback!</h1>
						<p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
							Provide your valuable feedback and something to us ...<br />
							We love to read your responses.
						</p>
					</div>
					<div className="flex flex-col w-full lg:w-2/3 justify-center">
						<div className="container w-full px-4">
							<div className="flex flex-wrap justify-center">
								<div className="w-full md:w-3/4 lg:w-3/5 px-4">
									<div
										className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white">
										<div className="flex-auto p-5 lg:p-10">
											<h4 className="text-2xl mb-4 text-black font-semibold">Have a suggestion?</h4>
											<form id="feedbackForm" action="" method="">
												<div className="relative w-full mb-3">
													<label className="block uppercase text-gray-700 text-xs font-bold mb-2"
														htmlFor="name">Full Name</label><input type="text" name="name" id="name" className="border-0 px-3 py-3 rounded text-sm shadow w-full
                    bg-gray-100 placeholder-black text-gray-800 outline-none focus:bg-gray-300" placeholder=" "
															style={{ transition: `all 0.15s ease 0s` }} required />
												</div>
												<div className="relative w-full mb-3">
													<label className="block uppercase text-gray-700 text-xs font-bold mb-2"
														htmlFor="email">Email</label><input type="email" name="email" id="email" className="border-0 px-3 py-3 rounded text-sm shadow w-full
                    bg-gray-100 placeholder-black text-gray-800 outline-none focus:bg-gray-300" placeholder=" "
															style={{ transition: `all 0.15s ease 0s` }} required />
												</div>
												<div className="relative w-full mb-3">
													<label className="block uppercase text-gray-700 text-xs font-bold mb-2"
														htmlFor="message">Message</label><textarea maxLength="300" name="feedback" id="feedback" rows="4"
															cols="80"
															className="border-0 px-3 py-3 bg-gray-100 placeholder-black text-gray-800 rounded text-sm shadow focus:outline-none w-full focus:bg-gray-300"
															placeholder="" required></textarea>
												</div>
												<div className="text-center mt-6">
													
													<motion.button
              											whileHover={{scale: 1.05, transition: { duration: 0.1 }}}
              											whileTap={{ scale: 0.95 , transition:{duration: 0.1}}} id="feedbackBtn"
														className="bg-yellow-500 tracking-widest text-white text-center mx-auto active:bg-yellow-400 text-lg uppercase px-7 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
														type="submit" style={{ transition: `all 0.15s ease 0s` }}>Submit
													</motion.button>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
			<hr className="border-gray-600" />
		</section>

	)
}

export default Feedback
