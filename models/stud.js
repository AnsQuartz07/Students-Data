const mongoose = require('mongoose');

//creating schema
const userSchema = new mongoose.Schema({   
    FirstName: {
        type: String
    },
    LastName: {
        type: String
    },
    Age: {
        type: Number
    },
    RollNo: {
        type: String
    }

})
module.exports = mongoose.model('student biodata', userSchema);
