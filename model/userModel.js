const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({

    firstName: { type: String},
    email: { type: String},
    profileImage: { type: String },
    // cv: { type: String },
    // dateOfBirth: { type: Date},
    // gender: { type: String },
    // jobRole: { type: String, enum: ['designer', 'developer'] },
    // startDate: { type: Date },
    // endDate: { type: Date},
    // Preferred_Meeting_Time: {
    //     type: String // Storing as string for simplicity
    // },
    // Subscribe_Newsletter: {
    //     type: Boolean,
    //     default: false
    // },
    // interests: [{ type: String, enum: ['sports', 'music', 'travel', 'cooking', 'reading'] }] 

})

module.exports = mongoose.model('User', userSchema);