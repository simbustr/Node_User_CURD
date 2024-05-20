const User = require("../model/userModel");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Create a new user
const createUser = async (req, res) => {
  try {
    const userData = {
      ...req.body,
      profileImage: req.files.profileImage ? req.files.profileImage[0].path : null,
      cv: req.files.cv ? req.files.cv[0].path : null,
    };

    const user = new User(userData);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};



const formatPaths = (user) => {
    return {
      ...user._doc,
      profileImage: user.profileImage ? user.profileImage.replace(/\\/g, '/') : null,
      cv: user.cv ? user.cv.replace(/\\/g, '/') : null
    };
  };



// Get all users
// const getAllUsers = async (req, res) => {

//   //  const limit = Number(req.query.limit) || 0;
//     const limit = Number(req.query.limit) || 10; // Default limit to 10
//   const page = Number(req.query.page) || 1; // Default page to 1
//   const skip = (page - 1) * limit;


//   try {
//    // const users = await User.find();
//     const users = await User.find().limit(limit);
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


// Get all users with pagination
const getAllUsers = async (req, res) => {
    const limit = Number(req.query.limit) || 4; // Default limit to 10
    const page = Number(req.query.page) || 1; // Default page to 1
    const skip = (page - 1) * limit;
  
    try {
      const totalUsers = await User.countDocuments();
      const users = await User.find().limit(limit).skip(skip);
      const formattedUsers = users.map(formatPaths);
  
      res.status(200).json({
        totalCount: totalUsers,
        totalPages: Math.ceil(totalUsers / limit),
        currentPage: page,
        users: formattedUsers
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

// Delete a user by ID
const deleteUser = async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      if (!user) return res.status(404).json({ message: 'User not found' });
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

module.exports = {
  upload,
  createUser,
  getAllUsers,
  deleteUser
  
};
