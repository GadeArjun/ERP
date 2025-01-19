const nodemailer = require("nodemailer")

exports.sendMail = async (reciever , message)=>{

  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_ADDRESS,
    to: reciever,
    subject: "To send OTP",
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error:", error);
    } else {
      console.log("Email sent successfully:", info.response);
    }
  });
}




// PORT = 8080
// MONGODB_URL = "mongodb+srv://gadearjun24:qwerty123456@cluster0.efkaxtv.mongodb.net/ERP_System"

// JWT_SECRET_KEY = "sk"

// EMAIL_PASSWORD = "etzi qfzi mhcc sqwv"