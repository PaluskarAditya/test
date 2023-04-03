const { compare } = require("bcryptjs")
const express = require("express")
const connect = require("./db")
const User = require("./models/userModel")
const app = express()
app.use(express.json())

const port = 8080

connect()

app.listen(port, ()=>console.log(`serving on port:${port}`))

app.get("/", (req, res) => {
    res.send("hello world")
})

app.post("/users/login", async (req, res) => {
    try {
        const { username, password } = req.body
        console.log(username, password)
        
        const user = await User.findOne({username})    
    if (username && compare(password, user.password)) {
        res.status(200).json({status: true, login: true})
    } else if (compare(password, user.password) !== true) {
        res.status(401).json({status: false, login: false})
    }
    } catch (error) {
        console.log(error.message)
    }
    

    
})