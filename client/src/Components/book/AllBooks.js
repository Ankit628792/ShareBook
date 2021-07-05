import React, { useState, useEffect } from 'react'
import books from '../../json/books'
import Book from './Book'
import { shuffleArray } from '../../util'
import axios from 'axios'

function AllBooks() {
    // const bookList = shuffleArray(books.books)
    const [userBooks, setuserBooks] = useState({})

    useEffect(() => {
        axios.get(`/api/books/getbooks`)
            .then((bookResponse)  => {
                console.log(bookResponse)
                const bookList = shuffleArray(bookResponse)
                setuserBooks(...bookList)
            })
            .catch((e) => {
                console.log(e);
            })
    }, [])
    return (
        <>
            <div className="all_book w-full max-w-full grid grid-cols-2 gap-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-3 lg:px-6 py-12 bg-gray-100 xl:px-10">
                {/* {
                    bookList.map((book) => (
                        <Book key={book.ISBN} id={book.ISBN} author={book.author} title={book.title} image={book.image} summary={book.summary} price={book.price} />
                    ))
                } */}
                {userBooks && userBooks.length > 0 ?
                    userBooks.map((book) => (
                        <Book key={book.bookId} id={book.bookId} category={book.category} location={book.location} title={book.bookname} image={book.image_url} summary={book.description} />
                    ))
                    :
                    <>
                    </>
                }

            </div>
        </>
    )
}

export default AllBooks
