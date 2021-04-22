const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3006;
const pool = require("./db.js");

//middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to node server");
});

// routes that we define for our node server

// create todo
app.post("/todo", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodoInDB = await pool.query(
      "INSERT INTO todo (description) VALUES($1)",
      [description]
    );

    res.json(newTodoInDB);
  } catch (err) {
    console.error(err.message);
  }
});
// read the todo list

app.get("/read_todos", async (req, res) => {
  try {
    const readTodosFromDB = await pool.query("SELECT * from todo");
    res.json(readTodosFromDB.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// read a specific todo
app.get("/read_todos/:id", async (req, res) => {
  try {
    const { id } = req.params; // this looks at the url for whatever you put in :

    const readSingleTodoFromDB = await pool.query(
      "SELECT * from todo WHERE todo_id = ($1)",
      [id]
    );
    res.json(readSingleTodoFromDB);
  } catch (err) {
    console.error(err.message);
  }
});
// update the todo item on todolist

app.put("/update_todos/:id", async (req,res) => {
    try {
    const { id } = req.params
    const {description} = req.body
    
    const updateToDoinDB = await pool.query(
        "UPDATE todo SET description = $1 WHERE todo_id = $2",
        [description, id])
        res.json("Updated the todos yay!") }
    catch (err) { 

        console.error(err)
        
    }
    
}   
   
)

// delete the todo

app.delete("/delete_todos/:id", async (req,res) => {

    try {
        const { id } = req.params
        const deleteToDoInDB = await pool.query(
        "DELETE FROM todo WHERE todo_id = $1",
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