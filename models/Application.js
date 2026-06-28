const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({

    studentName: String,
    email: String,
    phone: String,
    company: String,
    jobRole: String,
    skills: String,
    about: String

});

module.exports = mongoose.model("Application", applicationSchema);