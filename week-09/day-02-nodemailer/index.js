// ======= Package Imports (ESM style)========= //
import nodemailer from 'nodemailer'; // import the nodemailer package
import dotenv from 'dotenv'; // Require the dotenv package
dotenv.config();

// Used to test we can access the environment variables and they are connected properly
// console.log(process.env.EMAIL);

// Configuring the connection to the mail server that will allow us to send emails
const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
})

// Setting up the email and where it will be sent to
const mailOptions = {
    from: "Arjanp@missionreadyhq.com",
    to: "bonniew@missionreadyhq.com",
    subject: "Testing",
    text: "Hey! My test worked!!",
    html:  "<div>Pic of capybara babies<img src='https://cdn.britannica.com/79/191679-050-C7114D2B/Adult-capybara.jpg'/></div>"
}

// Sending the email
// transporter.sendMail(mailOptions);