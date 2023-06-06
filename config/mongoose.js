const mongoose = require("mongoose")
const db = "mongodb+srv://feed:feed@cluster0.f6cvdbg.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(db)
    .then(() => console.log("connected to db"))
    .catch(err => console.log(err))