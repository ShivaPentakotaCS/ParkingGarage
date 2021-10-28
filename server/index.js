const express = require('express')
const app = express()
const mysql = require('mysql')

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    passowrd: "password",
    database: "Enter DB Name"
})

app.get("/", (req,res) => {
    const sqlInsert = "write sql query"
    db.query(sqlInsert, (err,result)=> {
        res.send("workin")
    })
})
app.listen(3001, ()=> {
    console.log('runnin')
})