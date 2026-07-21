const express = require("express");
const cors = require("cors");
require("dotenv").config();

const enquiryRoutes = require("./routes/enquiryRoutes");
const websiteRoutes = require("./routes/websiteRoutes");

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "https://www.mrclinfrastructure.com", "http://localhost:3000", "https://mrcltest.bouncyboxstudio.in"],
  }),
);
app.use(express.json());

app.use("/api/enquiry", enquiryRoutes);
app.use("/api/contact", websiteRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
