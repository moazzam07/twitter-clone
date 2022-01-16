//The require(‘mongoose’) call above returns a Singleton object. 
//It means that the first time you call require(‘mongoose’), it 
//is creating an instance of the Mongoose class and returning it. 
//On subsequent calls, it will return the same instance that was 
//created and returned to you the first time because of how module 
//import/export works in ES6.
const mongoose = require("mongoose");
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useUnifiedTopology', true);

class database {

    constructor(){
        this.connect();
    }

    connect(){
        
        mongoose.connect("mongodb+srv://admin:dbuserpassword@twitterclone.6cba3.mongodb.net/TwitterCloneDB?retryWrites=true&w=majority")
        .then(()=>{
            console.log("connected");
        })
        .catch((err)=>{
            console.log("error "+err);
        })
    }
}

module.exports = new database();