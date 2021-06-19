import React from 'react'
import {motion} from 'framer-motion'
import { NavLink } from 'react-router-dom'
import appStore from "../assets/app-store.svg";
import googlePlay from "../assets/google-play.svg";

function Header() {
  return (
    <>
      {/* head1 */}
      <div className="pt-12 md:pt-16 md:pb-10">
        <div className="container px-8 sm:px-5 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="w-full mb-6 lg:w-1/2 py-6 text-center p-0 md:p-5 lg:p-10">
            <img className="w-full md:w-full z-50" src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" />
          </div>
          <div className="flex flex-col max-w-lg lg:w-1/2 justify-center items-start">
            <p className="inline-block text-xs font-semibold tracking-wider p-text uppercase rounded-full">For Whom plateform is this?</p>
            <h1 className="my-2 text-3xl md:text-5xl font-bold leading-tight h-text">Want to <span className="s-text">Share</span> or <span className="s-text">Get</span> a book ?</h1>
            <p className="pr-5 mb-4 text-lg p-text">We provide a large varities of book to share and get from others
              without any cost. This is a free plateform to meet your needs. Explore our services with a
              seemless and interactive experience.</p>
              <NavLink to="/allbooks"><motion.button
              whileHover={{scale: 1.05, transition: { duration: 0.1 }}}
              whileTap={{ scale: 0.95 , transition:{duration: 0.1}}} className="btn-bg mx-auto lg:mx-0 my-3 py-3 px-7 font-bold tracking-wide text-white focus:shadow-outline focus:outline-none"
            >Get A Book</motion.button></NavLink>
          </div>

        </div>

      </div>


      {/* head2 */}
      <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="mb-8 inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="lg:my-40 lg:max-w-lg lg:pr-5">
            <p className="inline-block text-xs mt-4 font-semibold tracking-wider p-text uppercase rounded-full">
              What we offer ?
            </p>
            <h2 className="my-2 font-sans text-3xl font-bold tracking-tight h-text sm:text-4xl lg:text-5xl sm:leading-none">
              Don't Buy, Just&nbsp;
              <br className="hidden md:block" />
              <span className="inline-block text-blue-400">
                Get
              </span>,
              <span className="inline-block text-blue-400">
                &nbsp;Read
              </span> &&nbsp;
              <span className="inline-block text-blue-400">
                Share
              </span>
            </h2>
            <p className="pr-5 mb-5 text-lg p-text">
              No need to buy or sell a book. Share it with others. Share your source of knowledge, Interest with others.
            </p>
            <div className="flex items-center">
            <NavLink to="/myaccount"><motion.button
              whileHover={{scale: 1.05, transition: { duration: 0.1 }}}
              whileTap={{ scale: 0.95 , transition:{duration: 0.1}}} className="btn-bg mx-auto lg:mx-0 my-3 py-3 px-7 font-bold tracking-wide text-white focus:shadow-outline focus:outline-none"
            >Share A Book</motion.button></NavLink>
              <NavLink
                to="/about"
                aria-label=""
                className="inline-flex items-center ml-4 font-semibold text-gray-800"
              >
                Learn more
              </NavLink>
            </div>
          </div>
        </div>
      </div>


      {/* head3 */}
      <div className="relative flex flex-col px-4 py-16 mx-auto lg:block lg:flex-col lg:py-32 xl:py-48 md:px-8 sm:max-w-xl md:max-w-full">
        <div className="z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center">
          <img
            src="https://kitwind.io/assets/kometa/laptop.png"
            className="object-cover object-right w-full h-auto lg:w-auto lg:h-full"
            alt=""
          />
        </div>
        <div className="relative flex justify-end max-w-xl mx-auto xl:pr-32 lg:max-w-screen-xl">
          <div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
            <div className="max-w-xl mb-6">
              <div>
                <p className="inline-block text-xs font-semibold tracking-wider p-text uppercase rounded-full bg-teal-accent-400">
                  Trusted plateform
                </p>
              </div>
              <h2 className="max-w-lg my-3 font-sans text-3xl font-bold tracking-tight h-text sm:text-4xl lg:text-5xl sm:leading-none">
                Why Choose Us ?
              </h2>
              <p className="p-text text-lg">
                With us, you will quickly get the book you want. With our
                network of all known book contributors, it is possible
                for us to meet the people's need. <br />
                Our Platform offer the option that the book is shared to you without searching it to the store.
              </p>
              <div className="grid gap-4 mt-8 sm:grid-cols-2">
                <div className="flex items-center capitalize space-x-6 text-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M5 13l4 4L19 7"></path>
                  </svg>
                  <h4>Fast Interactive Experience</h4>
                </div>
                <div className="flex items-center capitalize space-x-6 text-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M5 13l4 4L19 7"></path>
                  </svg>
                  <h4>Secure Process</h4>
                </div>
                <div className="flex items-center capitalize space-x-6 text-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M5 13l4 4L19 7"></path>
                  </svg>
                  <h4>No involvement of transaction</h4>
                </div>
                <div className="flex items-center capitalize space-x-6 text-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M5 13l4 4L19 7"></path>
                  </svg>
                  <h4>Show your Kindness</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* head4 */}
      <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
          <div className="lg:my-40 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6">
              <div>
                <p className="inline-block text-xs mt-4 font-semibold tracking-wider p-text uppercase rounded-full bg-teal-accent-400">
                  What you get ?
                </p>
              </div>
              <h2 className="max-w-lg my-3 font-sans text-3xl font-bold tracking-tight h-text sm:text-4xl lg:text-5xl sm:leading-none">
                How This Plateform &nbsp;
                <br className="hidden md:block" />
                is beneficial for you ?
                <span className="inline-block text-deep-purple-accent-400">

                </span>
              </h2>
              <p className="p-text text-lg">
                Whichever book you want, just search it here and contact them. You don't need to buy, just share. Share your book interest with others. You can also contribute to the <span className="s-text">ShareBook</span> initiative.
              </p>
            </div>
            <NavLink to="/allbooks"><motion.button
              whileHover={{scale: 1.05, transition: { duration: 0.1 }}}
              whileTap={{ scale: 0.95 , transition:{duration: 0.1}}} className="btn-bg mx-auto lg:mx-0 my-3 py-3 px-7 font-bold tracking-wide text-white focus:shadow-outline focus:outline-none"
            >Explore</motion.button></NavLink>

          </div>
        </div>
        <div className="mb-8 inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
            src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
        </div>
      </div>






      {/* head5 */}
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center justify-between w-full lg:flex-row">
          <div className="flex items-center justify-center lg:w-1/2 mb-4">
            <div className="w-2/5">
              <img className="object-cover" src="https://kitwind.io/assets/kometa/one-girl-phone.png" alt="" />
            </div>
            <div className="w-5/12 -ml-16 lg:-ml-32">
              <img className="object-cover" src="https://kitwind.io/assets/kometa/two-girls-phone.png" alt="" />
            </div>
          </div>
          <div className="lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6">
              <div>
                <p className="inline-block mt-4 text-xs font-semibold tracking-wider uppercase bg-teal-accent-400 p-text rounded-full">Responsive Web Design</p>
              </div>
              <h2 className="font-sans my-3 text-3xl font-bold tracking-tight h-text sm:text-4xl lg:text-5xl sm:leading-none max-w-lg">
                Everything you&nbsp;
                <br className="hidden md:block" />
                can imagine{' '}
                <span className="inline-block text-blue-400">is Real</span>
              </h2>
              <p className="p-text text-lg">We leverage the concept of mobile-first design. Through our work, we focus on designing an experience that works across different screen sizes.</p>
            </div>
            <div className="flex items-center space-x-3">
              <NavLink to="/" className="w-32 transition duration-300 hover:shadow-lg">
                <img src={appStore} className="object-cover object-top w-full h-auto mx-auto" alt="" />
              </NavLink>
              <NavLink to="/" className="w-32 transition duration-300 hover:shadow-lg">
                <img src={googlePlay} className="object-cover object-top w-full h-auto mx-auto" alt="" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>


      {/* head6 */}
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center md:max-w-lg mx-auto">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-teal-accent-400">
              <svg className="p-text w-7 h-7" viewBox="0 0 24 24">
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
              <h2 className="max-w-lg my-3 font-sans text-3xl font-bold tracking-tight h-text sm:text-4xl lg:text-5xl sm:leading-none">
                Secured and Featured&nbsp;
                <br className="hidden md:block" />
                <span className="inline-block text-blue-400">Chat System</span>
              </h2>
              <p className="p-text text-lg">
                To get contact with the Book owner, we have added a secured chat support. This chat support also contain different functionality for a secured system to handle unappropriate user.
              </p>
            </div>
            <div>
              <NavLink
                to="https://openbase.com/js/bcrypt/documentation" target="_blank"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </NavLink>
            </div>
          </div>
          <div className="flex items-center justify-center -mx-4 lg:pl-8">
            <div className="flex flex-col items-end px-3">
              <img
                className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
              />
              <img
                className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
              />
            </div>
            <div className="px-3">
              <img
                className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                src="https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>



      {/* head7 steps */}
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block text-xs font-semibold tracking-wider p-text uppercase rounded-full bg-teal-accent-400">
              Security Layers
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
                    id="f51618fb-0edb-4bcb-b35a-ffc770941286"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#f51618fb-0edb-4bcb-b35a-ffc770941286)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">The</span>
            </span>{' '}
            Security and Trust
          </h2>
          <p className="p-text text-lg">
            We provide a completely secured experience to you by securing your every details and data by Three Layer Tier
          </p>
        </div>
        <div className="grid gap-8 row-gap-0 lg:grid-cols-3">
          <div className="relative text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-20 sm:h-20">
              <svg
                className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
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
            <h6 className="mb-2 text-2xl font-extrabold">On Front-End</h6>
            <p className="max-w-md mb-3 text-sm h-text sm:mx-auto">
              From and To Front-End, your data is passed in the encryted format which can't be access to you and others.
            </p>
            <NavLink
              to="https://openbase.com/js/bcrypt/documentation" target="_blank"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </NavLink>
            <div className="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
              <svg
                className="w-8 p-text transform rotate-90 lg:rotate-0"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <line
                  fill="none"
                  strokeMiterlimit="10"
                  x1="2"
                  y1="12"
                  x2="22"
                  y2="12"
                />
                <polyline
                  fill="none"
                  strokeMiterlimit="10"
                  points="15,5 22,12 15,19 "
                />
              </svg>
            </div>
          </div>
          <div className="relative text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-20 sm:h-20">
              <svg
                className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
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
            <h6 className="mb-2 text-2xl font-extrabold">On Server</h6>
            <p className="max-w-md mb-3 text-sm h-text sm:mx-auto">
              Your data passed and request on this layer is again analysed to get the authenticated user. This layer again encrypt your details to add a plus point in the data security.
            </p>
            <NavLink
              to="https://openbase.com/js/bcrypt/documentation" target="_blank"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </NavLink>
            <div className="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
              <svg
                className="w-8 p-text transform rotate-90 lg:rotate-0"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <line
                  fill="none"
                  strokeMiterlimit="10"
                  x1="2"
                  y1="12"
                  x2="22"
                  y2="12"
                />
                <polyline
                  fill="none"
                  strokeMiterlimit="10"
                  points="15,5 22,12 15,19 "
                />
              </svg>
            </div>
          </div>
          <div className="relative text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-20 sm:h-20">
              <svg
                className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
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
            <h6 className="mb-2 text-2xl font-extrabold">Database</h6>
            <p className="max-w-md mb-3 text-sm h-text sm:mx-auto">
              The database is completely secured and no body can access that. It is unreachable to anyone. And it has no direct access to the application that makes it more secure.
            </p>
            <NavLink
              to="https://openbase.com/js/bcrypt/documentation" target="_blank"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </NavLink>
          </div>
        </div>
      </div>



      {/* head8 blog */}
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block text-xs font-semibold tracking-wider p-text uppercase rounded-full bg-teal-accent-400">
              How To Use Application ?
            </p>
          </div>
          <h2 className="max-w-lg my-2 font-sans text-3xl font-bold leading-none tracking-tight h-text sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="db164e35-2a0e-4c0f-ab05-f14edc6d4d30"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#db164e35-2a0e-4c0f-ab05-f14edc6d4d30)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Stuck</span>
            </span>{' '}
            Somewhere
          </h2>
          <p className="text-base mt-4 p-text md:text-lg">
            If you don't get how to use this application, we have added the procedure in more details in our blogs.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm hover:shadow-lg">
            <img
              src="https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
              className="object-cover w-full h-64"
              alt=""
            />
            <div className="p-5 border border-t-0">
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <NavLink
                  to="/"
                >
                  Book
                </NavLink>
                <span className="s-text">— 28 Dec 2020</span>
              </p>
              <NavLink
                to="/"
                className="inline-block mb-3 text-2xl font-bold leading-5"
              >
                How to share a book ?
              </NavLink>
              <p className="mb-2 p-text">
                Sed ut perspiciatis unde omnis iste natus error sit sed quia
                consequuntur magni voluptatem doloremque.
              </p>
              <NavLink
                to="/"
                aria-label=""
                className="inline-flex items-center font-semibold"
              >
                Learn more
              </NavLink>
            </div>
          </div>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm hover:shadow-lg">
            <img
              src="https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              className="object-cover w-full h-64"
              alt=""
            />
            <div className="p-5 border border-t-0">
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <NavLink
                  to="/"
                >
                  Book
                </NavLink>
                <span className="s-text">— 28 Dec 2020</span>
              </p>
              <NavLink
                to="/"
                className="inline-block mb-3 text-2xl font-bold leading-5"
              >
                How to get a book ?
              </NavLink>
              <p className="mb-2 p-text">
                Sed ut perspiciatis unde omnis iste natus error sit sed quia
                consequuntur magni voluptatem doloremque.
              </p>
              <NavLink
                to="/"
                aria-label=""
                className="inline-flex items-center font-semibold"
              >
                Learn more
              </NavLink>
            </div>
          </div>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm hover:shadow-lg">
            <img
              src="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              className="object-cover w-full h-64"
              alt=""
            />
            <div className="p-5 border border-t-0">
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <NavLink
                  to="/"
                >
                  contact us
                </NavLink>
                <span className="s-text">— 28 Dec 2020</span>
              </p>
              <NavLink
                to="/"
                className="inline-block mb-3 text-2xl font-bold leading-5"
              >
                How to reach us ?
              </NavLink>
              <p className="mb-2 p-text">
                Sed ut perspiciatis unde omnis iste natus error sit sed quia
                consequuntur magni voluptatem doloremque.
              </p>
              <NavLink
                to="/"
                aria-label=""
                className="inline-flex items-center font-semibold"
              >
                Learn more
              </NavLink>
            </div>
          </div>
        </div>
      </div>



    </>
  )
}

export default Header
