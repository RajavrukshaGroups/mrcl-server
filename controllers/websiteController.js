const transporter = require("../config/mailer");

const sendContact = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAILS,
      subject: `Website Contact - ${subject}`,

      html: `
        <h2>New Contact Form Submission</h2>

        <table border="1" cellpadding="10" cellspacing="0" style="border-collapse: collapse;">
          <tr>
            <td><strong>Name</strong></td>
            <td>${name}</td>
          </tr>

          <tr>
            <td><strong>Email</strong></td>
            <td>${email}</td>
          </tr>

          <tr>
            <td><strong>Phone</strong></td>
            <td>${phone}</td>
          </tr>

          <tr>
            <td><strong>Subject</strong></td>
            <td>${subject}</td>
          </tr>

          <tr>
            <td><strong>Message</strong></td>
            <td>${message}</td>
          </tr>
        </table>
      `,
    });

    res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: "Unable to send email",
    });
  }
};

const sendCareer = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAILS,
      subject: "New Career Application",

      html: `
        <h2>New Career Application</h2>

        <table border="1" cellpadding="10" cellspacing="0" style="border-collapse: collapse;">
          <tr>
            <td><strong>Name</strong></td>
            <td>${name}</td>
          </tr>

          <tr>
            <td><strong>Email</strong></td>
            <td>${email}</td>
          </tr>

          <tr>
            <td><strong>Phone</strong></td>
            <td>${phone}</td>
          </tr>

          <tr>
            <td><strong>Message</strong></td>
            <td>${message}</td>
          </tr>
        </table>
      `,

      attachments: req.file
        ? [
            {
              filename: req.file.originalname,
              content: req.file.buffer,
            },
          ]
        : [],
    });

    res.status(200).json({
      success: true,
      message: "Application submitted successfully.",
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: "Unable to submit application.",
    });
  }
};

const sendProjectEnquiry = async (req, res) => {
  try {
    const { name, email, phone, project, message } = req.body;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAILS,
      subject: `Project Enquiry - ${project}`,

      html: `
        <h2>New Project Enquiry</h2>

        <table border="1" cellpadding="10" cellspacing="0" style="border-collapse: collapse;">
          <tr>
            <td><strong>Name</strong></td>
            <td>${name}</td>
          </tr>

          <tr>
            <td><strong>Email</strong></td>
            <td>${email}</td>
          </tr>

          <tr>
            <td><strong>Phone</strong></td>
            <td>${phone}</td>
          </tr>

          <tr>
            <td><strong>Project</strong></td>
            <td>${project}</td>
          </tr>

          <tr>
            <td><strong>Message</strong></td>
            <td>${message}</td>
          </tr>
        </table>
      `,
    });

    res.status(200).json({
      success: true,
      message: "Project enquiry sent successfully.",
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: "Unable to send enquiry.",
    });
  }
};

module.exports = {
  sendContact,
  sendCareer,
  sendProjectEnquiry
};