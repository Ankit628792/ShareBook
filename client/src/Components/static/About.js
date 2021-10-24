import React from 'react'
import { motion } from 'framer-motion'
import { pageTransition, pageZoom } from '../../util'
import { NavLink } from 'react-router-dom'
import Testimonials from './Testimonials'

import about1 from '../../assets/images/about1.jpg'
import about3 from '../../assets/images/about3.jpg'

function About() {
  return (
    <>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageZoom}
        transition={pageTransition} className="about px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block text-xs font-semibold p-text tracking-wider uppercase">
              Who we are ?
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
              <span className="relative">We</span>
            </span>{' '}
            Are ShareBook
          </h2>
          <p className="text-base p-text md:text-lg">
            an intiative that is started for the purpose to share the book people to people without any cost by the nearby people to you.
          </p>
        </div>
        <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
          <div className="grid grid-cols-2 gap-5">
            <img loading="lazy"
              className="object-cover w-full h-56 col-span-2 rounded shadow-lg"
              src="https://images.unsplash.com/photo-1498955472675-532cdee9d6b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=763&q=80"
              alt=""
            />
            <img loading="lazy"
              className="object-cover w-full h-48 rounded shadow-lg"
              src="https://media.istockphoto.com/photos/famous-story-books-for-sale-picture-id541123100?k=6&m=541123100&s=612x612&w=0&h=H3veslL-Nhgu-qdhrzGpr9Bw4DUmHN-Epiulxf9rR68="
              alt=""
            />
            <img loading="lazy"
              className="object-cover w-full h-48 rounded shadow-lg"
              src="https://media.istockphoto.com/photos/new-year-2021-creative-design-concept-with-book-shelf-picture-id1216920372?k=6&m=1216920372&s=612x612&w=0&h=yiFOBURiszzxACP7ctO7DYZsyVlAX6NLeTSLRQLYkyY="
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="pb-4 mb-4 border-b">
              <h6 className="mb-2 font-semibold h-text leading-5 capitalize">
                Free Plateform
              </h6>
              <p className="text-sm p-text">
                No payment involvement. Use Freely and Share Freely. Our motive is to make system of sharing the book, so that the any person can read and learn from the book without even buying it.
              </p>
            </div>
            <div className="pb-4 mb-4 border-b">
              <h6 className="mb-2 font-semibold leading-5 h-text capitalize">
                Available Share Book Near By
              </h6>
              <p className="text-sm p-text">
                Share and get the book with people nearby your area so they don't have to go so far in the search of book.
              </p>
            </div>
            <div>
              <h6 className="mb-2 font-semibold leading-5 h-text capitalize">
                Meet with the new people
              </h6>
              <p className="text-sm p-text">
                Share the book and make new friends. You're not just sharing the book, it's your interest that is shared by you to others.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center lg:max-w-lg">
            <div className="flex items-center justify-center w-16 h-16">
              <svg className="w-7 h-7" viewBox="0 0 24 24">
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
              <h2 className="max-w-lg mb-3 font-sans text-3xl font-bold tracking-tight h-text sm:text-4xl sm:leading-none">
                To Make a <span className="s-text">Positive Change</span> in the Livings.
              </h2>
              <p className="text-base p-text md:text-lg">
                Every person have the birth right to read and learn for free. With this thought we want to initiate a change in the society, so that anybody can get the book for free.
              </p>
            </div>
            <div>

            </div>
          </div>
          <div className="flex items-center justify-center -mx-4 lg:pl-8">
            <div className="flex flex-col items-end px-3">
              <img loading="lazy"
                className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                src={about1}
                alt=""
              />
              <img loading="lazy"
                className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                src="https://media.istockphoto.com/photos/head-with-a-bookshelf-in-front-of-black-wall-picture-id996690238?k=6&m=996690238&s=612x612&w=0&h=NI32G9vuWurxw46d0p9VcpqHGKbPs1F6XhqGPn9ULG0="
                alt=""
              />
            </div>
            <div className="px-3">
              <img loading="lazy"
                className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                src={about3}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>


      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
          <div>
            <img loading="lazy"
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-3 font-sans text-3xl font-bold tracking-tight h-text sm:text-4xl sm:leading-none">
                Have read the book?&nbsp;
                <br className="hidden md:block" />
                Now <span className="s-text">Share it</span>.
              </h2>
              <p className="text-base p-text md:text-lg">
                If you've already read the book and taking the space in your book shelf. Take it out from there and share it others so they can also read it.  
              </p>
            </div>
              <div>
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-100">
                  <svg
                    className="w-10 h-10"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="mb-2 font-semibold leading-5 h-text">
                  Use space in your book shelf Wisely
                </h6>
                <p className="text-sm p-text">
                  Making a collection of book is nice thing but what about to share it to others who actuallly need those books? Replace the book in your book shelf with the other book, by sharing and getting the book.
                </p>
              </div>
            </div>
        </div>
      </div>


      <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block" viewBox="0 0 100 100" fill="currentColor" preserveAspectRatio="none slice">
            <path d="M50 0H100L50 100H0L50 0Z"></path>
          </svg>
          <img loading="lazy"
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src="https://images.unsplash.com/photo-1514894780887-121968d00567?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1"
            alt=""
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <p className="inline-block mt-4 text-xs font-semibold tracking-wider p-text uppercase">
              Insterest in the Book</p>
            <h2 className="my-2 font-sans text-3xl font-bold tracking-tight h-text sm:text-4xl sm:leading-none">
              Share Your <span className="s-text">Interest</span> With Others
            </h2>
            <p className="pr-5 mb-5 text-base p-text md:text-lg">
              Book are an integral part of our life directly and indirectly. You're not just sharing the book, it's your interest that have to taken to read the book.
            </p>
            <div className="flex items-center">
              <NavLink to="/allbooks">
                <motion.button
                  whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
                  whileTap={{ scale: 0.95, transition: { duration: 0.1 } }} className="btn-bg mx-auto lg:mx-0 my-3 py-3 px-7 font-bold tracking-wide text-white focus:shadow-outline focus:outline-none"
                >Get Started</motion.button>
              </NavLink>
              <NavLink to="/" aria-label="" className="inline-flex items-center font-semibold text-gray-800 ml-4">Learn more</NavLink>
            </div>
          </div>
        </div>
      </div>


      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
          <div>
            <img loading="lazy"
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-3 font-sans text-3xl font-bold tracking-tight h-text sm:text-4xl sm:leading-none">
                Don't want to share for free?&nbsp;
                <br className="hidden md:block" />
                Share it based on&nbsp;<span className="s-text">Agreement</span>.
              </h2>
              <p className="text-base p-text md:text-lg">
                If owner wants to share with an agreement, user have to accept the agreement and while sharing or getting the book, give a duly signed copy of agreement to the owner.
              </p>
            </div>
            <div className="grid gap-8 row-gap-8 sm:grid-cols-2">
              <div>
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-100">
                  <svg
                    className="w-10 h-10"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="mb-2 font-semibold h-text leading-5">
                  Share with payment
                </h6>
                <p className="text-sm p-text">
                  If you choose to share the book with the cost, raise an agreement and make the payment based on agreement
                </p>
              </div>
              <div>
                <div className="flex items-center justify-center w-12 h-12 mb-4 bg-indigo-100 rounded-full">
                  <svg
                    className="w-10 h-10"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="mb-2 font-semibold leading-5 h-text">
                  For a period of time
                </h6>
                <p className="text-sm p-text">
                  Share for a period of time under the sharebook agreement to the user.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* <Testimonials /> */}

    </>
  )
}

export default About
