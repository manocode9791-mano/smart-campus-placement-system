const express = require("express");
const router = express.Router();

const Application = require("../models/Application");

// =====================================
// Apply Job
// POST /api/apply
// =====================================

router.post("/apply", async (req, res) => {

    try {

        const application = new Application({

            studentName: req.body.studentName,
            email: req.body.email,
            phone: req.body.phone,
            company: req.body.company,
            jobRole: req.body.jobRole,
            department: req.body.department,
            cgpa: req.body.cgpa,
            skills: req.body.skills,
            resume: req.body.resume,
            reason: req.body.reason

        });

        const savedApplication = await application.save();

        res.status(201).json({

            success: true,
            message: "Job Applied Successfully",
            data: savedApplication

        });

    }

    catch (error) {

        console.log(error);

        res.status(500).json({

            success: false,
            message: error.message

        });

    }

});


// =====================================
// Get All Applications
// GET /api/applications
// =====================================

router.get("/applications", async (req, res) => {

    try {

        const applications = await Application.find();

        res.json({

            success: true,
            data: applications

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,
            message: error.message

        });

    }

});


// =====================================
// Get Single Application
// =====================================

router.get("/application/:id", async (req, res) => {

    try {

        const application = await Application.findById(req.params.id);

        if (!application) {

            return res.status(404).json({

                success: false,
                message: "Application Not Found"

            });

        }

        res.json({

            success: true,
            data: application

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,
            message: error.message

        });

    }

});


// =====================================
// Update Application
// =====================================

router.put("/application/:id", async (req, res) => {

    try {

        const application = await Application.findByIdAndUpdate(

            req.params.id,
            req.body,
            { new: true }

        );

        res.json({

            success: true,
            message: "Application Updated",
            data: application

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,
            message: error.message

        });

    }

});


// =====================================
// Delete Application
// =====================================

router.delete("/application/:id", async (req, res) => {

    try {

        await Application.findByIdAndDelete(req.params.id);

        res.json({

            success: true,
            message: "Application Deleted"

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,
            message: error.message

        });

    }

});

module.exports = router;