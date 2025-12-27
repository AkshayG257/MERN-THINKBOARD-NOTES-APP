import mongoose from "mongoose";

//Schema
//model

const noteSchema = mongoose.Schema({
    title: {
        type : String,
        required : true
    },
    content:{
        type : String,
        required: true
    }
}, {timestamps:true});

const Note = mongoose.model("Note", noteSchema);
export default Note;