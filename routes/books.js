const express = require('express')
const router = express.Router();
const path = require('path')
const multer = require('multer')
require('../db/conn')
const HOST = process.env.HOST 

const Book = require('../model/userBook');



// Store book image using multer
const storageBook = multer.diskStorage({
    destination: './books/image',
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${path.extname(file.originalname)}`)
    }
})
const uploadBook = multer({
    storage: storageBook
})
router.use('/books/image', express.static('books/image'))
// Store book image using multer end 


//get books of user by userid
router.get('/getmybook:userId', async (req, res) => {
    let userId = req.params.userId;
    userId = userId.slice(1, userId.length);
    try {
        const mybooks = await Book.find({ userId: userId });
        res.status(200).send(mybooks)
    } catch (error) {
        res.status(400).json({ message: 'unable to fetch my books' })
    }
})

//get books of user by bookId
router.get('/getbook:bookId', async (req, res) => {
    let bookId = req.params.bookId;
    bookId = bookId.slice(1, bookId.length);
    try {
        const book = await Book.find({ bookId: bookId });
        res.status(200).send(book)
    } catch (error) {
        res.status(400).json({ message: 'unable to get book' })
    }
})


//add a new book by user
router.post('/addbook', uploadBook.single('image'), (req, res) => {
    const { userId, username, location, bookname, category, condition, description } = req.body;
    let image_url = `${HOST}/books/image/${req.file.filename}`;
    try {
        // const bookId = new Date().getTime().toString();
        const bookId = `${req.file.filename.split('.')[0]}`
        const book = new Book({ userId, username, location, bookId, bookname, image_url, category, condition, description });
        book.save().then((data) => {
            res.status(201).json({ message: "book registered successfully" });
        })
            .catch((e) => {
                console.log(e)
            })
    } catch (error) {
        res.status(500).json({ error: 'failed to register' })
    }
})


//all books
router.get('/getbooks', async (req, res) => {
    try {
        const allbooks = await Book.find();
        res.status(200).send(allbooks)
    } catch (error) {
        res.status(400).json({ message: 'unable to fetch books' })
    }
})


module.exports = router