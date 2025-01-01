import jwt from 'jsonwebtoken';
import subscriberModel from "../Models/Subscriber.js";
import userModel from '../Models/userModel.js'; // Importing the user model
import bcrypt from 'bcryptjs'
import transporter from "../config/nodeMailer.js";
import validator from 'validator'; // Importing validator for email validation



// Token creation function
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET);
}


// Login User
export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.json({ success: false, message: "User does not exist" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.json({ success: false, message: "Invalid Credentials" });
        }

        const token = createToken(user._id);
        
        res.json({ success: true, message: "Login successful", token });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// Register User
export const register = async (req, res) => {
    const { name, password, email } = req.body;

    try {
        const exists = await userModel.findOne({ email });

        if (exists) {
            return res.json({ success: false, message: "User already exists" });
        }

        // Validate email format and strong password
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" });
        }

        if (password.length < 8) {
            return res.json({ success: false, message: "Password must be at least 8 characters long" });
        }

        // Hashing user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword
        });

        const user = await newUser.save();
        const token = createToken(user._id);
        
            const mailOption = {
                from: process.env.SENDER_EMAIL,
                to: email,
                subject: 'Welcome to Estate ',
                text: `Welcome to Estate website.`,
                html: `<p> Your account has been created with email id:${email}.<br/>We’re excited to have you on board! Thank you for registering on Estate! You’re now part of our community. We’re here to help you find your dream property or offer expert advice at any time. If you have any questions, feel free to reach out to our support team!</p>`
    
            }
            await transporter.sendMail(mailOption);
        res.json({ success: true, token });


    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}







export const getUserData=async(req,res)=>{
    try {

        const{userId}=req.body;

        const user=await userModel.findById(userId);

        if(!user){
            res.json({success:false,message:"User Not Found"});
        }

        res.json({
            success:true,
            userData:{
                name:user.name,
                email:user.email
            }
        });
        
        
    } catch (error) {
        res.json({success:false,message:error.message});
    }
}



// Add subscriber
export const addSubscriber = async (req, res) => {
    try {
        const { email } = req.body;

        // Check if the user has an account
        const userExists = await userModel.findOne({ email });
        if (!userExists) {
            return res.json({
                success: false,
                message: "You need to create an account before subscribing.",
            });
        }

        // Check if the user is already subscribed
        const subscriberExists = await subscriberModel.findOne({ email });
        if (subscriberExists) {
            return res.json({ success: false, message: "User already subscribed." });
        }

        // Add the user to the subscriber list
        const newSubscriber = new subscriberModel({ email });
        await newSubscriber.save(); // Save the new subscriber to the database

        const token = createToken(newSubscriber._id); // Create the token for the subscriber
        res.json({ success: true, message: "Subscription successful.", token });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};