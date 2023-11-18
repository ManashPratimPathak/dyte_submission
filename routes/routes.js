const express = require('express');
const router = express.Router();
const getAllLogController = require('../controllers/getAllLogs');
const postLogController = require('../controllers/postLog');
const getLogIdController = require('../controllers/getLogId');
// const getAllController = require('../controllers/getAllLogs');

//Get post
router.post('/post', postLogController.postLog)
//Get all Method
router.get('/getAll', getAllLogController.getAllLogs);
//Get by ID Method
router.get('/getOne/:id', getLogIdController.getLogId);
module.exports = router;