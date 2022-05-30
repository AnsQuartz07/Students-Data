const Marks = require('../models/sub'); //importing sub.js fil

module.exports = {
    entry : async(req,res)=>{
        marksheet = new Marks({
            RollNo: req.body.roll_no,
            English: req.body.english,
            Maths: req.body.maths,
            Science: req.body.science
        });
        try{
            const savedMarks = await marksheet.save();
            res.status(300).json({Marksheet: savedMarks});
        }catch(err){
            res.status(400).json({message: err});
            console.log(err);
        }
    },
    marksheet : async(req,res)=>{
        Marks.find()
        .then(result =>{
            res.status(200).json({
                Marksheet_of_students: result
            })
        })
        .catch(err=>{
            res.json({Error: err})
        })
    },
    delete : async(req,res)=>{
        // Checking for non-existing  student
        const rollExist = await Marks.findOne({ RollNo: req.params.roll });
        if (!rollExist) return res.status(400).json({ message: "Roll No not found." });
        // Deletion of particular data from database 
        Marks.deleteOne({ RollNo: req.params.roll })
          .then(() => {
            res.status(200).json({ message: "successfully deleted"});
          })
          .catch((err) => {
            res.status(500).json({
              message: "something went wrong",
              error: err,
            });
          });
    },
    update : async(req,res)=>{
        Marks.findOneAndUpdate({_id:req.params.id},{
            $set:{
                RollNo: req.body.roll_no,
                English: req.body.english,    
                Maths: req.body.maths,
                Science: req.body.science
            }
        })
        .then(()=>{
            res.status(200).json({
                message: 'Successfully Updated', 
                Updated_marks: req.body
            })
        })
        .catch((err)=>{
            res.status(400).json({
                message:'Something Went wrong',
                Error:err
            })
        })
        
    }
}