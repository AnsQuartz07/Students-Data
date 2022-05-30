const router = require('express').Router()
const controller = require('../controller/studentData')
router.get('/:first_name', controller.aggregate)
module.exports = router;