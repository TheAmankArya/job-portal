import { Application } from "../models/application.model.js";
import { Job } from "../models/job.model.js";

import mongoose from "mongoose"; 

export const applyJob = async (req, res) => {
  try {
    const userId = req.id; // Extract user ID from authentication middleware
    const jobId = req.params.id; // Extract job ID from URL

    // ✅ Validate `jobId`
    if (!mongoose.Types.ObjectId.isValid(jobId)) {
      return res.status(400).json({ message: "Invalid Job ID", success: false });
    }

    // ✅ Check if user has already applied
    const existingApplication = await Application.findOne({ job: jobId, applicant: userId });
    if (existingApplication) {
      return res.status(400).json({ message: "You have already applied for this Job", success: false });
    }

    // ✅ Fetch job
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ message: "Job not found", success: false });
    }

    // ✅ Create a new application
    const newApplication = await Application.create({ job: jobId, applicant: userId });

    // 🚀 **Fix: Ensure `job.application` array exists**
    if (!Array.isArray(job.application)) {
      job.application = []; // Initialize if undefined
    }

    // ✅ Push new application ID and save
    job.application.push(newApplication._id);
    await job.save();

    return res.status(201).json({ message: "Job applied successfully", success: true });

  } catch (error) {
    console.error("Error in applyJob:", error);
    return res.status(500).json({ message: "Internal Server Error", success: false });
  }
};


export const getAppliedJobs = async (req, res) => {
  try {
    const userId = req.id;
    const application = await Application.find({ applicant: userId })
      .sort({ createdAt: -1 })
      .populate({
        path: "job",
        options: { sort: { created: -1 } },
        populate: {
          path: "company",
          options: { sort: { createdAt: -1 } },
        },
      });
    if (!application.length) {
      return res.status(404).json({
        message: "No Applications",
        success: false,
      });
    }
    return res.status(200).json({
      application,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

//admin dekhega kitna user ne apply kiya hai
export const getApplicants = async (req, res) => {
    try {
        const jobId = req.params.id;

        const job = await Job.findById(jobId)
            .populate({
                path: "applications",
                options: { sort: { createdAt: -1 } },
                populate: { path: "applicant" }
            });

        if (!job) {
            return res.status(404).json({
                message: "Job not found",
                success: false,
            });
        }
        return res.status(200).json({
            job,
            success: true,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error", success: false });
    }
};


export const updateStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const applicationId = req.params.id;
    if (!status) {
      return res.status(400).json({
        message: "Status is required",
        success: false,
      });
    }
    //find the application by application id
    const application = await Application.findOne({ _id: applicationId });
    if (!application) {
      return res.status(404).json({
        message: "Application not found",
        success: false,
      });
    }

    //update the status
    application.status = status.toLowerCase();
    await application.save();

    return res.status(200).json({
      message: "Status updated successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
