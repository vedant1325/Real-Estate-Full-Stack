import mongoose from "mongoose";

const subscriberSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    }
});

const subscriberModel=mongoose.model.Subscriber ||mongoose.model('Subscriber',subscriberSchema);

export default subscriberModel;