const express = require('express')

const emojis = []

const router = express.Router

const addEmojis = async (req, res) => {
    if (req.body) {
        emojis.push(req.body.data)
        res.status(200)
    }
}

const getEmojis = async (req, res) => {

    return res.json(emojis)
}

export const addRouter = router('/addEmojis', addEmojis)
export const getRouter = router('/getEmojis', getEmojis)