const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const logSchema = new Schema({
  id : {
    type: String
  },
  level : {
    type: String,
    required: true
  },
  message : {
    type: String,
    required: true
  },
  resourceId : {
    type: String,
    required: true
  },
  timestamp : {
    type: Date,
    required: true
  },
  traceId : {
    type: String,
    required: true
  },
  spanId : {
    type: String,
    required: true
  },
  commit : {
    type: String
  },
  metadata: {
    parentResourceId:{
      type: String
    }
  }
});

module.exports = mongoose.model('Log', logSchema);
