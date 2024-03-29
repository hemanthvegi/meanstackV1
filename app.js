const path = require('path');
const express =require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

const postRoutes = require("./routes/posts");
const userRoutes = require("./routes/user");
const app=express();


//mongoose.connect("mongodb+srv://hem:Tuof1wjeLtc9xiyt@cluster0-xnssj.mongodb.net/node-angular?retryWrites=true&w=majority",{ useNewUrlParser: true })
mongoose.connect("mongodb+srv://hem:"+  process.env.MONGO_ATLAS_PW +"@cluster0-xnssj.mongodb.net/node-angular",{ useNewUrlParser: true })
.then(() => {
  console.log('Connected to database');
})
.catch(() => {
  console.log('Connection failed');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use('/images',express.static(path.join(__dirname, 'images')));
app.use('/',express.static(path.join(__dirname,'angular')))
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Headers",
//    "Origin, X-Requested-with, Content-Type, Accept, Authorization");
//    res.setHeader("Access-Control-Allow-Methods",
//     "GET, POST, PATCH, DELETE, PUT, OPTIONS" )
//   next();
// })

app.use("/api/posts",postRoutes);
app.use('/api/user', userRoutes);
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "angular", "index.html"));
})
module.exports = app;
