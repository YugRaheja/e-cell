const mongoose = require("mongoose");
const PeopleSchema = mongoose.Schema(
    {
        name : {type:String,
            required : [true , "Please enter your name"], 
         }, 
        email : {type:String,
            required : [true , "Please enter your email"]
        } , 
        subject : String , 
        message : {
            type : String , 
        },
    },
    {timeStamps: true }
)
const People = mongoose.model("People",PeopleSchema);
module.exports = People;