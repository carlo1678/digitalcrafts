
const express = require("express")
const app = express()
const PORT = 3004
const {readFile, link} = require("fs");
app.use(express.static('public'))

app.get("/", (req, res) => {
    readFile("./homePage.html", "utf8", (err,html) => {
        res.send(html)
    })
})

app.get("/store", (req, res) => {
    readFile("./store.html", "utf8", (err,html) => {
        res.send(html)
    })
})

app.get("/contact", (req, res) => {
    readFile("./contact.html", "utf8", (err,html) => {
        res.send(html)
    })
})

app.listen(PORT, () => {
    console.log(`Your server is being hosted on localhost:${PORT}`);
  });