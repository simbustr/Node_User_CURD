const express = require('express');
const userController = require('../controller/userController');
const router = express.Router();
const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + Date.now() + path.extname(file.originalname));
    },
  });
  const upload = multer({ storage });

//  router.post('/users', upload.fields([{ name: 'profileImage', maxCount: 1 }, { name: 'cv', maxCount: 1 }]), userController.createUser);

// router.post('/users', userController.upload.single('profileImage'), userController.createUser);
router.post('/users', userController.createUser);

router.get('/users', userController.getAllUsers);
router.delete('/users/:id', userController.deleteUser); 



module.exports = router;