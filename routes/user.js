const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs')
const path = require('path')
const multer = require('multer')
const nodemailer = require('nodemailer')
const HOST = process.env.HOST

const User = require('../model/userSchema');
const Authenticate = require('../middleware/authenticate');
const Comment = require('../model/userComment');
const Feedback = require('../model/userFeedback');


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



const sendMail = (emailId) => {
    
    // Gmail account info
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });
    // Email info
    const mailOptions = {
        from: process.env.EMAIL,
        to: emailId,
        subject: 'Confirmation for ShareBook Registration',
        text: `Thanks to register on Share Book, Let's Change the world `
    };
    // Send email 📧  and retrieve server response
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}


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
                // sendMail(userRegister.email)
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
                expires: new Date(Date.now() + 1000 * 60 * 10 * 6 * 48),
                httpOnly: true
            })

            if (!isMatch) {
                res.status(400).json({ error: 'Invalid Credentials' })
            } else {
                res.status(200).json({ message: 'User authenticated' });
            }
        }
        else {
            res.status(401).json({ error: "User doesn't exist" })
        }
    } catch (error) {
        console.log(error)
    }

})


//in between page authentication
router.get('/userAuthentication', Authenticate, (req, res) => {
    user = req.rootUser
    const { cpassword, Tokens, ...other } = user._doc;
    res.status(200).send(other)
})


//user signout
router.get('/signout', Authenticate, (req, res) => {
    // res.clearCookie('jwtoken', { path: '/' })
    req.rootUser.Tokens = []
    await req.rootUser.save();
    res.status(200).send("Signout")
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
router.patch('/updateuser:_id', async (req, res) => {
    // let image_url = `${HOST}/user/image/${req.file.filename}`;
    const { username, phone, location, about, image_url } = req.body
    try {
        let _id = req.params._id;
        _id = _id.slice(1, _id.length)
        const updateUser = await User.findByIdAndUpdate(_id, { username, phone, location, about, image_url }, { new: true });
        res.status(201).json({ message: 'updated successfully' });
    } catch (error) {
        res.status(404).send(error);
    }
});



router.get('/user', async (req, res) => {
    const userId = req.query.userId;
    // const email = req.query.email;
    try {
        const user = await User.findOne({ userId: userId })
            // : await User.findOne({ email: email });
        const { password, cpassword, Tokens, ...other } = user._doc;
        res.status(200).send(other)
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router