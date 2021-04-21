const express = require("express")
const app = express()
const cors = require("cors")
const address = "127.0.0.1"
const PORT = process.env.PORT || 3006
const pool = require("./db.js")
console.log(PORT)

// middleware
app.use(express.json())
app.use(cors())

app.get("/", (req,res) => {
    const message = "Hello, here's the / page!"
    res.send(message)
})

// routes that we're defining for our node server

//CRUD 

// create todo
app.post("/todo", async (req,res) => {
    try {
        const {description} = req.body
        const newTodoInDB = await pool.query("INSERT INTO todo (description) VALUES($1)", [description])
        console.log(req.body)
        res.json(newTodoInDB)
    } catch(err) {
        console.log(err.message)
    }
})
// read the todo list
app.get("/read_todos", async (req,res) => {
    try {
        const readTodosFromDB = await pool.query("SELECT * from todo ")
        res.json(readTodosFromDB)
    } catch(err) {
        console.log(err.message)
    }
})
// update the todo list on todolist

// delete the todo 





app.listen(PORT, () => {
    console.log(`server is on ${PORT}`)
})