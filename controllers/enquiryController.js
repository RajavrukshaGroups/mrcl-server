const transporter = require("../config/mailer");

const sendEnquiry = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.RECEIVER_EMAILS,
        subject: "New Website Enquiry",

      html: `
        <h2>New Enquiry Received</h2>

        <table border="1" cellpadding="10">
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
    });

    res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: "Unable to send email",
    });
  }
};

module.exports = {
  sendEnquiry,
};