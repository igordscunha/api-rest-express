import mongoose from "mongoose"

mongoose.connect("mongodb+srv://USERHERE:lIxYJB9oUVr7nWgJ@dbcl.3qfmtns.mongodb.net/DB_COLLECT")

let db = mongoose.connection

export default db