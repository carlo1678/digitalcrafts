const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3050;
const pool = require("./db.js");

//middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome to my Example Database!");
  }); 

app.post("/info", async (req, res) => {
    try {
        const { description } = req.body;
        const newItemInDB = await pool.query(
            "INSERT INTO exampletable (description) VALUES($1)",
            [description]
        );
    
        res.json(newItemInDB);
    } catch (err) {
        console.error(err.message);
    }
});

app.get("/read_info", async (req,res) => {
    try {
        const readInfoInDB = await pool.query("SELECT * from exampletable");
        res.json(readInfoInDB.rows);
    } catch (err) {
        console.error(err.message)
    }
})

app.get("/read_info/:id", async (req,res) => {
    try {
        const { id } = req.params
        const readSpecificInfoFromDB = await pool.query(
            "SELECT * from exampletable WHERE example_id = ($1)",
            [id]
        );
        res.json(readSpecificInfoFromDB);
    } catch (err) {
        console.error(err.message)
    }
})    

app.put("/update_info/:id", async (req,res) => {
    try {
        const { id } = req.params
        const {description} = req.body
        const updateInfo = await pool.query(
            "UPDATE exampletable SET description = $1 WHERE example_id = $2",
            [description, id])
            res.json("Updated!")}
    catch (err) {
        console.error(err)
    }
  
})

app.delete("/delete_info/:id", async (req,res) => {
    try {
        const { id } = req.params
        const deleteInfo = await pool.query(
        "DELETE FROM exampletable WHERE example_id = $1",
        [id]
        )
        res.json("Example was successfully deleted!")
        }
    catch (err) {
        console.error(err)
    }
})















app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });