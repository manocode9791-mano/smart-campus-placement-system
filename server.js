const express = require("express");
const cors = require("cors");

require("./config/db");

const Application = require("./models/Application");

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Save Application

app.post("/api/apply", async (req, res) => {

    try {

        console.log(req.body);

        const application = new Application({

            studentName: req.body.studentName,
            email: req.body.email,
            phone: req.body.phone,
            company: req.body.company,
            jobRole: req.body.jobRole,
            skills: req.body.skills,
            about: req.body.about

        });

        await application.save();

        res.json({
            message: "Application Saved Successfully"
        });

    } catch (err) {

        console.log(err);

        res.status(500).json({
            message: "Server Error"
        });

    }

});

// View Applications

app.get("/api/applications", async (req, res) => {

    const data = await Application.find();

    res.json(data);

});

app.listen(5000, () => {

    console.log("Server Running on Port 5000");

});