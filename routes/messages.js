const express = require('express')
const router = express.Router();
const Message = require('../model/userMessage')

//add message
router.post('/', async (req, res) => {
    const newMessage = new Message(req.body)
    try {
        const savedMessage = await newMessage.save();
        res.status(200).json(savedMessage)
    } catch (error) {
        res.status(500).json(error)
    }
})

//get message
router.get('/:conversationId', async (req,res) => {
    try {
        const messages = await Message.find({
            conversationId: req.params.conversationId
        })
        res.status(200).json(messages)
    } catch (error) {
        res.status(500).json(error)
    }
})

//delete messages
router.post('/delmsg:conversationId', async (req,res) => {
    try {
        const {conversationId} = req.params
        const query = {conversationId : conversationId.slice(1, conversationId.length)}
        const deleteMessages = await Message.deleteMany(query)
        res.status(200).json(deleteMessages)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router