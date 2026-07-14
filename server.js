const express = require("express");
const cors = require("cors");
require("dotenv").config();

const enquiryRoutes = require("./routes/enquiryRoutes");

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "https://www.mrclinfrastructure.com"],
  }),
);
app.use(express.json());

app.use("/api/enquiry", enquiryRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
