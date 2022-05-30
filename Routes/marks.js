const router = require('express').Router();  // importing express
const marksControl = require('../controller/studentMarks')
const update = require('../controller/cron')

router.post('/entry', marksControl.entry)
router.get('/marksheet', marksControl.marksheet)
router.delete('/delete/:roll', marksControl.delete)

router.put('/update/:id', update.marks)

module.exports = router;











// 1. Post request :-
// router.post('/', async(req,res)=>{
//     marksheet = new Marks({
//         RollNo: req.body.roll_no,
//         English: req.body.english,
//         Maths: req.body.maths,
//         Science: req.body.science
//     });
//     try{
//         const savedMarks = await marksheet.save();
//         res.status(300).json({Marksheet: savedMarks});
//     }catch(err){
//         res.status(400).json({message: err});
//         console.log(err);
//     }
// })

// // 2. Get request :-
// router.get('/sub', async(req,res)=>{
//     Marks.find()
//     .then(result =>{
//         res.status(200).json({
//             Marksheet_of_students: result
//         })
//     })
//     .catch(err=>{
//         res.json({Error: err})
//     })
// })

// // 3. Delete request :-
// router.delete('/del/:roll', async(req,res)=>{
//     // Checking for non-existing student
//     const rollExist = await Marks.findOne({ RollNo: req.params.roll });
//     if (!rollExist) return res.status(400).json({ message: "Roll No not found." });
//     // Deletion of particular data from database 
//     Marks.deleteOne({ RollNo: req.params.roll })
//       .then(() => {
//         res.status(200).json({ message: "successfully deleted"});
//       })
//       .catch((err) => {
//         res.status(500).json({
//           message: "something went wrong",
//           error: err,
//         });
//       });
// })
// // 4. Put request :-
// router.put('/update/:id', async(req,res)=>{
//     Marks.findOneAndUpdate({_id:req.params.id},{
//         $set:{
//             RollNo: req.body.roll_no,
//             English: req.body.english,    
//             Maths: req.body.maths,
//             science: req.body.science
//         }
//     })
//     .then(()=>{
//         res.status(200).json({
//             message: 'Successfully Updated', 
//             Updated_marks: req.body
//         })
//     })
//     .catch((err)=>{
//         res.status(400).json({
//             message:'Something Went wrong',
//             Error:err
//         })
//     })
    
// })


