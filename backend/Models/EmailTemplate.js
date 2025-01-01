import mongoose from "mongoose";

const emailTemplateSchema = new mongoose.Schema({
    subject:{
        type:String,
        required:true
    },
    text:{
        type:String,
        required:true
    }
});

const emailTemplateModel=mongoose.model.EmailTemplate ||mongoose.model('EmailTemplate',emailTemplateSchema);

export default emailTemplateModel;