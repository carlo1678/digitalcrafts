const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3008;
const pool = require("./db.js");

//middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome to my To Do List Homework!");
  }); 

app.post("/todo", async (req, res) => {
    try {
        const { description } = req.body;
        const newItemInDB = await pool.query(
            "INSERT INTO todotable (description) VALUES($1)",
            [description]
        );
    
        res.json(newItemInDB);
    } catch (err) {
        console.error(err.message);
    }
});

app.get("/read_todos", async (req,res) => {
    try {
        const readTodosInDB = await pool.query("SELECT * from todotable");
        res.json(readTodosInDB.rows);
    } catch (err) {
        console.error(err.message)
    }
}) 

app.get("/read_todos/:id", async (req,res) => {
    try {
        const { id } = req.params
        const readSpecificTodoFromDB = await pool.query(
            "SELECT * from todotable WHERE todo_id = ($1)",
            [id]
        );
        res.json(readSpecificTodoFromDB);
    } catch (err) {
        console.error(err.message)
    }
})

app.put("/update_todos/:id", async (req,res) => {
    try {
        const { id } = req.params
        const {description} = req.body
        const updateToDo = await pool.query(
            "UPDATE todotable SET description = $1 WHERE todo_id = $2",
            [description, id])
            res.json("Updated!")}
    catch (err) {
        console.error(err)
    }
  
})

app.delete("/delete_todos/:id", async (req,res) => {
    try {
        const { id } = req.params
        const deleteToDo = await pool.query(
        "DELETE FROM todotable WHERE todo_id = $1",
        [id]
        )
        res.json("Todo was successfully deleted!")
        }
    catch (err) {
        console.error(err)
    }
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });