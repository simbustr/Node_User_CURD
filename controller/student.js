const express = require("express");
const studentModel = require("../model/student");

exports.createStudent = async (req, res) => {
  const { name, age, city } = req.body;
  try {
    const newStudent = new studentModel({ name, age, city });
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

exports.getAllStudent = async (req, res) => {
  try {
    const student = await studentModel.find();
   // student.save();
    res.json(student);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

exports.updateStudent = async (req, res) => {
  const { id } = req.params;
  const { name, age, city  } = req.body;

  try {
    const updateStudent = await studentModel.findByIdAndUpdate(
      id,
      { name, age, city  },
      { new: true }
    );

    if (!updateStudent) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json(updateStudent);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

exports.deleteStudent = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedStudent = await studentModel.findByIdAndDelete(id);

    if (!deletedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json({ message: "Student deleted successfully", deletedStudent });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
