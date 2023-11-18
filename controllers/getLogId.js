const Log = require('../models/logs');

exports.getLogId = async (req, res) => {
    try {
        const data = await Log.findById(req.params.id);
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
};


