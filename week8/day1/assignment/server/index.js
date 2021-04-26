const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3075;
const es6Renderer = require("express-es6-template-engine")
const pool = require("./db.js");

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
    try {
        res.render("peopleInfo")
        const {FirstName} = req.body;
        const {LastName} = req.body;
        const {City} = req.body;
        const {BirthYear} = req.body
        const newItemsInDB = await pool.query(
            "INSERT INTO crudtable (FirstName,LastName,City,BirthYear) VALUES($1,$2,$3,$4)"
            [FirstName]
            [LastName]
            [City]
            [BirthYear]
        )
    } catch (err) {
        console.error(err.message)
    }
    
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
