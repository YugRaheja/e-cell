const mongoose = require("mongoose");
const PeopleSchema = mongoose.Schema(
    {
        name : String , 
        email : String , 
        subject : String , 
        message : String ,
    },
    {timeStamps: true }
)
const People = mongoose.model("People",PeopleSchema);
module.exports = People;