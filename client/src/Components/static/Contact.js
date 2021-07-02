import React from 'react'
import contact1 from '../../assets/images/contact1.jpg'
import contact2 from '../../assets/images/contact2.jpg'
import ContactForm from '../form/ContactForm'

function Contact() {

  return (
    <>
      <ContactForm />
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

export default Contact
