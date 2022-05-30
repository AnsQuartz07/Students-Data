const Student = require('../models/stud'); //importing stud.js file
const Marks = require('../models/sub'); //importing sub.js fil
const cron = require('node-cron')

let date = new Date()
let x = date.getHours();

module.exports = {
    student : async(req,res)=>{
        cron.schedule('35 * * * *', () => {
            Student.findOneAndUpdate({_id:req.params.id},{
                $set:{
                    FirstName: req.body.first_name,
                    LastName: req.body.last_name,
                    Age: req.body.age,
                    RollNo: req.body.roll_no
                }
            })
            .then(() => {
                console.log(req.body)
                //res.status(200).json({ message: "successfully updated",Updated_data:req.body});
            })
            .catch((err) => {
                console.log(err)
            });
        })
        res.json({message : `Updating... Data will be updated at ${x}:30`})
    },
    marks : async(req,res)=>{
        cron.schedule('35 * * * *', () => {
            Marks.findOneAndUpdate({_id:req.params.id},{
                $set:{
                    RollNo: req.body.roll_no,
                    English: req.body.english,    
                    Maths: req.body.maths,
                    Science: req.body.science
                }
            })
            .then(()=>{
                console.log(req.body)
            })
            .catch((err)=>{
                console.log(err)
            })

        })
        res.json({message : `Updating... Data will be updated at ${x}:30`})
    }
}