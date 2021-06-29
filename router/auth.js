const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const fs = require('fs')
const path = require('path')
const multer = require('multer')
require('../db/conn')
const HOST = process.env.HOST 

const User = require('../model/userSchema');
const Authenticate = require('../middleware/authenticate');
const Comment = require('../model/userComment');
const Feedback = require('../model/userFeedback');
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


// Store user image using multer
const storageUser = multer.diskStorage({
    destination: './user/image',
    filename: (req, file, cb) => {
        return cb(null, `image_${Date.now()}${path.extname(file.originalname)}`)
    }
})
const uploadUser = multer({
    storage: storageUser
})
router.use('/user/image', express.static('user/image'))
// Store book image using multer end



//signup user
router.post('/signup', async (req, res) => {
    const { username, email, password, cpassword } = req.body;

    if (!username || !email || !password || !cpassword) {
        return res.status(422).json({ error: "Fill all the fields" })
    }

    try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(420).json({ error: "Email already exist" })
        } else if (password !== cpassword) {
            return res.status(421).json({ error: "Invalid Credential" })
        } else {
            const userId = new Date().getTime().toString();
            const user = new User({ userId, username, email, password, cpassword });
            try {
                const userRegister = await user.save()
                res.status(201).json({ message: "User registered successfully" });
            } catch (error) {
                res.status(400).json({ error: 'Failed to register' })
            }
        }
    }
    catch (error) {
        console.log(error)
    }
})


//signin user
router.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(422).json({ error: "Fill all the fields" })
    }

    try {
        const userLogin = await User.findOne({ email: email })
        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password)

            const token = await userLogin.generateAuthToken();

            res.cookie('jwtoken', token, {
                expires: new Date(Date.now() + 1000 * 60 * 10 * 6),
                httpOnly: true
            })

            if (!isMatch) {
                res.status(400).json({ error: 'Invalid Credentials' })
            } else {
                res.status(200).json({ message: 'User authenticated' });
            }
        }
        else{
            res.status(401).json({ error: "User doesn't exist" })
        }
    } catch (error) {
        console.log(error)
    }

})


//in between page authentication
router.get('/userAuthentication', Authenticate, (req, res) => {
    user = req.rootUser
    res.status(200).send(user)
})


//user signout
router.get('/signout', Authenticate, (req, res) => {
    // res.clearCookie('jwtoken', { path: '/' })
    req.rootUser.Tokens = []
    res.status(200).send('User signout')
});


//comments
router.post('/comments', async (req, res) => {
    const { fullname, email, comment } = req.body;
    try {
        const userComment = new Comment({ fullname, email, comment });
        const commentRegistered = await userComment.save();
        res.status(201).send('Message sent')
    }
    catch (error) {
        console.log(error)
    }
})


//feedbacks
router.post('/feedback', async (req, res) => {
    const { userId, fullname, email, feedback } = req.body;
    try {
        const userFeedback = new Feedback({ userId, fullname, email, feedback });
        const feedbackRegistered = await userFeedback.save();
        res.status(201).send('Message sent')
    }
    catch (error) {
        console.log(error)
    }
})


//update user by id
router.patch('/updateuser:_id', uploadUser.single('image'), async (req, res) => {
        let image_url = `${HOST}/user/image/${req.file.filename}`;
    const { username, phone, location, about } = req.body
    try {
        let _id = req.params._id;
        _id = _id.slice(1, _id.length)
        const updateUser = await User.findByIdAndUpdate(_id, { username, phone, location, about, image_url }, { new: true });
        res.status(201).json({ message: 'updated successfully' });
    } catch (error) {
        res.status(404).send(error);
    }
});


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