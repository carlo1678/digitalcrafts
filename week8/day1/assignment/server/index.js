const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3075;
const pool = require("./db.js");
const es6Renderer = require("express-es6-template-engine")


//middleware
app.use(express.json());
app.use(cors());
app.engine("html", es6Renderer);
app.set("views","../template")
app.set("view engine", "html")

app.get("/", (req, res) => {
    res.render("peopleInfo");
  }); 

app.post("/", async (req,res) =>{
    const {firstname, lastname, city, birthyear} = req.body;
    try {
        const sendToDB = await pool.query(
            "INSERT INTO crudtable (firstname,lastname,city,birthyear) VALUES($1,$2,$3,$4)",
            [firstname, lastname, city, birthyear]
        )
        res.status(200).send("Info has been updated!")
    } catch (err) {
        console.error(err.message)
    }
})

app.get("/person/:id", async (req,res) => {
    try {
        const {id} = req.params
        const readSpecificPersonFromDB = await pool.query(
            "SELECT * from crudtable WHERE example_id = ($1)",
            [id]
        );
        const personInfo = readSpecificPersonFromDB.rows
        console.log(readSpecificPersonFromDB.rows)
        res.render("specificPeople", {
            locals: {
                personInfo
            }
        })
        // res.send(readSpecificPersonFromDB.rows)
        // console.log(readSpecificPersonFromDB.rows[0].firstname)
    } catch (err) {
        console.error(err.message)
    }   
})


app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
