const express = require("express");
const router = express.Router();

const upload = require("../config/upload");

const {
  sendContact,
  sendCareer,
  sendProjectEnquiry,
} = require("../controllers/websiteController");

// Website Contact Form
router.post("/", sendContact);

// Career Form
router.post("/career", upload.single("resume"), sendCareer);

// Project Enquiry Form
router.post("/project-enquiry", sendProjectEnquiry);

module.exports = router;