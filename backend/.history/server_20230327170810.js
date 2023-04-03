const express = require("express")
const { default: connect } = require("./db")
const app = express()

const port = 8080

const connect = connect
app.listen(port, ()=>console.log(`serving on port:${port}`))

app.get("/", (req, res) => {
    res.send("hello world")
})