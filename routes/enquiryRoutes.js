const express = require("express");
const router = express.Router();

const {
  sendEnquiry,
} = require("../controllers/enquiryController");

router.post("/", sendEnquiry);

module.exports = router;