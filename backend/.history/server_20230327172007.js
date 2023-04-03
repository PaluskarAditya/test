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

app.post("/users/login", async (req, res) => {
    const username = req.body.username
    const password = req.bbody.password

    const user = await User.findOne({username})    
    if (username && compare(password, user.password)) {
        res.status(200).json({status: true, login: true})
    } else if (compare(password, user.password) !== true) {
        res.status(401).json({status: false, login: false})
    }
})