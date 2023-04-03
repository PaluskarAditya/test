const express = require("express")
const app = express()

const port = 8080

app.listen(port, ()=>console.log(`serving on port:${port}`))

app.get("/", (req, res) => {
    res.send("hello world")
})