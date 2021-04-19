const http = require("http")
const express = require("express")
const app = express()
const address = "127.0.0.1"
const PORT = 3002
const {readFile} = require("fs")

app.use(express.json())

// const server = http.createServer((req,res) => {
//     console.log(req)
//     res.statusCode = 200
//     res.setHeader("Content-Type", "text/plain")
//     res.end("hello")
// })

// server.listen(PORT, address, () => {
//     console.log(`server is on http://${address}:${PORT}`)
// })
app.get("/", (req, res) => {
    readFile("./index.html","utf8",(html)=> {
        res.send(html)
    })
    // res.end("Hello")
})
app.get("/home", (req, res) => {
    res.end("Hello another-place")
})

app.listen(PORT, () =>{
    console.log(`Your server is listening on ${PORT}`)
})