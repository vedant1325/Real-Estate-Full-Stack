import transporter from "../config/nodeMailer.js";
import subscriberModel from "../Models/Subscriber.js";
import emailTemplateModel from "../Models/EmailTemplate.js";
import dotenv from 'dotenv';
dotenv.config();
import { EMAIL_HTML } from "../config/emailTemplate.js";

// Send email to all subscribers
export const sendEmailToSubscribers = async (req, res) => {
    try {
        const { subject, text } = req.body;
        
        // Fetch all emails from the subscriber model
        const subscribers = await subscriberModel.find();
        
        // Collect all emails
        const emailList = subscribers.map(subscriber => subscriber.email);

        // Get HTML from the EMAIL_HTML function or use default if not found
        const htmlContent = EMAIL_HTML(subject, text) || "<h3><b>News</b></h3>";  // Default HTML if function doesn't return content

        // Email details
        const mailOption = {
            from: process.env.SENDER_EMAIL,
            to: emailList.join(','),  // Comma-separated list of all subscriber emails
            subject: subject || 'Default Subject',  // Default if no subject provided
            text: text || 'Your newsletter',  // Default if no text provided
            html: htmlContent  // Insert dynamic HTML content
        };

        // Send email
        await transporter.sendMail(mailOption);

        return res.json({ success: true, message: 'Email sent to all subscribers' });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Error retrieving subscribers or sending email', error });
    }
};
