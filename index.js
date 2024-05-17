const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require('dotenv');


const studentRoute = require("./routes/student");

dotenv.config(); 

const app = express();
app.use(express.json());
app.use(cors());

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

//port
const port =process.env.X_ZOHO_CATALYST_LISTEN_PORT || 8000;
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

