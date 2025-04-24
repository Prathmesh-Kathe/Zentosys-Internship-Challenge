const Note = require('../Model/Note');

// Get all notes for authenticated user
exports.getNotes = async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user._id });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get a single note by ID (only for the owner)
exports.getNote = async (req, res) => {
  try {
    const note = await Note.findOne({ _id: req.params.id, user: req.user._id });
    if (!note) return res.status(404).json({ message: 'Note not found' });
    res.json(note);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Create a new note
exports.createNote = async (req, res) => {
  const { title, content, tags } = req.body;
  if (!title) return res.status(400).json({ message: 'Title is required' });

  try {
    const note = await Note.create({ title, content, tags, user: req.user._id });
    res.status(201).json(note);
  } catch (err) {
    res.status(500).json({ message: 'Could not create note' });
  }
};

// Update an existing note
exports.updateNote = async (req, res) => {
  try {
    const note = await Note.findOne({ _id: req.params.id, user: req.user._id });
    if (!note) return res.status(404).json({ message: 'Note not found' });

    const { title, content, tags } = req.body;
    note.title = title ?? note.title;
    note.content = content ?? note.content;
    note.tags = tags ?? note.tags;

    await note.save();
    res.json(note);
  } catch (err) {
    res.status(500).json({ message: 'Could not update note' });
  }
};

// Delete a note
exports.deleteNote = async (req, res) => {
  try {
    const note = await Note.findOneAndDelete({ _id: req.params.id, user: req.user._id });
    if (!note) return res.status(404).json({ message: 'Note not found' });

    res.json({ message: 'Note deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Could not delete note' });
  }
};
