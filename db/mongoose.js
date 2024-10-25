const mongoose = require("mongoose");
require('dotenv')
mongoose.connect(process.env.MONGODB_URL)
const db = mongoose.connect
console.log("Database Connection Established📚, connected to EberDatabase", db);