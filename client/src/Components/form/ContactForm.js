import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { pageTransition, pageZoom } from '../../util'
import { useForm } from 'react-hook-form';
import { postData } from '../../requests/requestData';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({ reValidateMode: 'onChange' });

  const [data, setData] = useState({});

  const [isSending, setIsSending] = useState(false)

  // onSubmit handle event 
  const onSubmit = (data, e) => {
    setData(data);
    setIsSending(true);
    console.log('sending message ...')
    const res = postData(data, `/api/user/comments`);
    emailjs.send('service_sv9wgnh', 'template_f1ugzsm', data, 'user_MakiHHTPMRIhEyg9GFelr')
      .then((response) => {
        setIsSending(false)
        toast('Message Sent Successfully 🤗🥳🎉', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
        reset()
      }, (err) => {
        setIsSending(false);
        toast('Failed To Send Message 🥺😥🤕', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
      });
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
                <h1 className="max-w-lg mb-6 font-sans text-2xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
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
                    >
                      {
                        isSending ? 'Sending ...' : 'Send Message'
                      }
                    </motion.button>
                    <p className="text-xs p-text sm:text-sm">
                      Thanks for contacting us. We respect your privacy.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </motion.div>
    </>
  )
}

export default ContactForm
