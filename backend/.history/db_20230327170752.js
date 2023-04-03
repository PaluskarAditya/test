const mongoose = require("mongoose")

const connect = () => {
    const uri = "mongodb+srv://root:root@mongodb.e65qray.mongodb.net/service"
    mongoose.connect(uri)
    console.log("MongoDB Connected")
}

export default connect