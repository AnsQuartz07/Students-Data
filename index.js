const express = require('express'); // importing express
const app = express();  // importing express
const dotenv = require('dotenv');  //importing Dotenv
const mongoose = require('mongoose') // importing MongoDB

// importing routes
const studRoutes = require('./stud');

dotenv.config();  //configure Dotenv

//connect to database
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true,useUnifiedTopology: true }, () => 
console.log('connected to database!')
);

//middleware
app.use(express.json());
// route middleware
app.use('/api/stud',studRoutes); // It will connect to studRoutes.

// Connect to server
const port = 8080;
app.listen(port,function(){
    console.log('Server is started..!')
})



