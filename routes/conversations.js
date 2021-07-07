const express = require('express')
const router = express.Router();
const Conversation = require('../model/userConversation')


//new conv
router.post('/', async (req,res) => {
    const {senderId, receiverId, bookname} = req.body
    const convExist = await Conversation.findOne({ $or: [ {members: [senderId, receiverId]}, {members: [receiverId, senderId]} ]});
        if (convExist) {
            return res.status(200).json({ msg: "conv exist" })
        }
        else{

            const newConversation = new Conversation({
                members: [senderId, receiverId],
                bookname: bookname
            })
            try {
                const savedConversation = await newConversation.save()
                res.status(200).json(savedConversation)
            } catch (error) {
                res.status(500).json(error)
            }
        }
})

//get conv of user
router.get('/:userId', async (req,res) => {
    const {userId} = req.params
    try {
        const conversation = await Conversation.find({
            members: { $in: [userId]}
        })
        res.status(200).json(conversation)
    } catch (error) {
        res.status(500).json(error)
    }
})


//delete conversation
router.post('/delconversation:_id', async (req,res) => {
    try {
        const {_id} = req.params
        const query = {_id : _id.slice(1, _id.length)}
        const deleteConversation = await Conversation.deleteOne(query)
        res.status(200).json(deleteConversation)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router