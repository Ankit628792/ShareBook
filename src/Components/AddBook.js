import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { pageTransition, pageZoom } from "../util";
import { useForm } from "react-hook-form";
import { postData } from '../requests/requestData'
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import dummyImg from '../assets/dummy.png'

function AddBook({ setisAddBook }) {

    const userSession = useSelector((state) => state.userReducer.userSession);
    const { userId, username, location } = userSession

    const history = useHistory();

    const { register, handleSubmit, formState: { errors }, reset } = useForm({ reValidateMode: 'onChange' });

    const [data, setData] = useState({});

    const [image, setImage] = useState();
    const [preview, setPreview] = useState();
    const fileInputRef = useRef();

    useEffect(() => {
        if (image) {
            const reader = new FileReader();
            reader.onload = () => {
                setPreview(reader.result)
            }
            reader.readAsDataURL(image)
        } else {
            setPreview(null)
        }
    }, [image])

    // onSubmit handle event 
    const onSubmit = (data, e) => {
        setData(data);
        console.log('registering user ...')

        let fileReader = new FileReader(); 
        fileReader.readAsDataURL(data.image[0]); 
        fileReader.onload = function() {
            data.image = fileReader.result
            const bookData = { userId, username, location, ...data }
            console.log(bookData)
            const res = postData(bookData, '/addbook')
            res.then((res) => {
                if (res.status === 201) {
                    history.push('/mybook')
                    setisAddBook(false)
                }
            })
        }; 
        fileReader.onerror = function() {
          alert(fileReader.error);
        }; 

        
    };

    return (
        <>
            <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageZoom}
                transition={pageTransition} className="grid mt-8 mb-12 max-w-screen-sm mx-auto gap-8 grid-cols-1">

                <div className="bg-white shadow-xl rounded-3xl px-6 sm:px-12 py-5">

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-row items-center justify-between mb-6">
                            <h2 className="font-bold h-text text-2xl my-3">Add Book</h2>
                            <motion.button
                                whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
                                whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
                                className="bg-gray-900 mx-2 px-5 py-3 flex items-center mb-1 shadow-xl text-white rounded-full focus:outline-none hover:bg-gray-800"
                                type="button" onClick={() => { setisAddBook(false) }}>
                                Cancel
                            </motion.button>

                        </div>
                        <div className="mb-5">
                            <div className="max-w-xs max-h-80 rounded-lg cursor-pointer border overflow-hidden">
                            {
                            preview ?
                                <img className="w-full h-full object-cover rounded-lg" src={preview} alt="" onClick={() => setImage(null)} />
                                :
                                (
                                    <img src={dummyImg} className="w-full h-full object-cover rounded-lg" onClick={(e) => {
                                        e.preventDefault();
                                        fileInputRef.current.click();
                                    }} alt="" />
                                )
                        }
                        <input type="file" className="hidden" ref={fileInputRef} accept="image/*" onChange={(e) => {
                            const file = e.target.files[0];
                            if (file && file.type.substring(0, 5) === 'image') {
                                setImage(file)
                            } else {
                                setImage(null)
                            }
                        }} />              
                                      </div>
                        </div>
                        <div className="md:flex md:flex-row md:space-x-4 w-full">
                            <div className="mb-4 md:space-y-2 w-full">
                                <label className="font-semibold text-gray-600">Book Name</label>
                                <input placeholder="Book Name" className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 mt-2 focus:outline-none focus:border-gray-400"
                                    type="text" value={data.bookname} {...register("bookname", { required: 'Please enter book name' })} />
                                {errors.bookname && <p className="text-red-500">{errors.bookname.message}</p>}
                            </div>
                            <div className="mb-4 md:space-y-2 w-full text-sm">
                                <label className="font-semibold text-gray-600">Book Category</label>
                                <input placeholder="Category" className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 mt-2 focus:outline-none focus:border-gray-400"
                                    type="text" {...register("category", { required: 'Please enter a category' })} />
                                {errors.category && <p className="text-red-500">{errors.category.message}</p>}
                            </div>
                        </div>
                        <div className="mb-4 md:space-y-2 w-full">
                            <label className=" font-semibold text-gray-600">Book Condition</label>
                            <div className="flex flex-wrap items-stretch w-full mb-4 relative">
                                <input type="text" className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-10 border-grey-light rounded-lg px-3 relative focus:border-blue focus:shadow mt-2 focus:outline-none focus:border-gray-400"
                                    placeholder="2 Months Old , 5 Year Old, Misssing Some Pages, etc" {...register("condition")} />
                            </div>
                        </div>
                        <div className="flex-auto w-full mb-1 space-y-2">
                            <label className="font-semibold text-gray-600">Description</label>
                            <textarea className="w-full resize-none h-28 appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  py-3 px-4 mt-2 focus:outline-none focus:border-gray-400"
                                placeholder="Enter your Book Information / Description" {...register("description", { required: 'Please enter book description' })} ></textarea>
                            {errors.description && <p className="text-red-500">{errors.description.message}</p>}
                            <p className="text-sm text-gray-400 text-left my-3">You inserted 0 characters</p>
                            <p className="text-sm text-red-400 text-left my-3">Maximum length 1000 characters</p>
                        </div>
                        <div className="flex items-center justify-end">
                            {/* <button className="mb-2 md:mb-0 btn-bg px-5 py-2 text-base shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500">Save</button>
                            <button className="mb-2 md:mb-0 bg-white px-5 py-2 text-base shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"> Cancel </button> */}
                            <motion.button
                                whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
                                whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
                                className="px-6 mx-2 py-3 flex items-center mb-1 mr-1 text-white focus:outline-none btn-bg"
                                type="submit">
                                Save
                            </motion.button>
                        </div>
                    </form>
                </div>
            </motion.div>

        </>
    )
}

export default AddBook
