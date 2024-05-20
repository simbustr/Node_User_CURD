const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require('dotenv');
const path = require('path');



const studentRoute = require("./routes/student");
const productRoute = require("./routes/product"); 
const todoRoutes = require("./routes/todoRoutes");
const userRoutes = require('./routes/userRoutes');

dotenv.config(); 

const app = express();
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
//app.use('/uploads', express.static('uploads'));

//routes

//127.0.0.1



app.get('/api/teachers', (req, res) => {
  const teachers = [
      { id: 1, name: 'Mr. Brown', subject: 'Math' },
      { id: 2, name: 'Ms. Green', subject: 'Science' },
      { id: 3, name: 'Ms. Green2', subject: 'Science4' },
      { id: 4, name: 'Ms. Green3', subject: 'Science45' },
  ];

  res.json(teachers);
});




app.use("/simbu", studentRoute);
app.use("/api", productRoute); 
app.use("/api", todoRoutes);
app.use("/api",userRoutes)


//port
const port = 8000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});




const mongoUri = process.env.MONGO_URI;

mongoose.connect(mongoUri)
.then(() => {
  console.log("DB Connected!");
})
.catch((err) => {
  console.error("DB Connection Error:", err);
});

