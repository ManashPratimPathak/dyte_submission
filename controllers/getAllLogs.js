const Log = require('../models/logs');

exports.getAllLogs = async (req, res, next) => {
    try {
        const data = await Log.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
};
