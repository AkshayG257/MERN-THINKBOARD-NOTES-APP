import Note from "../models/Note.js";

export async function getAllNotes(req,res){
    try {
        const allNotes = await Note.find().sort({createdAt:-1});
        res.status(200).json(allNotes);
    } catch (error) {
        res.status(500).json({message:"Internal server Error"});
    }
}

export async function createNote(req,res){
    try {
        const {title, content} = req.body;
        const note = new Note({title, content});
        const createdNote = await note.save();
        res.status(201).json({message: "Note created Successfull",createdNote})
    } catch (error) {
        res.status(500).json({message: "Internal server error!!",error});
    }
}

export async function updateNote(req,res){

    try {
        const {title, content} = req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, {title,content},{new:true});

        if(!updatedNote) return res.status(404).json({message: "Note not found"})
        
        res.status(200).json({message: "Note upated successfully", updatedNote});
        
    } catch (error) {
        res.status(500).json(error)
    }


}
export async function deleteNote(req,res){

    try {
        const id = req.params.id;
        const deletedNote = await Note.findByIdAndDelete(id);
        if(!deletedNote) return res.status(404).json({message: "Note not found!"});
        res.status(200).json({message: "Note deleted Successfully",deletedNote})
    } catch (error) {
        res.status(500).json({message: "Internal server Error",error})
    }
}

export async function getNoteById(req,res){
    try {
        const note = await Note.findById(req.params.id)
        if(!note) return res.status(400).json({message: "Note not found"})
        res.status(200).json(note);
    } catch (error) {
        res.status(500).json({message: "Internal server Error"})   
    }
}



