const express = require('express')
const router = express.Router();
const path = require('path')
const multer = require('multer')
require('../db/conn')
const HOST = process.env.HOST

const Book = require('../model/userBook');



// Store book image using multer
const storageBook = multer.diskStorage({
    destination: './client/build/public/books/',
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${path.extname(file.originalname)}`)
    }
})
const uploadBook = multer({
    storage: storageBook
})
router.use('/client/build/public/books', express.static('client/build/public/books'))
// Store book image using multer end 


//get books of user by userid
router.get('/getmybook:userId', async (req, res) => {
    let userId = req.params.userId;
    userId = userId.slice(1, userId.length);
    try {
        const mybooks = await Book.find({ userId: userId }).sort({bookId: -1});
        res.status(200).send(mybooks)
    } catch (error) {
        res.status(400).json({ message: 'unable to fetch my books' })
    }
})



//all books
router.get('/allbooks', async (req, res) => {
    try {
        const allbooks = await Book.find();
        res.status(200).send(allbooks)
    } catch (error) {
        res.status(400).json({ message: 'unable to fetch books' })
    }
})

//get books of user by bookId
router.get('/getbook:bookId', async (req, res) => {
    let bookId = req.params.bookId;
    bookId = bookId.slice(1, bookId.length);
    try {
        const book = await Book.findOne({ bookId: bookId });
        res.status(200).send(book)
    } catch (error) {
        res.status(400).json({ message: 'unable to get book' })
    }
})


//add a new book by user
router.post('/addbook', uploadBook.single('image_url'), (req, res) => {
    const { userId, username, location, bookname, category, condition, description } = req.body;
    console.log(req.file);
    console.log(req.body);
    try {
        // const bookId = new Date().getTime().toString();
        const bookId = `${req.file.filename.split('.')[0]}`
        const image_url = `books/${req.file.filename}`;
        console.log(image_url);
        const book = new Book({ userId, username, location, bookId, bookname, image_url, category, condition, description });
        book.save().then((data) => {
            console.log(data);
            res.status(201).json({ message: "book registered successfully" });
        })
            .catch((e) => {
                console.log(e)
            })
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'failed to register' })
    }
})

router.delete('/deleteBook/:bookId', async (req,res) => {
    try {
        const {bookId} = req.params
        const query = {bookId : bookId}
        const deleteBook = await Book.deleteOne(query);
        res.status(200).json('Book removed successfully')
    } catch (error) {
        res.status(500).json(error)
    }
})


router.post('/addbookmark', (req, res) => {
    console.log(req.body)
})

router.post('/removebookmark:bookId', (req, res) => {
    console.log(req.body)
    console.log(req.params)
})



module.exports = router
