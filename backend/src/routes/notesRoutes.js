import express from "express";
import { createNote, deleteNote, getAllNotes, updateNote, getNoteById } from "../controllers/notesController.js";
const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.put("/:id", updateNote)
router.post("/", createNote)
router.delete("/:id", deleteNote)

export default router;
