const express = require('express')

const app = express()
const PORT = 5000


// app.get('/', () => {
//     res.json()
// })

app.listen(() => {
    console.log(`App is listen in port ${PORT}`)
})