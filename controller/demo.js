// const User = require("../model/userModel");
// const multer = require("multer");
// const path = require("path");

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
//   },
// });

// const upload = multer({ storage });

// const createUser = async (req, res) => {
//   try {
//     const profileImagePath = req.files.profileImage
//       ? req.files.profileImage[0].path.replace(/\\/g, '/')
//       : null;

//     const userData = {
//       ...req.body,
//       profileImage: profileImagePath,
//     };

//     const user = new User(userData);
//     await user.save();
//     res.status(201).json(user);
//   } catch (error) {
//     console.error('Error creating user:', error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// };

// const formatPaths = (user) => {
//   return {
//     ...user._doc,
//     profileImage: user.profileImage ? user.profileImage.replace(/\\/g, '/') : null,
//   };
// };

// const getAllUsers = async (req, res) => {
//   const limit = Number(req.query.limit) || 4;
//   const page = Number(req.query.page) || 1;
//   const skip = (page - 1) * limit;

//   try {
//     const totalUsers = await User.countDocuments();
//     const users = await User.find().limit(limit).skip(skip);
//     const formattedUsers = users.map(formatPaths);

//     res.status(200).json({
//       totalCount: totalUsers,
//       totalPages: Math.ceil(totalUsers / limit),
//       currentPage: page,
//       users: formattedUsers,
//     });
//   } catch (error) {
//     console.error('Error fetching users:', error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// };



// module.exports = {
//   upload,
//   createUser,
//   getAllUsers,
//   deleteUser,
// };
