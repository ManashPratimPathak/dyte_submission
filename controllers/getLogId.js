const Log = require('../models/logs');

exports.getLogId = async (req, res) => {
    try {
        const data = await { ...req.query};

        let qstr= JSON.stringify(data);
        qstr = qstr.replace(/\b{gte|lte}\b/g,match => `$${match}`);
        const query= Log.find(JSON.parse(qstr));

        res.end(query);

    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
};


