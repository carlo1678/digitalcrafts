const Pool = require("pg").Pool

const pool = new Pool({
    user: "postgres",
    password: "Carl0Carb0nell!!",
    host: "localhost",
    port: 5432,
    database: "todohw",
})

module.exports = pool