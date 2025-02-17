const Note = require('../models/note');

const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.findAll();
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve notes' });
  }
};

const getNoteById = async (req, res) => {
  try {
    const note = await Note.findByPk(req.params.id);
    if (note) {
      res.status(200).json(note);
    } else {
      res.status(404).json({ error: 'Note not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve note' });
  }
};

const createNote = async (req, res) => {
  try {
    const note = await Note.create(req.body);
    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create note' });
  }
};

const updateNote = async (req, res) => {
  try {
    const note = await Note.findByPk(req.params.id);
    if (note) {
      await note.update(req.body);
      res.status(200).json(note);
    } else {
      res.status(404).json({ error: 'Note not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update note' });
  }
};

const deleteNote = async (req, res) => {
  try {
    const note = await Note.findByPk(req.params.id);
    if (note) {
      await note.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Note not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete note' });
  }
};

module.exports = {
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote
};
