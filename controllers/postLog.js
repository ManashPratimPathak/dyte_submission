const Log = require('../models/logs');
//Post Method
exports.postLog = async (req, res) => {
    const data = new Log({
        level: req.body.level,
        message: req.body.message,
        resourceId: req.body.resourceId,
        timestamp: req.body.timestamp,
        traceId: req.body.traceId,
        spanId: req.body.spanId,
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
};
