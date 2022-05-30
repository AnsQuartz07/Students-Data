const Student = require('../models/stud') //importing stud.js file

module.exports = {
  register: async (req, res) => {
    // Checking for existing student
    const rollExist = await Student.findOne({ RollNo: req.body.roll_no })
    if (rollExist!=null)
      return res.status(400).json({ message: 'Roll No already exists.' })

    // Creating data for new student
    user = new Student({
      FirstName: req.body.first_name,
      LastName: req.body.last_name,
      Age: req.body.age,
      RollNo: req.body.roll_no
    })
    try {
      const savedUser = await user.save()
      res.status(300).json({ New_Student: savedUser })
    } catch (err) {
      res.status(400).json({ message: err })
      console.log(err)
    }
  },
  data: (req, res) => {
    Student.find()
      .then(result => {
        res.status(200).json({
          No_of_Student: result.length,
          Student_List: result
        })
      })
      .catch(err => {
        res.json({ error: err })
      })
  },
  delete: async (req, res) => {
    // Checking for non-existing student
    const rollExist = await Student.findOne({ RollNo: req.params.roll })
    if (!rollExist)
      return res.status(400).json({ message: 'Roll No not found !' })

    // Deletion of particular data from database
    Student.deleteOne({ RollNo: req.params.roll })
      .then(result => {
        res
          .status(200)
          .json({ message: 'successfully deleted', result: result })
      })
      .catch(err => {
        res.status(500).json({
          message: 'something went wrong',
          error: err
        })
      })
  },
  update: (req, res) => {
    Student.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          FirstName: req.body.first_name,
          LastName: req.body.last_name,
          Age: req.body.age,
          RollNo: req.body.roll_no
        }
      }
    )
      .then(() => {
        res
          .status(200)
          .json({ message: 'successfully updated', Updated_data: req.body })
      })
      .catch(err => {
        res.status(500).json({
          message: 'something went wrong',
          error: err
        })
      })
  },
  aggregate: async (req, res) => {
    let join = await Student.aggregate([
      {
        $match: {
          FirstName: req.params.name
        }
      },
      {
        $lookup: {
          from: 'subs',
          localField: 'RollNo',
          foreignField: 'RollNo',
          as: 'marks'
        }
      }
    ])
    res.send(join)

    // // joint using find query
    // const tempStudent = await Student.findOne({FirstName: req.params.first_name})
    // const tempMarks = await Subject.findOne({RollNo: tempStudent.RollNo})
    // res.json({Student_Data : tempStudent, Marksheet :tempMarks});
  }
}
