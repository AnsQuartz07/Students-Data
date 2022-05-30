const express = require('express'); // importing express
const app = express();  // importing expres
const dotenv = require('dotenv');  //importing Dotenv
const mongoose = require('mongoose') // importing MongoDB

// importing routes
const studRoutes = require('./Routes/data');
const marksRoutes = require('./Routes/marks');
const joinRoutes = require('./Routes/Join')

dotenv.config();  //configure Dotenv

//connect to database
mongoose.connect(process.env.DB_CONNECT,  () => 
console.log('connected to database!')
)

//middleware
app.use(express.json());


// route middleware
app.use('/api/stud',studRoutes); // It will connect to studRoutes.
app.use('/api/marks',marksRoutes);
app.use('/api/join',joinRoutes);

// Connect to server
const port = 8080;
app.listen(port,function(){
    console.log('Server is started..!')
})



