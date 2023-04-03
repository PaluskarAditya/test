const { compare } = require("bcryptjs")
const express = require("express")
const connect = require("./db")
const User = require("./models/userModel")
const app = express()

const port = 8080

connect()

app.listen(port, ()=>console.log(`serving on port:${port}`))

app.get("/", (req, res) => {
    res.send("hello world")
})

app.post("/login", async (req, res) => {
    const { username, password } = req.body

    const user = await User.findOne({username})    
    if (username && await compare(password))
})