const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoConnect = require('./utils/database').mongoConnect;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

const routes = require('./routes/routes');
app.use('/api', routes)

// app.use('/', (req,res,next)=>{
//     res.send("Hello World");
// });

mongoConnect(()=> {
  app.listen(8000, (req,res, next)=>{
    console.log("Manash server is running at port 3000");
  });  
})