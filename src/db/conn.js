const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/dynamic",{

}).then(()=>{
    console.log("connection is successful");
}).catch((error)=>{
    console.log("no connection");
})