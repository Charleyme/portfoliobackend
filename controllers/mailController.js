import nodemailer from 'nodemailer';
import dotenv from 'dotenv';    

dotenv.config();


export const sendMail = async (req, res) => {
    const {firstname, lastname, email, message} = req.body;

    if (!firstname || !lastname || !email || !message) {
        return res.status(400).json({ error: 'All fields are required.' });
    }
    try{
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth:{
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            }
        })
        const mailOptions = {
            from: `${firstname} ${lastname} <${email}>`,
            to: process.env.EMAIL_USER,
            subject: `New message from ${firstname} ${lastname}`,
              html: `
        <h2>New Message from Portfolio </h2>
        <p><strong>First Name:</strong> ${firstname}</p>
        <p><strong>Last Name:</strong> ${lastname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        };
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully.' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send email.' });
    }
}
