// src/pages/Boards.js
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from '../api/axios';

const Boards = () => {
  const [boards, setBoards] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchBoards = async () => {
      try {
        const response = await axios.get('/boards');
        setBoards(response.data);
      } catch (err) {
        console.error('Error fetching boards', err);
      }
    };
    fetchBoards();
  }, []);

  const handleBoardClick = (id) => {
    history.push(`/boards/${id}`);
  };

  return (
    <div>
      <h2>Boards</h2>
      <button onClick={() => history.push('/boards/new')}>Create New Board</button>
      <ul>
        {boards.map((board) => (
          <li key={board._id} onClick={() => handleBoardClick(board._id)}>
            {board.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Boards;
