const express = require("express")
const app = express()
const address = "127.0.0.1"
const PORT = 3020
app.use(express.json())

app.get("/", (req,res) => {
    const message = "Hello, here's the / page!"
    res.send(message)
})

app.get("/about", (req,res) => {
    const message = "Hello, here's my about page!"
    res.send(message)
})

app.get("/team", (req,res) => {
    const message = "Hello, here's my team page!"
    res.send(message)
})

app.post("/FAQ", (req, res) => {
    const {callsign,name} = req.body
    const message = `Your callsign is ${callsign} and it is called ${name}`;
    res.send(message);
  });

app.listen(PORT, () => {
    console.log(`server is on ${PORT}`)
})

