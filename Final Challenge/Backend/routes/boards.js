const express = require('express');
const Board = require('../models/Boards');
const auth = require('../middleware/auth');
const router = express.Router();

// GET user boards
router.get('/', auth, async (req, res) => {
  const boards = await Board.find({ 
    $or: [
      { owner: req.user._id },
      { members: req.user._id }
    ] 
  });
  res.json(boards);
});

// POST create board
router.post('/', auth, async (req, res) => {
  const board = await Board.create({ 
    title: req.body.title, 
    owner: req.user._id,
    members: [req.user._id] 
  });
  res.json(board);
});

// PUT update board
router.put('/:id', auth, async (req, res) => {
  const board = await Board.findById(req.params.id);
  if (!board) return res.status(404).json({ message: "Board not found" });

  if (!board.owner.equals(req.user._id))
    return res.status(403).json({ message: "Unauthorized" });

  board.title = req.body.title || board.title;
  await board.save();
  res.json(board);
});

// DELETE board (owner or admin only)
router.delete('/:id', auth, async (req, res) => {
  const board = await Board.findById(req.params.id);
  if (!board) return res.status(404).json({ message: "Board not found" });

  if (
    !board.owner.equals(req.user._id) &&
    req.user.role !== 'admin'
  )
    return res.status(403).json({ message: "Unauthorized" });

  await board.remove();
  res.json({ message: "Board deleted" });
});

module.exports = router;
