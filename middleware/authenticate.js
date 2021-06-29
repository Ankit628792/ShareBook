const jwt = require('jsonwebtoken');
const User = require('../model/userSchema');

const Authenticate = async (req, res, next) => {
    
    try {
        const token = req.cookies.jwtoken;
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

        const rootUser = await User.findOne({_id: verifyToken._id, 'Tokens.token': token});

        if(!rootUser) {throw new Error('User not found')}

        req.token = token;
        req.rootUser = rootUser;

        next()
    } catch (error) {
        res.status(401).send('Unautherized User, no token provided')
    }
}

module.exports = Authenticate ;