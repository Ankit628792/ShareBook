import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { pageTransition, pageZoom } from '../util'
import { useForm } from 'react-hook-form';
import { postData } from '../requests/requestData';

import contact1 from '../assets/images/contact1.jpg'
import contact2 from '../assets/images/contact2.jpg'

function ContactForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({ reValidateMode: 'onChange' });

  const [data, setData] = useState({});

  // onSubmit handle event 
  const onSubmit = (data, e) => {
    setData(data);
    console.log('sending message ...')
    const res = postData(data, `${process.env.REACT_APP_BASEURL}/comments`);
    res.then((res) => {
      if (res.status === 201) {
        reset()
      }
    })
  };

  return (
    <>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageZoom}
        transition={pageTransition} className="relative contactform">
        <img loading="lazy" src="https://images.pexels.com/photos/3228766/pexels-photo-3228766.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" className="absolute inset-0 object-cover w-full h-full" alt="" />
        <div className="relative bg-opacity-75 bg-blue-500">
          <svg className="absolute inset-x-0 bottom-0 text-white" viewBox="0 0 1160 160">
            <path
              fill="currentColor"
              d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
            ></path>
          </svg>
          <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full text-center max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <h1 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                  Is there any query and want to contribute to the plateform ?
                </h1>
                <p className="max-w-xl mb-4 text-base font-medium text-gray-200 md:text-lg">
                  Just message us, we'll reach you within 24 hours. <br /> We are always here to help you.
                </p>

              </div>
              <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                  <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                    Contact Us
                  </h3>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-1 sm:mb-2">
                      <label htmlFor="firstName" className="inline-block mb-1 font-medium">Full Name</label>
                      <input
                        placeholder="John Doe"
                        required
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        {...register("fullname", { required: 'Please enter your name' })} />
                      {errors.fullname && <p className="text-red-500">{errors.fullname.message}</p>}
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label htmlFor="email" className="inline-block mb-1 font-medium">E-mail</label>
                      <input
                        placeholder="john.doe@example.com"
                        required
                        type="email"
                        required
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        {...register("email", {
                          required: true,
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                          }
                        })} />
                      {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label htmlFor="message" className="inline-block mb-1 font-medium">Your Message</label>
                      <textarea
                        placeholder="Type Your Message Here ..."
                        required
                        type="text"
                        className="flex-grow w-full resize-none py-2 h-24 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        {...register("comment", {
                          required: true,
                          minLength: { value: 3, message: "Too short" }
                        })} />
                      {errors.comment && <p className="text-red-500">{errors.comment.message}</p>}
                    </div>

                    <motion.button type="submit"
                      whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
                      whileTap={{ scale: 0.95, transition: { duration: 0.1 } }} className="btn-bg mx-auto mb-3 py-3 px-7 font-bold tracking-wide text-white focus:shadow-outline focus:outline-none"
                    >Send Message</motion.button>
                    <p className="text-xs p-text sm:text-sm">
                      Thanks for contacting us. We respect your privacy.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>


      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block text-sm uppercase font-semibold tracking-wider p-text">
              Contact Us
            </p>
          </div>
          <h2 className="max-w-lg my-3 font-sans text-3xl font-bold leading-none tracking-tight h-text sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="2feffae2-9edf-414e-ab8c-f0e6396a0fc1"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#2feffae2-9edf-414e-ab8c-f0e6396a0fc1)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">The</span>
            </span>{' '}
            Contact Guide
          </h2>
          <p className="text-base p-text md:text-lg">
            To get any type of clearification. You got an issue at any stage that is unable to resolve by you. To give an appreciation to us.
          </p>
        </div>
        <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
          <div className="grid grid-cols-2 gap-5">
            <img loading="lazy"
              className="object-cover w-full h-56 col-span-2 rounded shadow-lg"
              src="https://images.unsplash.com/photo-1466583985723-b74122659346?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1"
              alt=""
            />
            <img loading="lazy"
              className="object-cover w-full h-48 rounded shadow-lg"
              src="https://kaboompics.com/cache/2/d/5/3/1/2d531241160f86412eacead145008ab91735754a.jpeg"
              alt=""
            />
            <img loading="lazy"
              className="object-cover w-full h-48 rounded shadow-lg"
              src="https://kaboompics.com/cache/a/a/d/7/8/aad781006254ef0e4066c0257f4d3c84d0dda80a.jpeg"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="pb-4 mb-4 border-b">
              <h6 className="mb-2 font-semibold h-text leading-5 capitalize">
                To get any type of clearification
              </h6>
              <p className="text-sm p-text">
                All the details are provided on this platform. If you still want to know more about, be free to contact us.
              </p>
            </div>
            <div className="pb-4 mb-4 border-b">
              <h6 className="mb-2 font-semibold h-text leading-5">
                More Security Information
              </h6>
              <p className="text-sm p-text">
                Our plateform is much secure, if you have still doubt and worried about anything, we are always here for you..
              </p>
            </div>
            <div>
              <h6 className="mb-2 font-semibold h-text leading-5">
                Appreciate Our Work
              </h6>
              <p className="text-sm p-text">
                To provide a good feedback, Appreciate our work, We thanks for your response in advance. Provide a effective and beneficial service to the world is our first priority.
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center xl:pr-0 lg:max-w-lg">
            <div className="flex items-center justify-center w-16 h-16">
              <svg className="text-teal-900 w-7 h-7" viewBox="0 0 24 24">
                <polyline
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  points=" 8,5 8,1 16,1 16,5"
                  strokeLinejoin="round"
                />
                <polyline
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  points="9,15 1,15 1,5 23,5 23,15 15,15"
                  strokeLinejoin="round"
                />
                <polyline
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  points="22,18 22,23 2,23 2,18"
                  strokeLinejoin="round"
                />
                <rect
                  x="9"
                  y="13"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  width="6"
                  height="4"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight h-text capitalize sm:text-4xl sm:leading-none">
                Let us handle&nbsp;
                <br className="hidden md:block" />
                your next&nbsp;
                <span className="inline-block s-text">
                  move
                </span>
              </h2>
              <p className="text-base p-text md:text-lg">
                Our platform is open to contribute, after your authorization you can get the access to the code to improve the user experience and if you are non-coder, you can contribute via sharing your ideas.
              </p>
            </div>
            <div>
            </div>
          </div>
          <div className="flex items-center justify-center -mx-4 lg:pl-8">
            <div className="flex flex-col items-end px-3">
              <img loading="lazy"
                className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                src={contact1}
                alt=""
              />
              <img loading="lazy"
                className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                src={contact2}
                alt=""
              />
            </div>
            <div className="px-3">
              <img loading="lazy"
                className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                src="https://kaboompics.com/cache/2/3/c/0/a/23c0a6a24e5a4246db38e31800b88f3ee890c2b4.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactForm
