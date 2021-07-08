import React, { useState, useEffect } from 'react'
import books from '../../json/books'
import Book from './Book'
import { shuffleArray } from '../../util'
import axios from 'axios'

function AllBooks() {
    // const bookList = shuffleArray(books.books)
    const [userBooks, setuserBooks] = useState({})
    const [result, setResult] = useState('')

    useEffect(() => {
        axios.get(`/api/books/allbooks`)
            .then((bookResponse) => {
                const bookList = shuffleArray(bookResponse.data)
                setuserBooks(bookList)
            })
            .catch((e) => {
                console.log(e);
            })
    }, [])

    const filterBook = (e) => {
        e.preventDefault();
        setResult(e.target.value.toLowerCase())
    }

    return (
        <>
            <div className="w-full bg-gray-100 py-4 flex items-center">
                <label className="mx-auto relative w-11/12 sm:w-3/5 md:w-2/5 lg:w-1/3">

                    <input className="rounded-full py-3 w-full pr-6 pl-10 bg-white focus:outline-none text-gray-900 shadow-md focus:shadow-lg transition duration-300 ease-in"
                        type="text" placeholder="Search by name, category, location"
                        value={result}
                        onChange={filterBook} />
                    <span className="absolute top-0 left-0 mt-3 ml-3 inline-block">
                        <svg viewBox="0 0 24 24" className="w-6 h-6">
                            <path fill="#bbb"
                                d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                        </svg>
                    </span>
                </label>
            </div>
            <div className="all_book w-full max-w-full grid grid-cols-2 gap-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-3 lg:px-6 py-8 bg-gray-100 xl:px-10">
                {/* {
                    bookList.map((book) => (
                        <Book key={book.ISBN} id={book.ISBN} author={book.author} title={book.title} image={book.image} summary={book.summary} price={book.price} />
                    ))
                } */}
                {userBooks && userBooks.length > 0 &&
                    userBooks.map((book, i) => (
                        (book.bookname.toLowerCase().includes(result) || book.location.toLowerCase().includes(result) || book.description.toLowerCase().includes(result)) ?
                            <Book key={i} id={book.bookId} category={book.category} location={book.location} title={book.bookname} image={book.image_url} summary={book.description} />
                            :
                            <>
                                <div className="w-full">
                                    <h1 className="h-text font-medium text-xl mb-2">
                                        No Search Matching Book Found !
                                    </h1>
                                </div>
                            </>
                    ))

                }

            </div>

        </>
    )
}

export default AllBooks
