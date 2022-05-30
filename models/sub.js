const mongoose = require('mongoose');

//creating schema
const userSchema = new mongoose.Schema({   
    RollNo: {
        type: String
    },
    English: {
        type: Number
    },
    Maths: {
        type: Number
    },
    Science: {
        type: Number
    }

})
module.exports = mongoose.model('sub', userSchema);
