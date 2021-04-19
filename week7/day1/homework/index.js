const express = require("express")
const app = express()

const port = 3010

app.get("/", (req,res) => {
    const message = "Hello, here's my first node server!"
    res.send(message)
})

app.listen(port, () => {
    console.log(`server is on ${port}`)
})